/**
 * One-off: merge Quiz 7 (reading + grammar/vocab) into index.html QUESTION_BANK.
 * Run: node tools/inject_quiz7.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const INDEX = path.join(ROOT, "index.html");

function extractQuestionBank(html) {
  const marker = "const QUESTION_BANK = ";
  const start = html.indexOf(marker);
  if (start < 0) throw new Error("QUESTION_BANK not found");
  let i = start + marker.length;
  if (html[i] !== "[") throw new Error("expected [");
  let depth = 0;
  let end = -1;
  for (let k = i; k < html.length; k++) {
    const ch = html[k];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        end = k;
        break;
      }
    }
  }
  if (end < 0) throw new Error("unclosed array");
  const json = html.slice(i, end + 1);
  return { start, end: end + 1, arr: JSON.parse(json), prefix: html.slice(0, start + marker.length), suffix: html.slice(end + 1) };
}

function q7Questions() {
  const READ = (passage, num, qtext, options, correct, extra = {}) => ({
    question_en: `Read the text:\n${passage}\n\n${num}. ${qtext}`,
    options,
    correct,
    arabic_explanation: extra.arabic_explanation || "",
    why_answer_ar: extra.why_answer_ar || "",
    grammar_rule_ar: extra.grammar_rule_ar || "اقرأ القطعة وحدد الإجابة التي يدعمها النص صراحةً.",
    vocabulary: extra.vocabulary || "",
    common_mistake_ar: extra.common_mistake_ar || "",
    example_sentence_en: extra.example_sentence_en || "",
    needs_review: false,
  });

  const passagePatel = `The Patel family lives in Senegal. Mr. Patel is a teacher, and Mrs. Patel is a nurse. They have two children, Aria and Sam. Every day, they have breakfast together. Mr. Patel goes to work, and Mrs. Patel takes Aria and Sam to school. After school, the children play in the garden. On weekends, the family visits the park. They love spending time together.`;

  const passageDavis = `In the U.K, there is a man named Mr. Davis. He loves old furniture. Every weekend, he looks for old chairs, tables, and cabinets. Mr. Davis cleans the furniture and fixes it. Some pieces are very old, but he makes them look new again. He has many old chairs and tables in his house. People in the town know him well. Sometimes, they give him old furniture, and he is always happy to take it.`;

  const passageFreeTime = `In their free time, people like to do many fun activities. Some people read books or watch movies. Others enjoy playing sports like soccer or basketball. Many people like to go for walks in the park or ride bikes. Some enjoy cooking or baking delicious food. Friends often meet to chat and have fun together. Some people like to listen to music or play musical instruments. Others may enjoy painting or drawing. Many people also play video games or spend time on the internet. Everyone has different hobbies, and that makes free time special.`;

  const passagePlaces = `People work in many places. For example, some work in offices. When they work there, they use computers and write emails to send information. Other people work in schools as teachers. They teach students. Some work in hospitals and help sick people. There are also workers in restaurants. They cook food and serve customers. Factories are also places of work where people make products like toys and cars. Each place of work is important!`;

  const passageFood = `When you go to the supermarket, it's important to understand food labels. The cost tells you how much money you need to pay. Check the 'best before' date to know when the food is still good to eat. Look for the amount of fat on the label—some fat is healthy, but too much is not good for you. Natural foods come from plants or animals and have fewer chemicals, while superfoods are especially nutritious, like blueberries and spinach.`;

  const passageTravel = `Before boarding, passengers have to show passports and tickets. You mustn't leave your luggage unattended. You can take one carry-on bag. Food and drink are available after security.`;

  return buildAll();
  function buildAll() {
    const list = [];

    list.push({
      id: "Q7-01",
      quiz: "Quiz 7",
      ...READ(passagePatel, 1, "How many children are in the family?", ["three", "ten", "two", "five"], 2, {
        arabic_explanation: "النص يذكر أن لدى العائلة طفلين.",
        why_answer_ar: "كلمة «two children» تؤكد الإجابة.",
        vocabulary: "children = أطفال | Senegal = السنغال",
      }),
    });

    list.push({
      id: "Q7-02",
      quiz: "Quiz 7",
      ...READ(passagePatel, 2, "The Patel family goes to the park?", ["every day", "on weekdays", "on weekends", "Sundays"], 2, {
        arabic_explanation: "النص: «On weekends, the family visits the park».",
        why_answer_ar: "الزيارة في عطلة نهاية الأسبوع وليس كل يوم.",
      }),
    });

    list.push({
      id: "Q7-03",
      quiz: "Quiz 7",
      ...READ(passageDavis, 1, "What does Mr. Davis do on the weekends?", ["collects furniture", "talks to his friends", "visits the market", "travels with his family"], 0, {
        arabic_explanation: "في عطلة الأسبوع يبحث عن أثاث قديم ويجمعه.",
        why_answer_ar: "«looks for old chairs, tables, and cabinets» يعادل جمع/استقطاب الأثاث.",
        vocabulary: "furniture = أثاث",
      }),
    });

    list.push({
      id: "Q7-04",
      quiz: "Quiz 7",
      ...READ(passageDavis, 2, "The passage is mainly about?", ["Possessions (things people own)", "A town"], 0, {
        arabic_explanation: "القطعة تركز على الأثاث القديم وجمعه وليس وصف المدينة.",
        why_answer_ar: "الموضوع هو امتلاك الأثاث وجمعه وليس المدينة.",
      }),
    });

    list.push({
      id: "Q7-05",
      quiz: "Quiz 7",
      ...READ(passageFreeTime, 1, "In their free time, students like to play video games?", ["Not mentioned", "False", "True"], 2, {
        arabic_explanation: "النص يذكر أن كثيرين من الناس يلعبون ألعاب فيديو؛ الطلاب ضمن الناس العاديين في هذا السياق التعليمي.",
        why_answer_ar: "«Many people also play video games» يدعم صحة الفكرة.",
      }),
    });

    list.push({
      id: "Q7-06",
      quiz: "Quiz 7",
      ...READ(passageFreeTime, 2, "Why is free time special for people?", ["Free time is boring.", "Everyone has different hobbies.", "People do the same things."], 1, {
        arabic_explanation: "الجملة الختامية توضح أن اختلاف الهوايات يجعل وقت الفراغ مميزًا.",
        why_answer_ar: "يطابق الجملة الأخيرة في القطعة.",
      }),
    });

    list.push({
      id: "Q7-07",
      quiz: "Quiz 7",
      ...READ(passagePlaces, 1, "Which of the following sentences is correct about emails?", ["People do not usually use them at work.", "They are a useless communication tool.", "They are used to send information."], 2, {
        arabic_explanation: "في المكتب يُستخدم الحاسوب والبريد لإرسال المعلومات.",
        why_answer_ar: "النص يذكر «write emails to send information».",
        vocabulary: "email = بريد إلكتروني",
      }),
    });

    list.push({
      id: "Q7-08",
      quiz: "Quiz 7",
      ...READ(passagePlaces, 2, "What can you conclude from the passage?", ["The most important job is to work in a factory.", "All kinds of workplaces are needed.", "There are only five types of jobs."], 1, {
        arabic_explanation: "الخاتمة: «Each place of work is important».",
        why_answer_ar: "كل وظيفة ومكان عمل له أهمية.",
      }),
    });

    list.push({
      id: "Q7-09",
      quiz: "Quiz 7",
      ...READ(passageFood, 1, 'What does the "best before" date on a food label indicate?', ["When the food is still good to eat.", "How much fat is in the food."], 0, {
        arabic_explanation: "النص يشرح أن التاريخ يبيّن متى يظل الطعام صالحًا.",
        why_answer_ar: "يطابق عبارة «when the food is still good to eat».",
      }),
    });

    list.push({
      id: "Q7-10",
      quiz: "Quiz 7",
      ...READ(passageFood, 2, 'On a label, "low-fat" typically means:', ["The food has less fat than the regular version of that product.", "The food is very expensive."], 0, {
        arabic_explanation: "المعنى المعتاد لـ low-fat هو كمية دهون أقل مقارنة بالمنتج العادي (استنتاج من السياق عن الدهون).",
        why_answer_ar: "المصطلح يصف مستوى الدهون وليس السعر.",
      }),
    });

    list.push({
      id: "Q7-11",
      quiz: "Quiz 7",
      ...READ(passageTravel, 1, "What must every passenger do before boarding?", ["Leave their bags unattended.", "Show passports (and tickets)."], 1, {
        arabic_explanation: "يجب إظهار جواز السفر والتذكرة قبل الصعود.",
        why_answer_ar: "الجملة الأولى في القطعة.",
      }),
    });

    list.push({
      id: "Q7-12",
      quiz: "Quiz 7",
      ...READ(passageTravel, 2, "What is not allowed?", ["Showing a ticket.", "Taking one carry-on bag.", "Leaving bags unattended."], 2, {
        arabic_explanation: "يُمنع ترك الأمتعة دون مراقبة.",
        why_answer_ar: "«mustn't leave your luggage unattended».",
      }),
    });

    list.push({
      id: "Q7-13",
      quiz: "Quiz 7",
      question_en: "My sister's daughter is my...",
      options: ["Father", "Nephew", "Sister", "Niece"],
      correct: 3,
      arabic_explanation: "ابنة الأخت هي niece بالإنجليزية.",
      why_answer_ar: "Niece = ابنة الأخ/الأخت.",
      grammar_rule_ar: "الأسرة والقرابة بالإنجليزية.",
      vocabulary: "niece = ابنة الأخ أو الأخت",
      common_mistake_ar: "الخلط بين nephew (ابن الأخ/الأخت) وniece.",
      example_sentence_en: "My niece is five years old.",
      needs_review: false,
    });

    list.push({
      id: "Q7-14",
      quiz: "Quiz 7",
      question_en: "Toyota is a ... company.",
      options: ["Japanese", "Japan", "Japany", "Japanies"],
      correct: 0,
      arabic_explanation: "نحتاج صفًا يصف الشركة: يابانية Japanese.",
      why_answer_ar: "Japanese صفة؛ Japan اسم البلد.",
      grammar_rule_ar: "الصفات الوطنية بصيغة صفة قبل الاسم.",
      vocabulary: "Japanese = ياباني",
      needs_review: false,
    });

    list.push({
      id: "Q7-15",
      quiz: "Quiz 7",
      question_en: "Ahmed: Where ... you from?",
      options: ["Are", "Am", "This", "Is"],
      correct: 0,
      arabic_explanation: "مع الضمير you يُستخدم فعل are.",
      why_answer_ar: "Where are you from? تعبير ثابت.",
      grammar_rule_ar: "فعل be مع الضمائر.",
      needs_review: false,
    });

    list.push({
      id: "Q7-16",
      quiz: "Quiz 7",
      question_en: "My daughter's son is my...",
      options: ["Grandson", "Grandparent", "Parent", "Son"],
      correct: 0,
      arabic_explanation: "ابن الابنة هو حفيد grandson.",
      why_answer_ar: "Grandson = ابن الابن/الابنة.",
      needs_review: false,
    });

    list.push({
      id: "Q7-17",
      quiz: "Quiz 7",
      question_en: "I ... to school every day at 7:30 am.",
      options: ["Go", "Goes", "Went", "Going"],
      correct: 0,
      arabic_explanation: "المضارع البسيط مع I والعادة اليومية.",
      why_answer_ar: "I go — الزمن الحاضر للعادات.",
      grammar_rule_ar: "Present simple للروتين.",
      needs_review: false,
    });

    list.push({
      id: "Q7-18",
      quiz: "Quiz 7",
      question_en: "I travelled to Al-Lith last week. The weather ... great.",
      options: ["Were", "Are", "Is", "Was"],
      correct: 3,
      arabic_explanation: "حدث في الماضي؛ الجو مفرد فيستخدم was.",
      why_answer_ar: "Last week + weather was.",
      grammar_rule_ar: "Past simple مع الأحداث المنتهية.",
      needs_review: false,
    });

    list.push({
      id: "Q7-19",
      quiz: "Quiz 7",
      question_en: "How ... money do you have?",
      options: ["Lots of", "Many", "A lot of", "Much"],
      correct: 3,
      arabic_explanation: "مع الاسم غير المعدود money نستخدم much في السؤال.",
      why_answer_ar: "How much money?",
      grammar_rule_ar: "much / many حسب العدّ والعدم.",
      needs_review: false,
    });

    list.push({
      id: "Q7-20",
      quiz: "Quiz 7",
      question_en: "... are large pieces of cloth that hang across a window to stop light.",
      options: ["Tables", "Drawers", "Curtains", "Chairs"],
      correct: 2,
      arabic_explanation: "الستائر curtains تُعلق على النوافذ.",
      why_answer_ar: "تعريف الستائر في الجملة.",
      vocabulary: "curtains = ستائر",
      needs_review: false,
    });

    list.push({
      id: "Q7-21",
      quiz: "Quiz 7",
      question_en: "In Jeddah, there is a ... which has more than 10,000 books.",
      options: ["Theater", "Park", "Library", "Museum"],
      correct: 2,
      arabic_explanation: "مكان يضم آلاف الكتب هو المكتبة.",
      vocabulary: "library = مكتبة",
      needs_review: false,
    });

    list.push({
      id: "Q7-22",
      quiz: "Quiz 7",
      question_en: 'What is the meaning of the word "identical"?',
      options: ["Things look very different.", "Things look different.", "Things look similar.", "Things look exactly the same."],
      correct: 3,
      arabic_explanation: "Identical تعني متطابقة تمامًا.",
      vocabulary: "identical = متطابق تمامًا",
      needs_review: false,
    });

    list.push({
      id: "Q7-23",
      quiz: "Quiz 7",
      question_en: "Muslims around the world ... during the daytime in Ramadan.",
      options: ["Doesn't eat and drink.", "Don't eat and drink."],
      correct: 1,
      arabic_explanation: "جمع Muslims يتطلب don't وليس doesn't.",
      grammar_rule_ar: "لاتفاق الفعل مع الجمع.",
      needs_review: false,
    });

    list.push({
      id: "Q7-24",
      quiz: "Quiz 7",
      question_en: "The summer in Saudi Arabia is ... in Iceland.",
      options: ["Hotter", "Hotter than"],
      correct: 1,
      arabic_explanation: "المقارنة بين بلدين تتطلب than.",
      grammar_rule_ar: "المقارنة comparative + than.",
      needs_review: false,
    });

    list.push({
      id: "Q7-25",
      quiz: "Quiz 7",
      question_en: "Lions are ... than cats.",
      options: ["Dangerous", "More dangerous"],
      correct: 1,
      arabic_explanation: "than يدل على مقارنة؛ نستخدم more dangerous.",
      needs_review: false,
    });

    list.push({
      id: "Q7-26",
      quiz: "Quiz 7",
      question_en: "Money used in a country is called ...",
      options: ["Souvenir", "Visa", "Currency"],
      correct: 2,
      arabic_explanation: "العملة الرسمية currency.",
      vocabulary: "currency = عملة",
      needs_review: false,
    });

    list.push({
      id: "Q7-27",
      quiz: "Quiz 7",
      question_en: "Have you ever ... a horse?",
      options: ["Ride", "Rode", "Ridden"],
      correct: 2,
      arabic_explanation: "بعد Have you ever نستخدم التصريف الثالث ridden.",
      grammar_rule_ar: "Present perfect: have/has + past participle.",
      needs_review: false,
    });

    list.push({
      id: "Q7-28",
      quiz: "Quiz 7",
      question_en: "The Amazon River ... through Brazil.",
      options: ["Flows", "Flow", "To flow"],
      correct: 0,
      arabic_explanation: "المضارع الثالث مع فاعل مفرد The river flows.",
      needs_review: false,
    });

    list.push({
      id: "Q7-29",
      quiz: "Quiz 7",
      question_en: "Christopher Columbus ... the New World in 1492.",
      options: ["Were discovered.", "Discovers.", "Was discovered.", "Discovered."],
      correct: 3,
      arabic_explanation: "كولومبوس فاعل اكتشف؛ زمن ماضٍ discovered.",
      grammar_rule_ar: "Past simple للأحداث التاريخية.",
      needs_review: false,
    });

    list.push({
      id: "Q7-30",
      quiz: "Quiz 7",
      question_en: "The news ... very upsetting.",
      options: ["Was.", "Were.", "Are.", "Weren't."],
      correct: 0,
      arabic_explanation: "News غالبًا يُعامل كمفرد؛ was upsetting.",
      grammar_rule_ar: "الاتفاق مع collective nouns.",
      needs_review: false,
    });

    list.push({
      id: "Q7-31",
      quiz: "Quiz 7",
      question_en: "What time ... you get up in the morning?",
      options: ["Does", "Do"],
      correct: 1,
      arabic_explanation: "مع you في السؤال نستخدم do.",
      needs_review: false,
    });

    list.push({
      id: "Q7-32",
      quiz: "Quiz 7",
      question_en: "I have 15 ... in my fishtank.",
      options: ["Fish", "Fishes"],
      correct: 0,
      arabic_explanation: "Fish نفس الشكل للجمع عند عدّ الأسماك.",
      grammar_rule_ar: "أسماء جميعها مثل fish / sheep.",
      needs_review: false,
    });

    return list;
  }
}

function main() {
  let html = fs.readFileSync(INDEX, "utf8");
  const { end, arr, prefix, suffix } = extractQuestionBank(html);
  const filtered = arr.filter((q) => q.quiz !== "Quiz 7");
  const merged = filtered.concat(q7Questions());
  const newJson = JSON.stringify(merged);
  fs.writeFileSync(INDEX, prefix + newJson + suffix);

  html = fs.readFileSync(INDEX, "utf8");
  html = html.replace(
    /const QUIZ_ORDER = \[[^\]]+\];/,
    'const QUIZ_ORDER = ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4", "Quiz 5", "Quiz 6 (Compensatory)", "Quiz 7"];',
  );
  html = html.replace(
    /cardTestsD: "جميع الكويزات الستة، البحث، المفضلة، والتقدم\."/,
    'cardTestsD: "جميع الكويزات السبعة، البحث، المفضلة، والتقدم."',
  );
  html = html.replace(
    /cardTestsD: "All six quizzes, search, favorites, progress\."/,
    'cardTestsD: "All seven quizzes, search, favorites, progress."',
  );
  fs.writeFileSync(INDEX, html);

  console.log("OK: Quiz 7 merged. Total questions:", merged.length, "(was", arr.length + ")");
}

main();
