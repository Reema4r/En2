/**
 * Single-file index.html: merge scripts, embed JSON as __GRAMMAR_AUDIT_EMBED__,
 * inline html2pdf from cache (no CDN). Run: node tools/merge_standalone_index.mjs
 *
 * Note: current index.html may instead load html2pdf via
 * <script src="vendor/html2pdf.bundle.min.js"></script> (smaller HTML, more reliable).
 * This tool still expects the older multi-<script> layout; update the HTML structure
 * before re-running merge, or merge manually.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const INDEX = path.join(ROOT, "index.html");
const H2P_URL = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
const H2P_CACHE = path.join(ROOT, ".cache-html2pdf.bundle.min.js");

function main() {
  if (!fs.existsSync(H2P_CACHE)) {
    console.log("Downloading html2pdf bundle…");
    execSync(`curl -sL "${H2P_URL}" -o "${H2P_CACHE}"`, { stdio: "inherit" });
  }
  const h2p = fs.readFileSync(H2P_CACHE, "utf8");
  if (h2p.length < 1000) throw new Error("html2pdf bundle invalid");

  let html = fs.readFileSync(INDEX, "utf8");

  const jsonRe = /<script type="application\/json" id="([^"]+)">([\s\S]*?)<\/script>\s*/g;
  const embed = {};
  let jm;
  while ((jm = jsonRe.exec(html)) !== null) {
    embed[jm[1]] = JSON.parse(jm[2].trim());
  }
  console.log("Embedded:", Object.keys(embed).join(", ") || "(none)");

  html = html.replace(jsonRe, "");
  html = html.replace(
    /\s*<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/html2pdf\.js\/[^"]+"[^>]*><\/script>\s*/i,
    "\n",
  );

  const lines = html.split("\n");

  let qbStart = -1;
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i] === "<script>" && lines[i + 1].trimStart().startsWith("const QUESTION_BANK")) {
      qbStart = i;
      break;
    }
  }
  if (qbStart < 0) throw new Error("QUESTION_BANK script block not found");
  const qbEnd = lines.indexOf("</script>", qbStart);
  if (qbEnd < 0) throw new Error("QUESTION_BANK </script> not found");

  let gdStart = qbEnd + 1;
  while (gdStart < lines.length && lines[gdStart].trim() === "") gdStart++;
  if (lines[gdStart] !== "<script>") throw new Error("GRAMMAR_DATA <script> not found");
  if (!lines[gdStart + 1].trimStart().startsWith("const GRAMMAR_DATA"))
    throw new Error("GRAMMAR_DATA line not found");
  const gdEnd = lines.indexOf("</script>", gdStart);
  if (gdEnd < 0) throw new Error("GRAMMAR_DATA </script> not found");

  const questionBankLine = lines[qbStart + 1].trim();
  const grammarDataLine = lines[gdStart + 1].trim();

  let mainStart = gdEnd + 1;
  while (mainStart < lines.length && lines[mainStart].trim() === "") mainStart++;
  if (lines[mainStart] !== "<script>") throw new Error("main <script> not found");
  if (!lines[mainStart + 1].includes("(() => {"))
    throw new Error("main IIFE start not found");

  const mainEnd = lines.indexOf("</script>", mainStart);
  if (mainEnd < 0) throw new Error("main </script> not found");

  const headLines = lines.slice(0, qbStart);
  const mainInnerLines = lines.slice(mainStart + 1, mainEnd);
  const tailLines = lines.slice(mainEnd + 1);

  const embedConst = `const __GRAMMAR_AUDIT_EMBED__ = ${JSON.stringify(embed)};\n`;

  const combined = [
    ...headLines,
    "<script>",
    h2p,
    "",
    questionBankLine,
    "",
    grammarDataLine,
    "",
    embedConst,
    ...mainInnerLines,
    "</script>",
    ...tailLines,
  ].join("\n");

  fs.writeFileSync(INDEX, combined, "utf8");
  console.log("OK →", INDEX, "bytes", fs.statSync(INDEX).size);
}

main();
