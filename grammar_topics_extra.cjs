/** Extra grammar topics — merged via grammar_data_build.js */
const q = (question_en, options, correct, why_ar, rule_ar) => ({
  question_en,
  options,
  correct,
  why_ar,
  rule_ar,
});

module.exports = {
  "be-going-to-future-plans": {
    categoryId: "unit-7-future-purpose-senses",
    title_en: "Be going to (plans)",
    title_ar: "Be going to للخطط والمستقبل القريب",
    keywords: ["going to", "future", "am is are", "plans", "intentions"],
    explanation_ar:
      "نستخدم be going to للحديث عن خطط أو نوايا أو تنبؤات واضحة. التركيب: ضمير + am/is/are + going to + مصدر الفعل. النفي: am/is/are + not + going to + مصدر. السؤال: هل نقلب am/are/is مع الفاعل؟ نعم — Am I going to…؟ هل الإجابات القصيرة نعم/لا مع be كما في الشرائح.",
    rule_en:
      "Affirmative: subject + am/is/are + going to + base verb. Negative: … + am/is/are + not + going to + base. Questions: Am/Are/Is + subject + going to + base? Short answers: Yes, I am. / No, I'm not. WH-questions: Where are you going to stay?",
    table: {
      headers: ["Form", "Example"],
      rows: [
        ["+", "She is going to travel."],
        ["−", "He is not going to travel."],
        ["?", "Are they going to travel?"],
        ["Short yes", "Yes, we are."],
        ["Short no", "No, she isn't."],
      ],
    },
    examples: [
      { en: "I'm going to study tonight.", ar: "سأدرس الليلة." },
      { en: "They aren't going to miss the bus.", ar: "لن يفوتهم الحافلة." },
      { en: "When are you going to leave?", ar: "متى ستغادر؟" },
    ],
    notes_ar: "going to غالبًا للخطط المقررة؛ will أحيانًا للقرار اللحظي — فرق لاحقًا.",
    mistakes_ar: "*going to travelled* — المصدر بعد to وليس الماضي.",
    compare_ar: "المضارع المستمر للحدث الآن؛ going to للنية المستقبلية.",
    quiz: [
      q("I ___ going to call you later.", ["am", "is", "are"], 0, "I + am.", "I am going to."),
      q("She ___ going to apply for the job.", ["is", "am", "are"], 0, "she + is.", "is going to."),
      q("We ___ not going to wait.", ["are", "is", "am"], 0, "we + are.", "negative going to."),
      q("___ they going to stay?", ["Are", "Do", "Will"], 0, "Are + subject + going to.", "question form."),
      q("Yes, I ___ . (going to context)", ["am", "will", "do"], 0, "short answer with be.", "Yes, I am."),
      q("No, he ___ . (negative short)", ["isn't", "won't", "doesn't"], 0, "No, he isn't.", "short negative."),
      q("What ___ you going to do?", ["are", "is", "do"], 0, "What are you going to…?", "WH + going to."),
      q("He ___ going to watch the match.", ["is", "are", "be"], 0, "is going to.", "third person."),
      q("___ I going to need a ticket?", ["Am", "Are", "Do"], 0, "Am I going to…?", "Am I."),
      q("They ___ going to travel next week.", ["are", "is", "will"], 0, "they + are.", "plural subject."),
    ],
  },

  "infinitive-of-purpose": {
    categoryId: "unit-7-future-purpose-senses",
    title_en: "Infinitive of purpose (to + verb)",
    title_ar: "المصدر لبيان الغرض (to + فعل)",
    keywords: ["to infinitive", "purpose", "in order to", "not to"],
    explanation_ar:
      "نستخدم to + مصدر لشرح غرض الفعل السابق؛ معناها قريب من in order to. النفي في جملة المصدر: not to (مثل not to see her). يمكن أن يبدأ الجملة بـ To… للتركيز على الغرض.",
    rule_en:
      "Action + to + base verb (purpose). Negative purpose: … not to + verb. Sentence-initial: To get a passport, you should …",
    table: {
      headers: ["Pattern", "Example"],
      rows: [
        ["purpose clause", "She studied hard to pass the exams."],
        ["negative purpose", "He sat elsewhere not to see her."],
        ["fronted infinitive", "To learn English, she moved to London."],
      ],
    },
    examples: [
      { en: "The students studied very hard to pass the exams.", ar: "درسوا لاجتياز الامتحانات." },
      { en: "She is going to England to learn English.", ar: "ستذهب لتعلّم الإنجليزية." },
      { en: "To get a passport, fill out this form.", ar: "للحصول على جواز، املأ الاستمارة." },
    ],
    notes_ar: "لا تخلط between لغرض وبين for + اسم الغرض أحيانًا.",
    mistakes_ar: "for pass بدل to pass.",
    compare_ar: "because يشرح سبب جملة كاملة؛ to يوجّه لغرض فعل.",
    quiz: [
      q("She saved money ___ buy a laptop.", ["to", "for", "so"], 0, "غرض الإدخار.", "to + base."),
      q("He changed seats ___ see her.", ["not to", "to not", "don't to"], 0, "نفي الغرض → not to.", "not to."),
      q("___ improve your English, read every day.", ["To", "For", "So"], 0, "جملة تبدأ بمصدر غرض.", "To + verb at start."),
      q("They left early ___ catch the train.", ["to", "for", "so"], 0, "الغرض من المغادرة.", "to + base."),
      q("We use 'to + verb' to show ___ .", ["purpose", "past time", "plural"], 0, "الغرض.", "purpose."),
      q("He whispered ___ wake the baby.", ["not to", "to not", "don't"], 0, "لا يوقظ الرضيع.", "not to + verb."),
      q("She went to the library ___ .", ["to revise", "revise", "revising"], 0, "to + مصدر.", "to revise."),
      q("«To» in this lesson often means the same as ___ .", ["in order to", "because", "so"], 0, "in order to.", "synonym."),
      q("I opened the window ___ fresh air. (get)", ["to get", "getting", "get"], 0, "to get.", "purpose."),
      q("Negative infinitive of purpose uses ___ .", ["not to", "don't to", "not"], 0, "not to + verb.", "not to."),
    ],
  },

  "sense-verbs-opinions": {
    categoryId: "unit-7-future-purpose-senses",
    title_en: "Sense verbs & opinions",
    title_ar: "أفعال الحاسة والرأي",
    keywords: ["look", "feel", "taste", "smell", "sound", "seem", "sense verbs"],
    explanation_ar:
      "أفعال الحاسة تربط الفاعل بوصف يعبّر عن إدراك حسي أو انطباع: look/seem/sound/taste/smell/feel غالبًا يتبعها صفة أو مثل صفة. تُستخدم في إبداء الرأي أو الوصف الذاتي للانطباع.",
    rule_en:
      "Sense verbs + adjective (or like): You look tired. This tastes sweet. It sounds interesting. She feels happy.",
    table: {
      headers: ["Verb", "Sense / use"],
      rows: [
        ["look", "appearance"],
        ["seem", "general impression"],
        ["sound", "hearing / impression"],
        ["smell / taste", "smell / flavour"],
        ["feel", "touch / emotion"],
      ],
    },
    examples: [
      { en: "You look tired.", ar: "تبدو متعبًا." },
      { en: "The soup tastes salty.", ar: "الشوربة طعمها مالح." },
      { en: "That sounds like a good idea.", ar: "يبدو ذلك فكرة جيدة." },
    ],
    notes_ar: "sound مثل يبدو (معنويًا)؛ hear للسماع الفعلي غالبًا.",
    mistakes_ar: "look tiredly بدل look tired (صفة لا ظرف إلا في معانٍ خاصة).",
    compare_ar: "appear/seem قريبة من look في الانطباع.",
    quiz: [
      q("You ___ tired. You should rest.", ["look", "look like", "looks"], 0, "you + look + صفة.", "look + adjective."),
      q("This cake ___ delicious.", ["tastes", "taste", "is tasting"], 0, "this cake + tastes.", "taste linking."),
      q("The music ___ too loud.", ["sounds", "sound", "is sounding"], 0, "sounds + adjective.", "sound."),
      q("It ___ like rain.", ["smells", "smell", "is smelling"], 0, "smells like…", "smell + like."),
      q("I ___ happy about the news.", ["feel", "feel like", "am feeling"], 0, "feel + emotion.", "feel."),
      q("She ___ nervous before exams.", ["feels", "feel", "is feel"], 0, "she feels.", "third person."),
      q("These tomatoes ___ fresh.", ["feel", "feel like", "are feeling"], 0, "لمس/انطباع.", "feel + adj."),
      q("His excuse ___ weak.", ["sounds", "hears", "listens"], 0, "يبدو ضعيفًا.", "sound."),
      q("Sense verbs often link subject + ___ .", ["adjective", "adverb", "noun only"], 0, "صفة.", "linking verb."),
      q("Which is a sense verb?", ["taste", "run", "write"], 0, "taste للطعم/التذوق.", "sense verbs."),
    ],
  },

  "present-perfect-tense": {
    categoryId: "unit-8-perfect-modals-articles",
    title_en: "Present perfect",
    title_ar: "المضارع التام",
    keywords: ["present perfect", "have has", "past participle", "v3", "already", "yet"],
    explanation_ar:
      "المضارع التام يربط الماضي بالحاضر: have/has + التصريف الثالث (V3). للتجربة، النتيجة الآن، أو حدث قبل قليل بدون وقت محدد في الجملة.",
    rule_en:
      "Subject + have/has + past participle. Negative: have/has + not + V3. Question: Have/Has + subject + V3?",
    table: {
      headers: ["Form", "Example"],
      rows: [
        ["Affirmative", "He has completed the mission."],
        ["Negative", "He has not completed the mission."],
        ["Question", "Has he completed the mission?"],
      ],
    },
    examples: [
      { en: "I have finished my homework.", ar: "أنهيت واجبي." },
      { en: "She hasn't called yet.", ar: "لم تتصل بعد." },
      { en: "Have you ever been to Cairo?", ar: "هل زرت القاهرة من قبل؟" },
    ],
    notes_ar: "التصريف الثالث: regular worked؛ irregular gone، seen…",
    mistakes_ar: "Has went بدل Has gone.",
    compare_ar: "انظر درس المقارنة مع الماضي البسيط.",
    quiz: [
      q("She ___ finished the report.", ["has", "have", "is"], 0, "she + has + V3.", "has + past participle."),
      q("They ___ not arrived yet.", ["have", "has", "did"], 0, "they + have.", "present perfect negative."),
      q("___ you seen this film?", ["Have", "Did", "Are"], 0, "Have you + V3?", "Have + subject."),
      q("He has ___ the keys.", ["lost", "lose", "losing"], 0, "lost = V3.", "past participle."),
      q("We have ___ here since 2020.", ["lived", "live", "living"], 0, "have lived.", "since + present perfect."),
      q("I ___ never tried sushi.", ["have", "has", "did"], 0, "I have never.", "never + present perfect."),
      q("___ she gone home?", ["Has", "Does", "Is"], 0, "Has she + gone.", "Has + subject + V3."),
      q("They have ___ the match.", ["watched", "watch", "watching"], 0, "have watched.", "V3."),
      q("Present perfect uses ___ + past participle.", ["have/has", "did", "was"], 0, "have/has.", "structure."),
      q("Which is correct?", ["I have seen it", "I seen it", "I have see it"], 0, "have + seen.", "have + V3."),
    ],
  },

  "past-simple-vs-present-perfect": {
    categoryId: "unit-8-perfect-modals-articles",
    title_en: "Past simple vs present perfect",
    title_ar: "الماضي البسيط مقابل المضارع التام",
    keywords: ["past simple", "present perfect", "finished time", "experience", "yet"],
    explanation_ar:
      "الماضي البسيط مع وقت منتهٍ أو محدد (yesterday، in 2007، from … to …). المضارع التام مع زمن غير محدد أو مدّة تمتد للحاضر (since، ever، already) أو للخبرة العامة.",
    rule_en:
      "Past simple: definite finished time. Present perfect: connection to now, experience, unfinished time period.",
    table: {
      headers: ["Past simple", "Present perfect"],
      rows: [
        ["We lived in Japan from 1995 to 1998.", "I've worked here since 2011."],
        ["I saw the tower in 2007.", "I have seen the tower."],
        ["Then he watched the movie.", "She has watched this movie three times."],
      ],
    },
    examples: [
      { en: "I met him yesterday. (specific past)", ar: "قابلته أمس." },
      { en: "I have met him before. (experience, no exact time)", ar: "قابلته من قبل." },
    ],
    notes_ar: "إذا ذُكر yesterday غالبًا past simple.",
    mistakes_ar: "I have seen him yesterday خطأ شائع.",
    compare_ar: "انظر علامات الزمن في الجملة.",
    quiz: [
      q("I ___ to Paris in 2019.", ["went", "have gone", "have been"], 0, "سنة محددة → past simple.", "past simple + date."),
      q("I ___ Paris twice. (no exact dates)", ["have visited", "visited", "visit"], 0, "خبرة بعدد مرات غير محدد الزمن.", "present perfect."),
      q("She ___ that film last night.", ["watched", "has watched", "has watch"], 0, "last night = ماضٍ محدد.", "past simple."),
      q("___ you ever eaten sushi?", ["Have", "Did", "Were"], 0, "ever → present perfect غالبًا.", "Have you ever."),
      q("They lived there ___ 2005 to 2008.", ["from", "since", "for"], 0, "from … to … مدة منتهية.", "past period."),
      q("He ___ here since Monday. (still relevant)", ["has been", "was", "is"], 0, "since → present perfect.", "since + present perfect."),
      q("Which needs past simple?", ["I saw it yesterday", "I have seen it"], 0, "yesterday.", "finished time marker."),
      q("Which expresses experience without a time?", ["I have tried it", "I tried it yesterday"], 0, "have tried بدون وقت.", "indefinite past."),
      q("We ___ the homework. It's done now.", ["have finished", "finished", "finish"], 0, "نتيجة الآن.", "present perfect result."),
      q("___ did you leave? — At 5 pm.", ["When", "How long", "How often"], 0, "وقت محدد في الإجابة.", "When + past simple."),
    ],
  },

  "have-to-dont-have-to": {
    categoryId: "unit-8-perfect-modals-articles",
    title_en: "Have to / don't have to",
    title_ar: "Have to و Don't have to",
    keywords: ["have to", "must", "obligation", "don't have to", "necessary"],
    explanation_ar:
      "have to يعبّر عن التزام أو قاعدة (مثل الزي المدرسي). don't / doesn't have to يعني أن الشيء غير ضروري — ليس ممنوعًا بالضرورة بل غير لازم.",
    rule_en:
      "have/has to + base verb (obligation). don't/doesn't have to + base (no obligation). Past: didn't have to.",
    table: {
      headers: ["Meaning", "Structure"],
      rows: [
        ["rule / necessity", "You have to wear a uniform."],
        ["not necessary", "You don't have to come on Sundays."],
      ],
    },
    examples: [
      { en: "He has to see the doctor.", ar: "يجب أن يزور الطبيب." },
      { en: "We don't have to buy eggs.", ar: "لسنا مضطرين لشراء بيض." },
    ],
    notes_ar: "must أقوى إحساسًا أحيانًا؛ have to خارجي (قانون/قاعدة).",
    mistakes_ar: "mustn't مقابل don't have to — معانٍ مختلفة.",
    compare_ar: "don't have to ≠ mustn't.",
    quiz: [
      q("You ___ drive slower than the speed limit.", ["have to", "don't have to", "shouldn't to"], 0, "قانون طريق.", "have to."),
      q("She ___ wear a coat — it's optional.", ["doesn't have to", "has to", "must"], 0, "اختياري = لا إلزام.", "doesn't have to."),
      q("He ___ to finish tonight? (question)", ["Does he have", "Has he", "Is he"], 0, "Does he have to.", "Does + have to."),
      q("They ___ clean the house every week.", ["have to", "don't have to", "having to"], 0, "التزام.", "have to."),
      q("We ___ pay — the event is free.", ["don't have to", "have to", "must"], 0, "مجاني → لا حاجة للدفع.", "don't have to."),
      q("My brother ___ drink milk before bed. (rule at home)", ["has to", "don't have to", "having"], 0, "has to للمفرد الثالث.", "has to."),
      q("___ you have to leave now?", ["Do", "Does", "Are"], 0, "Do you have to.", "Do you have to."),
      q("'Don't have to' means it is ___ .", ["not necessary", "forbidden", "obligatory"], 0, "غير لازم.", "no obligation."),
      q("You ___ work overtime — it wasn't compulsory.", ["didn't have to", "hadn't to", "mustn't"], 0, "لم يكن إلزامًا.", "didn't have to."),
      q("___ she have to wear a tie?", ["Does", "Has", "Is"], 0, "Does she have to.", "Does + have to."),
    ],
  },

  "should-shouldnt-advice": {
    categoryId: "unit-8-perfect-modals-articles",
    title_en: "Should / shouldn't (advice)",
    title_ar: "Should و Shouldn't — النصيحة",
    keywords: ["should", "shouldn't", "advice", "recommend"],
    explanation_ar:
      "should و shouldn't تُستخدمان لإبداء النصيحة أو الرأي في ما هو مناسب أو غير مناسب، وليس بالضرورة قانونًا.",
    rule_en:
      "should + base verb for advice. shouldn't + base for negative advice.",
    table: {
      headers: ["Example", "Meaning"],
      rows: [
        ["You look tired. You should rest.", "advice"],
        ["You shouldn't skip meals.", "warning / moral opinion"],
      ],
    },
    examples: [
      { en: "You should go to bed early.", ar: "ينبغي أن تنام مبكرًا." },
      { en: "You shouldn't eat too much sugar.", ar: "لا ينبغي أن تأكل سكرًا كثيرًا." },
    ],
    notes_ar: "Should I…؟ لطلب نصيحة.",
    mistakes_ar: "should to go بدل should go.",
    compare_ar: "must أقوى من should.",
    quiz: [
      q("You look ill. You ___ see a doctor.", ["should", "must to", "have"], 0, "نصيحة.", "should + base."),
      q("Students ___ cheat in exams.", ["shouldn't", "should", "don't"], 0, "لا ينبغي الغش.", "shouldn't."),
      q("___ I call him now?", ["Should", "Do", "Must"], 0, "Should I…?", "asking advice."),
      q("She ___ waste water.", ["shouldn't", "shouldn't to", "not should"], 0, "shouldn't + verb.", "shouldn't."),
      q("We ___ arrive on time; it's polite.", ["should", "must to", "having to"], 0, "نصيحة أخلاقية.", "should."),
      q("___ you eat more vegetables?", ["Should", "Must", "Have"], 0, "Should you…?", "should question."),
      q("He ___ stay up all night before an exam.", ["shouldn't", "should", "must"], 0, "نصيحة سلبية.", "shouldn't."),
      q("Should takes the ___ form of the verb.", ["base", "past", "ing"], 0, "مصدر بدون to.", "should + base."),
      q("Advice about what is right or wrong often uses ___ .", ["should", "have to", "will"], 0, "should.", "advice."),
      q("You ___ apologize if you were rude.", ["should", "don't have to", "can't"], 0, "من اللائق الاعتذار.", "should."),
    ],
  },

  "will-future-tense": {
    categoryId: "unit-8-perfect-modals-articles",
    title_en: "Will / won't (future)",
    title_ar: "Will و Won't للمستقبل",
    keywords: ["will", "won't", "future", "I'll", "prediction"],
    explanation_ar:
      "will + مصدر للتنبؤ أو قرار لحظي أو مستقبل عام. النفي will not أو won't. السؤال: هل يقدّم Will قبل الفاعل؟ الإجابات القصيرة Yes, I will / No, I won't.",
    rule_en:
      "Subject + will + base verb. Negative: won't / will not + base. Question: Will + subject + base? Contractions: I'll, you'll, he'll, we'll, they'll.",
    table: {
      headers: ["Form", "Example"],
      rows: [
        ["+", "She will arrive on time."],
        ["−", "She won't arrive on time."],
        ["?", "Will she arrive on time?"],
      ],
    },
    examples: [
      { en: "I'll call you tomorrow.", ar: "سأتصل بك غدًا." },
      { en: "Will you help me?", ar: "هل ستساعدني؟" },
      { en: "They won't be late.", ar: "لن يتأخروا." },
    ],
    notes_ar: "will غالبًا للتنبؤ؛ going to للخطة المقررة أحيانًا.",
    mistakes_ar: "will goes بدل will go.",
    compare_ar: "انظر going to في الدرس الآخر.",
    quiz: [
      q("I ___ be ready in five minutes.", ["will", "will to", "wills"], 0, "will + base.", "will + base."),
      q("___ you tell us the truth?", ["Will", "Do", "Are"], 0, "Will you…?", "question will."),
      q("She ___ arrive on time.", ["won't", "willn't", "don't"], 0, "won't = will not.", "won't."),
      q("Yes, I ___ .", ["will", "won't", "do"], 0, "short answer positive.", "Yes, I will."),
      q("No, he ___ .", ["won't", "willn't", "isn't"], 0, "No, he won't.", "short negative."),
      q("___ will he visit us?", ["When", "Where", "Will"], 0, "When will he…?", "WH + will."),
      q("They ___ help you soon.", ["will", "are will", "willing"], 0, "they will.", "future."),
      q("The contraction of 'I will' is ___ .", ["I'll", "Im", "I willn't"], 0, "I'll.", "contractions."),
      q("He ___ visit us on Friday. (statement)", ["will", "wills", "is will"], 0, "will visit.", "will."),
      q("___ see you later. (we)", ["We'll", "We willn't", "We"], 0, "اختصار we will.", "We'll."),
    ],
  },

  "articles-definite-zero": {
    categoryId: "unit-8-perfect-modals-articles",
    title_en: "Articles: the & zero article",
    title_ar: "أدوات التعريف the والصفر",
    keywords: ["the", "zero article", "definite", "uncountable", "proper noun"],
    explanation_ar:
      "the عندما يكون المعروف للمتكلم والمخاطب أو للشيء الوحيد (the sun). لا أداة تعريف مع العموم في الجمع أو غير المعدود للمعنى العام، ومع أسماء بلدان/مدن كثيرة، وأشخاص عاديين عند التعميم.",
    rule_en:
      "Use the for shared knowledge / unique things / rivers & ranges as per course rules. Zero article: general plurals/uncountable ideas; many country/city names (see your syllabus).",
    table: {
      headers: ["Use the", "Often zero article"],
      rows: [
        ["second mention / unique", "the lamp we mentioned"],
        ["unique natural bodies", "the moon (often)"],
        ["general truth", "Religion is important (not *the religion)"],
        ["many countries/cities", "Jeddah, Vietnam"],
      ],
    },
    examples: [
      { en: "There is a lamp… The lamp is next to the desk.", ar: "ذكر ثانٍ → the." },
      { en: "Religion is an important issue.", ar: "عموم معنوي بدون the." },
      { en: "I have read Romeo and Juliet.", ar: "عنوان دون the إلا إذا جزء من النص." },
    ],
    notes_ar: "أسماء الأنهار والبحار غالبًا the؛ استثناءات كثيرة حسب القائمة المقررة.",
    mistakes_ar: "the students عمومًا كصف ثانٍ؛ the life بدون تعيين خطأ شائع.",
    compare_ar: "a/an أول ذكر لمفرد معدود.",
    quiz: [
      q("___ sun rises in the east.", ["The", "A", "—"], 0, "شمس وحيدة في سياقنا.", "unique → the."),
      q("___ religion is important. (general idea — wrong with 'the')", ["— / no article", "The", "A"], 0, "عموم دين كمفهوم.", "zero article general."),
      q("Pass me ___ book on the table.", ["the", "a", "—"], 0, "معروف أي كتاب.", "the specific."),
      q("She lives in ___ .", ["Jeddah", "the Jeddah", "a Jeddah"], 0, "مدينة بدون the غالبًا.", "city name."),
      q("We studied ___ water cycle in class.", ["the", "a", "—"], 0, "مفهوم محدد في المنهج.", "the for defined topic."),
      q("___ Mississippi River is long.", ["The", "A", "—"], 0, "أنهار مع the غالبًا.", "river names."),
      q("I need ___ advice.", ["— / some", "an", "the"], 0, "advice غير معدود عام.", "uncountable zero/some."),
      q("He's ___ university student.", ["a", "an", "the"], 0, "a قبل صوت ساكن university /juː/.", "a university."),
      q("Zero article is common with ___ when meaning 'in general'.", ["plural count nouns / uncountables", "only singular", "always names"], 0, "عموم الجمع والغير المعدود.", "general meaning."),
      q("Which usually takes 'the'?", ["the only moon we mean from context", "cats in general", "French food in general"], 0, "when uniquely identified.", "the for unique/specific."),
    ],
  },
};
