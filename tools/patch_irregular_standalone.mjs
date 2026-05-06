/**
 * Align standalone irregular-verbs category + lesson titles/stage quizzes with tables;
 * run: node tools/patch_irregular_standalone.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INDEX = path.join(__dirname, "..", "index.html");

function extractGrammarObject(html) {
  const marker = "const GRAMMAR_DATA = ";
  const start = html.indexOf(marker);
  if (start < 0) throw new Error("GRAMMAR_DATA not found");
  let i = start + marker.length;
  while (i < html.length && html[i] !== "{") i++;
  if (html[i] !== "{") throw new Error("expected {");
  let depth = 0;
  const objStart = i;
  for (; i < html.length; i++) {
    const ch = html[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        const json = html.slice(objStart, i + 1);
        return {
          prefix: html.slice(0, objStart),
          suffix: html.slice(i + 1),
          obj: JSON.parse(json),
        };
      }
    }
  }
  throw new Error("unclosed brace");
}

function main() {
  let html = fs.readFileSync(INDEX, "utf8");
  const { prefix, suffix, obj } = extractGrammarObject(html);

  const cat = obj.categories.find((c) => c.id === "standalone-irregular-verbs");
  if (cat) {
    cat.title_en = "Past simple irregular verbs — standalone unit";
    cat.title_ar = "الماضي البسيط للأفعال الشاذة — وحدة مستقلة";
    cat.desc_en =
      "Seven staged verb tables (approved material): optional quiz after each stage, then one comprehensive quiz. Not part of Course Units 1–8.";
    cat.desc_ar =
      "سبع مراحل متتابعة، كل مرحلة جدول أفعال ثم اختبار قصير اختياري، ثم اختبار شامل يغطي كل الجداول. الوحدة مستقلة عن الوحدات ١–٨ في المنهج.";
  }

  const L = obj.lessons["past-simple-irregular-verbs"];
  if (L) {
    L.title_en = "Past simple irregular verbs — seven stages + full review";
    L.title_ar = "الماضي البسيط للأفعال الشاذة — سبع مراحل ومراجعة شاملة";
    L.explanation_ar =
      "هذه الوحدة مستقلة عن الوحدات المرقّمة (١–٨): موضوعها فقط تصريف الماضي البسيط للأفعال غير المنتظمة (لا يُضاف لها -ed كالأفعال المنتظمة؛ لكل فعل شكل ماضٍ V2 وغالبًا تصريف ثالث V3). اعمل بالترتيب على الجداول السبعة أو انتقل للمرحلة التي تحتاجها، ثم حلّ اختبار المرحلة إن أردت، وأخيرًا الاختبار الشامل.";

    const stages = L.quizStages || [];
    const tables = L.tables || [];
    stages.forEach((st, si) => {
      const T = tables[si];
      if (!T) return;
      st.title_ar = `اختبار — ${T.title_ar}`;
      st.title_en = `Quiz — ${T.title_en}`;
    });
  }

  const out = prefix + JSON.stringify(obj) + suffix;
  fs.writeFileSync(INDEX, out);
  console.log("patched GRAMMAR_DATA: irregular standalone titles + stage labels");
}

main();
