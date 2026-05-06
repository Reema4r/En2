مجلد quiz_audit (يُحدَّث تلقائياً عبر: node tools/grammar_audit.mjs)

- summary.json — عدد الأسئلة لكل تصنيف وإجمالي الأسئلة في القواعد.
- by_unit.json — كل أسئلة الاختبار مجمّعة حسب وحدة GRAMMAR_DATA.
- not_under_units_1_to_8.json — أسئلة الدروس التي لا تدخل ضمن وحدات 1–8 (حالياً درس الأفعال الشاذة المستقل فقط).
- duplicate_question_en.json — صياغة إنجليزية متطابقة تقريباً بين درسين (يُراجع يدوياً).
- review_structural_flags.json — مشاكل بنيوية (فهرس إجابة خاطئ، خيارات مكررة حرفياً).
- self_test_merge.template.json — قالب لدمج ملف اختبار ذاتي خارجي (إنجليزي جديد + عربي من الموقع).

بعد تعديل دروس القواعد أعد تشغيل السكربت ثم حدّث index.html إذا لزم لدمج JSON في الصفحة (أو انسخ يدوياً من quiz_audit إلى وسم script ذي id grammar-audit-*-json).

اختبار مدمج (بدون تكرار):
- شغّل: node tools/build_blended_quiz.mjs
- يُنشئ blended_unique_quiz.json (دمج أسئلة وحدات 1–8 + الوحدة المستقلة، وحذف نفس السؤال الإنجليزي المكرر).
- يُحقَن الملف في index.html كـ script#blended-unique-quiz-json — أو أعد حقن يدوي بعد التحديث.
- من القواعد: زر «اختبار مدمج (بدون تكرار)» أو الرابط #/grammar/blended-quiz
- اختياري: ضع quiz_audit/user_merged_periodic_self.json بصيغة {"items":[...]} لدمج أسئلة إضافية قبل إزالة التكرار.
