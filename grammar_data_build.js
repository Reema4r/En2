#!/usr/bin/env node
/** Builds embedded GRAMMAR_DATA for index.html — run: node grammar_data_build.js */

const q = (question_en, options, correct, why_ar, rule_ar) => ({
  question_en,
  options,
  correct,
  why_ar,
  rule_ar,
});

const GRAMMAR_DATA = {
  categories: [
    {
      id: "standalone-irregular-verbs",
      title_en: "Irregular verbs — standalone reference",
      title_ar: "الأفعال الشاذة — وحدة مستقلة",
      desc_ar:
        "جدول المعتمد مقسّم لمراحل دراسية؛ اختبار اختياري بعد كل مرحلة، ثم اختبار شامل. لا يتبع أي وحدة من الوحدات ١–٨.",
      desc_en:
        "Approved irregular-verb tables in study stages; optional quiz per stage, then a full review. Not part of units 1–8.",
      lesson_slugs: ["past-simple-irregular-verbs"],
    },
    {
      id: "unit-1-foundations",
      title_en: "Unit 1 — Be, possession, linking, existence",
      title_ar: "الوحدة ١ — الفعل be والملكية والربط والوجود",
      desc_ar: "مطابقة جدول SWET24: Grammar be (am/is/are)، Possessive ’s والصفات الملكية، Writing Skill and/or/but، There is/are.",
      desc_en:
        "Aligned with the SWET24 outline: verb be (am/is/are), possessive ’s and possessive adjectives, coordinating conjunctions (and / or / but), there is / there are.",
      lesson_slugs: [
        "grammar-be-am-is-are",
        "possessive-adjectives-s",
        "coordinating-conjunctions-and-or-but",
        "there-is-there-are",
      ],
    },
    {
      id: "unit-2-nouns-place-tense",
      title_en: "Unit 2 — Place, number, pointing, present simple",
      title_ar: "الوحدة ٢ — المكان والعدد والإشارة والمضارع البسيط",
      desc_ar: "Grammar Prepositions of place، Plural nouns، this/that/these/those، Present simple.",
      desc_en: "Prepositions of place, plural nouns, demonstratives (this/that/these/those), present simple.",
      lesson_slugs: [
        "prepositions-of-place",
        "plural-nouns",
        "demonstratives-this-that-these-those",
        "present-simple",
      ],
    },
    {
      id: "unit-3-writing-routines",
      title_en: "Unit 3 — Writing skills & routines",
      title_ar: "الوحدة ٣ — مهارات الكتابة والروتين",
      desc_ar: "Capital letters، like/love + اسم أو -ing، ظروف التكرار.",
      desc_en: "Capital letters, like/love + noun or -ing, adverbs of frequency.",
      lesson_slugs: ["capital-letters", "like-love-noun-ing", "adverbs-of-frequency"],
    },
    {
      id: "unit-4-ability-quantity",
      title_en: "Unit 4 — Ability & quantity",
      title_ar: "الوحدة ٤ — القدرة والكمّ",
      desc_ar: "can/can’t، a/an/some/any، much/many/a lot of، how much/many.",
      desc_en: "can/can’t, a/an/some/any, much/many/a lot of, how much/how many.",
      lesson_slugs: [
        "can-cant-ability",
        "countable-uncountable-some-any",
        "a-lot-much-many",
        "how-much-how-many",
      ],
    },
    {
      id: "unit-5-past",
      title_en: "Unit 5 — Past (be & verbs)",
      title_ar: "الوحدة ٥ — الماضي: be والأفعال",
      desc_ar: "was/were، الماضي المنتظم والشاذ.",
      desc_en: "was/were, past simple regular and irregular verbs.",
      lesson_slugs: ["was-were-past-be", "past-simple-regular-verbs"],
    },
    {
      id: "unit-6-compare-link-aspect",
      title_en: "Unit 6 — Comparison, connectors, continuous",
      title_ar: "الوحدة ٦ — المقارنة والروابط والمستمر",
      desc_ar: "Comparative/superlative، so/because، present continuous.",
      desc_en: "Comparative & superlative adjectives, so/because, present continuous.",
      lesson_slugs: ["comparative-superlative-adjectives", "so-and-because", "present-continuous-tense"],
    },
    {
      id: "unit-7-future-purpose-senses",
      title_en: "Unit 7 — Future, purpose, sense verbs",
      title_ar: "الوحدة ٧ — المستقبل والغرض وأفعال الحاسة",
      desc_ar: "be going to، infinitive of purpose، sense verbs.",
      desc_en: "be going to, infinitive of purpose, sense verbs.",
      lesson_slugs: ["be-going-to-future-plans", "infinitive-of-purpose", "sense-verbs-opinions"],
    },
    {
      id: "unit-8-perfect-modals-articles",
      title_en: "Unit 8 — Perfect, obligation, advice, will, articles",
      title_ar: "الوحدة ٨ — التام والإلزام والنصيحة وwill والأدوات",
      desc_ar: "Present Perfect، Past simple vs present perfect، have to، should، will، the والصفر.",
      desc_en:
        "Present perfect, past simple vs present perfect, have to, should, will, definite article the & zero article.",
      lesson_slugs: [
        "present-perfect-tense",
        "past-simple-vs-present-perfect",
        "have-to-dont-have-to",
        "should-shouldnt-advice",
        "will-future-tense",
        "articles-definite-zero",
      ],
    },
  ],
  lessons: {},
};

GRAMMAR_DATA.lessons["grammar-be-am-is-are"] = {
  categoryId: "unit-1-foundations",
  title_en: "Verb be: am / is / are",
  title_ar: "الفعل be: am و is و are",
  keywords: ["be", "am", "is", "are", "I'm", "isn't", "aren't", "negative", "question", "interrogative"],
  explanation_ar:
    "الفعل be يربط الفاعل بالخبر (اسم أو صفة). مع I نستخدم am، مع he و she و it نستخدم is، مع you و we و they نستخدم are. للسؤال نقدّم الفعل: Am I…؟ Are you…؟ Is he…؟ وللنفي نضيف not أو نستخدم الصيغ المختصرة isn't و aren't.",
  rule_en:
    "Affirmative: I am / I'm; you/we/they are / you're/we're/they're; he/she/it is / he's/she's/it's. Negative: … am/is/are not or isn't/aren't (not with I → I'm not). Questions: Am / Are / Is + subject + …?",
  table: {
    headers: ["Pronoun", "Affirmative (+)", "Negative (−)", "Question (?)"],
    rows: [
      ["I", "I am · I'm", "I am not · I'm not", "Am I …?"],
      ["you", "You are · You're", "You are not · You aren't · You're not", "Are you …?"],
      ["he", "He is · He's", "He is not · He isn't · He's not", "Is he …?"],
      ["she", "She is · She's", "She is not · She isn't · She's not", "Is she …?"],
      ["it", "It is · It's", "It is not · It isn't · It's not", "Is it …?"],
      ["we", "We are · We're", "We are not · We aren't · We're not", "Are we …?"],
      ["they", "They are · They're", "They are not · They aren't · They're not", "Are they …?"],
    ],
  },
  examples: [
    { en: "I am a teacher.", ar: "أنا معلّم." },
    { en: "They aren't singers.", ar: "هم ليسوا مغنّين." },
    { en: "It is cute.", ar: "إنه لطيف." },
    { en: "You are not sick.", ar: "أنت لست مريضًا." },
    { en: "He is not feeling well.", ar: "إنه لا يشعر بحال جيدة." },
    { en: "She isn't a doctor.", ar: "هي ليست طبيبة." },
    { en: "Are they from Tanzania?", ar: "هل هم من تنزانيا؟" },
    { en: "Am I at the cinema?", ar: "هل أنا في السينما؟" },
    { en: "Languages are not difficult.", ar: "اللغات ليست صعبة." },
    { en: "Is Polish easy?", ar: "هل البولندية سهلة؟" },
    { en: "Are you OK?", ar: "هل أنت بخير؟" },
  ],
  notes_ar:
    "مصدر الشريحة التعليمية: SWET24 — Grammar be (am/is/are). مع I لا نقول *I isn't*؛ النفي الصحيح I'm not. انتبه: it's قد تعني it is أو it has حسب السياق، وليست ضمير ملكية.",
  mistakes_ar: "خطأ شائع: استخدام is مع they أو we. آخر: خلط its (ملكية) مع it's (اختصار).",
  compare_ar: "أفعال أخرى في المضارع تستخدم do/does للسؤال والنفي؛ be وحده له أشكال am/is/are.",
  quiz: [
    q("She ___ a nurse.", ["is", "are", "am"], 0, "مع he/she/it يأتي is.", "Verb be: third person singular → is."),
    q("They ___ at home now.", ["are", "is", "am"], 0, "they جمع → are.", "Plural pronouns → are."),
    q("___ you from Egypt?", ["Are", "Is", "Do"], 0, "أسئلة be مع you تبدأ بـ Are.", "Are you …? for origin / state."),
    q("I ___ tired today.", ["am", "is", "are"], 0, "المتحدث I يأخذ am.", "I + am."),
    q("It ___ a small mistake.", ["isn't", "aren't", "don't"], 0, "نفي it → isn't (أو it's not).", "Negative of is → isn't."),
    q("We ___ ready for the test.", ["are", "is", "am"], 0, "we → are.", "We + are."),
    q("___ he your brother?", ["Is", "Are", "Does"], 0, "سؤال بحالة أو هوية لشخص → Is he…?", "Is + he/she/it …?"),
    q("The keys ___ on the table.", ["are", "is", "am"], 0, "keys جمع مذكر → are.", "Plural subject → are."),
    q("___ there any milk?", ["Is", "Are", "Do"], 0, "milk غير معدود في هذا النمط الشائع → Is there…?", "There is + uncountable noun."),
    q("You ___ amazing!", ["are", "is", "am"], 0, "you دائمًا مع are في اللغة المعيارية.", "You + are."),
    q("___ I late for class?", ["Am", "Are", "Is"], 0, "مع I في السؤال يبدأ بـ Am.", "Am I …?"),
    q("Mathematics ___ difficult for many learners.", ["is", "are", "am"], 0, "Mathematics اسم مادة يُعامل كمفرد → is.", "Singular subject → is."),
    q("Those ___ my gloves.", ["are", "is", "am"], 0, "those جمع → are.", "Those + plural → are."),
    q("He ___ not at school today.", ["is", "are", "am"], 0, "he + is.", "He + is + not."),
    q("___ we allowed to use phones here?", ["Are", "Is", "Do"], 0, "we جمع → Are we…?", "Are we …?"),
    q("My hands ___ cold.", ["are", "is", "am"], 0, "hands جمع → are.", "Plural noun → are."),
    q("___ it true that you moved?", ["Is", "Are", "Does"], 0, "It + fact → Is it…?", "Is it true …?"),
    q("There ___ many reasons for this.", ["are", "is", "am"], 0, "many reasons جمع → there are.", "There are + plural."),
    q("You ___ very helpful — thanks!", ["are", "is", "am"], 0, "you + are.", "You are + adjective."),
    q("She ___ an engineer.", ["is", "are", "am"], 0, "she + is + noun.", "She is + noun."),
    q("They ___ not interested in the offer.", ["are", "is", "am"], 0, "they + are + not.", "They are not."),
    q("___ your parents teachers?", ["Are", "Is", "Do"], 0, "parents جمع → Are your parents…?", "Are + plural subject."),
    q("The weather ___ nice today.", ["is", "are", "am"], 0, "weather غير معدود → is.", "Weather + is."),
    q("___ she feeling OK? (grammar focus: be)", ["Is", "Are", "Does"], 0, "فعل be للحالة → Is she…?", "Is + she + …?"),
  ],
};

GRAMMAR_DATA.lessons["present-simple"] = {
  categoryId: "unit-2-nouns-place-tense",
  title_en: "Present simple (non-be verbs)",
  title_ar: "المضارع البسيط (أفعال غير be)",
  keywords: ["present simple", "s es", "do does", "don't doesn't", "habits", "facts"],
  explanation_ar:
    "المضارع البسيط يصف العادات والحقائق والروتين. مع he/she/it نضيف s أو es للفعل. النفي: don't أو doesn't + مصدر الفعل. السؤال: Do أو Does + الفاعل + مصدر الفعل؟",
  rule_en:
    "Affirmative: Subject + verb (+ s/es for he/she/it). Negative: subject + do/does + not + base verb. Question: Do/Does + subject + base verb?",
  table: {
    headers: ["Use", "Pattern", "Example"],
    rows: [
      ["عادة / حقيقة", "Subject + verb (+ s)", "Romie loves burgers."],
      ["نفي", "Subject + don't/doesn't + verb", "Romie does not love burgers."],
      ["سؤال", "Do/Does + subject + verb?", "Does Romie love burgers?"],
    ],
  },
  examples: [
    { en: "Romie loves to eat burgers.", ar: "رومي يحب أكل البرغر." },
    { en: "Romie does not love to eat burgers.", ar: "رومي لا يحب أكل البرغر." },
    { en: "Does Romie love to eat burgers?", ar: "هل يحب رومي أكل البرغر؟" },
    { en: "Water boils at 100°C.", ar: "الماء يغلي عند 100°م." },
    { en: "They don't live here.", ar: "هم لا يسكنون هنا." },
  ],
  notes_ar: "لا تضف s إذا سبق الفعل do/does في السؤال أو النفي (Does she play…?) الفعل يبقى مصدرًا.",
  mistakes_ar: "She work بدل She works. أو استخدام is مع فعل معنوي (*is plays).",
  compare_ar: "be له قواعده؛ الأفعال الأخرى تستخدم do/does.",
  quiz: [
    q("He ___ English every morning.", ["study", "studies", "studying"], 1, "he/she/it + فعل + s.", "Present simple third person + s."),
    q("They ___ football on Fridays.", ["plays", "play", "playing"], 1, "they جمع بدون s على الفعل.", "Plural subject + base verb."),
    q("___ she like coffee?", ["Do", "Does", "Is"], 1, "Does مع الصف الثالث للسؤال عن فعل معنوي.", "Does + she + base verb?"),
    q("I don't ___ early on Sundays.", ["get up", "gets up", "getting up"], 0, "بعد don't يأتي المصدر.", "don't + base verb."),
    q("The sun ___ in the east.", ["rise", "rises", "rising"], 1, "حقيقة عامة؛ the sun مفرد → rises.", "Facts: third person + s."),
    q("___ you play the piano?", ["Do", "Does", "Are"], 0, "you مع Do في الأسئلة للأفعال المعنوية.", "Do you + verb?"),
    q("She ___ not watch TV at night.", ["do", "does", "is"], 1, "نفي الصف الثالث → doesn't.", "doesn't + base verb."),
    q("We ___ dinner at 7 pm usually.", ["have", "has", "having"], 1, "we + مصدر.", "Present simple plural."),
    q("___ it rain here often?", ["Do", "Does", "Is"], 1, "Does مع it للفعل المعنوي rain.", "Does + subject + verb?"),
    q("Birds ___ south in winter.", ["fly", "flies", "flying"], 0, "birds جمع → fly.", "Plural → base verb form."),
  ],
};

GRAMMAR_DATA.lessons["possessive-adjectives-s"] = {
  categoryId: "unit-1-foundations",
  title_en: "Possessive adjectives & possessive ’s",
  title_ar: "الصفات الملكية و ’s للملكية",
  keywords: ["my", "your", "his", "her", "its", "our", "their", "possessive", "'s"],
  explanation_ar:
    "الصفات الملكية تسبق الاسم وتُظهر الملكية: my، your، his، her، its، our، their. لا تأخذ فصلًا مثل الضمائر المنفصلة. ملحق الملكية ’s يُضاف غالبًا للأشخاص أو الكائنات التي «تمتلك» شيئًا: Ahmed's phone.",
  rule_en:
    "Possessive adjectives (determiners): my book, your idea, his car, her job, its tail, our house, their friends. Possessive ’s: noun + ’s + noun (often people / animals).",
  table: {
    headers: ["Subject pronoun", "Possessive adjective", "Example"],
    rows: [
      ["I", "my", "my shoes"],
      ["you", "your", "your bag"],
      ["he", "his", "his keys"],
      ["she", "her", "her sister"],
      ["it", "its", "its colour"],
      ["we", "our", "our teacher"],
      ["they", "their", "their house"],
    ],
  },
  examples: [
    { en: "I am a teacher.", ar: "أنا معلّم." },
    { en: "These are my shoes.", ar: "هذه حذائي." },
    { en: "This is Sara's laptop.", ar: "هذا حاسوب سارة." },
    { en: "The dog wagged its tail.", ar: "الكلب هز ذيلَه." },
  ],
  notes_ar:
    "صيغة 1: ضمير فاعل + فعل (I am a teacher). صيغة 2: صفة ملكية + اسم (These are my shoes). its بلا فتحة = ملكية؛ it's = it is أو it has. their للجمع؛ they're = they are.",
  mistakes_ar: "كتابة hes بدل his؛ أو استخدام her مع ذكر الجنس بالخطأ.",
  compare_ar: "Possessive pronouns (mine, yours…) تأتي بدون اسم بعدها؛ الصفات الملكية يجب أن يتبعها اسم.",
  quiz: [
    q("Anna forgot ___ keys on the bus.", ["her", "she", "hers"], 0, "اسم شيء بعد الصفة الملكية → her.", "Possessive adjective before noun."),
    q("This is ___ house, not ours.", ["they're", "their", "there"], 1, "ملكية الجمع → their.", "their + noun."),
    q("The cat drank ___ water.", ["it's", "its", "it"], 1, "ضمير ملكية للحيوان → its.", "its + noun."),
    q("___ father works in a hospital.", ["We", "Our", "Us"], 1, "قبل اسم → صفة ملكية.", "Our + noun."),
    q("Is this ___ pen? — Yes, it's mine.", ["you", "your", "you're"], 1, "your pen.", "Possessive adjective."),
    q("The students forgot ___ books.", ["his", "their", "its"], 1, "students جمع → their.", "Plural possessive."),
    q("That's ___ classroom (Paul).", ["Pauls'", "Paul's", "Pauls"], 1, "ملكية شخص → 's.", "Possessive ’s."),
    q("___ bag is heavier: yours or mine?", ["Who's", "Whose", "Who"], 1, "سؤال عن الملكية → Whose (كلمة استفهام).", "Whose + noun."),
    q("They love ___ new apartment.", ["there", "their", "they're"], 1, "their apartment.", "Possessive their."),
    q("Ahmad ___ sister is a doctor.", ["'s", "s'", "s's"], 0, "اسم مفرد + ’s.", "Noun + ’s."),
    q("I lost ___ wallet.", ["my", "mine", "me"], 0, "قبل اسم → صفة ملكية my.", "my + noun."),
    q("Can we borrow ___ car?", ["your", "you're", "you"], 0, "your car.", "Possessive adjective."),
    q("The dog hurt ___ paw.", ["its", "it's", "it"], 0, "ملكية للحيوان → its.", "its + body part."),
    q("Is this ___ umbrella?", ["your", "you're", "you"], 0, "قبل اسم → your.", "your + noun."),
    q("Those seats are ___. (they belong to us)", ["ours", "our", "we"], 0, "ضمير ملكية منفصل بدون اسم بعده.", "Possessive pronoun ours."),
    q("___ dictionary is this?", ["Who's", "Whose", "Who"], 1, "Whose = لمن.", "Whose + noun?"),
    q("She spoke to ___ teacher after class.", ["her", "she", "hers"], 0, "her teacher.", "her + noun."),
    q("We painted ___ bedroom white.", ["our", "we", "hours"], 0, "our bedroom.", "our + noun."),
    q("___ not my coat — pick the contraction for «it is».", ["It's", "Its", "Its'"], 0, "It's = it is.", "it's vs its."),
    q("Whose keys ___ these?", ["are", "is", "am"], 0, "keys جمع → are.", "Whose + noun + be."),
    q("___ phone keeps ringing.", ["Mary's", "Marys", "Marys'"], 0, "Mary's phone.", "Singular name + ’s."),
    q("They sold ___ old bikes.", ["their", "they're", "there"], 0, "their bikes.", "their + plural noun."),
  ],
};

GRAMMAR_DATA.lessons["coordinating-conjunctions-and-or-but"] = {
  categoryId: "unit-1-foundations",
  title_en: "Coordinating conjunctions: and, or, but",
  title_ar: "أدوات الربط: and و or و but",
  keywords: ["and", "or", "but", "coordinating conjunctions", "linking"],
  explanation_ar:
    "أدوات الربط المتساوية تربط كلمات أو مجموعات كلمات من نفس النوع. and تربط أفكارًا متشابهة أو إضافية؛ or تربط بدائل؛ but تربط تباينًا أو تعارضًا بين جزأين.",
  rule_en:
    "and → similar / added ideas; or → alternatives (choice); but → contrast.",
  table: {
    headers: ["Conjunction", "Role", "Example"],
    rows: [
      ["and", "similar / added ideas", "I like apples and bananas."],
      ["or", "alternatives", "Do you want an apple or a banana?"],
      ["but", "contrast", "I like apples but I don't like bananas."],
    ],
  },
  examples: [
    { en: "I like apples and bananas.", ar: "أحب التفاح والموز." },
    { en: "Do you want tea or coffee?", ar: "هل تريد شايًا أم قهوة؟" },
    { en: "She's tired but she's happy.", ar: "هي متعبة لكنها سعيدة." },
  ],
  notes_ar: "الأجزاء المتصلة يجب أن تكون متوازية نحويًا (اسم واسم، جملة وجملة…).",
  mistakes_ar: "استخدام but رغم عدم وجود تعارض؛ أو but بين عناصر غير متوازية.",
  compare_ar: "because تشرح السبب؛ but تعرض التباين فقط.",
  quiz: [
    q("I bought bread ___ butter at the store.", ["and", "but", "or"], 0, "إضافة غرضين متشابهين في القائمة → and.", "and links similar items."),
    q("Do you want the red one ___ the blue one?", ["and", "or", "but"], 1, "اختيار بين بديلين → or.", "or for alternatives."),
    q("It's cheap ___ it's good quality.", ["and", "but", "or"], 0, "إضافة صفتين متوافقتين → and.", "and for addition."),
    q("He studied hard, ___ he passed.", ["but", "because", "or"], 1, "السبب المنطقي هنا because؛ إن وجد but يحتاج تعارضًا — الجملة توضح سببًا → because أفضل — انتظر المستخدم طلب but/and — للتباين: fix question\nActually: 'It's raining ___ we stayed home.' → because. For contrast: 'He's young ___ wise.' → but.\nRewriting: He's rich ___ unhappy. → but", "but links contrast."),
    q("He's rich ___ unhappy.", ["and", "but", "or"], 1, "تعارض بين غني وحزين → but.", "but for contrast."),
    q("Walk straight ___ turn left at the bank.", ["and", "or", "but"], 0, "تتابع خطوات → and.", "Sequential instructions with and."),
    q("We can meet today ___ tomorrow.", ["and", "or", "but"], 1, "خياران زمنيان → or.", "or between options."),
    q("She likes maths ___ finds physics difficult.", ["and", "but", "or"], 1, "إعجاب مقابل صعوبة → contrast → but.", "but."),
    q("Do you travel by bus ___ by train?", ["and", "or", "but"], 1, "وسيلتان بديلتان → or.", "or in questions of choice."),
    q("I'd love to go, ___ I'm too busy.", ["and", "but", "or"], 1, "رغبة مقابل عائق → but.", "but for contrast."),
  ],
};

GRAMMAR_DATA.lessons["coordinating-conjunctions-and-or-but"].quiz[3] = q(
  "She wanted to stay, ___ she had to leave.",
  ["and", "but", "or"],
  1,
  "رغبة مقابل إجبار → تباين → but.",
  "but links contrasting clauses.",
);

GRAMMAR_DATA.lessons["there-is-there-are"] = {
  categoryId: "unit-1-foundations",
  title_en: "There is / There are",
  title_ar: "There is / There are",
  keywords: ["there is", "there are", "some", "existence", "singular", "plural"],
  explanation_ar:
    "نستخدم There is / There are لقول أن شيئًا موجودًا (أو غير موجود) في مكان أو سياق. الشكل يتبع أول اسم بعد there غالبًا: مفرد أو غير معدود → there is؛ جمع → there are. مع الجمل غير المعدودة مثل milk نستخدم there is some milk.",
  rule_en:
    "There is + singular / uncountable. There are + plural nouns. Negative: There isn't / There aren't. Question: Is there…? Are there…?",
  table: {
    headers: ["Form", "Example"],
    rows: [
      ["There is + singular", "There is a book on the desk."],
      ["There are + plural", "There are books on the desk."],
      ["There is + uncountable", "There is some milk in the fridge."],
    ],
  },
  examples: [
    { en: "There is a book on the desk.", ar: "هناك كتاب على المكتب." },
    { en: "There are books on the desk.", ar: "هناك كتب على المكتب." },
    { en: "There is some milk in the fridge.", ar: "هناك بعض الحليب في الثلاجة." },
    { en: "There aren't any problems.", ar: "لا توجد أي مشاكل." },
  ],
  notes_ar: "في اللغة المنطوقة يُسمع There's مع جمع أحيانًا؛ في الامتحانات الرسمية التزم there are مع الجمع.",
  mistakes_ar: "There is مع جمع (*There is many books).",
  compare_ar: "They are يصف «هم»؛ there are يصف وجود أشياء في مكان.",
  quiz: [
    q("There ___ two pens on the floor.", ["are", "is", "am"], 0, "two pens جمع → there are.", "There are + plural."),
    q("There ___ a problem with the Wi‑Fi.", ["is", "are", "be"], 0, "a problem مفرد → there is.", "There is + singular."),
    q("___ there any sugar?", ["Is", "Are", "Do"], 0, "sugar غير معدود هنا → Is there…?", "Is there + uncountable."),
    q("There ___ some chairs in the room.", ["are", "is", "has"], 0, "chairs جمع.", "There are."),
    q("There ___ not enough time.", ["is", "are", "were"], 0, "time غير معدود → is.", "There isn't + uncountable."),
    q("___ there many students?", ["Are", "Is", "Do"], 0, "many students جمع → Are there…?", "Are there + plural?"),
    q("There ___ a cat and two dogs in the yard.", ["is", "are", "have"], 0, "الاتفاق غالبًا مع أول اسم (a cat) في اللغة غير الرسمية؛ المعيار التعليمي يركز there is مع أول عنصر مفرد.", "There is + first item singular (proximity agreement)."),
    q("There ___ no apples left.", ["are", "is", "were"], 0, "apples جمع → are.", "There are + plural subject."),
    q("___ there a bank near here?", ["Is", "Are", "Does"], 0, "a bank مفرد.", "Is there a…?"),
    q("There ___ lots of people outside.", ["are", "is", "was"], 0, "people جمع → are.", "There are + plural."),
  ],
};

GRAMMAR_DATA.lessons["prepositions-of-place"] = {
  categoryId: "unit-2-nouns-place-tense",
  title_en: "Prepositions of place",
  title_ar: "حروف الجر للمكان",
  keywords: ["in", "on", "under", "behind", "between", "next to", "above", "below"],
  explanation_ar:
    "حروف الجر التي تلي اسم مكان توضح موضع الشيء بالنسبة لآخر: داخل (in)، على سطح (on)، تحت (under)، أمام (in front of)، خلف (behind)، بجانب (next to)، فوق (above)، أسفل (below)، بين (between)، يمين/يسار، مقابل (opposite).",
  rule_en:
    "in / on / under / in front of / behind / next to / above / below / between / on the left / on the right / opposite + noun phrase.",
  table: {
    headers: ["Preposition", "Arabic hint", "Example"],
    rows: [
      ["in", "في (داخل)", "The keys are in the drawer."],
      ["on", "على", "The phone is on the table."],
      ["under", "تحت", "The cat is under the chair."],
      ["in front of", "أمام", "There is a tree in front of the house."],
      ["behind", "خلف", "Park behind the supermarket."],
      ["next to", "بجانب", "Sit next to me."],
      ["between", "بين", "The cafe is between the bank and the library."],
      ["above / below", "فوق / أسفل", "The flat above ours is noisy."],
      ["opposite", "مقابل", "The hospital is opposite the park."],
      ["on the left / right", "يسار / يمين", "Turn right at the corner."],
    ],
  },
  examples: [
    { en: "Your bag is under the seat.", ar: "حقيبتك تحت المقعد." },
    { en: "The picture hangs above the sofa.", ar: "الصورة معلّقة فوق الأريكة." },
    { en: "She waited at the bus stop opposite the school.", ar: "انتظرت عند موقف الحافلة مقابل المدرسة." },
  ],
  notes_ar: "أحيانًا يختلف الإنجليزي عن العربية: in the street قد تكون on في الأمريكية — ركّز على ما في المنهج.",
  mistakes_ar: "خلط on و in (على الطاولة on؛ في الصندوق in).",
  compare_ar: "next to قريب جدًا؛ near أوسع؛ between يحتاج شيئين على الأقل.",
  quiz: [
    q("The lamp is ___ the ceiling.", ["on", "above", "in"], 1, "الثريا «فوق» الغرفة نحو السقف → above.", "above for higher position."),
    q("There's a spider ___ the bed.", ["on", "under", "at"], 1, "شائع تحت السرير → under.", "under."),
    q("She lives ___ the third floor.", ["in", "on", "at"], 1, "on + floor.", "on the floor level."),
    q("The bank is ___ the post office and the cafe.", ["between", "under", "on"], 0, "بين مبنيين → between.", "between."),
    q("Put the glasses ___ the cupboard.", ["in", "on", "over"], 0, "داخل الخزانة → in.", "in."),
    q("He stood ___ me in the queue.", ["behind", "between", "next"], 0, "ورائي في الطابور → behind.", "behind."),
    q("There's a hotel ___ the river.", ["opposite", "under", "in"], 0, "مقابل النهر → opposite.", "opposite."),
    q("Your shoes are ___ the door.", ["next to", "between", "among"], 0, "بجانب الباب.", "next to."),
    q("The cat jumped ___ the table.", ["onto", "into", "at"], 0, "حركة إلى فوق السطح → onto (في هذا السياق التعليمي).", "Movement to surface — onto."),
    q("Sign your name ___ the dotted line.", ["on", "in", "under"], 0, "على الخط المنقط.", "on."),
  ],
};

GRAMMAR_DATA.lessons["plural-nouns"] = {
  categoryId: "unit-2-nouns-place-tense",
  title_en: "Plural nouns",
  title_ar: "جمع الأسماء",
  keywords: ["plural", "s", "es", "ies", "ves", "irregular"],
  explanation_ar:
    "جمع الاسم المنتظم غالبًا بإضافة s؛ بعد s, ch, sh, x, z نستخدم es؛ يـاء متحركة + y نحذف y ونضيف ies؛ حرف ساكن + o غالبًا es؛ استثناءات كثيرة للأفعال الشاذة والأسماء التي لا تتغير.",
  rule_en:
    "Regular +s; +es after s/ch/sh/x/z; consonant+y → ies; f/fe → often ves (roof/cliff exceptions); irregular: men, children, feet, mice, etc.; same form: sheep, deer, fish.",
  table: {
    headers: ["Rule", "Examples"],
    rows: [
      ["Regular +s", "car → cars, book → books"],
      ["s/ch/sh/x/z + es", "bus → buses, box → boxes"],
      ["consonant + y → ies", "city → cities, baby → babies"],
      ["vowel + y → s", "day → days, boy → boys"],
      ["f/fe → ves (exceptions exist)", "leaf → leaves; roof → roofs"],
      ["Irregular", "man → men, child → children, foot → feet"],
      ["No change", "sheep, deer, fish (often)"],
    ],
  },
  examples: [
    { en: "two buses", ar: "حافلتان" },
    { en: "three babies", ar: "ثلاثة أطفال رضّع" },
    { en: "five wolves", ar: "خمسة ذئاب" },
    { en: "many people", ar: "كثير من الناس" },
  ],
  notes_ar: "quiz → quizzes بحرفين zz + es. piano و photo غالبًا فقط s.",
  mistakes_ar: "potatos بدل potatoes؛ یا citys بدل cities.",
  compare_ar: "صفات المقارنة ليست جمع أسماء؛ لا تخلط -er مع جمع الجملة.",
  quiz: [
    q("one box, two ___", ["boxs", "boxes", "boxies"], 1, "ينتهي بـ x → es.", "+es after x."),
    q("one baby, many ___", ["babys", "babies", "baby"], 1, "consonant + y → ies.", "y → ies."),
    q("two ___ (knife)", ["knifes", "knives", "knife"], 1, "f → ves.", "knives."),
    q("one man, two ___", ["mans", "men", "man"], 1, "شاذ.", "irregular plural men."),
    q("several ___ (child)", ["childs", "children", "childrens"], 1, "children.", "irregular."),
    q("two ___ (tomato)", ["tomatos", "tomatoes", "tomato"], 1, "consonant + o غالبًا es.", "tomatoes."),
    q("many ___ (sheep)", ["sheeps", "sheep", "sheepes"], 1, "نفس الشكل.", "sheep unchanged."),
    q("two ___ (quiz)", ["quizs", "quizzes", "quize"], 1, "double z + es.", "quizzes."),
    q("The ___ are on sale (city).", ["citys", "cities", "city"], 1, "city → cities.", "consonant + y."),
    q("two ___ (photo)", ["photos", "photoes", "photoses"], 0, "استثناء شائع → photos.", "photo → photos."),
  ],
};

GRAMMAR_DATA.lessons["demonstratives-this-that-these-those"] = {
  categoryId: "unit-2-nouns-place-tense",
  title_en: "This, that, these, those",
  title_ar: "This و that و these و those",
  keywords: ["this", "that", "these", "those", "demonstratives", "near", "far"],
  explanation_ar:
    "this و that لمفرد؛ these و those لجمع. غالبًا this/these للقرب الزماني أو المكاني؛ that/those للبعد. تُستخدم قبل اسم أو تشير لوحدها حسب السياق.",
  rule_en:
    "This/that + singular noun. These/those + plural noun. This/these → nearer; that/those → farther.",
  table: {
    headers: ["Word", "Number", "Typical distance"],
    rows: [
      ["this", "singular", "near"],
      ["that", "singular", "far"],
      ["these", "plural", "near"],
      ["those", "plural", "far"],
    ],
  },
  examples: [
    { en: "I like this apple.", ar: "أحب هذا التفاح." },
    { en: "I like that apple.", ar: "أحب ذلك التفاح." },
    { en: "I like these apples.", ar: "أحب هذه التفاحات." },
    { en: "I like those apples.", ar: "أحب تلك التفاحات." },
  ],
  notes_ar: "هذه الأدوات تعمل كصفات تشيرية قبل الاسم؛ لا تخلط this مع جمع.",
  mistakes_ar: "these apple بدل these apples؛ أو those مع مفرد.",
  compare_ar: "أدوات الإشارة مختلفة عن he/she/it التي للضمير فقط.",
  quiz: [
    q("___ shoes here are mine; ___ ones over there are yours.", ["This / that", "These / those", "That / these"], 1, "أحذية جمع قريبة وبعيدة → these / those.", "these near, those far."),
    q("Look at ___ bird in the tree!", ["this", "these", "those"], 0, "bird مفرد قريب → this.", "this + singular."),
    q("___ students in the back row, please stand.", ["That", "Those", "This"], 1, "students جمع وبعيد نسبيًا → Those.", "those + plural."),
    q("I prefer ___ coat (near me).", ["this", "these", "those"], 0, "معطف واحد قريب.", "this."),
    q("___ was a great concert we saw last year.", ["That", "These", "Those"], 0, "حديث عن تجربة في الماضي البعيد نسبيًا → That.", "that for distant idea/time."),
    q("Are ___ your keys on the table?", ["this", "these", "that"], 1, "keys جمع → these.", "these."),
    q("I don't like ___ colours.", ["that", "those", "this"], 1, "colours جمع وبعد → those.", "those."),
    q("Give me ___ book on the shelf (you point).", ["that", "these", "those"], 0, "كتاب واحد تُشير إليه بعيدًا → that.", "that."),
    q("___ days we're very busy.", ["This", "These", "Those"], 1, "days جمع وزمن قريب → These.", "these days."),
    q("Who are ___ people?", ["this", "that", "those"], 2, "people جمع وبُعد → those.", "those people."),
  ],
};

Object.assign(GRAMMAR_DATA.lessons, require("./grammar_slides_bundle.cjs"));
Object.assign(GRAMMAR_DATA.lessons, require("./grammar_topics_extra.cjs"));

process.stdout.write("<script>\nconst GRAMMAR_DATA = " + JSON.stringify(GRAMMAR_DATA) + ";\n</script>\n");
