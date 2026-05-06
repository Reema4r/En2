#!/usr/bin/env node
/**
 * Builds quiz_audit/* from grammar lesson data + flags items for manual review.
 * Run from project root: node tools/grammar_audit.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const require = createRequire(import.meta.url);

const slides = require(path.join(root, "grammar_slides_bundle.cjs"));
const extra = require(path.join(root, "grammar_topics_extra.cjs"));
/** Inline lessons from grammar_data_build.js live inside index.html GRAMMAR_DATA.lessons */
function lessonsFromIndexHtml() {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const line = html.split("\n").find((l) => l.startsWith("const GRAMMAR_DATA = "));
  if (!line) return {};
  const jsonStr = line.slice("const GRAMMAR_DATA = ".length).replace(/;\s*$/, "");
  try {
    const GD = JSON.parse(jsonStr);
    return GD.lessons && typeof GD.lessons === "object" ? GD.lessons : {};
  } catch {
    return {};
  }
}
const lessons = { ...slides, ...extra, ...lessonsFromIndexHtml() };

const { categories } = JSON.parse(fs.readFileSync(path.join(root, "grammar_categories.json"), "utf8"));

const slugToCat = {};
for (const c of categories) {
  for (const slug of c.lesson_slugs || []) slugToCat[slug] = c.id;
}

function flatQuizItems(L, lessonId) {
  const out = [];
  const pushArr = (arr, src) => {
    if (!Array.isArray(arr)) return;
    arr.forEach((q, qi) => {
      out.push({
        lessonId,
        source: src,
        indexInSource: qi,
        question_en: q.question_en,
        options: q.options,
        correct: q.correct,
        why_ar: q.why_ar,
        rule_ar: q.rule_ar,
      });
    });
  };
  pushArr(L.quiz, "quiz");
  if (Array.isArray(L.quizStages)) {
    L.quizStages.forEach((st, si) => pushArr(st.quiz, `quizStages[${si}]`));
  }
  pushArr(L.quizComprehensive, "quizComprehensive");
  return out;
}

function normQ(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\.+$/, "")
    .trim();
}

const allItems = [];
for (const lessonId of Object.keys(lessons)) {
  const L = lessons[lessonId];
  allItems.push(...flatQuizItems(L, lessonId).map((it) => ({ ...it, categoryId: slugToCat[lessonId] || "unknown" })));
}

const byUnit = {};
for (const c of categories) {
  byUnit[c.id] = [];
}
for (const it of allItems) {
  const cid = it.categoryId;
  if (!byUnit[cid]) byUnit[cid] = [];
  byUnit[cid].push(it);
}

const standaloneOnly = allItems.filter((it) => it.categoryId === "standalone-irregular-verbs");

const enToOccurrences = new Map();
for (const it of allItems) {
  const k = normQ(it.question_en);
  if (!k) continue;
  if (!enToOccurrences.has(k)) enToOccurrences.set(k, []);
  enToOccurrences.get(k).push({ lessonId: it.lessonId, source: it.source });
}

const duplicateEnglish = [...enToOccurrences.entries()]
  .filter(([_, occ]) => occ.length > 1)
  .map(([textKey, occ]) => ({ normalized_en: textKey, occurrences: occ }));

const reviewFlags = [];
for (let i = 0; i < allItems.length; i++) {
  const it = allItems[i];
  const opts = it.options || [];
  const reasons = [];
  if (!Array.isArray(opts) || opts.length === 0) reasons.push("no_options");
  if (typeof it.correct !== "number" || it.correct < 0 || it.correct >= opts.length) reasons.push("bad_correct_index");
  const trimmed = opts.map((o) => String(o).trim());
  if (new Set(trimmed).size !== trimmed.length) reasons.push("duplicate_options_exact");
  const lower = trimmed.map((s) => s.toLowerCase());
  if (it.lessonId !== "capital-letters" && new Set(lower).size !== lower.length) {
    reasons.push("duplicate_options_case_insensitive");
  }
  if (reasons.length) {
    reviewFlags.push({
      lessonId: it.lessonId,
      categoryId: it.categoryId,
      source: it.source,
      question_en: it.question_en,
      options: it.options,
      correct: it.correct,
      flagged: reasons,
      why_ar: it.why_ar,
      rule_ar: it.rule_ar,
    });
  }
}

const outDir = path.join(root, "quiz_audit");
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, "summary.json"),
  JSON.stringify(
    {
      generated: new Date().toISOString(),
      totalGrammarQuizItems: allItems.length,
      countByCategory: Object.fromEntries(Object.entries(byUnit).map(([k, v]) => [k, v.length])),
      standaloneOnlyCount: standaloneOnly.length,
      duplicateEnglishClusters: duplicateEnglish.length,
      structuralReviewCount: reviewFlags.length,
    },
    null,
    2
  )
);

fs.writeFileSync(path.join(outDir, "by_unit.json"), JSON.stringify(byUnit, null, 2));
fs.writeFileSync(
  path.join(outDir, "standalone_not_in_numbered_units.json"),
  JSON.stringify(standaloneOnly, null, 2)
);
fs.writeFileSync(path.join(outDir, "duplicate_question_en.json"), JSON.stringify(duplicateEnglish, null, 2));
fs.writeFileSync(path.join(outDir, "review_structural_flags.json"), JSON.stringify(reviewFlags, null, 2));

/** For external "periodic / self-test" merge: items that never appear under Quiz 1–8 unit buttons */
const numberedUnits = categories.filter((c) => /^unit-[1-8]-/.test(c.id)).map((c) => c.id);
const poolNumberedUnitLessonIds = new Set();
for (const c of categories) {
  if (!numberedUnits.includes(c.id)) continue;
  for (const slug of c.lesson_slugs || []) poolNumberedUnitLessonIds.add(slug);
}
const notUnderAnyNumberedUnit = allItems.filter((it) => !poolNumberedUnitLessonIds.has(it.lessonId));

fs.writeFileSync(
  path.join(outDir, "not_under_units_1_to_8.json"),
  JSON.stringify(notUnderAnyNumberedUnit, null, 2)
);

console.log("Wrote quiz_audit/*.json");
console.log("Total items:", allItems.length, "| Standalone:", standaloneOnly.length, "| Not in units 1–8:", notUnderAnyNumberedUnit.length);
console.log("Duplicate EN clusters:", duplicateEnglish.length, "| Structural flags:", reviewFlags.length);
