#!/usr/bin/env node
/**
 * Builds blended_unique_quiz.json: دوري (وحدات 1–8) + ذاتي (مستقل)، ثم إزالة التكرار حسب نص السؤال الإنجليزي.
 * Optional merge: quiz_audit/user_merged_periodic_self.json { "items": [...] }
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

const numberedUnitIds = new Set(categories.filter((c) => /^unit-[1-8]-/.test(c.id)).map((c) => c.id));

const allItems = [];
for (const lessonId of Object.keys(lessons)) {
  const L = lessons[lessonId];
  const cid = slugToCat[lessonId] || "unknown";
  for (const it of flatQuizItems(L, lessonId)) {
    allItems.push({ ...it, categoryId: cid });
  }
}

const periodicItems = allItems.filter((it) => numberedUnitIds.has(it.categoryId));
const selfItems = allItems.filter((it) => it.categoryId === "standalone-irregular-verbs");

let merged = [...periodicItems, ...selfItems];

const userPath = path.join(root, "quiz_audit", "user_merged_periodic_self.json");
if (fs.existsSync(userPath)) {
  try {
    const user = JSON.parse(fs.readFileSync(userPath, "utf8"));
    const raw = user.items || [];
    for (const q of raw) {
      if (!q || !q.question_en || !Array.isArray(q.options)) continue;
      merged.push({
        lessonId: q.lessonId || "user-import",
        source: "user_merged",
        question_en: q.question_en,
        options: q.options,
        correct: typeof q.correct === "number" ? q.correct : 0,
        why_ar: q.why_ar || "",
        rule_ar: q.rule_ar || "",
        categoryId: "user-import",
      });
    }
  } catch (e) {
    console.warn("user_merged_periodic_self.json skipped:", e.message);
  }
}

const seen = new Map();
const unique = [];
let dupCount = 0;
for (const it of merged) {
  const k = normQ(it.question_en);
  if (!k) continue;
  if (seen.has(k)) {
    dupCount++;
    continue;
  }
  seen.set(k, true);
  unique.push({
    lessonId: it.lessonId,
    question_en: it.question_en,
    options: it.options,
    correct: it.correct,
    why_ar: it.why_ar,
    rule_ar: it.rule_ar,
  });
}

const out = {
  meta: {
    generated: new Date().toISOString(),
    periodicCount: periodicItems.length,
    selfCount: selfItems.length,
    mergedBeforeDedupe: merged.length,
    duplicatesRemoved: dupCount,
    uniqueCount: unique.length,
    note_ar:
      "دمج أسئلة وحدات 1–8 (دوري/اختبار الوحدة) مع أسئلة الوحدة المستقلة (ذاتي)، ثم حذف تكرار نفس صياغة السؤال الإنجليزي.",
  },
  items: unique,
};

const outPath = path.join(root, "quiz_audit", "blended_unique_quiz.json");
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log("Wrote", outPath);
console.log(out.meta);
