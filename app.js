// Hassan Ali — Strategic Facebook Page Audit Tool Logic
// Strategic Pillars & 15 Diagnostic Questions rooted in Hassan Ali's Framework
    const PILLARS = [
      {
        id: 'positioning',
        code: '01 / POSITIONING',
        title: 'التموضع والهوية البصرية وعرض القيمة',
        shortTitle: 'التموضع والهوية',
        subtitle: 'هل يفهم الزائر الجديد من تخدم، وما القيمة التي تقدمها، ولماذا يختارك خلال ثوانٍ؟',
        serviceKey: 'brand',
        questions: [
          {
            id: 'q1',
            title: 'وضوح عرض القيمة (Value Proposition) في الوصف (Bio) والغلاف',
            prompt: 'عندما يدخل عميل جديد إلى صفحتك لأول مرة، هل يستطيع فهم ما تقدمه ولمن وما الذي يميزك في جملة واحدة؟',
            options: [
              { score: 0, label: 'غير واضح', desc: 'الوصف فارغ أو يحتوي على عبارات عامة جداً دون توضيح طبيعة الخدمة أو الميزة التنافسية.', action: 'صياغة رسالة تموضع وعرض قيمة واضح في البايو والغلاف يحدد الجمهور والنتيجة الموعودة.' },
              { score: 1, label: 'يذكر النشاط فقط', desc: 'نذكر اسم المجال أو المنتجات فقط دون توضيح لماذا يجب على العميل اختيارنا بدلاً من المنافسين.', action: 'تحويل الوصف من مجرد سرد للمنتجات إلى عرض قيمة يبرز سبب الاختيار والاختلاف.' },
              { score: 2, label: 'واضح جزئياً', desc: 'الرسالة واضحة في الوصف ولكن صورة الغلاف والمنشور المثبت لا يدعمان نفس التموضع.', action: 'مواءمة الغلاف والمنشور المثبت مع وعد العلامة التجارية الأساسي.' },
              { score: 3, label: 'واضح ومترابط تماماً', desc: 'البايو والغلاف والمنشور المثبت يوضحون بدقة من نخدم، القيمة المقدمة، وسبب الثقة بنا.', action: 'الحفاظ على اتساق عرض القيمة وتحديث الغلاف مع كل حملة استراتيجية كبرى.' }
            ]
          },
          {
            id: 'q2',
            title: 'اتساق الهوية البصرية (Brand Visual Consistency)',
            prompt: 'هل تعكس صورة البروفايل، الغلاف، وتصميمات المنشورات هوية بصرية متماسكة يسهل التعرف عليها؟',
            options: [
              { score: 0, label: 'عشوائية بدون هوية', desc: 'التصميمات مختلفة في الألوان والخطوط في كل منشور ولا يوجد طابع بصري موحد للعلامة.', action: 'تأسيس دليل هوية بصرية واضح (ألوان، خطوط، ونمط تصميم موحد) لجميع منشورات الصفحة.' },
              { score: 1, label: 'توحيد بسيط غير مستمر', desc: 'نضع الشعار على الصور فقط، لكن الألوان والخطوط تتغير باستمرار حسب المصمم.', action: 'بناء قوالب تصميمية (Visual Templates) متسقة لكل ركن من أركان المحتوى.' },
              { score: 2, label: 'هوية جيدة بأخطاء بسيطة', desc: 'توجد ألوان وخطوط محددة في أغلب المنشورات، لكنها تحتاج إلى تطوير لتعكس قيمة أعلى.', action: 'رفع جودة الإخراج البصري وربط التصميم بشخصية العلامة التجارية ومستوى تسعيرها.' },
              { score: 3, label: 'هوية احترافية مميزة', desc: 'بمجرد رؤية المنشور في التايم لاين يتعرف العميل على علامتنا فوراً بفضل تماسك الألوان والخطوط.', action: 'توسيع تطبيق الهوية البصرية المتماسكة على الفيديوهات القصيرة (Reels) والإعلانات.' }
            ]
          },
          {
            id: 'q3',
            title: 'جاهزية نقاط التحويل وإشارات الثقة (CTA & Trust Signals)',
            prompt: 'هل زر الإجراء الأساسي (CTA Button)، بيانات الاتصال، والمنشور المثبت يوجهون الزائر لخطوة واضحة؟',
            options: [
              { score: 0, label: 'بيانات ناقصة أو قديمة', desc: 'بعض بيانات التواصل غير محدثة، ولا يوجد منشور مثبت أو زر إجراء واضح.', action: 'تحديث كافة بيانات الصفحة فوراً وتثبيت منشور تعريفي قوي ينتهي بدعوة واضحة للتواصل.' },
              { score: 1, label: 'موجودة بدون توجيه', desc: 'البيانات الأساسية موجودة، لكن لا يوجد منشور مثبت يشرح رحلة العميل أو كيفية الطلب.', action: 'تصميم منشور مثبت (Pinned Post) يلخص أهم الخدمات، قصص النجاح، وطريقة الطلب المباشرة.' },
              { score: 2, label: 'مكتملة وتحتاج تحسين', desc: 'البيانات والزر مفعّلون، لكن المنشور المثبت قديم أو لا يعكس أقوى عرض حالي لدينا.', action: 'ربط المنشور المثبت وزر الصفحة بالعرض الاستراتيجي الأهم للشركة هذا الربع.' },
              { score: 3, label: 'مُحسّنة بالكامل للتحويل', desc: 'كل زائر يجد بيانات مكتملة، زر تواصل مباشر، ومنشوراً مثبتاً يقوده بسلاسة لاتخاذ قرار.', action: 'اختبار رسائل الترحيب التلقائية لزيادة نسبة نقر الزوار على زر التواصل.' }
            ]
          }
        ]
      },
      {
        id: 'content',
        code: '02 / CONTENT STRATEGY',
        title: 'استراتيجية المحتوى واتجاه التواصل',
        shortTitle: 'استراتيجية المحتوى',
        subtitle: 'هل يبني المحتوى علامة تجارية ويقرب العميل من الشراء، أم يضيف منشورات متفرقة فقط؟',
        serviceKey: 'marketing',
        questions: [
          {
            id: 'q4',
            title: 'ارتباط المحتوى بأهداف العمل ومشاكل العميل (Brand vs. Activity)',
            prompt: 'على أي أساس يتم اختيار موضوعات المنشورات على صفحتك حالياً؟',
            options: [
              { score: 0, label: 'نشر عشوائي عند التفرغ', desc: 'ننشر ما يتاح أمامنا من صور منتجات أو عروض دون خطة أو هدف تسويقي محدد.', action: 'التوقف عن النشر العشوائي وتحديد الأهداف التجارية والرسائل الأساسية قبل كتابة أي منشور.' },
              { score: 1, label: 'تركيز بيعي مباشر فقط', desc: 'أغلب المنشورات عبارة عن «اشترِ الآن» ومواصفات المنتج دون معالجة مخاوف العميل أو بناء ثقة.', action: 'إعادة توازن المحتوى ليخاطب احتياجات العميل وعوائق الشراء وليس فقط مواصفات المنتج.' },
              { score: 2, label: 'محتوى متنوع لكن غير مترابط', desc: 'ننشر نصائح وعروضاً جيدة، لكن لا يوجد خيط استراتيجي يربط المحتوى برحلة اتخاذ القرار.', action: 'ربط كل منشور بمرحلة محددة في رحلة العميل (الوعي بالمشكلة ← فهم الحل ← اختيار علامتنا).' },
              { score: 3, label: 'محتوى استراتيجي موجه للنتائج', desc: 'كل قطعة محتوى تخدم تموضع العلامة، تجيب عن أسئلة العميل الحقيقية، وتمهد للبيع بذكاء.', action: 'تحليل أعلى المنشورات تحويلاً للعملاء وتحويلها إلى سلاسل محتوى وحملات إعلانية.' }
            ]
          },
          {
            id: 'q5',
            title: 'تنوع أركان وقوالب المحتوى (Content Pillars & Reels/Video)',
            prompt: 'إلى أي مدى تتنوع أشكال المحتوى بين تعليمي، دراسات حالة/آراء عملاء، عروض، وفيديوهات قصيرة (Reels)؟',
            options: [
              { score: 0, label: 'قالب واحد مكرر', desc: 'نعتمد على صور ثابتة متشابهة فقط دون استخدام الفيديوهات أو قصص نجاح العملاء.', action: 'إدخال أركان محتوى جديدة تشمل إثبات الكفاءة (Social Proof) والفيديوهات القصيرة (Reels).' },
              { score: 1, label: 'تنوع محدود', desc: 'ننشر صوراً وبعض النصوص، ونادراً ما نشارك فيديوهات أو تجارب عملاء حقيقية.', action: 'تخصيص 30% من الخطة لدراسات الحالة وآراء العملاء و30% للفيديوهات التوضيحية القصيرة.' },
              { score: 2, label: 'تنوع جيد بدون إثبات كافٍ', desc: 'نستخدم الصور والـ Reels، لكننا نحتاج إلى إبراز نتائج العملاء ودراسات الحالة بشكل أقوى.', action: 'توثيق نتائج العملاء والعمل السابق في منشورات (قبل/بعد أو التحدي/النتيجة) لتعزيز الثقة.' },
              { score: 3, label: 'منظومة محتوى متكاملة', desc: 'توازن مدروس بين المحتوى القيمي، الفيديوهات، إثبات الكفاءة، والعروض التسويقية.', action: 'إعادة تدوير المحتوى الأعلى أداءً عبر صيغ متعددة لتعظيم الوصول العضوي والإعلاني.' }
            ]
          },
          {
            id: 'q6',
            title: 'الانتظام والتخطيط المسبق (Editorial Calendar)',
            prompt: 'هل تلتزم الصفحة بجدول نشر منتظم ومخطط مسبقاً؟',
            options: [
              { score: 0, label: 'انقطاع طويل وغير منتظم', desc: 'قد تمر أسابيع دون نشر ثم ننشر عدة منشورات في يوم واحد.', action: 'وضع جدول نشر واقعي وثابت (حتى لو 3 مرات أسبوعياً) لضمان استمرارية الحضور الذهني.' },
              { score: 1, label: 'نشر أسبوعي بدون خطة مسبقة', desc: 'نحاول النشر كل فترة، لكن يتم تحضير المنشور في نفس اليوم دون تخطيط شهري.', action: 'بناء خطة محتوى شهرية (Content Calendar) مسبقة مرتبطة بمواسم السوق وأولويات البيع.' },
              { score: 2, label: 'خطة نصف شهرية', desc: 'نخطط المحتوى لعدة أيام قادمة ونلتزم بالنشر في أغلب الأوقات.', action: 'تطوير التخطيط ليكون شهرياً وربع سنوي بحيث تتكامل المنشورات مع الحملات الترويجية.' },
              { score: 3, label: 'التزام كامل بخطة استراتيجية', desc: 'لدينا خطة محتوى شهرية واضحة ومعتمدة مسبقاً تربط المواسم بالعروض والرسائل.', action: 'مراجعة أداء الخطة شهرياً لتحديث أوقات النشر والموضوعات الأعلى تفاعلاً.' }
            ]
          }
        ]
      },
      {
        id: 'community',
        code: '03 / AUDIENCE & COMMUNITY',
        title: 'فهم الجمهور والتفاعل وبناء الثقة',
        shortTitle: 'الجمهور والتفاعل',
        subtitle: 'هل تصل إلى العميل الأنسب وتبني معه علاقة ثقة تدفعه للشراء والترشيح؟',
        serviceKey: 'brand',
        questions: [
          {
            id: 'q7',
            title: 'تطابق المتابعين مع العميل الأنسب (Ideal Customer Fit)',
            prompt: 'هل المتابعون الحاليون لصفحتك يمثلون الشريحة القادرة والمهتمة فعلياً بالشراء منك؟',
            options: [
              { score: 0, label: 'جمهور غير مستهدف', desc: 'أغلب المتابعين جاءوا من مسابقات أو إعلانات عامة أو شراء متابعين ولا يشترون.', action: 'إجراء تحليل للسوق وتقسيم العملاء (Customer Segmentation) وتوجيه المحتوى والإعلانات للشريحة المربحة.' },
              { score: 1, label: 'تطابق ضعيف', desc: 'يوجد متابعون كثر ولكن معظمهم يبحث عن أسعار رخيصة جداً لا تناسب قيمة ما نقدمه.', action: 'تعديل نبرة الخطاب ومستوى الرسائل التسويقية لجذب الفئة التي تقدر الجودة والقيمة.' },
              { score: 2, label: 'تطابق متوسط إلى جيد', desc: 'جزء جيد من الجمهور مناسب، لكننا نحتاج للوصول إلى شرائح أكثر قدرة على الشراء.', action: 'بناء رسائل مخصصة لكل شريحة عملاء (Personas) واستهدافهم بحملات دقيقة.' },
              { score: 3, label: 'جمهور نوعي ومستهدف بدقة', desc: 'متابعو الصفحة هم فعلاً صناع القرار والعملاء المستهدفون في سوقنا.', action: 'الاستفادة من بيانات المتابعين لبناء جماهير مشابهة (Lookalike Audiences) للتوسع.' }
            ]
          },
          {
            id: 'q8',
            title: 'جودة التفاعل العضوي (Quality of Engagement)',
            prompt: 'كيف يبدو شكل التفاعل على منشورات الصفحة؟',
            options: [
              { score: 0, label: 'شبه منعدم', desc: 'المنشورات تحصل على إعجابات قليلة جداً ولا توجد تعليقات أو مشاركات حقيقية.', action: 'صياغة مقدمات (Hooks) تلامس المشاكل اليومية للعميل وتدعوه للمشاركة والرد.' },
              { score: 1, label: 'إعجابات سطحية فقط', desc: 'نحصل على بعض الإعجابات، لكن نادراً ما يسأل أحد عن التفاصيل أو يشارك المحتوى.', action: 'دمج أسئلة تشخيصية ودعوات تفاعلية واضحة في نهاية كل منشور لتحفيز المحادثات.' },
              { score: 2, label: 'استفسارات على العروض فقط', desc: 'التفاعل يظهر فقط عند نشر خصومات أو إعلانات ممولة، ويقل في المحتوى العادي.', action: 'تطوير محتوى قصصي وتطبيقي يرفع التفاعل الطبيعي حتى بدون إعلانات.' },
              { score: 3, label: 'نقاشات، استفسارات ومشاركات مستمرة', desc: 'الجمهور يتفاعل، يحفظ المنشورات، يطرح أسئلة شرائية، ويشارك المحتوى مع غيره.', action: 'تحويل الأسئلة المتكررة في التعليقات إلى محتوى جديد وعروض مخصصة.' }
            ]
          },
          {
            id: 'q9',
            title: 'إدارة التعليقات وبناء الثقة العلنية (Community Management)',
            prompt: 'كيف تتعامل الصفحة مع التعليقات (الإيجابية، الاستفسارات، أو الشكاوى) أمام الزوار؟',
            options: [
              { score: 0, label: 'تأخر أو تجاهل للتعليقات', desc: 'كثير من التعليقات تظل بدون رد لفترات طويلة مما يضعف ثقة الزائر الجديد.', action: 'تخصيص مسؤول ومواعيد محددة للرد الاحترافي السريع على جميع التعليقات.' },
              { score: 1, label: 'ردود آلية مكررة («تم الرد خاص»)', desc: 'نكتفي بكتابة «تم الرد في الرسائل» على كل التعليقات دون تقديم إجابة مفيدة علناً.', action: 'كتابة ردود علنية ودودة ومفيدة تعكس خبرة العلامة قبل توجيه العميل للرسائل الخاصة.' },
              { score: 2, label: 'ردود جيدة لكن غير منتظمة', desc: 'نرد بشكل لطيف، لكن أحياناً نتأخر أو لا نستثمر التعليقات الإيجابية لإبراز الثقة.', action: 'وضع دليل لنبرة الصوت (Tone of Voice) للرد على الاستفسارات والاعتراضات باحترافية.' },
              { score: 3, label: 'إدارة مجتمع احترافية تبني الثقة', desc: 'نرد بسرعة ولباقة، نوضح القيمة علناً، ونتعامل مع أي ملاحظة بشفافية تزيد المصداقية.', action: 'توثيق أبرز تعليقات الإشادة وتحويلها إلى منشورات Social Proof دورية.' }
            ]
          }
        ]
      },
      {
        id: 'campaigns',
        code: '04 / CAMPAIGNS & FUNNEL',
        title: 'الحملات الإعلانية وتطوير العروض',
        shortTitle: 'الحملات والعروض',
        subtitle: 'هل تمتلك عروضاً قوية وحملات مبنية على رحلة العميل أم تعتمد على ترويج عشوائي؟',
        serviceKey: 'growth',
        questions: [
          {
            id: 'q10',
            title: 'قوة وتنافسية العروض التسويقية (Offer Architecture)',
            prompt: 'ما مدى جاذبية ووضوح العروض التي تقدمها الصفحة لدفع العميل للشراء الآن؟',
            options: [
              { score: 0, label: 'لا توجد عروض مصممة', desc: 'نعرض المنتجات أو الخدمات بشكل تقليدي دون باقات، ضمانات، أو حافز واضح للشراء.', action: 'تطوير عروض قيمة (Value Offers) تقلل مخاطرة الشراء وتبرز العائد الذي يحصل عليه العميل.' },
              { score: 1, label: 'حرق أسعار وخصومات فقط', desc: 'طريقتنا الوحيدة لجذب العملاء هي خفض السعر مما يقلل هامش الربح ويضعف صورة العلامة.', action: 'استبدال الخصومات العشوائية بباقات قيمة مضافة (Bundles / Bonuses) تحمي الربحية.' },
              { score: 2, label: 'عروض جيدة تحتاج صياغة أقوى', desc: 'لدينا خدمات ممتازة، لكن طريقة تقديم العرض لا تبرز القيمة الكاملة مقارنة بالسعر.', action: 'إعادة صياغة العرض التسويقي ليركز على النتيجة النهائية للعميل وإزالة عوائق القرار.' },
              { score: 3, label: 'عروض استراتيجية لا تُقاوم', desc: 'عروضنا مصممة بذكاء، واضحة القيمة، ومرتبطة باحتياج العميل الفعلي مع محفزات قرار قوية.', action: 'اختبار زوايا إعلانية متعددة (Ad Angles) لنفس العرض للوصول إلى شرائح أوسع.' }
            ]
          },
          {
            id: 'q11',
            title: 'هيكلة الحملات الإعلانية الممولة (Campaign Funnel Structure)',
            prompt: 'كيف تخطط وتدير الإعلانات الممولة لصفحتك على فيسبوك؟',
            options: [
              { score: 0, label: 'بدون إعلانات أو Boost عشوائي', desc: 'لا نعلن بانتظام، أو نضغط زر ترويج المنشور (Boost Post) دون إعدادات استهداف دقيقة.', action: 'إيقاف الترويج العشوائي وبناء حملات منظمة عبر مدير الإعلانات (Ads Manager) بأهداف واضحة.' },
              { score: 1, label: 'حملة واحدة للجمهور البارد فقط', desc: 'نشغل إعلانات رسائل مباشرة للجمهور الجديد فقط دون إعادة استهداف من تفاعل معنا.', action: 'بناء مسار إعلاني (Funnel) يشمل حملات إعادة استهداف (Retargeting) للمتفاعلين ومشاهدي الفيديو.' },
              { score: 2, label: 'حملات منتظمة بدون تنويع إبداعي', desc: 'نستخدم مدير الإعلانات، لكن نعتمد على إعلان واحد أو اثنين لفترات طويلة حتى يقل الأداء.', action: 'تطوير منظومة اختبار إعلانات (Creative Testing) تشمل زوايا بيعية وفيديوهات متعددة.' },
              { score: 3, label: 'نظام حملات متكامل (Full-Funnel)', desc: 'ندير حملات جذب، إقناع، وإعادة استهداف مترابطة مع اختبار مستمر للرسائل والجمهور.', action: 'التوسع المدروس في الميزانية الإعلانية (Scaling) مع الحفاظ على تكلفة اكتساب العميل.' }
            ]
          },
          {
            id: 'q12',
            title: 'ترابط الرسالة بين الإعلان وتجربة العميل (Message Match)',
            prompt: 'عندما يضغط العميل على إعلانك أو منشورك، هل يجد تجربة متوافقة ومكملة لنفس الوعد؟',
            options: [
              { score: 0, label: 'فجوة كبيرة وتشتيت للعميل', desc: 'العميل يضغط على الإعلان فلا يجد تفاصيل واضحة أو يضطر لشرح طلبه من الصفر في الرسائل.', action: 'ربط كل إعلان برسالة ترحيب مخصصة أو صفحة هبوط تكمل نفس العرض المذكور في الإعلان.' },
              { score: 1, label: 'ترابط ضعيف', desc: 'الإعلان يتحدث عن عرض معين، بينما الصفحة أو الرد التلقائي يتحدث بشكل عام عن الشركة.', action: 'توحيد الرسالة والأسئلة التلقائية داخل الماسنجر لتتطابق مع كل حملة إعلانية.' },
              { score: 2, label: 'ترابط جيد في أغلب الحملات', desc: 'العميل يفهم العرض عند التواصل، لكن خطوات إتمام الطلب تحتاج إلى تبسيط أكثر.', action: 'تقليل عدد الخطوات المطلوبة من العميل بين النقر على الإعلان وإتمام الطلب أو الحجز.' },
              { score: 3, label: 'رحلة عميل سلسة ومترابطة 100%', desc: 'من لحظة رؤية الإعلان وحتى التحدث مع المبيعات، يشعر العميل بتجربة متسقة وسريعة.', action: 'تتبع معدل التسرب في كل خطوة من الرحلة لتحسين نسبة التحويل الكلية.' }
            ]
          }
        ]
      },
      {
        id: 'conversion',
        code: '05 / CONVERSION & MEASUREMENT',
        title: 'تحويل الرسائل إلى مبيعات والقياس والتحسين',
        shortTitle: 'التحويل والقياس',
        subtitle: 'هل تتحول الرسائل والاستفسارات إلى مبيعات حقيقية وهل تقيس الأثر التجاري بدقة؟',
        serviceKey: 'consulting',
        questions: [
          {
            id: 'q13',
            title: 'سرعة واحترافية البيع عبر الرسائل (Inbox Sales Process)',
            prompt: 'كيف يتم التعامل مع الرسائل الواردة (مثل: «بكام؟» أو «تفاصيل؟») داخل صندوق رسائل الصفحة؟',
            options: [
              { score: 0, label: 'رد متأخر ومختصر بالسعر فقط', desc: 'نرد بعد ساعات بذكر السعر فقط، وغالباً يختفي العميل بعدها دون شراء.', action: 'وضع سيناريو مبيعات (Sales Script) يبدأ بفهم احتياج العميل وتوضيح القيمة قبل طرح السعر.' },
              { score: 1, label: 'رد سريع لكن بدون منهجية بيع', desc: 'نرد بسرعة، لكن المحادثة تنتهي عند إرسال قائمة الأسعار دون قيادة العميل للخطوة التالية.', action: 'تدريب مسؤول الرسائل على طرح أسئلة تأهيلية وإنهاء كل محادثة بدعوة واضحة لإتمام الطلب.' },
              { score: 2, label: 'منهجية جيدة وتحتاج أتمتة', desc: 'فريقنا يرد بشكل جيد، لكن الضغط الكبير يسبب تأخراً أحياناً في أوقات الذروة.', action: 'تفعيل الردود التلقائية الذكية وتصنيف المحادثات لضمان سرعة الاستجابة في أول 5 دقائق.' },
              { score: 3, label: 'نظام مبيعات محترف وعالي التحويل', desc: 'استجابة فورية، أسئلة لتشخيص احتياج العميل، عرض قيمة مقنع، وإغلاق بيعي احترافي.', action: 'تحليل أسباب عدم الشراء في المحادثات لتطوير ردود جاهزة على الاعتراضات الشائعة.' }
            ]
          },
          {
            id: 'q14',
            title: 'متابعة العملاء المحتملين وإعادة التواصل (Lead Nurturing & CRM)',
            prompt: 'ماذا يحدث للعملاء الذين تواصلوا مع الصفحة وسألوا عن الخدمة لكنهم لم يشتروا فوراً؟',
            options: [
              { score: 0, label: 'تُترك المحادثات وتضيع الفرص', desc: 'لا نسجل بياناتهم ولا نعاود التواصل معهم أبداً بعد انتهاء المحادثة الأولى.', action: 'بناء سجل للعملاء المحتملين (CRM / Sheet) وتطبيق نظام متابعة (Follow-up) بعد 48 ساعة.' },
              { score: 1, label: 'متابعة عشوائية غير منتظمة', desc: 'نتذكر بعض العملاء أحياناً فنراسلهم، لكن لا يوجد نظام لتصنيف المهتمين ومتابعتهم.', action: 'استخدام تصنيفات الرسائل (Labels) في Meta Business Suite لفرز المهتمين ومتابعتهم بانتظام.' },
              { score: 2, label: 'تسجيل البيانات بدون خطة إعادة تنشيط', desc: 'نحتفظ بأرقام وبيانات المهتمين، لكن نادراً ما نرسل لهم عروضاً مخصصة لإغلاق البيع.', action: 'تصميم حملات إعادة تنشيط وعروض خاصة للعملاء الذين استفسروا خلال آخر 30–60 يوماً.' },
              { score: 3, label: 'نظام متابعة وتصنيف متكامل', desc: 'كل عميل محتمل يتم تصنيفه ومتابعته بشكل منهجي عبر الرسائل أو الواتساب حتى إتمام البيع.', action: 'قياس نسبة المبيعات العائدة من المتابعة (Follow-up Revenue) وتعظيم القيمة الدائمة للعميل.' }
            ]
          },
          {
            id: 'q15',
            title: 'قياس الأثر التجاري ومؤشرات الأداء (Impact vs. Vanity Metrics)',
            prompt: 'ما هي الأرقام التي تتابعها لتقييم نجاح صفحتك على فيسبوك؟',
            options: [
              { score: 0, label: 'لا نتابع أرقاماً واضحة', desc: 'نعمل بالانطباع العام دون مراجعة تقارير الأداء أو معرفة تكلفة الحصول على عميل.', action: 'تحديد 3–5 مؤشرات أداء رئيسية (KPIs) مرتبطة بالمبيعات ومراجعتها أسبوعياً وشهرياً.' },
              { score: 1, label: 'نتابع الإعجابات والمشاهدات فقط', desc: 'نركز على عدد اللايكات والمتابعين دون ربطها بعدد العملاء الفعليين أو الإيرادات.', action: 'الانتقال من قياس النشاط (Vanity Metrics) إلى قياس الأثر (تكلفة الرسالة المؤهلة ومعدل الإغلاق).' },
              { score: 2, label: 'نحسب تكلفة الإعلان والرسائل فقط', desc: 'نعرف كم صرفنا وكم رسالة وصلت، لكن لا نربط ذلك بدقة بصافي المبيعات والربحية.', action: 'ربط تقارير التسويق ببيانات المبيعات الفعلية لحساب العائد على الإنفاق الإعلاني (ROAS / ROI).' },
              { score: 3, label: 'قياس شامل للأثر والعائد التجاري', desc: 'نتابع رحلة العميل رقمياً من الانطباع الأول وحتى تكلفة الاكتساب وصافي المبيعات المحققة.', action: 'استخدام البيانات الشهرية لتحسين توزيع الميزانية على القنوات والعروض الأعلى ربحية.' }
            ]
          }
        ]
      }
    ];

    // Services Catalog from Hassan Ali's Portfolio (Section 10 / SERVICES)
    const SERVICES_CATALOG = {
      consulting: {
        code: '01 / CONSULTING — استشارات التسويق الاستراتيجي',
        name: 'جلسة تشخيص واستشارات التسويق الاستراتيجي وبناء نظام النمو',
        headline: 'صفحتك لا تحتاج إلى مزيد من المنشورات المتفرقة؛ بل تحتاج إلى تشخيص استراتيجي وخارطة طريق تربط التسويق بالمبيعات.',
        description: 'بناءً على نتائج فحص صفحتك، هناك فجوات في ربط الأنشطة التسويقية بالنتيجة التجارية النهائية (التحويل والقياس). من خلال استشارات التسويق الاستراتيجي، نعيد بناء النظام التسويقي ليبدأ من أهداف عملك وينتهي بمبيعات قابلة للقياس.',
        bullets: [
          'تشخيص شامل للوضع التسويقي وتحديد الفجوات والعوائق البيعية',
          'تحليل السوق والمنافسين وتحديد فرص النمو الأسرع تحقيقاً للعائد',
          'تصميم نظام متكامل يربط المحتوى والإعلانات بعملية البيع في الرسائل',
          'وضع خارطة طريق تنفيذية ومؤشرات أداء (KPIs) واضحة للفريق'
        ]
      },
      brand: {
        code: '02 / BRAND — استراتيجية العلامة التجارية والتموضع',
        name: 'تطوير استراتيجية العلامة التجارية، التموضع، وعرض القيمة',
        headline: 'التحدي الأول في صفحتك هو وضوح التموضع وعرض القيمة: العميل يحتاج أن يفهم فوراً لماذا يختارك أنت وليس منافسك.',
        description: 'أظهرت نتائج التقييم أن صفحتك بحاجة إلى تقوية الهوية والتموضع ورسائل القيمة قبل ضخ ميزانيات إعلانية أكبر. عندما يتضح التموضع وتتماسك الهوية، ترتفع ثقة العميل وتنخفض تكلفة إقناعه بالشراء.',
        bullets: [
          'تحديد الجمهور المستهدف الأنسب وتقسيم شرائح العملاء بدقة',
          'صياغة عرض القيمة (Value Proposition) ورسائل العلامة الأساسية',
          'ضبط شخصية العلامة التجارية وتوحيد اتجاهها البصري والاتصالي',
          'تهيئة واجهة الصفحة والمنشور المثبت ليعكسوا الثقة والاحترافية'
        ]
      },
      marketing: {
        code: '03 / MARKETING — استراتيجية التسويق والمحتوى المتكامل',
        name: 'بناء استراتيجية التسويق واتجاه المحتوى ورحلة العميل',
        headline: 'أكبر فرصة لتطوير صفحتك الآن هي تحويل المحتوى من «نشر يومي» إلى «نظام استراتيجي يبني العلامة ويقود للشراء».',
        description: 'تشير إجاباتك إلى أن الصفحة بحاجة إلى استراتيجية محتوى وتواصل مترابطة تعالج مشاكل العميل وتثبت كفاءة علامتك التجارية، بدلاً من الاكتفاء بمنشورات متفرقة لا تصنع أثراً تراكمياً.',
        bullets: [
          'تحديد أركان المحتوى (Content Pillars) المرتبطة بأهداف العمل والمبيعات',
          'تصميم رحلة العميل عبر المحتوى (من الوعي بالمشكلة إلى طلب الخدمة)',
          'وضع خطة محتوى استراتيجية متوازنة (Reels، دراسات حالة، محتوى قيمي وعروض)',
          'مواءمة رسائل المحتوى مع أولويات البيع ومواسم السوق'
        ]
      },
      growth: {
        code: '04 / GROWTH — استراتيجية النمو والحملات وتطوير العروض',
        name: 'بناء استراتيجية النمو، هيكلة العروض، وتخطيط الحملات (Full-Funnel)',
        headline: 'صفحتك تمتلك أساساً جيداً، والخطوة الحاسمة الآن هي بناء عروض قوية وحملات إعلانية تضاعف الاستحواذ والتحويل.',
        description: 'يكشف التشخيص أن الفجوة الأهم لديك تكمن في هندسة العروض التسويقية وهيكلة مسار الحملات الإعلانية (Funnel). تطوير العرض الصحيح وربطه بحملات جذب وإعادة استهداف سيحول صفحتك إلى محرك مبيعات مستدام.',
        bullets: [
          'تطوير وهندسة العروض التسويقية (Offer Creation) لزيادة معدل الاستجابة',
          'تصميم مسار الحملات الإعلانية المتكامل (جذب ← تفاعل ← إعادة استهداف ← تحويل)',
          'مواءمة الرسالة الإعلانية مع سيناريو البيع داخل الرسائل (Inbox Funnel)',
          'بناء خارطة نمو لزيادة المبيعات وتقليل تكلفة اكتساب العميل'
        ]
      }
    };

    // State Management
    const state = {
      activePillarIndex: 0,
      showAllQuestions: false,
      answers: {}, // { q1: 2, q2: 3, ... }
      pageName: '',
      clientName: '',
      industry: 'التجارة الإلكترونية والبيع بالتجزئة',
      primaryGoal: 'ننشر باستمرار ولا نرى أثرًا واضحاً في المبيعات',
      pageUrl: ''
    };

    // Utility: Show In-Page Toast
    function showToast(message, isError = false) {
      const container = document.getElementById('toast-container');
      const icon = document.getElementById('toast-icon');
      const text = document.getElementById('toast-message');
      if (!container || !icon || !text) return;

      text.textContent = message;
      icon.className = isError
        ? 'w-2.5 h-2.5 rounded-full bg-[#DC2626]'
        : 'w-2.5 h-2.5 rounded-full bg-[#20A464]';
      container.classList.remove('hidden');

      if (window._toastTimer) clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(() => {
        container.classList.add('hidden');
      }, 3400);
    }

    // Calculate Scores
    function calculateAuditMetrics() {
      let totalRaw = 0;
      const maxRaw = 45; // 15 questions * 3 max points
      let answeredCount = 0;

      const pillarMetrics = PILLARS.map((pillar) => {
        let pillarRaw = 0;
        let pillarAnswered = 0;
        pillar.questions.forEach((q) => {
          if (state.answers[q.id] !== undefined) {
            pillarRaw += state.answers[q.id];
            totalRaw += state.answers[q.id];
            pillarAnswered++;
            answeredCount++;
          }
        });
        const scoreOutOf20 = Math.round((pillarRaw / 9) * 20);
        const pct = Math.round((pillarRaw / 9) * 100);
        return {
          id: pillar.id,
          code: pillar.code,
          title: pillar.title,
          shortTitle: pillar.shortTitle,
          serviceKey: pillar.serviceKey,
          raw: pillarRaw,
          answered: pillarAnswered,
          totalQuestions: pillar.questions.length,
          scoreOutOf20,
          pct
        };
      });

      const totalScore = Math.round((totalRaw / maxRaw) * 100);

      // Sort pillars to find strongest and weakest
      const sortedByPct = [...pillarMetrics].sort((a, b) => a.pct - b.pct);
      const weakestPillar = sortedByPct[0];
      const strongestPillar = sortedByPct[sortedByPct.length - 1];

      return {
        totalScore,
        answeredCount,
        totalQuestions: 15,
        pillarMetrics,
        weakestPillar,
        strongestPillar
      };
    }

    // Render Pillar Navigation Tabs
    function renderPillarTabs() {
      const container = document.getElementById('pillar-tabs-container');
      if (!container) return;

      const metrics = calculateAuditMetrics();
      container.innerHTML = PILLARS.map((pillar, idx) => {
        const pm = metrics.pillarMetrics[idx];
        const isActive = !state.showAllQuestions && state.activePillarIndex === idx;
        const isCompleted = pm.answered === pm.totalQuestions;
        let classes = 'pillar-tab';
        if (isActive) classes += ' active';
        else if (isCompleted) classes += ' completed';

        return `
          <button type="button" data-pillar-idx="${idx}" class="${classes}">
            <span class="font-en text-xs font-bold ${isActive ? 'text-[#146EF5]' : 'text-[#146EF5]'}">0${idx + 1}</span>
            <span>${pillar.shortTitle}</span>
            <span class="font-en text-[11px] px-1.5 py-0.5 rounded ${isActive ? 'bg-slate-800 text-slate-200' : 'bg-[#F5F6F8] text-[#667085]'}">${pm.answered}/3</span>
          </button>
        `;
      }).join('');

      container.querySelectorAll('button[data-pillar-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-pillar-idx'), 10);
          state.showAllQuestions = false;
          state.activePillarIndex = idx;
          updateToggleViewButtonText();
          renderWorkspace();
        });
      });
    }

    function updateToggleViewButtonText() {
      const btn = document.getElementById('btn-toggle-view-mode');
      if (!btn) return;
      btn.textContent = state.showAllQuestions
        ? 'عرض محور واحد في كل خطوة'
        : 'عرض جميع الأسئلة في صفحة واحدة';
    }

    // Render Questions List
    function renderQuestions() {
      const container = document.getElementById('questions-container');
      if (!container) return;

      const pillarsToRender = state.showAllQuestions
        ? PILLARS.map((p, i) => ({ pillar: p, index: i }))
        : [{ pillar: PILLARS[state.activePillarIndex], index: state.activePillarIndex }];

      container.innerHTML = pillarsToRender.map(({ pillar, index }) => {
        const questionsHtml = pillar.questions.map((q, qIdx) => {
          const globalNumber = index * 3 + qIdx + 1;
          const selectedScore = state.answers[q.id];

          const optionsHtml = q.options.map((opt) => {
            const isSelected = selectedScore === opt.score;
            const scoreBadgeColor = opt.score === 3
              ? 'bg-[#20A464]/10 text-[#20A464]'
              : opt.score === 2
                ? 'bg-[#146EF5]/10 text-[#146EF5]'
                : opt.score === 1
                  ? 'bg-[#D97706]/10 text-[#D97706]'
                  : 'bg-[#DC2626]/10 text-[#DC2626]';

            return `
              <button type="button" data-qid="${q.id}" data-score="${opt.score}" class="option-card ${isSelected ? 'selected' : ''}">
                <div class="option-radio"></div>
                <div class="flex-1">
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="font-bold text-sm text-[#071A33]">${opt.label}</span>
                    <span class="font-en text-[11px] font-bold px-2 py-0.5 rounded ${scoreBadgeColor}">${opt.score} / 3</span>
                  </div>
                  <p class="text-xs text-[#667085] mt-1 leading-relaxed m-0">${opt.desc}</p>
                </div>
              </button>
            `;
          }).join('');

          return `
            <div class="editorial-card p-5 sm:p-6">
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="font-en text-xs font-bold text-[#146EF5] bg-[#146EF5]/10 px-2.5 py-0.5 rounded">
                  QUESTION ${String(globalNumber).padStart(2, '0')} / 15
                </span>
                <span class="text-xs font-semibold ${selectedScore !== undefined ? 'text-[#20A464]' : 'text-[#667085]'}">
                  ${selectedScore !== undefined ? '✓ تم الاختيار' : 'اختر الإجابة الأقرب لواقع صفحتك'}
                </span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-[#071A33] mb-1">${q.title}</h3>
              <p class="text-xs sm:text-sm text-[#667085] mb-4">${q.prompt}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${optionsHtml}
              </div>
            </div>
          `;
        }).join('');

        return `
          <div class="space-y-4">
            <div class="bg-[#071A33] text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span class="font-en text-xs font-bold text-[#146EF5] uppercase tracking-wider">${pillar.code}</span>
                <h2 class="text-base sm:text-lg font-bold text-white mt-0.5">${pillar.title}</h2>
                <p class="text-xs text-slate-300 mt-0.5">${pillar.subtitle}</p>
              </div>
              <span class="font-en text-xs bg-slate-800 text-slate-200 px-3 py-1.5 rounded-lg self-start sm:self-center whitespace-nowrap">
                20 نقطة كحد أقصى
              </span>
            </div>
            ${questionsHtml}
          </div>
        `;
      }).join('');

      // Attach listeners to option cards
      container.querySelectorAll('button.option-card').forEach((card) => {
        card.addEventListener('click', () => {
          const qid = card.getAttribute('data-qid');
          const score = parseInt(card.getAttribute('data-score'), 10);
          state.answers[qid] = score;
          renderWorkspace();
        });
      });
    }

    // Render Sidebar & Progress Controls
    function renderSidebarAndControls() {
      const metrics = calculateAuditMetrics();
      const pctDone = Math.round((metrics.answeredCount / metrics.totalQuestions) * 100);

      const badgeText = document.getElementById('progress-badge-text');
      if (badgeText) badgeText.textContent = `تمت الإجابة على ${metrics.answeredCount} من ${metrics.totalQuestions}`;

      const progBar = document.getElementById('overall-progress-bar');
      if (progBar) progBar.style.width = `${pctDone}%`;

      const liveScorePill = document.getElementById('live-score-pill');
      if (liveScorePill) liveScorePill.textContent = `${metrics.totalScore} / 100`;

      const sidebarPillars = document.getElementById('sidebar-pillars-summary');
      if (sidebarPillars) {
        sidebarPillars.innerHTML = metrics.pillarMetrics.map((pm, idx) => {
          const barColor = pm.pct >= 75 ? 'bg-[#20A464]' : pm.pct >= 45 ? 'bg-[#146EF5]' : 'bg-[#D97706]';
          return `
            <div>
              <div class="flex items-center justify-between text-xs mb-1">
                <span class="font-semibold text-[#071A33]">0${idx + 1}. ${pm.shortTitle}</span>
                <span class="font-en font-bold text-[#667085]">${pm.scoreOutOf20}/20 <span class="text-[10px]">(${pm.answered}/3)</span></span>
              </div>
              <div class="w-full h-1.5 bg-[#F5F6F8] rounded-full overflow-hidden border border-[#E5E7EB]">
                <div class="h-full ${barColor} transition-all duration-300" style="width: ${pm.pct}%"></div>
              </div>
            </div>
          `;
        }).join('');
      }

      const hint = document.getElementById('sidebar-incomplete-hint');
      if (hint) {
        if (metrics.answeredCount === 15) {
          hint.textContent = '✓ اكتملت جميع الأسئلة! اضغط أعلاه لعرض التقرير وتحميل الـ PDF.';
          hint.className = 'text-[11px] text-[#20A464] font-semibold text-center mt-2';
        } else {
          hint.textContent = `متبقي ${15 - metrics.answeredCount} سؤال لإصدار التشخيص الدقيق الكامل.`;
          hint.className = 'text-[11px] text-[#667085] text-center mt-2';
        }
      }

      // Footer navigation buttons
      const prevBtn = document.getElementById('btn-prev-pillar');
      const nextBtn = document.getElementById('btn-next-pillar');
      const genBtn = document.getElementById('btn-generate-report');
      const footerHint = document.getElementById('step-footer-hint');

      if (prevBtn && nextBtn && genBtn) {
        if (state.showAllQuestions) {
          prevBtn.classList.add('hidden');
          nextBtn.classList.add('hidden');
          genBtn.classList.remove('hidden');
          if (footerHint) footerHint.textContent = `أجبت على ${metrics.answeredCount} من 15 سؤالاً — اضغط لإصدار التقرير الشامل.`;
        } else {
          prevBtn.classList.toggle('hidden', state.activePillarIndex === 0);
          const isLastPillar = state.activePillarIndex === PILLARS.length - 1;
          nextBtn.classList.toggle('hidden', isLastPillar);
          genBtn.classList.toggle('hidden', !isLastPillar && metrics.answeredCount < 15);
          if (footerHint) {
            footerHint.textContent = `المحور ${state.activePillarIndex + 1} من 5 — تم إكمال ${metrics.answeredCount} من 15 سؤالاً إجمالاً`;
          }
        }
      }
    }

    function renderWorkspace() {
      renderPillarTabs();
      renderQuestions();
      renderSidebarAndControls();
    }

    // Sync Form Inputs with State
    function syncInputsToState() {
      const pageNameEl = document.getElementById('input-page-name');
      const clientNameEl = document.getElementById('input-client-name');
      const industryEl = document.getElementById('input-industry');
      const goalEl = document.getElementById('input-primary-goal');
      const urlEl = document.getElementById('input-page-url');

      if (pageNameEl) state.pageName = pageNameEl.value.trim();
      if (clientNameEl) state.clientName = clientNameEl.value.trim();
      if (industryEl) state.industry = industryEl.value;
      if (goalEl) state.primaryGoal = goalEl.value;
      if (urlEl) state.pageUrl = urlEl.value.trim();
    }

    // Build and Populate Full Diagnostic Report & Tailored CTA
    function buildDiagnosticReport() {
      syncInputsToState();
      const metrics = calculateAuditMetrics();

      // If some questions are unanswered, default unanswered ones to 1 or warn gently
      if (metrics.answeredCount < 15) {
        showToast(`ملاحظة: أجبت على ${metrics.answeredCount} من 15 سؤالاً. تم احتساب الأسئلة المتبقية بقيمة افتراضية ويمكنك تعديلها في أي وقت.`, false);
        PILLARS.forEach((p) => {
          p.questions.forEach((q) => {
            if (state.answers[q.id] === undefined) {
              state.answers[q.id] = 1;
            }
          });
        });
        renderWorkspace();
      }

      const finalMetrics = calculateAuditMetrics();
      const score = finalMetrics.totalScore;
      const displayPageName = state.pageName || 'صفحة العلامة التجارية (تقييم استراتيجي)';
      const displayClientName = state.clientName ? ` — ${state.clientName}` : '';

      // 1. Report Header Metadata
      document.getElementById('report-page-name').textContent = displayPageName + displayClientName;
      document.getElementById('report-industry').textContent = state.industry;
      const todayStr = new Date().toISOString().split('T')[0];
      document.getElementById('report-date').textContent = todayStr;
      document.getElementById('report-client-goal-tag').textContent = `الهدف الحالي: ${state.primaryGoal}`;

      // 2. Score Gauge & Tier Classification
      document.getElementById('report-total-score').textContent = score;
      const circle = document.getElementById('report-score-circle');
      const circumference = 314.16;
      const offset = circumference - (score / 100) * circumference;
      if (circle) {
        circle.style.strokeDashoffset = offset;
        circle.setAttribute('stroke', score >= 75 ? '#20A464' : score >= 50 ? '#146EF5' : '#D97706');
      }

      let tierLabel = '';
      let tierBadgeClass = '';
      let tierShort = '';
      let verdictTitle = '';
      let verdictSummary = '';

      if (score < 40) {
        tierLabel = 'مرحلة الأنشطة المتفرقة — تحتاج تأسيس استراتيجي';
        tierBadgeClass = 'inline-block px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#DC2626] text-white mb-2';
        tierShort = 'الصفحة تعمل حالياً كرد فعل يومي دون تموضع واضح أو نظام تحويل مترابط.';
        verdictTitle = `تشخيص «${displayPageName}»: الصفحة تبذل مجهوداً في النشر لكنها تفتقد إلى نظام نمو مترابط`;
        verdictSummary = `توضح نتيجة التقييم (${score}/100) أن الصفحة تعاني من فجوة بين النشاط اليومي والهدف التجاري. قبل زيادة الإنفاق الإعلاني أو كثافة النشر، تحتاج العلامة إلى ضبط التموضع وعرض القيمة، وتوحيد الرسائل التسويقية، وبناء مسار واضح يحول الزوار والمتفاعلين إلى عملاء فعليين.`;
      } else if (score < 68) {
        tierLabel = 'مرحلة الحضور الجزئي — فرص نمو غير مستغلة';
        tierBadgeClass = 'inline-block px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#D97706] text-white mb-2';
        tierShort = 'توجد ركائز جيدة في الصفحة، لكن غياب الترابط بين المحتوى والعروض والرسائل يضيع جزءاً كبيراً من العائد.';
        verdictTitle = `تشخيص «${displayPageName}»: حضور جيد ولكن هناك فرص مبيعات ضائعة في رحلة العميل`;
        verdictSummary = `حصلت صفحتك على (${score}/100)، مما يعني أن لديك أساساً يمكن البناء عليه، لكن الأنشطة التسويقية لا تعمل كمنظومة واحدة. معالجة الفجوة الأضعف في (${finalMetrics.weakestPillar.shortTitle}) وربط المحتوى بهندسة عروض قوية وسيناريو بيع احترافي في الرسائل سيحدث نقلة ملموسة في المبيعات.`;
      } else if (score < 85) {
        tierLabel = 'مرحلة الأداء المتقدم — جاهزة للتوسع ومضاعفة العائد';
        tierBadgeClass = 'inline-block px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#146EF5] text-white mb-2';
        tierShort = 'الصفحة تدار بمنهجية واضحة وتمتلك مقومات قوية للتوسع الإعلاني والسوقي.';
        verdictTitle = `تشخيص «${displayPageName}»: منظومة تسويقية قوية جاهزة للتوسع (Scaling) وتعظيم الربحية`;
        verdictSummary = `تعكس نتيجة (${score}/100) نضجاً واضحاً في إدارة الصفحة وفهم الجمهور. لتحقيق القفزة التالية، ينصب التركيز الاستراتيجي على تحسين محور (${finalMetrics.weakestPillar.shortTitle})، وتطوير حملات Full-Funnel، ورفع معدل التحويل من المحادثات لتعظيم العائد على كل جنيه يستثمر في التسويق.`;
      } else {
        tierLabel = 'مرحلة نظام النمو المتكامل — ريادة وتموضع قوي';
        tierBadgeClass = 'inline-block px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#20A464] text-white mb-2';
        tierShort = 'الصفحة تعمل كنظام نمو متكامل يربط العلامة التجارية بالمبيعات والقياس.';
        verdictTitle = `تشخيص «${displayPageName}»: علامة تجارية متماسكة ونظام نمو عالي الكفاءة`;
        verdictSummary = `بنتيجة (${score}/100)، تطبق صفحتك أفضل ممارسات التسويق الاستراتيجي من حيث وضوح التموضع، اتساق المحتوى، وإدارة التحويل. الخطوة القادمة هي الحفاظ على هذا التفوق، استكشاف شرائح سوقية جديدة، وبناء أصول تسويقية تضاعف الحصة السوقية للعلامة.`;
      }

      const badgeEl = document.getElementById('report-tier-badge');
      badgeEl.className = tierBadgeClass;
      badgeEl.textContent = tierLabel;
      document.getElementById('report-tier-short').textContent = tierShort;
      document.getElementById('report-verdict-title').textContent = verdictTitle;
      document.getElementById('report-verdict-summary').textContent = verdictSummary;

      document.getElementById('report-strongest-pillar').textContent =
        `${finalMetrics.strongestPillar.title} (${finalMetrics.strongestPillar.scoreOutOf20}/20 — ${finalMetrics.strongestPillar.pct}%)`;
      document.getElementById('report-weakest-pillar').textContent =
        `${finalMetrics.weakestPillar.title} (${finalMetrics.weakestPillar.scoreOutOf20}/20 — ${finalMetrics.weakestPillar.pct}%)`;

      // 3. Render 5 Pillars Bars in Executive Summary
      const barsContainer = document.getElementById('report-pillars-bars');
      barsContainer.innerHTML = finalMetrics.pillarMetrics.map((pm) => {
        const color = pm.pct >= 75 ? '#20A464' : pm.pct >= 50 ? '#146EF5' : pm.pct >= 35 ? '#D97706' : '#DC2626';
        return `
          <div>
            <div class="flex items-center justify-between text-xs mb-1">
              <div class="flex items-center gap-2">
                <span class="font-en font-bold text-[#146EF5]">${pm.code}</span>
                <span class="font-bold text-[#071A33]">${pm.title}</span>
              </div>
              <span class="font-en font-extrabold text-[#071A33]">${pm.scoreOutOf20} / 20 <span class="text-[#667085] font-normal">(${pm.pct}%)</span></span>
            </div>
            <div class="w-full h-2.5 bg-[#F5F6F8] rounded-full overflow-hidden border border-[#E5E7EB]">
              <div class="h-full rounded-full" style="width: ${pm.pct}%; background-color: ${color};"></div>
            </div>
          </div>
        `;
      }).join('');

      // 4. Render Detailed Pillar Breakdown Cards
      const detailedContainer = document.getElementById('report-detailed-pillars');
      detailedContainer.innerHTML = PILLARS.map((pillar, idx) => {
        const pm = finalMetrics.pillarMetrics[idx];
        const statusBadge = pm.pct >= 75
          ? { text: 'نقطة قوة استراتيجية', cls: 'bg-[#20A464]/10 text-[#20A464] border-[#20A464]/30' }
          : pm.pct >= 50
            ? { text: 'أداء متوسط يحتاج تطوير', cls: 'bg-[#146EF5]/10 text-[#146EF5] border-[#146EF5]/30' }
            : { text: 'فجوة حرجة تتطلب تدخل أولوية', cls: 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/30' };

        const priorityActions = pillar.questions.map((q) => {
          const ansScore = state.answers[q.id] ?? 1;
          const chosenOpt = q.options.find((o) => o.score === ansScore) || q.options[0];
          return {
            qTitle: q.title,
            score: ansScore,
            currentLabel: chosenOpt.label,
            action: chosenOpt.action
          };
        });

        return `
          <div class="p-4 sm:p-5 rounded-xl bg-[#F5F6F8] border border-[#E5E7EB]">
            <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E5E7EB]">
              <div class="flex items-center gap-2.5">
                <span class="font-en text-xs font-extrabold bg-[#071A33] text-white px-2.5 py-1 rounded">${pillar.code}</span>
                <h4 class="font-bold text-[#071A33] text-sm sm:text-base">${pillar.title}</h4>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold px-2.5 py-1 rounded-full border ${statusBadge.cls}">${statusBadge.text}</span>
                <span class="font-en font-extrabold text-sm text-[#071A33] bg-white px-2.5 py-1 rounded border border-[#E5E7EB]">${pm.scoreOutOf20}/20</span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${priorityActions.map((item) => `
                <div class="bg-white p-3.5 rounded-lg border border-[#E5E7EB] flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 mb-1">
                      <span class="text-xs font-bold text-[#071A33]">${item.qTitle}</span>
                      <span class="font-en text-[11px] font-bold ${item.score >= 2 ? 'text-[#20A464]' : 'text-[#D97706]'}">${item.score}/3</span>
                    </div>
                    <p class="text-[11px] text-[#667085] mb-2">الوضع الحالي: <strong class="text-[#111827]">${item.currentLabel}</strong></p>
                  </div>
                  <div class="pt-2 border-t border-[#E5E7EB] text-[11px] text-[#071A33]">
                    <span class="font-bold text-[#146EF5]">التوصية: </span>${item.action}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('');

      // 5. Render 15-Question Audit Checklist Table
      const tbody = document.getElementById('report-answers-table-body');
      const rowsHtml = [];
      PILLARS.forEach((pillar, pIdx) => {
        pillar.questions.forEach((q, qIdx) => {
          const num = pIdx * 3 + qIdx + 1;
          const sc = state.answers[q.id] ?? 1;
          const opt = q.options.find((o) => o.score === sc) || q.options[0];
          const badgeCls = sc === 3
            ? 'bg-[#20A464]/10 text-[#20A464]'
            : sc === 2
              ? 'bg-[#146EF5]/10 text-[#146EF5]'
              : sc === 1
                ? 'bg-[#D97706]/10 text-[#D97706]'
                : 'bg-[#DC2626]/10 text-[#DC2626]';

          rowsHtml.push(`
            <tr class="hover:bg-[#F5F6F8]/60">
              <td class="py-2.5 px-3 font-semibold text-[#071A33]">
                <span class="font-en text-[11px] text-[#146EF5] block">${String(num).padStart(2, '0')} · ${pillar.shortTitle}</span>
                ${q.title}
              </td>
              <td class="py-2.5 px-3 text-[#667085]">
                <strong class="text-[#111827] block">${opt.label}</strong>
                <span class="text-[11px]">${opt.desc}</span>
              </td>
              <td class="py-2.5 px-3 text-center font-en font-bold">
                <span class="px-2 py-1 rounded ${badgeCls}">${sc} / 3</span>
              </td>
              <td class="py-2.5 px-3 text-[#071A33] font-medium">${opt.action}</td>
            </tr>
          `);
        });
      });
      tbody.innerHTML = rowsHtml.join('');

      // 6. Dynamic Tailored CTA based on Weakest Pillar & Overall Score
      let selectedServiceKey = finalMetrics.weakestPillar.serviceKey;
      if (score < 45) {
        selectedServiceKey = 'consulting';
      }
      const recommendedService = SERVICES_CATALOG[selectedServiceKey] || SERVICES_CATALOG.consulting;

      document.getElementById('cta-recommended-service-code').textContent = recommendedService.code;
      document.getElementById('cta-headline').textContent = recommendedService.headline;
      document.getElementById('cta-description').textContent = recommendedService.description;
      document.getElementById('cta-service-bullets').innerHTML = recommendedService.bullets.map((b) => `
        <div class="flex items-start gap-2 bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
          <span class="text-[#146EF5] font-bold">✓</span>
          <span>${b}</span>
        </div>
      `).join('');

      // Build Custom WhatsApp & Email Messages with Audit Context
      const waMessage = [
        `مرحباً أستاذ حسن علي،`,
        `قمت بإجراء التشخيص الاستراتيجي لصفحة الفيسبوك عبر أداة التحليل الخاصة بك:`,
        `• اسم الصفحة / العلامة: ${displayPageName}`,
        `• القطاع: ${state.industry}`,
        state.pageUrl ? `• رابط الصفحة: ${state.pageUrl}` : null,
        `• السكور الكلي للصفحة: ${score} من 100 (${tierLabel})`,
        `• المحور الأضعف ذو الأولوية: ${finalMetrics.weakestPillar.title} (${finalMetrics.weakestPillar.scoreOutOf20}/20)`,
        `• التحدي الحالي: ${state.primaryGoal}`,
        `• الخدمة المقترحة في التقرير: ${recommendedService.name}`,
        ``,
        `أرغب في حجز استشارة معك لمناقشة خطة العمل المناسبة لصفحتنا.`
      ].filter(Boolean).join('\n');

      const waUrl = `https://wa.me/201221359590?text=${encodeURIComponent(waMessage)}`;
      const emailSubject = `طلب استشارة تسويق استراتيجي — نتائج تحليل صفحة ${displayPageName} (${score}/100)`;
      const emailUrl = `mailto:hassan.ali.elzayat@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(waMessage)}`;

      document.getElementById('cta-whatsapp-btn').setAttribute('href', waUrl);
      document.getElementById('cta-email-btn').setAttribute('href', emailUrl);

      // Save summary string on window for Copy button
      window._currentAuditSummaryText = waMessage;

      // Reveal Results Section & Scroll Smoothly
      const resultsSec = document.getElementById('results-section');
      const navResLink = document.getElementById('nav-results-link');
      if (resultsSec) {
        resultsSec.classList.remove('hidden');
        if (navResLink) navResLink.classList.remove('hidden');
        resultsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Direct PDF Download via html2pdf.js (with Print fallback)
    async function downloadReportAsPdf() {
      const reportEl = document.getElementById('pdf-report-sheet');
      const btnText = document.getElementById('btn-download-pdf-text');
      if (!reportEl) return;

      const cleanPageName = (state.pageName || 'Facebook-Page').replace(/[^a-zA-Z0-9\u0600-\u06FF\s-_]/g, '').trim().replace(/\s+/g, '-');
      const filename = `Hassan-Ali-Audit-Report-${cleanPageName}.pdf`;

      if (typeof window.html2pdf === 'undefined') {
        showToast('جاري فتح نافذة حفظ التقرير كـ PDF...', false);
        window.print();
        return;
      }

      try {
        if (btnText) btnText.textContent = 'جاري تجهيز ملف الـ PDF...';
        showToast('جاري توليد تقرير الـ PDF الشامل بجودة عالية...', false);

        const opt = {
          margin: [8, 8, 8, 8],
          filename: filename,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#FFFFFF',
            scrollY: 0
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        await window.html2pdf().set(opt).from(reportEl).save();
        if (btnText) btnText.textContent = 'تحميل التقرير الشامل (PDF)';
        showToast('تم تحميل تقرير الـ PDF بنجاح!', false);
      } catch (err) {
        if (btnText) btnText.textContent = 'تحميل التقرير الشامل (PDF)';
        showToast('تم فتح نافذة الطباعة لحفظ التقرير كـ PDF مباشر.', false);
        window.print();
      }
    }

    // Load Demo Sample Data (for quick testing)
    function loadDemoAuditData() {
      document.getElementById('input-page-name').value = 'شركة ريفيرا للتطوير العقاري — Riviera Developments';
      document.getElementById('input-client-name').value = 'م. طارق المنشاوي — المدير التنفيذي';
      document.getElementById('input-industry').value = 'التطوير العقاري والمقاولات';
      document.getElementById('input-primary-goal').value = 'تأتينا رسائل كثيرة ولكن نسبة التحويل إلى مبيعات ضعيفة';
      document.getElementById('input-page-url').value = 'https://facebook.com/rivieraproperties.eg';

      // Realistic mid-tier answers highlighting clear positioning & conversion opportunities
      const demoAnswers = {
        q1: 2, q2: 3, q3: 2, // Positioning: 7/9 (16/20)
        q4: 1, q5: 2, q6: 2, // Content: 5/9 (11/20)
        q7: 2, q8: 2, q9: 2, // Community: 6/9 (13/20)
        q10: 1, q11: 1, q12: 1, // Campaigns & Offers: 3/9 (7/20) -> Weakest pillar!
        q13: 1, q14: 1, q15: 2  // Conversion: 4/9 (9/20)
      };

      state.answers = { ...demoAnswers };
      renderWorkspace();
      buildDiagnosticReport();
      showToast('تم ملء نموذج تجريبي وإصدار التقرير الاستراتيجي المخصص!', false);
    }

    // Initialize Event Listeners
    document.addEventListener('DOMContentLoaded', () => {
      renderWorkspace();

      // Pillar Prev / Next
      document.getElementById('btn-prev-pillar').addEventListener('click', () => {
        if (state.activePillarIndex > 0) {
          state.activePillarIndex--;
          renderWorkspace();
          document.getElementById('audit-workspace').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      document.getElementById('btn-next-pillar').addEventListener('click', () => {
        if (state.activePillarIndex < PILLARS.length - 1) {
          state.activePillarIndex++;
          renderWorkspace();
          document.getElementById('audit-workspace').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      // Toggle single pillar vs all questions view
      document.getElementById('btn-toggle-view-mode').addEventListener('click', () => {
        state.showAllQuestions = !state.showAllQuestions;
        updateToggleViewButtonText();
        renderWorkspace();
      });

      // Reset Audit
      document.getElementById('btn-reset-audit').addEventListener('click', () => {
        state.answers = {};
        state.activePillarIndex = 0;
        document.getElementById('results-section').classList.add('hidden');
        document.getElementById('nav-results-link').classList.add('hidden');
        renderWorkspace();
        showToast('تمت إعادة تعيين الإجابات للبدء من جديد.', false);
      });

      // Generate Report buttons
      document.getElementById('btn-generate-report').addEventListener('click', buildDiagnosticReport);
      document.getElementById('btn-sidebar-show-results').addEventListener('click', buildDiagnosticReport);

      // Demo buttons
      document.getElementById('btn-demo-fill').addEventListener('click', loadDemoAuditData);
      document.getElementById('btn-hero-demo').addEventListener('click', loadDemoAuditData);

      // PDF & Print & Edit buttons
      document.getElementById('btn-download-pdf').addEventListener('click', downloadReportAsPdf);
      document.getElementById('btn-print-pdf').addEventListener('click', () => {
        window.print();
      });
      document.getElementById('btn-edit-answers').addEventListener('click', () => {
        document.getElementById('audit-workspace').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      // Copy Summary button
      document.getElementById('btn-copy-summary').addEventListener('click', () => {
        const textToCopy = window._currentAuditSummaryText || '';
        if (!textToCopy) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast('تم نسخ ملخص التشخيص! يمكنك لصقه مباشرة في محادثتك مع أ. حسن علي.');
          }).catch(() => {
            fallbackCopy(textToCopy);
          });
        } else {
          fallbackCopy(textToCopy);
        }
      });

      function fallbackCopy(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          showToast('تم نسخ ملخص التشخيص بنجاح!');
        } catch (e) {
          showToast('تعذر النسخ التلقائي، يمكنك استخدام زر واتساب مباشرة.', true);
        }
        document.body.removeChild(ta);
      }
    });
