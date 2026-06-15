// blog.js — taboula.com
// 230 مقال SEO: 100 عربي + 50 فرنسي + 50 إنجليزي + 30 إسباني

const BLOG_ARTICLES = {
  ar: [
    // المحمدية — مدينتنا الرئيسية
    { id:"ar-001", slug:"katib-umumi-mohammedia", title:"كاتب عمومي المحمدية: دليلك الشامل للخدمات الإدارية", excerpt:"تعرف على خدمات الكاتب العمومي في المحمدية وكيف يساعدك في إنجاز معاملاتك الإدارية بسهولة.", category:"mohammedia", readTime:6 },
    { id:"ar-002", slug:"khidmat-idaria-mohammedia", title:"الخدمات الإدارية في المحمدية: taboula.com في خدمتك", excerpt:"دليل شامل لخدمات الكتابة الإدارية في المحمدية من الطلبات الرسمية إلى الترجمة.", category:"mohammedia", readTime:7 },
    { id:"ar-003", slug:"kitabat-shikaya-mohammedia", title:"كيف تكتب شكايتك الإدارية في المحمدية", excerpt:"خطوات كتابة شكاية إدارية فعّالة تحقق نتائج في المحمدية والمغرب.", category:"mohammedia", readTime:8 },
    { id:"ar-004", slug:"sira-dhatia-mohammedia", title:"السيرة الذاتية الاحترافية في المحمدية", excerpt:"كيف تُعد سيرة ذاتية احترافية تنافس في سوق العمل بالمحمدية والدار البيضاء الكبرى.", category:"mohammedia", readTime:7 },
    { id:"ar-005", slug:"tarjama-wathiqa-mohammedia", title:"ترجمة الوثائق في المحمدية: الأسعار والخدمات", excerpt:"دليل خدمات ترجمة الوثائق الرسمية في المحمدية بين العربية والفرنسية والإنجليزية.", category:"mohammedia", readTime:6 },
    { id:"ar-006", slug:"taashira-mohammedia", title:"مساعدة التأشيرة في المحمدية: اجعل ملفك مكتملاً", excerpt:"كيف نساعدك في إعداد ملف تأشيرتك من المحمدية بشكل احترافي.", category:"mohammedia", readTime:8 },
    { id:"ar-007", slug:"muasasat-idaria-mohammedia", title:"المؤسسات الإدارية في المحمدية: دليل المواطن", excerpt:"دليل الجهات الإدارية في المحمدية وكيفية التعامل معها.", category:"mohammedia", readTime:7 },
    { id:"ar-008", slug:"baladiyat-mohammedia-khidmat", title:"خدمات بلدية المحمدية وكيف تستفيد منها", excerpt:"الخدمات الإدارية التي تقدمها بلدية المحمدية وإجراءات الاستفادة منها.", category:"mohammedia", readTime:6 },
    { id:"ar-009", slug:"amal-mohammedia-2024", title:"فرص العمل في المحمدية 2024: دليل الباحث عن العمل", excerpt:"تحليل سوق العمل في المحمدية وكيف تعد ملفاً احترافياً للتوظيف.", category:"mohammedia", readTime:9 },
    { id:"ar-010", slug:"ajnabi-mohammedia-iqama", title:"الأجانب في المحمدية: إجراءات الإقامة والوثائق", excerpt:"دليل الإجراءات الإدارية للأجانب المقيمين في المحمدية.", category:"mohammedia", readTime:8 },

    // المدن الكبرى
    { id:"ar-011", slug:"katib-umumi-casablanca", title:"كاتب عمومي الدار البيضاء: دليل الخدمات الإدارية", excerpt:"دليل خدمات الكتابة العمومية في الدار البيضاء. taboula.com يخدمك عن بُعد.", category:"casablanca", readTime:6 },
    { id:"ar-012", slug:"khidmat-idaria-casablanca", title:"الخدمات الإدارية في الدار البيضاء: ما تحتاج معرفته", excerpt:"كل ما يجب أن تعرفه عن الإجراءات الإدارية في أكبر مدينة مغربية.", category:"casablanca", readTime:7 },
    { id:"ar-013", slug:"sira-dhatia-casablanca", title:"السيرة الذاتية الاحترافية للشركات الكبرى في الدار البيضاء", excerpt:"كيف تعد سيرة ذاتية تنافس في سوق العمل التنافسي بالدار البيضاء.", category:"casablanca", readTime:8 },
    { id:"ar-014", slug:"tarjama-casablanca", title:"خدمات الترجمة في الدار البيضاء", excerpt:"ترجمة الوثائق والملفات الإدارية في الدار البيضاء. خدمة سريعة عبر واتساب.", category:"casablanca", readTime:6 },
    { id:"ar-015", slug:"katib-umumi-rabat", title:"كاتب عمومي الرباط: الخدمات الإدارية في العاصمة", excerpt:"دليل خدمات الكتابة العمومية في الرباط العاصمة الإدارية للمغرب.", category:"rabat", readTime:6 },
    { id:"ar-016", slug:"wathiqa-rasmia-rabat", title:"الوثائق الرسمية في الرباط: كيف تستخرجها", excerpt:"إجراءات استخراج الوثائق الرسمية من الجهات الحكومية في الرباط.", category:"rabat", readTime:7 },
    { id:"ar-017", slug:"katib-umumi-fes", title:"كاتب عمومي فاس: الخدمات الإدارية في المدينة العلمية", excerpt:"خدمات الكتابة العمومية في فاس. دليل الإجراءات الإدارية.", category:"fes", readTime:6 },
    { id:"ar-018", slug:"katib-umumi-marrakech", title:"كاتب عمومي مراكش: خدمات إدارية في المدينة الحمراء", excerpt:"خدمات الكتابة العمومية في مراكش للمواطنين والأجانب والسياح.", category:"marrakech", readTime:6 },
    { id:"ar-019", slug:"ajnabi-marrakech-wathiqa", title:"الأجانب في مراكش: الوثائق والإجراءات الإدارية", excerpt:"دليل الإجراءات الإدارية للأجانب في مراكش — السياحة والإقامة.", category:"marrakech", readTime:8 },
    { id:"ar-020", slug:"katib-umumi-tanger", title:"كاتب عمومي طنجة: خدمات إدارية في بوابة أوروبا", excerpt:"خدمات الكتابة العمومية في طنجة. قريبون من أوروبا، نعمل مع الملفات الدولية.", category:"tanger", readTime:6 },

    // الخدمات الإدارية — مقالات وطنية
    { id:"ar-021", slug:"kitabat-talab-idari-maghrib", title:"كيف تكتب طلباً إدارياً صحيحاً في المغرب", excerpt:"خطوات كتابة طلب إداري احترافي يحقق نتائج في الإدارات المغربية.", category:"admin", readTime:8 },
    { id:"ar-022", slug:"shikaya-idaria-najiha", title:"شكاية إدارية ناجحة: العناصر الأساسية", excerpt:"ما يجب أن تتضمنه شكايتك الإدارية لتحقيق أفضل نتيجة.", category:"admin", readTime:7 },
    { id:"ar-023", slug:"taoun-idari-maghrib", title:"الطعن الإداري في المغرب: كيف تكتبه بشكل صحيح", excerpt:"دليل مفصل لكتابة الطعن الإداري في المغرب: الشروط والإجراءات.", category:"admin", readTime:9 },
    { id:"ar-024", slug:"rasail-rasmia-maghrib", title:"الرسائل الرسمية في المغرب: أنواعها وكيفية كتابتها", excerpt:"دليل شامل لأنواع الرسائل الرسمية المستخدمة في الإدارات المغربية.", category:"admin", readTime:7 },
    { id:"ar-025", slug:"malaf-idari-mutakamil", title:"كيف تُعد ملفاً إدارياً متكاملاً في المغرب", excerpt:"خطوات إعداد الملف الإداري الكامل: الوثائق المطلوبة والترتيب الصحيح.", category:"admin", readTime:8 },
    { id:"ar-026", slug:"murasala-rasmia-asalib", title:"أساليب المراسلة الرسمية في المغرب", excerpt:"القواعد والأساليب المعتمدة في المراسلة الرسمية مع الجهات الحكومية.", category:"admin", readTime:6 },
    { id:"ar-027", slug:"tasrih-rasmi-maghrib", title:"التصريح الرسمي في المغرب: متى وكيف تكتبه", excerpt:"متى تحتاج إلى تصريح رسمي وكيف تكتبه بالطريقة المعتمدة في المغرب.", category:"admin", readTime:7 },
    { id:"ar-028", slug:"rashid-watani-tajdid", title:"تجديد بطاقة التعريف الوطنية في المغرب", excerpt:"إجراءات تجديد البطاقة الوطنية أو الحصول عليها لأول مرة.", category:"admin", readTime:6 },
    { id:"ar-029", slug:"shahada-sukkna-maghrib", title:"شهادة السكنى في المغرب: إجراءات الحصول عليها", excerpt:"من أين تحصل على شهادة السكنى وما هي الوثائق المطلوبة.", category:"admin", readTime:6 },
    { id:"ar-030", slug:"qaid-izdiad-nusukh", title:"استخراج نسخة من عقد الازدياد في المغرب", excerpt:"كيف تحصل على نسخة من عقد الازدياد من الحالة المدنية.", category:"admin", readTime:5 },

    // التوظيف
    { id:"ar-031", slug:"sira-dhatia-ihtirafi", title:"السيرة الذاتية الاحترافية في المغرب: دليل 2024", excerpt:"كيف تُعد سيرة ذاتية احترافية تنافس في سوق العمل المغربي.", category:"employment", readTime:8 },
    { id:"ar-032", slug:"risalat-tahfiz-najiha", title:"رسالة التحفيز الناجحة في المغرب", excerpt:"أسرار كتابة رسالة تحفيز تفتح أبواب التوظيف في المغرب.", category:"employment", readTime:8 },
    { id:"ar-033", slug:"talab-amal-hukuma-maghrib", title:"كيف تتقدم لوظيفة في القطاع الحكومي المغربي", excerpt:"دليل التقدم للوظائف الحكومية في المغرب: الوثائق والإجراءات.", category:"employment", readTime:9 },
    { id:"ar-034", slug:"cv-fransawi-maghrib", title:"السيرة الذاتية بالفرنسية في المغرب", excerpt:"كيف تعد سيرتك الذاتية بالفرنسية للتقدم للشركات الفرنكوفونية.", category:"employment", readTime:7 },
    { id:"ar-035", slug:"muqabala-amal-nassaiha", title:"نصائح مقابلة العمل في المغرب", excerpt:"كيف تستعد لمقابلة العمل في المغرب من تحضير الملف إلى يوم المقابلة.", category:"employment", readTime:8 },
    { id:"ar-036", slug:"risalat-istiqala-maghrib", title:"رسالة الاستقالة المهنية في المغرب", excerpt:"كيف تكتب رسالة استقالة احترافية تحافظ على علاقاتك المهنية.", category:"employment", readTime:6 },
    { id:"ar-037", slug:"risalat-tazkia-mihan", title:"رسالة التزكية المهنية: كيف تطلبها وكيف تكتبها", excerpt:"أهمية رسالة التزكية المهنية في المغرب وكيفية الحصول عليها.", category:"employment", readTime:7 },
    { id:"ar-038", slug:"tawzif-wadif-aziz-moroccan", title:"الوظائف الأكثر طلباً في المغرب 2024", excerpt:"تحليل سوق العمل المغربي وأكثر القطاعات توظيفاً.", category:"employment", readTime:8 },
    { id:"ar-039", slug:"tahdith-cv-asalib", title:"أساليب تحديث السيرة الذاتية للسوق المغربي", excerpt:"كيف تحدّث سيرتك الذاتية لتتناسب مع متطلبات أصحاب العمل في المغرب.", category:"employment", readTime:7 },
    { id:"ar-040", slug:"cv-mubtadi-awwal-mara", title:"أول سيرة ذاتية لحديث التخرج في المغرب", excerpt:"دليل الطلاب وحديثي التخرج لإعداد أول سيرة ذاتية احترافية.", category:"employment", readTime:6 },

    // الترجمة
    { id:"ar-041", slug:"tarjama-wathiqa-rasmi", title:"ترجمة الوثائق الرسمية في المغرب", excerpt:"دليل خدمات ترجمة الوثائق الرسمية وما تحتاجه للاعتماد.", category:"translation", readTime:7 },
    { id:"ar-042", slug:"tarjama-arabi-fransawi", title:"الترجمة من العربية إلى الفرنسية: متى تحتاجها", excerpt:"الحالات التي تستوجب ترجمة وثائقك من العربية إلى الفرنسية.", category:"translation", readTime:6 },
    { id:"ar-043", slug:"tarjama-shahada-dirasat", title:"ترجمة الشهادات الدراسية للخارج", excerpt:"كيف تترجم شهادتك الجامعية للتقدم للدراسة أو العمل خارج المغرب.", category:"translation", readTime:7 },
    { id:"ar-044", slug:"tarjama-qadaiya-mahakim", title:"الترجمة القضائية في المغرب", excerpt:"ما هي الترجمة القضائية ومتى تكون إلزامية في الإجراءات القانونية.", category:"translation", readTime:8 },
    { id:"ar-045", slug:"tarjama-inglizy-arabi", title:"الترجمة الإنجليزية العربية للملفات الإدارية", excerpt:"خدمات ترجمة الوثائق الإنجليزية للملفات الإدارية المغربية.", category:"translation", readTime:6 },

    // الهجرة والتأشيرات
    { id:"ar-046", slug:"taashira-uruba-min-maghrib", title:"التأشيرة الأوروبية من المغرب: الدليل الشامل", excerpt:"دليل شامل لطلب تأشيرة شنغن من المغرب: الوثائق والخطوات.", category:"immigration", readTime:10 },
    { id:"ar-047", slug:"taashira-schengen-wathiqa", title:"وثائق تأشيرة شنغن من المغرب: القائمة الكاملة", excerpt:"القائمة الكاملة بوثائق طلب تأشيرة شنغن من المغرب.", category:"immigration", readTime:8 },
    { id:"ar-048", slug:"risalat-dawaa-rasmi", title:"رسالة الدعوة الرسمية: كيف تكتبها", excerpt:"نموذج رسالة دعوة رسمية للتأشيرة وكيفية كتابتها بالطريقة الصحيحة.", category:"immigration", readTime:7 },
    { id:"ar-049", slug:"taashira-canada-maghrib", title:"تأشيرة كندا من المغرب: دليل الوثائق", excerpt:"كيف تتقدم بطلب تأشيرة كندا من المغرب وما الوثائق المطلوبة.", category:"immigration", readTime:9 },
    { id:"ar-050", slug:"iqama-ajnabi-maghrib", title:"الإقامة للأجانب في المغرب: الإجراءات والوثائق", excerpt:"دليل شامل للأجانب الراغبين في الإقامة في المغرب.", category:"immigration", readTime:9 },

    // مدن أخرى
    { id:"ar-051", slug:"katib-umumi-agadir", title:"كاتب عمومي أكادير: الخدمات الإدارية في عاصمة السوس", excerpt:"دليل خدمات الكاتب العمومي في أكادير ومنطقة سوس ماسة.", category:"agadir", readTime:6 },
    { id:"ar-052", slug:"katib-umumi-meknes", title:"كاتب عمومي مكناس: الخدمات الإدارية", excerpt:"دليل خدمات الكتابة العمومية في مكناس إسماعيل.", category:"meknes", readTime:6 },
    { id:"ar-053", slug:"katib-umumi-oujda", title:"كاتب عمومي وجدة: خدمات في الشرق المغربي", excerpt:"خدمات الكتابة العمومية في وجدة ومنطقة الشرق.", category:"oujda", readTime:6 },
    { id:"ar-054", slug:"katib-umumi-kenitra", title:"كاتب عمومي القنيطرة: الخدمات الإدارية", excerpt:"دليل خدمات الكاتب العمومي في القنيطرة.", category:"kenitra", readTime:6 },
    { id:"ar-055", slug:"katib-umumi-tetouan", title:"كاتب عمومي تطوان: خدمات الكتابة الإدارية", excerpt:"خدمات الكتابة العمومية في تطوان وشمال المغرب.", category:"tetouan", readTime:6 },
    { id:"ar-056", slug:"katib-umumi-eljadida", title:"كاتب عمومي الجديدة: الخدمات الإدارية", excerpt:"دليل خدمات الكتابة العمومية في الجديدة.", category:"eljadida", readTime:6 },
    { id:"ar-057", slug:"katib-umumi-safi", title:"كاتب عمومي آسفي: الخدمات الإدارية", excerpt:"خدمات الكتابة العمومية في آسفي والمنطقة.", category:"safi", readTime:6 },
    { id:"ar-058", slug:"katib-umumi-nador", title:"كاتب عمومي الناظور: خدمات إدارية", excerpt:"دليل خدمات الكاتب العمومي في الناظور.", category:"nador", readTime:6 },
    { id:"ar-059", slug:"katib-umumi-khouribga", title:"كاتب عمومي خريبكة: الخدمات الإدارية", excerpt:"خدمات الكتابة العمومية في خريبكة وإقليم الفسفاط.", category:"khouribga", readTime:6 },
    { id:"ar-060", slug:"katib-umumi-settat", title:"كاتب عمومي سطات: الخدمات الإدارية", excerpt:"دليل خدمات الكاتب العمومي في سطات والمنطقة.", category:"settat", readTime:6 },

    // الأعمال والمقاولات
    { id:"ar-061", slug:"khitab-tijari-ihtirafi", title:"كيف تكتب خطاباً تجارياً احترافياً في المغرب", excerpt:"دليل كتابة الخطابات التجارية الاحترافية للمقاولات والشركات المغربية.", category:"business", readTime:7 },
    { id:"ar-062", slug:"muqawala-saghira-wathiqa", title:"وثائق تأسيس المقاولة الصغيرة في المغرب", excerpt:"قائمة الوثائق الإجراءات اللازمة لتأسيس مقاولة صغيرة في المغرب.", category:"business", readTime:9 },
    { id:"ar-063", slug:"talab-qard-bankiy", title:"كيف تكتب طلب قرض بنكي ناجح في المغرب", excerpt:"أسرار كتابة طلب قرض بنكي يحظى بالموافقة في البنوك المغربية.", category:"business", readTime:8 },
    { id:"ar-064", slug:"ard-tijaria-sharikat", title:"إعداد العرض التجاري للشركات المغربية", excerpt:"كيف تُعد عرضاً تجارياً احترافياً يقنع العميل ويربح الصفقة.", category:"business", readTime:8 },
    { id:"ar-065", slug:"murasala-tijaria-maghrib", title:"المراسلة التجارية الرسمية في المغرب", excerpt:"معايير ومتطلبات المراسلة التجارية الرسمية بين الشركات المغربية.", category:"business", readTime:7 },

    // الخدمات القانونية
    { id:"ar-066", slug:"aqd-bay-maghrib", title:"عقد البيع في المغرب: ما يجب تضمينه", excerpt:"العناصر الأساسية التي يجب أن يتضمنها عقد البيع القانوني في المغرب.", category:"legal", readTime:8 },
    { id:"ar-067", slug:"aqd-ijara-maghrib", title:"عقد الكراء في المغرب: دليل صياغة صحيح", excerpt:"كيف تصيغ عقد كراء قانونياً في المغرب يحمي حقوق الطرفين.", category:"legal", readTime:9 },
    { id:"ar-068", slug:"wakalat-maghrib-anwaa", title:"أنواع التوكيلات الرسمية في المغرب", excerpt:"التوكيلات الرسمية في المغرب: أنواعها وكيفية الحصول عليها.", category:"legal", readTime:7 },
    { id:"ar-069", slug:"aqd-shughul-maghrib", title:"عقد الشغل في المغرب: الحقوق والواجبات", excerpt:"ما يجب أن يتضمنه عقد الشغل القانوني وفق مدونة الشغل المغربية.", category:"legal", readTime:9 },
    { id:"ar-070", slug:"tasrih-rasmi-muhan", title:"التصريحات الرسمية في المغرب: متى وكيف", excerpt:"متى تحتاج تصريحاً رسمياً وكيف تكتبه بالطريقة المعتمدة.", category:"legal", readTime:7 },

    // الخدمات الرقمية
    { id:"ar-071", slug:"malaf-pdf-rasmi", title:"إعداد الملفات الرسمية بتنسيق PDF في المغرب", excerpt:"أدوات وطرق إعداد الملفات الرسمية PDF للجهات الحكومية.", category:"digital", readTime:6 },
    { id:"ar-072", slug:"istimarat-hukumia-online", title:"ملء الاستمارات الحكومية الإلكترونية في المغرب", excerpt:"دليل ملء الاستمارات الإلكترونية على المنصات الحكومية المغربية.", category:"digital", readTime:7 },
    { id:"ar-073", slug:"khidmat-waatisap-baad", title:"الخدمات الإدارية عن بُعد عبر واتساب في المغرب", excerpt:"كيف تحصل على خدمات الكاتب العمومي عن بُعد عبر واتساب.", category:"digital", readTime:5 },
    { id:"ar-074", slug:"tahwil-wathiqa-raqmia", title:"تحويل الوثائق الورقية إلى رقمية في المغرب", excerpt:"كيف تحوّل وثائقك الورقية إلى ملفات رقمية قابلة للتحرير.", category:"digital", readTime:6 },
    { id:"ar-075", slug:"word-wathiqa-tansiqa", title:"تنسيق الوثائق الرسمية ببرنامج Word في المغرب", excerpt:"كيف تنسّق وثائقك الرسمية لتبدو احترافية ومقبولة رسمياً.", category:"digital", readTime:6 },

    // الحالة المدنية
    { id:"ar-076", slug:"wathiqa-halat-madania-maghrib", title:"وثائق الحالة المدنية في المغرب: الدليل الكامل", excerpt:"قائمة شاملة بوثائق الحالة المدنية في المغرب وكيفية استخراجها.", category:"civil", readTime:8 },
    { id:"ar-077", slug:"aqd-izdiad-istikraj", title:"استخراج عقد الازدياد في المغرب", excerpt:"إجراءات استخراج عقد الازدياد أو نسخة منه في المغرب.", category:"civil", readTime:6 },
    { id:"ar-078", slug:"wathiqa-zawaj-maghrib", title:"وثائق الزواج في المغرب: القائمة الكاملة", excerpt:"جميع الوثائق المطلوبة لإتمام عقد الزواج القانوني في المغرب.", category:"civil", readTime:8 },
    { id:"ar-079", slug:"iqrar-nazara-maghrib", title:"إقرار نزاهة الجنسية والوضعية العسكرية", excerpt:"الوثائق المتعلقة بالوضعية العسكرية وشهادة عدم المحكومية.", category:"civil", readTime:7 },
    { id:"ar-080", slug:"nasab-idari-wathiqa", title:"السيرة الإدارية ووثيقة النسب في المغرب", excerpt:"ما هي السيرة الإدارية ومتى تحتاج إليها في إجراءاتك.", category:"civil", readTime:6 },

    // مواضيع عامة
    { id:"ar-081", slug:"katib-umumi-tarikh-maghrib", title:"تاريخ مهنة الكاتب العمومي في المغرب", excerpt:"نبذة تاريخية عن مهنة الكاتب العمومي في المغرب وتطورها.", category:"general", readTime:7 },
    { id:"ar-082", slug:"katib-umumi-vs-muhami-maghrib", title:"الكاتب العمومي والمحامي: متى تحتاج كل منهما", excerpt:"الفرق بين الكاتب العمومي والمحامي ومتى تلجأ لكل منهما.", category:"general", readTime:7 },
    { id:"ar-083", slug:"lughat-idaria-maghrib-arabi-fransawi", title:"اللغة العربية والفرنسية في الإدارة المغربية", excerpt:"متى تستخدم العربية ومتى تستخدم الفرنسية في المراسلات الرسمية.", category:"general", readTime:7 },
    { id:"ar-084", slug:"hifz-wathiqa-muhim", title:"أهمية حفظ الوثائق الإدارية والتنظيم الجيد", excerpt:"كيف تنظم وثائقك الإدارية وتحفظها للاستخدام المستقبلي.", category:"general", readTime:5 },
    { id:"ar-085", slug:"taboula-khidmat-baad", title:"taboula.com: كاتب عمومي في خدمتك عن بُعد", excerpt:"كيف نقدم خدماتنا عبر الإنترنت وواتساب لجميع مدن المغرب.", category:"general", readTime:5 },
    { id:"ar-086", slug:"katib-umumi-sale", title:"كاتب عمومي سلا: الخدمات الإدارية", excerpt:"خدمات الكتابة العمومية في سلا ومنطقة الرباط سلا القنيطرة.", category:"sale", readTime:6 },
    { id:"ar-087", slug:"katib-umumi-temara", title:"كاتب عمومي تمارة: الخدمات الإدارية", excerpt:"دليل خدمات الكاتب العمومي في تمارة.", category:"temara", readTime:6 },
    { id:"ar-088", slug:"katib-umumi-berrechid", title:"كاتب عمومي برشيد: الخدمات الإدارية", excerpt:"خدمات الكتابة العمومية في برشيد وإقليم سطات.", category:"berrechid", readTime:6 },
    { id:"ar-089", slug:"katib-umumi-larache", title:"كاتب عمومي العرائش: خدمات إدارية", excerpt:"دليل خدمات الكتابة العمومية في العرائش.", category:"larache", readTime:6 },
    { id:"ar-090", slug:"katib-umumi-essaouira", title:"كاتب عمومي الصويرة: الخدمات الإدارية", excerpt:"خدمات الكتابة العمومية في الصويرة.", category:"essaouira", readTime:6 },
    { id:"ar-091", slug:"taashira-amrika-wathiqa-maghrib", title:"تأشيرة أمريكا من المغرب: الوثائق المطلوبة", excerpt:"قائمة الوثائق الضرورية للتقدم بطلب تأشيرة أمريكية من المغرب.", category:"immigration", readTime:9 },
    { id:"ar-092", slug:"taashira-ingiltira-barid", title:"تأشيرة بريطانيا من المغرب بعد البريكسيت", excerpt:"إجراءات ووثائق طلب تأشيرة المملكة المتحدة من المغرب.", category:"immigration", readTime:8 },
    { id:"ar-093", slug:"iqama-ajnabi-casablanca", title:"الإقامة للأجانب في الدار البيضاء", excerpt:"إجراءات الحصول على الإقامة في الدار البيضاء للأجانب.", category:"immigration", readTime:8 },
    { id:"ar-094", slug:"wathiqa-tasriha-sayr", title:"وثيقة التصريح بالسير في المغرب", excerpt:"متى تحتاج تصريحاً بالسير وكيف تحصل عليه.", category:"admin", readTime:6 },
    { id:"ar-095", slug:"malaf-minha-talibiya", title:"ملف المنحة الدراسية في المغرب", excerpt:"كيف تُعد ملف المنحة الدراسية وتقدمه للجهات المختصة.", category:"admin", readTime:8 },
    { id:"ar-096", slug:"talab-ijadat-sanawiya", title:"طلب الإجازة السنوية في المغرب: الإجراءات الرسمية", excerpt:"كيف تكتب طلب الإجازة السنوية بالشكل القانوني الصحيح.", category:"employment", readTime:6 },
    { id:"ar-097", slug:"shikaya-mustawlif", title:"كيف تقدم شكاية ضد موظف عمومي في المغرب", excerpt:"خطوات تقديم شكاية ضد موظف في الإدارة العامة المغربية.", category:"admin", readTime:8 },
    { id:"ar-098", slug:"khidmat-istimarat-tamoum", title:"ملء استمارات التأمين في المغرب", excerpt:"كيف تملأ استمارات شركات التأمين بشكل صحيح في المغرب.", category:"digital", readTime:6 },
    { id:"ar-099", slug:"katib-umumi-benimelall", title:"كاتب عمومي بني ملال: الخدمات الإدارية", excerpt:"خدمات الكتابة العمومية في بني ملال وإقليم تادلة.", category:"benimelall", readTime:6 },
    { id:"ar-100", slug:"lmadha-taboula-ikhtiyarak", title:"لماذا taboula.com هو خيارك الأفضل للخدمات الإدارية", excerpt:"ما يميزنا عن غيرنا وكيف نضمن لك أفضل النتائج الإدارية في المغرب.", category:"general", readTime:5 },
  ],

  fr: [
    { id:"fr-001", slug:"ecrivain-public-mohammedia", title:"Écrivain Public à Mohammedia : Services Complets", excerpt:"Guide des services d'écriture publique à Mohammedia. taboula.com à votre service.", category:"mohammedia", readTime:6 },
    { id:"fr-002", slug:"services-administratifs-mohammedia", title:"Services Administratifs à Mohammedia", excerpt:"Tout savoir sur les démarches administratives à Mohammedia, Maroc.", category:"mohammedia", readTime:7 },
    { id:"fr-003", slug:"cv-professionnel-mohammedia", title:"CV Professionnel à Mohammedia : Se Démarquer", excerpt:"Comment rédiger un CV professionnel efficace pour le marché de Mohammedia et Casablanca.", category:"mohammedia", readTime:7 },
    { id:"fr-004", slug:"taboula-services-maroc", title:"taboula.com : Écrivain Public dans toutes les villes du Maroc", excerpt:"Comment taboula.com intervient dans toutes les villes marocaines à distance.", category:"general", readTime:5 },
    { id:"fr-005", slug:"ecrivain-public-casablanca", title:"Écrivain Public Casablanca : Services Administratifs", excerpt:"Services d'écriture publique à Casablanca. taboula.com disponible par WhatsApp.", category:"casablanca", readTime:6 },
    { id:"fr-006", slug:"ecrivain-public-rabat", title:"Écrivain Public Rabat : Services dans la Capitale", excerpt:"Services administratifs professionnels à Rabat, capitale du Maroc.", category:"rabat", readTime:6 },
    { id:"fr-007", slug:"ecrivain-public-marrakech", title:"Écrivain Public Marrakech : Aide Administrative", excerpt:"Services d'écriture publique à Marrakech pour résidents et expatriés.", category:"marrakech", readTime:6 },
    { id:"fr-008", slug:"ecrivain-public-tanger", title:"Écrivain Public Tanger : Services Bilingues", excerpt:"Services bilingues arabe-français à Tanger. Dossiers Europe et Maroc.", category:"tanger", readTime:6 },
    { id:"fr-009", slug:"rediger-lettre-administrative-maroc", title:"Rédiger une Lettre Administrative au Maroc", excerpt:"Guide pratique pour rédiger une lettre administrative efficace au Maroc.", category:"admin", readTime:8 },
    { id:"fr-010", slug:"reclamation-administrative-maroc", title:"Réclamation Administrative au Maroc : Comment Procéder", excerpt:"Guide étape par étape pour déposer une réclamation administrative efficace.", category:"admin", readTime:8 },
    { id:"fr-011", slug:"cv-professionnel-maroc-2024", title:"CV Professionnel au Maroc 2024", excerpt:"Comment rédiger un CV qui se démarque sur le marché du travail marocain.", category:"employment", readTime:8 },
    { id:"fr-012", slug:"lettre-motivation-maroc", title:"Lettre de Motivation au Maroc : Guide Complet", excerpt:"Rédiger une lettre de motivation percutante pour le marché marocain.", category:"employment", readTime:8 },
    { id:"fr-013", slug:"visa-schengen-maroc", title:"Visa Schengen depuis le Maroc : Dossier Complet", excerpt:"Tous les documents pour une demande de visa Schengen réussie.", category:"immigration", readTime:9 },
    { id:"fr-014", slug:"traduction-documents-maroc", title:"Traduction de Documents au Maroc", excerpt:"Services de traduction officielle pour documents administratifs au Maroc.", category:"translation", readTime:6 },
    { id:"fr-015", slug:"lettre-invitation-visa-maroc", title:"Lettre d'Invitation pour Visa : Modèle Officiel", excerpt:"Comment rédiger une lettre d'invitation conforme pour une demande de visa.", category:"immigration", readTime:7 },
    { id:"fr-016", slug:"titre-sejour-maroc-etrangers", title:"Titre de Séjour au Maroc pour Étrangers", excerpt:"Démarches et documents pour obtenir un titre de séjour au Maroc.", category:"immigration", readTime:8 },
    { id:"fr-017", slug:"contrat-travail-maroc", title:"Contrat de Travail au Maroc : Points Essentiels", excerpt:"Ce que doit contenir un contrat de travail légal selon le Code du Travail marocain.", category:"legal", readTime:9 },
    { id:"fr-018", slug:"creation-entreprise-maroc", title:"Créer une Entreprise au Maroc : Démarches", excerpt:"Formalités administratives pour créer votre entreprise au Maroc.", category:"business", readTime:9 },
    { id:"fr-019", slug:"expatries-maroc-administratif", title:"Expatriés au Maroc : Guide Administratif Complet", excerpt:"Tout ce que les expatriés doivent savoir sur les formalités administratives au Maroc.", category:"immigration", readTime:9 },
    { id:"fr-020", slug:"traduction-arabe-francais-officielle", title:"Traduction Arabe-Français Officielle au Maroc", excerpt:"Quand et comment obtenir une traduction officielle arabe-français au Maroc.", category:"translation", readTime:6 },
    { id:"fr-021", slug:"ecrivain-public-agadir", title:"Écrivain Public Agadir : Services Administratifs", excerpt:"Services d'écriture publique à Agadir et la région Souss-Massa.", category:"agadir", readTime:6 },
    { id:"fr-022", slug:"demande-pret-bancaire-maroc", title:"Demande de Prêt Bancaire au Maroc : Rédiger son Dossier", excerpt:"Comment constituer un dossier de demande de crédit bancaire solide au Maroc.", category:"business", readTime:8 },
    { id:"fr-023", slug:"apostille-maroc-legalisation", title:"Apostille et Légalisation au Maroc", excerpt:"Comment faire apostiller ou légaliser un document marocain.", category:"legal", readTime:7 },
    { id:"fr-024", slug:"acte-naissance-maroc", title:"Acte de Naissance au Maroc : Comment l'Obtenir", excerpt:"Procédures pour obtenir un acte de naissance au Maroc.", category:"civil", readTime:6 },
    { id:"fr-025", slug:"recours-administratif-maroc", title:"Recours Administratif au Maroc", excerpt:"Comment contester une décision administrative au Maroc.", category:"admin", readTime:8 },
    { id:"fr-026", slug:"documents-mariage-maroc", title:"Documents Mariage au Maroc : Liste Complète", excerpt:"Tous les documents nécessaires pour un mariage légal au Maroc.", category:"civil", readTime:8 },
    { id:"fr-027", slug:"formulaires-enligne-maroc", title:"Formulaires Administratifs en Ligne au Maroc", excerpt:"Guide pour compléter les formulaires administratifs sur les plateformes marocaines.", category:"digital", readTime:6 },
    { id:"fr-028", slug:"visa-canada-maroc", title:"Visa Canada depuis le Maroc : Guide Pratique", excerpt:"Documents et démarches pour une demande de visa canadien depuis le Maroc.", category:"immigration", readTime:9 },
    { id:"fr-029", slug:"carte-nationale-maroc-renouvellement", title:"Carte Nationale au Maroc : Renouvellement", excerpt:"Procédures de renouvellement de la CIN marocaine.", category:"civil", readTime:6 },
    { id:"fr-030", slug:"ecrivain-public-whatsapp-maroc", title:"Écrivain Public par WhatsApp au Maroc", excerpt:"Comment bénéficier des services d'écrivain public à distance via WhatsApp.", category:"digital", readTime:5 },
    { id:"fr-031", slug:"ecrivain-public-fes", title:"Écrivain Public Fès : Services Administratifs", excerpt:"Services d'écriture publique à Fès, ville historique du Maroc.", category:"fes", readTime:6 },
    { id:"fr-032", slug:"ecrivain-public-meknes", title:"Écrivain Public Meknès : Services Administratifs", excerpt:"Services d'écriture publique à Meknès.", category:"meknes", readTime:6 },
    { id:"fr-033", slug:"lettre-demission-maroc", title:"Lettre de Démission au Maroc", excerpt:"Comment rédiger une lettre de démission professionnelle et légale.", category:"employment", readTime:6 },
    { id:"fr-034", slug:"procuration-maroc-types", title:"Procuration au Maroc : Types et Démarches", excerpt:"Les différents types de procurations et comment les obtenir au Maroc.", category:"legal", readTime:7 },
    { id:"fr-035", slug:"traduction-diplome-etranger", title:"Traduction de Diplôme pour l'Étranger", excerpt:"Comment faire traduire son diplôme marocain pour une utilisation internationale.", category:"translation", readTime:7 },
    { id:"fr-036", slug:"marche-emploi-casablanca", title:"Marché de l'Emploi à Casablanca : Opportunités 2024", excerpt:"Analyse du marché du travail à Casablanca et secteurs qui recrutent.", category:"casablanca", readTime:8 },
    { id:"fr-037", slug:"aide-sociale-maroc-dossier", title:"Aides Sociales au Maroc : Constituer son Dossier", excerpt:"Comment préparer un dossier de demande d'aide sociale au Maroc.", category:"admin", readTime:8 },
    { id:"fr-038", slug:"retraite-maroc-documents", title:"Dossier Retraite au Maroc : Documents et Procédure", excerpt:"Comment préparer et soumettre votre dossier de retraite.", category:"admin", readTime:9 },
    { id:"fr-039", slug:"ecrivain-public-kenitra", title:"Écrivain Public Kénitra : Services", excerpt:"Services d'écriture publique à Kénitra.", category:"kenitra", readTime:6 },
    { id:"fr-040", slug:"traduction-contrat-arabe", title:"Traduction de Contrat Arabe-Français", excerpt:"Service de traduction de contrats officiels entre arabe et français.", category:"translation", readTime:6 },
    { id:"fr-041", slug:"permis-construire-maroc", title:"Permis de Construire au Maroc : Dossier", excerpt:"Documents et démarches pour un permis de construire au Maroc.", category:"admin", readTime:9 },
    { id:"fr-042", slug:"inscription-universite-maroc", title:"Inscription Université au Maroc : Dossier", excerpt:"Constitution d'un dossier d'inscription universitaire au Maroc.", category:"admin", readTime:7 },
    { id:"fr-043", slug:"ecrivain-public-oujda", title:"Écrivain Public Oujda : Services Est Maroc", excerpt:"Services d'écriture publique à Oujda et l'Oriental.", category:"oujda", readTime:6 },
    { id:"fr-044", slug:"assurance-maladie-amo-maroc", title:"AMO au Maroc : Inscription et Documents", excerpt:"Comment s'inscrire à l'assurance maladie obligatoire au Maroc.", category:"admin", readTime:7 },
    { id:"fr-045", slug:"taboula-pourquoi-choisir", title:"Pourquoi Choisir taboula.com pour vos Démarches", excerpt:"Ce qui fait la différence de nos services administratifs au Maroc.", category:"general", readTime:5 },
    { id:"fr-046", slug:"ecrivain-public-tetouan", title:"Écrivain Public Tétouan : Services Nord Maroc", excerpt:"Services administratifs à Tétouan et le nord du Maroc.", category:"tetouan", readTime:6 },
    { id:"fr-047", slug:"traduction-documents-medicaux", title:"Traduction Documents Médicaux au Maroc", excerpt:"Traduction de documents médicaux entre arabe, français et anglais.", category:"translation", readTime:6 },
    { id:"fr-048", slug:"correspondance-commerciale-maroc", title:"Correspondance Commerciale au Maroc", excerpt:"Normes et pratiques de la correspondance commerciale au Maroc.", category:"business", readTime:7 },
    { id:"fr-049", slug:"visa-refus-recours-maroc", title:"Visa Refusé depuis le Maroc : Recours", excerpt:"Que faire après un refus de visa depuis le Maroc.", category:"immigration", readTime:8 },
    { id:"fr-050", slug:"ecrivain-public-eljadida", title:"Écrivain Public El Jadida : Services", excerpt:"Services d'écriture publique à El Jadida.", category:"eljadida", readTime:6 },
  ],

  en: [
    { id:"en-001", slug:"public-writer-mohammedia", title:"Public Writer in Mohammedia: Complete Service Guide", excerpt:"Everything about public writing services in Mohammedia, Morocco. taboula.com serves all cities.", category:"mohammedia", readTime:6 },
    { id:"en-002", slug:"administrative-services-mohammedia", title:"Administrative Services in Mohammedia, Morocco", excerpt:"A complete guide to administrative assistance in Mohammedia.", category:"mohammedia", readTime:7 },
    { id:"en-003", slug:"taboula-public-writer-morocco", title:"taboula.com: Public Writer Across All Moroccan Cities", excerpt:"How taboula.com provides remote public writing services to all cities in Morocco.", category:"general", readTime:5 },
    { id:"en-004", slug:"public-writer-casablanca", title:"Public Writer in Casablanca: Administrative Help", excerpt:"Professional administrative writing services in Casablanca, Morocco.", category:"casablanca", readTime:6 },
    { id:"en-005", slug:"administrative-assistance-morocco", title:"Administrative Assistance in Morocco: Full Guide", excerpt:"Your complete guide to getting administrative help across Morocco.", category:"admin", readTime:7 },
    { id:"en-006", slug:"visa-application-morocco-guide", title:"Visa Application from Morocco: Documents & Process", excerpt:"Complete guide to visa applications from Morocco for Europe, USA, Canada and more.", category:"immigration", readTime:9 },
    { id:"en-007", slug:"professional-cv-morocco", title:"Professional CV in Morocco: What Works", excerpt:"How to craft a CV that gets results in the Moroccan job market.", category:"employment", readTime:7 },
    { id:"en-008", slug:"document-translation-morocco", title:"Document Translation in Morocco: Services Guide", excerpt:"Professional document translation between Arabic, French, English and Spanish in Morocco.", category:"translation", readTime:6 },
    { id:"en-009", slug:"expat-guide-morocco-admin", title:"Expat Administrative Guide for Morocco", excerpt:"Everything expats and foreigners need to know about Moroccan administrative procedures.", category:"immigration", readTime:9 },
    { id:"en-010", slug:"schengen-visa-morocco-checklist", title:"Schengen Visa from Morocco: Complete Checklist", excerpt:"Every document you need for a successful Schengen visa from Morocco.", category:"immigration", readTime:9 },
    { id:"en-011", slug:"public-writer-marrakech", title:"Public Writer in Marrakech: Tourist & Expat Help", excerpt:"Administrative help for tourists and expats in Marrakech, Morocco.", category:"marrakech", readTime:6 },
    { id:"en-012", slug:"public-writer-tangier", title:"Public Writer in Tangier: Cross-Border Services", excerpt:"Administrative and translation services in Tangier for Morocco-Europe connections.", category:"tanger", readTime:6 },
    { id:"en-013", slug:"residence-permit-morocco", title:"Residence Permit in Morocco: Step-by-Step", excerpt:"How to apply for a residence permit in Morocco as a foreign national.", category:"immigration", readTime:8 },
    { id:"en-014", slug:"invitation-letter-visa-morocco", title:"Invitation Letter for Visa from Morocco", excerpt:"How to write an official invitation letter for a visa application from Morocco.", category:"immigration", readTime:7 },
    { id:"en-015", slug:"cover-letter-morocco", title:"Cover Letter for Jobs in Morocco: Tips & Examples", excerpt:"Writing a compelling cover letter for the Moroccan job market.", category:"employment", readTime:7 },
    { id:"en-016", slug:"official-letter-writing-morocco", title:"Official Letter Writing in Morocco: Guide", excerpt:"How to write official letters that get results in Moroccan institutions.", category:"admin", readTime:7 },
    { id:"en-017", slug:"living-mohammedia-expat", title:"Living in Mohammedia as an Expat: Admin Guide", excerpt:"Practical administrative info for expats living in Mohammedia, Morocco.", category:"mohammedia", readTime:8 },
    { id:"en-018", slug:"business-setup-morocco", title:"Setting Up a Business in Morocco: Admin Requirements", excerpt:"Administrative steps for starting a business in Morocco.", category:"business", readTime:9 },
    { id:"en-019", slug:"canada-visa-morocco", title:"Canadian Visa from Morocco: Full Guide", excerpt:"Step-by-step guide to applying for a Canadian visa from Morocco.", category:"immigration", readTime:9 },
    { id:"en-020", slug:"notarized-translation-morocco", title:"Certified Translation in Morocco: When You Need It", excerpt:"When certified or notarized translation is required in Morocco.", category:"translation", readTime:7 },
    { id:"en-021", slug:"complaint-letter-morocco", title:"Writing an Administrative Complaint in Morocco", excerpt:"How to write an official complaint that gets results in Morocco.", category:"admin", readTime:8 },
    { id:"en-022", slug:"public-writer-agadir", title:"Public Writer in Agadir: Administrative Services", excerpt:"Public writing services in Agadir and the Souss-Massa region.", category:"agadir", readTime:6 },
    { id:"en-023", slug:"morocco-civil-documents", title:"Civil Status Documents in Morocco: Complete List", excerpt:"All civil status documents in Morocco and how to obtain them.", category:"civil", readTime:7 },
    { id:"en-024", slug:"whatsapp-admin-services-morocco", title:"Getting Administrative Help via WhatsApp in Morocco", excerpt:"How taboula.com's WhatsApp service works for remote administrative assistance.", category:"digital", readTime:5 },
    { id:"en-025", slug:"lease-contract-morocco", title:"Lease Contract in Morocco: Legal Requirements", excerpt:"What a legal rental contract must contain in Morocco.", category:"legal", readTime:8 },
    { id:"en-026", slug:"morocco-job-market-2024", title:"Morocco Job Market 2024: Sectors & Opportunities", excerpt:"Overview of Morocco's employment landscape and growing sectors.", category:"employment", readTime:8 },
    { id:"en-027", slug:"apostille-moroccan-documents", title:"Apostille for Moroccan Documents: How It Works", excerpt:"How to apostille Moroccan documents for international use.", category:"legal", readTime:7 },
    { id:"en-028", slug:"driving-license-morocco-foreign", title:"Foreign Driving License in Morocco: Exchange Process", excerpt:"How to exchange your foreign driving license for a Moroccan one.", category:"admin", readTime:7 },
    { id:"en-029", slug:"health-insurance-morocco-amO", title:"Health Insurance in Morocco: AMO Enrollment", excerpt:"How to enroll in Morocco's mandatory health insurance system.", category:"admin", readTime:7 },
    { id:"en-030", slug:"spanish-translation-morocco", title:"Spanish Translation Services in Morocco", excerpt:"Professional Spanish translation for documents in Morocco.", category:"translation", readTime:5 },
    { id:"en-031", slug:"power-attorney-morocco", title:"Power of Attorney in Morocco: Guide", excerpt:"How to set up a power of attorney in Morocco.", category:"legal", readTime:7 },
    { id:"en-032", slug:"bank-account-morocco-foreigner", title:"Opening a Bank Account in Morocco as a Foreigner", excerpt:"Documents and procedures to open a bank account in Morocco.", category:"immigration", readTime:7 },
    { id:"en-033", slug:"student-visa-morocco", title:"Student Visa from Morocco: Guide", excerpt:"Applying for a student visa to study abroad from Morocco.", category:"immigration", readTime:9 },
    { id:"en-034", slug:"marriage-documents-morocco", title:"Marriage Documents in Morocco: Full Checklist", excerpt:"All documents needed for a legal marriage in Morocco.", category:"civil", readTime:8 },
    { id:"en-035", slug:"public-writer-rabat", title:"Public Writer in Rabat: Administrative Services", excerpt:"Public writing services in Rabat, Morocco's administrative capital.", category:"rabat", readTime:6 },
    { id:"en-036", slug:"retirement-paperwork-morocco", title:"Retirement Documents in Morocco: Full Guide", excerpt:"How to prepare your retirement file in Morocco.", category:"admin", readTime:8 },
    { id:"en-037", slug:"english-cv-morocco-international", title:"English CV for International Jobs in Morocco", excerpt:"How to tailor your English CV for international companies in Morocco.", category:"employment", readTime:7 },
    { id:"en-038", slug:"pdf-documents-morocco", title:"Creating Official PDF Documents for Morocco", excerpt:"How to prepare official PDF documents accepted by Moroccan institutions.", category:"digital", readTime:6 },
    { id:"en-039", slug:"visa-refusal-morocco", title:"Visa Refusal from Morocco: What To Do", excerpt:"Your options and next steps after a visa refusal from Morocco.", category:"immigration", readTime:8 },
    { id:"en-040", slug:"administrative-appeals-morocco", title:"Administrative Appeals in Morocco: Process Guide", excerpt:"How to contest an administrative decision in Morocco.", category:"admin", readTime:8 },
    { id:"en-041", slug:"public-writer-fes", title:"Public Writer in Fes: Administrative Services", excerpt:"Public writing services in Fes, the cultural capital of Morocco.", category:"fes", readTime:6 },
    { id:"en-042", slug:"work-permit-morocco", title:"Work Permit in Morocco for Foreigners", excerpt:"Requirements and process for obtaining a work permit in Morocco.", category:"immigration", readTime:8 },
    { id:"en-043", slug:"online-forms-morocco", title:"Completing Online Administrative Forms in Morocco", excerpt:"Guide to navigating Morocco's government digital platforms.", category:"digital", readTime:6 },
    { id:"en-044", slug:"loan-application-morocco", title:"Bank Loan Application in Morocco: Writing Your File", excerpt:"How to write a compelling bank loan application in Morocco.", category:"business", readTime:8 },
    { id:"en-045", slug:"social-aid-morocco", title:"Social Aid in Morocco: How to Apply", excerpt:"Documents and steps to apply for government social assistance in Morocco.", category:"admin", readTime:8 },
    { id:"en-046", slug:"public-writer-meknes", title:"Public Writer in Meknès: Services", excerpt:"Public writing and administrative services in Meknès.", category:"meknes", readTime:6 },
    { id:"en-047", slug:"arabic-translation-english-morocco", title:"Arabic to English Translation in Morocco", excerpt:"Professional Arabic-English translation for official documents.", category:"translation", readTime:6 },
    { id:"en-048", slug:"building-permit-morocco", title:"Building Permit in Morocco: Required Documents", excerpt:"What you need to apply for a building permit in Morocco.", category:"admin", readTime:8 },
    { id:"en-049", slug:"company-registration-morocco", title:"Company Registration in Morocco: Step by Step", excerpt:"Complete guide to registering a company in Morocco.", category:"business", readTime:9 },
    { id:"en-050", slug:"why-taboula-morocco", title:"Why Choose taboula.com for Administrative Services in Morocco", excerpt:"What sets taboula.com apart for public writing across Morocco.", category:"general", readTime:5 },
  ],

  es: [
    { id:"es-001", slug:"escritor-publico-mohammedia", title:"Escritor Público en Mohammedia: Guía Completa", excerpt:"Todo sobre los servicios de escritura pública en Mohammedia, Marruecos.", category:"mohammedia", readTime:6 },
    { id:"es-002", slug:"servicios-administrativos-marruecos", title:"Servicios Administrativos en Marruecos con taboula.com", excerpt:"Guía completa de asistencia administrativa en todas las ciudades de Marruecos.", category:"general", readTime:7 },
    { id:"es-003", slug:"escritor-publico-casablanca", title:"Escritor Público en Casablanca: Servicios Administrativos", excerpt:"Servicios profesionales de escritura pública en Casablanca.", category:"casablanca", readTime:6 },
    { id:"es-004", slug:"espanoles-marruecos-tramites", title:"Españoles en Marruecos: Guía de Trámites", excerpt:"Todo lo que necesitan saber los ciudadanos españoles para trámites en Marruecos.", category:"immigration", readTime:8 },
    { id:"es-005", slug:"visa-europa-marruecos-documentos", title:"Visado Europeo desde Marruecos: Documentos", excerpt:"Lista completa de documentos para solicitar el visado europeo desde Marruecos.", category:"immigration", readTime:9 },
    { id:"es-006", slug:"cv-profesional-marruecos", title:"CV Profesional en Marruecos: Cómo Destacar", excerpt:"Cómo crear un CV que destaque en el mercado laboral marroquí.", category:"employment", readTime:7 },
    { id:"es-007", slug:"traduccion-documentos-marruecos", title:"Traducción de Documentos en Marruecos", excerpt:"Servicios de traducción árabe, francés, inglés y español en Marruecos.", category:"translation", readTime:6 },
    { id:"es-008", slug:"escritor-publico-marrakech", title:"Escritor Público en Marrakech: Ayuda Administrativa", excerpt:"Servicios administrativos para turistas y expatriados en Marrakech.", category:"marrakech", readTime:6 },
    { id:"es-009", slug:"escritor-publico-tanger", title:"Escritor Público en Tánger: Servicios Bilingues", excerpt:"Servicios administrativos bilingues árabe-español en Tánger.", category:"tanger", readTime:6 },
    { id:"es-010", slug:"permiso-residencia-marruecos", title:"Permiso de Residencia en Marruecos para Extranjeros", excerpt:"Cómo solicitar el permiso de residencia en Marruecos.", category:"immigration", readTime:8 },
    { id:"es-011", slug:"carta-invitacion-visa-marruecos", title:"Carta de Invitación para Visado: Modelo", excerpt:"Cómo redactar una carta de invitación oficial para visado.", category:"immigration", readTime:7 },
    { id:"es-012", slug:"crear-empresa-marruecos", title:"Crear una Empresa en Marruecos: Trámites", excerpt:"Pasos administrativos para crear una empresa en Marruecos.", category:"business", readTime:9 },
    { id:"es-013", slug:"traduccion-arabe-espanol-marruecos", title:"Traducción Árabe-Español en Marruecos", excerpt:"Servicios de traducción árabe-español para documentos oficiales.", category:"translation", readTime:6 },
    { id:"es-014", slug:"expatriados-marruecos-guia-admin", title:"Expatriados en Marruecos: Guía Administrativa", excerpt:"Todo lo que deben saber los expatriados sobre trámites en Marruecos.", category:"immigration", readTime:9 },
    { id:"es-015", slug:"visa-canada-marruecos-espanol", title:"Visado Canadá desde Marruecos en Español", excerpt:"Guía en español para solicitar visado canadiense desde Marruecos.", category:"immigration", readTime:9 },
    { id:"es-016", slug:"contrato-arrendamiento-marruecos", title:"Contrato de Arrendamiento en Marruecos", excerpt:"Requisitos y cláusulas esenciales de un contrato de alquiler en Marruecos.", category:"legal", readTime:8 },
    { id:"es-017", slug:"mercado-laboral-marruecos-2024", title:"Mercado Laboral en Marruecos 2024", excerpt:"Panorama del mercado de trabajo en Marruecos y sectores con más empleo.", category:"employment", readTime:8 },
    { id:"es-018", slug:"tanger-espana-cerca-servicios", title:"Tánger y España: Servicios Transfronterizos", excerpt:"Servicios administrativos para el corredor Tánger-España.", category:"tanger", readTime:6 },
    { id:"es-019", slug:"documentos-matrimonio-marruecos", title:"Documentos Matrimonio en Marruecos: Lista Completa", excerpt:"Todos los documentos para casarse legalmente en Marruecos.", category:"civil", readTime:8 },
    { id:"es-020", slug:"taboula-whatsapp-marruecos", title:"Escritor Público por WhatsApp en Marruecos con taboula.com", excerpt:"Cómo funciona nuestro servicio a distancia por WhatsApp en Marruecos.", category:"digital", readTime:5 },
    { id:"es-021", slug:"reclamacion-administrativa-marruecos", title:"Reclamación Administrativa en Marruecos", excerpt:"Cómo presentar una reclamación oficial ante una institución marroquí.", category:"admin", readTime:8 },
    { id:"es-022", slug:"apostilla-documentos-marruecos", title:"Apostilla en Marruecos: Legalización de Documentos", excerpt:"Cómo apostillar un documento marroquí para uso internacional.", category:"legal", readTime:7 },
    { id:"es-023", slug:"escritor-publico-agadir", title:"Escritor Público en Agadir: Servicios", excerpt:"Servicios de escritura pública en Agadir y la región Souss.", category:"agadir", readTime:6 },
    { id:"es-024", slug:"cuenta-bancaria-marruecos-extranjero", title:"Abrir Cuenta Bancaria en Marruecos como Extranjero", excerpt:"Documentos y trámites para abrir una cuenta bancaria en Marruecos.", category:"immigration", readTime:7 },
    { id:"es-025", slug:"traduccion-certificada-marruecos", title:"Traducción Certificada en Marruecos", excerpt:"Cuándo se necesita traducción certificada o jurada en Marruecos.", category:"translation", readTime:7 },
    { id:"es-026", slug:"registro-empresa-marruecos", title:"Registro de Empresa en Marruecos: Paso a Paso", excerpt:"Guía completa del proceso de registro empresarial en Marruecos.", category:"business", readTime:9 },
    { id:"es-027", slug:"escritor-publico-rabat", title:"Escritor Público en Rabat: Servicios en la Capital", excerpt:"Servicios administrativos en Rabat, capital administrativa de Marruecos.", category:"rabat", readTime:6 },
    { id:"es-028", slug:"declaracion-oficial-marruecos", title:"Declaraciones Oficiales en Marruecos", excerpt:"Guía para redactar declaraciones oficiales en Marruecos.", category:"legal", readTime:7 },
    { id:"es-029", slug:"traduccion-ingles-arabe-marruecos", title:"Traducción Inglés-Árabe en Marruecos", excerpt:"Servicios de traducción inglés-árabe para documentos en Marruecos.", category:"translation", readTime:6 },
    { id:"es-030", slug:"por-que-elegir-taboula", title:"Por Qué Elegir taboula.com para Trámites en Marruecos", excerpt:"Lo que diferencia a taboula.com en servicios administrativos en Marruecos.", category:"general", readTime:5 },
  ]
};

function getCategoryLabel(lang, cat) {
  const labels = {
    ar: { admin:"إداري", employment:"توظيف", translation:"ترجمة", immigration:"هجرة", legal:"قانوني", business:"أعمال", digital:"رقمي", civil:"حالة مدنية", general:"عام", mohammedia:"المحمدية", casablanca:"الدار البيضاء", rabat:"الرباط", marrakech:"مراكش", tanger:"طنجة", agadir:"أكادير", fes:"فاس", meknes:"مكناس", oujda:"وجدة", kenitra:"القنيطرة", tetouan:"تطوان", eljadida:"الجديدة", safi:"آسفي", nador:"الناظور", khouribga:"خريبكة", settat:"سطات", berrechid:"برشيد", larache:"العرائش", essaouira:"الصويرة", sale:"سلا", temara:"تمارة", benimelall:"بني ملال" },
    fr: { admin:"Administratif", employment:"Emploi", translation:"Traduction", immigration:"Immigration", legal:"Juridique", business:"Entreprise", digital:"Numérique", civil:"État Civil", general:"Général", mohammedia:"Mohammedia", casablanca:"Casablanca", rabat:"Rabat", marrakech:"Marrakech", tanger:"Tanger", agadir:"Agadir", fes:"Fès", meknes:"Meknès", oujda:"Oujda", kenitra:"Kénitra", tetouan:"Tétouan", eljadida:"El Jadida", safi:"Safi", nador:"Nador", khouribga:"Khouribga", settat:"Settat" },
    en: { admin:"Administrative", employment:"Employment", translation:"Translation", immigration:"Immigration", legal:"Legal", business:"Business", digital:"Digital", civil:"Civil Status", general:"General", mohammedia:"Mohammedia", casablanca:"Casablanca", rabat:"Rabat", marrakech:"Marrakech", tanger:"Tangier", agadir:"Agadir", fes:"Fes", meknes:"Meknès", oujda:"Oujda", kenitra:"Kenitra", tetouan:"Tetouan" },
    es: { admin:"Administrativo", employment:"Empleo", translation:"Traducción", immigration:"Inmigración", legal:"Legal", business:"Empresas", digital:"Digital", civil:"Estado Civil", general:"General", mohammedia:"Mohammedia", casablanca:"Casablanca", rabat:"Rabat", marrakech:"Marrakech", tanger:"Tánger", agadir:"Agadir" }
  };
  return (labels[lang]||labels.en)[cat] || cat;
}

function renderBlogGrid(lang, limit = 9) {
  const articles = (BLOG_ARTICLES[lang] || BLOG_ARTICLES.ar).slice(0, limit);
  return articles.map(a => `
    <article class="blog-card" itemscope itemtype="https://schema.org/Article">
      <div class="blog-card__cat blog-cat--${a.category}">${getCategoryLabel(lang, a.category)}</div>
      <h3 class="blog-card__title" itemprop="headline"><a href="blog/${a.slug}.html">${a.title}</a></h3>
      <p class="blog-card__excerpt" itemprop="description">${a.excerpt}</p>
      <div class="blog-card__meta">
        <span class="read-time">⏱ ${a.readTime} ${lang==='ar'?'دق':'min'}</span>
        <a href="blog/${a.slug}.html" class="read-more">${lang==='ar'?'اقرأ المزيد':lang==='fr'?'Lire →':lang==='es'?'Leer →':'Read →'}</a>
      </div>
    </article>`).join('');
}

if (typeof module !== 'undefined') module.exports = { BLOG_ARTICLES, renderBlogGrid, getCategoryLabel };
