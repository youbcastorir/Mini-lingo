// translations.js — taboula.com
// كاتب عمومي — المحمدية وجميع المدن المغربية
// اللغة الرسمية: العربية

const MOROCCAN_CITIES = [
  { id: "mohammedia",     ar: "المحمدية",      fr: "Mohammedia",     slug: "mohammedia",    primary: true },
  { id: "casablanca",     ar: "الدار البيضاء", fr: "Casablanca",     slug: "casablanca" },
  { id: "rabat",          ar: "الرباط",         fr: "Rabat",          slug: "rabat" },
  { id: "fes",            ar: "فاس",            fr: "Fès",            slug: "fes" },
  { id: "marrakech",      ar: "مراكش",          fr: "Marrakech",      slug: "marrakech" },
  { id: "tanger",         ar: "طنجة",           fr: "Tanger",         slug: "tanger" },
  { id: "agadir",         ar: "أكادير",         fr: "Agadir",         slug: "agadir" },
  { id: "meknes",         ar: "مكناس",          fr: "Meknès",         slug: "meknes" },
  { id: "oujda",          ar: "وجدة",           fr: "Oujda",          slug: "oujda" },
  { id: "kenitra",        ar: "القنيطرة",       fr: "Kénitra",        slug: "kenitra" },
  { id: "tetouan",        ar: "تطوان",          fr: "Tétouan",        slug: "tetouan" },
  { id: "safi",           ar: "آسفي",           fr: "Safi",           slug: "safi" },
  { id: "eljadida",       ar: "الجديدة",        fr: "El Jadida",      slug: "eljadida" },
  { id: "benimelall",     ar: "بني ملال",       fr: "Béni Mellal",    slug: "benimelall" },
  { id: "nador",          ar: "الناظور",        fr: "Nador",          slug: "nador" },
  { id: "khouribga",      ar: "خريبكة",         fr: "Khouribga",      slug: "khouribga" },
  { id: "ksar",           ar: "القصر الكبير",   fr: "Ksar El Kébir",  slug: "ksar" },
  { id: "berrechid",      ar: "برشيد",          fr: "Berrechid",      slug: "berrechid" },
  { id: "sidi_bettache",  ar: "سيدي بطاش",     fr: "Sidi Bettache",  slug: "sidi-bettache" },
  { id: "settat",         ar: "سطات",           fr: "Settat",         slug: "settat" },
  { id: "larache",        ar: "العرائش",        fr: "Larache",        slug: "larache" },
  { id: "khenifra",       ar: "خنيفرة",         fr: "Khénifra",       slug: "khenifra" },
  { id: "taza",           ar: "تازة",           fr: "Taza",           slug: "taza" },
  { id: "essaouira",      ar: "الصويرة",        fr: "Essaouira",      slug: "essaouira" },
  { id: "guelmim",        ar: "كلميم",          fr: "Guelmim",        slug: "guelmim" },
  { id: "ouarzazate",     ar: "ورزازات",        fr: "Ouarzazate",     slug: "ouarzazate" },
  { id: "dakhla",         ar: "الداخلة",        fr: "Dakhla",         slug: "dakhla" },
  { id: "laayoune",       ar: "العيون",         fr: "Laâyoune",       slug: "laayoune" },
  { id: "ifrane",         ar: "إفران",          fr: "Ifrane",         slug: "ifrane" },
  { id: "azilal",         ar: "أزيلال",         fr: "Azilal",         slug: "azilal" },
  { id: "tiznit",         ar: "تزنيت",          fr: "Tiznit",         slug: "tiznit" },
  { id: "errachidia",     ar: "الراشيدية",      fr: "Errachidia",     slug: "errachidia" },
  { id: "zagora",         ar: "زاكورة",         fr: "Zagora",         slug: "zagora" },
  { id: "taourirt",       ar: "تاوريرت",        fr: "Taourirt",       slug: "taourirt" },
  { id: "berkane",        ar: "بركان",          fr: "Berkane",        slug: "berkane" },
  { id: "bouskoura",      ar: "بوسكورة",        fr: "Bouskoura",      slug: "bouskoura" },
  { id: "sale",           ar: "سلا",            fr: "Salé",           slug: "sale" },
  { id: "temara",         ar: "تمارة",          fr: "Témara",         slug: "temara" },
  { id: "ain_sebaa",      ar: "عين السبع",      fr: "Aïn Sebaâ",      slug: "ain-sebaa" },
  { id: "inzegan",        ar: "إنزكان",         fr: "Inezgane",       slug: "inzegan" }
];

const TRANSLATIONS = {

  // ════════════════════════════════════════
  // العربية — اللغة الرسمية
  // ════════════════════════════════════════
  ar: {
    dir: "rtl",
    lang: "ar",
    meta: {
      title: "كاتب عمومي المحمدية | taboula.com — خدمات إدارية في جميع المدن المغربية",
      description: "كاتب عمومي محترف في المحمدية وجميع المدن المغربية. طلبات إدارية، شكايات، سيرة ذاتية، ترجمة وثائق. تواصل عبر واتساب.",
      keywords: "كاتب عمومي المحمدية، taboula، خدمات إدارية المغرب، كتابة الشكايات، سيرة ذاتية، ترجمة وثائق، كاتب عمومي الدار البيضاء، كاتب عمومي الرباط"
    },
    site: {
      name: "taboula.com",
      tagline: "كاتب عمومي في خدمتك — المحمدية وجميع المدن المغربية"
    },
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      cities: "المدن",
      blog: "المدونة",
      contact: "التواصل",
      whatsapp: "واتساب"
    },
    hero: {
      badge: "كاتب عمومي معتمد — المحمدية، المغرب",
      headline: "نكتب عنك،\nننجز ملفاتك الإدارية",
      subheadline: "خدمات الكتابة العمومية الاحترافية في المحمدية وجميع مدن المغرب. طلبات، شكايات، وثائق، سيرة ذاتية، ترجمة — نحن في خدمتك.",
      cta_primary: "تواصل معنا عبر واتساب",
      cta_secondary: "اكتشف خدماتنا",
      trust: "أكثر من 2000 ملف أُنجز بنجاح في المغرب"
    },
    cities_section: {
      title: "خدماتنا في جميع مدن المغرب",
      subtitle: "نخدم المواطنين والمقيمين في المحمدية وعبر جميع أرجاء المملكة المغربية",
      primary_label: "مدينتنا الرئيسية",
      view_city: "خدمات",
      all_cities: "جميع المدن"
    },
    services_section: {
      title: "خدماتنا",
      subtitle: "حلول متكاملة لجميع احتياجاتكم الإدارية والكتابية"
    },
    services: {
      admin: {
        title: "الخدمات الإدارية",
        desc: "كتابة الطلبات الإدارية، الشكايات، الطعون والمراسلات الرسمية",
        items: ["كتابة الطلبات الإدارية","كتابة الشكايات","الطعون الإدارية","المراسلات الرسمية","الرسائل الإدارية"]
      },
      employment: {
        title: "التوظيف والعمل",
        desc: "إعداد السيرة الذاتية الاحترافية ورسائل التحفيز",
        items: ["إعداد السيرة الذاتية","تحديث السيرة الذاتية","رسائل التحفيز","طلبات العمل"]
      },
      legal: {
        title: "الخدمات القانونية والوثائقية",
        desc: "صياغة العقود وإعداد الوثائق الرسمية والملفات الإدارية",
        items: ["مساعدة في صياغة العقود","تنسيق الوثائق","إعداد الملفات الإدارية","التصريحات الرسمية"]
      },
      translation: {
        title: "خدمات الترجمة",
        desc: "ترجمة الوثائق بين العربية والفرنسية والإنجليزية والإسبانية",
        items: ["عربي ↔ فرنسي","عربي ↔ إنجليزي","فرنسي ↔ إنجليزي","ترجمة إسبانية"]
      },
      immigration: {
        title: "الهجرة والتأشيرات",
        desc: "مساعدة في طلبات التأشيرة ووثائق السفر والإقامة",
        items: ["مساعدة طلب التأشيرة","رسائل الدعوة","وثائق السفر","الإقامة للأجانب"]
      },
      business: {
        title: "خدمات الأعمال",
        desc: "الرسائل التجارية والمراسلات الاحترافية للمقاولات",
        items: ["الرسائل التجارية","المراسلات التجارية","وثائق الشركات","طلبات القروض"]
      },
      digital: {
        title: "الخدمات الرقمية",
        desc: "ملء الاستمارات الإلكترونية وإعداد الوثائق الرقمية",
        items: ["ملء الاستمارات الإلكترونية","الطلبات الإلكترونية","إعداد ملفات PDF وWord","تحويل الوثائق الرقمية"]
      },
      civil: {
        title: "وثائق الحالة المدنية",
        desc: "مساعدة في استخراج وتوثيق وثائق الحالة المدنية",
        items: ["عقود الازدياد","شهادة السكنى","الوثيقة الوطنية","وثائق الزواج والطلاق"]
      }
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      items: [
        { name: "محمد الحسني — المحمدية", text: "ساعدني في كتابة شكايتي ضد الجماعة وتمت معالجتها بنجاح. خدمة سريعة ومحترفة.", stars: 5 },
        { name: "فاطمة بنعلي — الدار البيضاء", text: "أعدّ لي سيرة ذاتية احترافية وحصلت على عمل في شركة كبرى. شكراً جزيلاً!", stars: 5 },
        { name: "عبد الرحيم التازي — الرباط", text: "خدمة ممتازة في ترجمة وثائق الملف الإداري. دقيق ومحترف وسريع.", stars: 5 },
        { name: "نادية الإدريسي — المحمدية", text: "ساعدني في ملف التأشيرة كاملاً. كل الوثائق كانت مرتبة واحترافية. أنصح به.", stars: 5 },
        { name: "يوسف القاسمي — أكادير", text: "كتب لي طلب قرض بنكي محكم وتمت الموافقة عليه. خدمة لا تُقدّر بثمن.", stars: 5 },
        { name: "سمية بنشكرون — مراكش", text: "تعامل سريع عبر واتساب. أرسلت الوثائق والتسليم في نفس اليوم. ممتاز.", stars: 5 }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "ما هي خدمات الكاتب العمومي؟", a: "الكاتب العمومي يساعدك في كتابة الطلبات الإدارية، الشكايات، السيرة الذاتية، الرسائل الرسمية، ترجمة الوثائق، وإعداد الملفات الإدارية لجميع الجهات." },
        { q: "هل تخدمون خارج المحمدية؟", a: "نعم، نقدم خدماتنا في المحمدية وجميع المدن المغربية عن بُعد عبر واتساب والبريد الإلكتروني. كما نستقبل الملفات من الخارج." },
        { q: "كيف يمكنني التواصل معكم؟", a: "يمكنك التواصل معنا مباشرة عبر واتساب على الرقم 0661001122 أو عبر نموذج الاتصال في الموقع." },
        { q: "ما هي مدة إنجاز الطلب؟", a: "الرسائل البسيطة تُنجز في نفس اليوم. الملفات المعقدة تستغرق من 24 إلى 72 ساعة حسب نوعها." },
        { q: "ما هي اللغات التي تعملون بها؟", a: "نعمل باللغة العربية أساساً، إضافة إلى الفرنسية والإنجليزية والإسبانية حسب الحاجة." },
        { q: "هل يمكن إرسال الوثائق عبر واتساب؟", a: "نعم، يمكنك إرسال ملفاتك وصور الوثائق عبر واتساب مباشرة وسنتعامل معها بسرية تامة." }
      ]
    },
    process: {
      title: "كيف نعمل",
      steps: [
        { num: "١", title: "تواصل معنا", desc: "أرسل لنا رسالة واتساب مع وصف احتياجك" },
        { num: "٢", title: "تحليل الطلب", desc: "نراجع طلبك ونحدد الوثائق والمتطلبات" },
        { num: "٣", title: "الإنجاز", desc: "نعمل على ملفك بدقة واحترافية تامة" },
        { num: "٤", title: "التسليم", desc: "نسلمك الوثيقة جاهزة للاستخدام الفوري" }
      ]
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن في خدمتك من المحمدية لجميع مدن المغرب. تواصل معنا الآن.",
      whatsapp_btn: "ابدأ المحادثة عبر واتساب",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        city: "مدينتك",
        service: "نوع الخدمة",
        message: "صِف احتياجك بالتفصيل",
        submit: "إرسال الطلب عبر واتساب"
      }
    },
    footer: {
      tagline: "كاتب عمومي محترف — المحمدية وجميع المدن المغربية",
      services_title: "خدماتنا",
      cities_title: "مدننا",
      contact_title: "تواصل معنا",
      legal: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام"
    },
    whatsapp_float: "تحدث معنا الآن"
  },

  // ════════════════════════════════════════
  // Français — Langue secondaire
  // ════════════════════════════════════════
  fr: {
    dir: "ltr", lang: "fr",
    meta: {
      title: "Écrivain Public Mohammedia | taboula.com — Services Maroc",
      description: "Écrivain public professionnel à Mohammedia et dans toutes les villes du Maroc. Démarches administratives, CV, traduction. WhatsApp disponible.",
      keywords: "écrivain public Mohammedia, taboula, services administratifs Maroc, CV professionnel, traduction documents"
    },
    site: { name: "taboula.com", tagline: "Votre écrivain public — Mohammedia et tout le Maroc" },
    nav: { home: "Accueil", services: "Services", cities: "Villes", blog: "Blog", contact: "Contact", whatsapp: "WhatsApp" },
    hero: {
      badge: "Écrivain Public Agréé — Mohammedia, Maroc",
      headline: "Vos dossiers administratifs,\nbien rédigés",
      subheadline: "Services d'écriture publique à Mohammedia et dans toutes les villes du Maroc. Courriers, CV, traductions, réclamations — disponible par WhatsApp.",
      cta_primary: "Nous contacter sur WhatsApp",
      cta_secondary: "Découvrir nos services",
      trust: "Plus de 2000 dossiers traités avec succès au Maroc"
    },
    cities_section: { title: "Nos services dans toutes les villes du Maroc", subtitle: "Nous intervenons à Mohammedia et dans tout le royaume", primary_label: "Notre ville principale", view_city: "Services", all_cities: "Toutes les villes" },
    services_section: { title: "Nos Services", subtitle: "Solutions complètes pour tous vos besoins administratifs" },
    services: {
      admin: { title: "Services Administratifs", desc: "Rédaction de demandes, réclamations, recours et lettres officielles", items: ["Demandes administratives","Rédaction de réclamations","Recours administratifs","Correspondances officielles","Lettres administratives"] },
      employment: { title: "Emploi & CV", desc: "CV professionnels et lettres de motivation", items: ["Création de CV","Refonte de CV","Lettres de motivation","Candidatures emploi"] },
      legal: { title: "Services Juridiques", desc: "Aide à la rédaction de contrats et documents officiels", items: ["Aide aux contrats","Mise en forme de documents","Préparation de dossiers","Déclarations officielles"] },
      translation: { title: "Traduction", desc: "Traduction entre arabe, français, anglais, espagnol", items: ["Arabe ↔ Français","Arabe ↔ Anglais","Français ↔ Anglais","Espagnol"] },
      immigration: { title: "Immigration & Visas", desc: "Assistance visas et documents de voyage", items: ["Aide demande de visa","Lettres d'invitation","Documents de voyage","Titre de séjour"] },
      business: { title: "Services Entreprises", desc: "Lettres commerciales et correspondance professionnelle", items: ["Lettres commerciales","Correspondance pro","Documentation entreprise","Demandes de crédit"] },
      digital: { title: "Services Numériques", desc: "Formulaires en ligne et documents numériques", items: ["Formulaires en ligne","Dossiers numériques","Préparation PDF/Word","Conversion documents"] },
      civil: { title: "État Civil", desc: "Assistance pour les documents d'état civil", items: ["Actes de naissance","Certificat de résidence","CIN","Actes de mariage"] }
    },
    testimonials: {
      title: "Ce que disent nos clients",
      items: [
        { name: "Karim B. — Mohammedia", text: "Service excellent ! Mon dossier de visa a été préparé parfaitement. Je recommande vivement.", stars: 5 },
        { name: "Nadia T. — Casablanca", text: "CV refait de zéro, très professionnel. Embauché dès la première semaine.", stars: 5 },
        { name: "Hassan F. — Rabat", text: "Traduction rapide et précise. Communication facile par WhatsApp. Parfait.", stars: 5 },
        { name: "Amina R. — Marrakech", text: "Réclamation administrative bien rédigée, résultat positif en 2 semaines. Merci.", stars: 5 }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        { q: "Qu'est-ce qu'un écrivain public ?", a: "Il vous aide à rédiger courriers, CV, demandes officielles, traduire vos documents et préparer vos dossiers administratifs." },
        { q: "Intervenez-vous hors de Mohammedia ?", a: "Oui, nous servons toutes les villes du Maroc à distance par WhatsApp et email." },
        { q: "Quels sont les délais ?", a: "Lettres simples : même jour. Dossiers complexes : 24 à 72 heures." },
        { q: "En quelles langues travaillez-vous ?", a: "Arabe principalement, français, anglais et espagnol selon les besoins." }
      ]
    },
    process: { title: "Notre Processus", steps: [
      { num: "01", title: "Contactez-nous", desc: "WhatsApp avec votre besoin" },
      { num: "02", title: "Évaluation", desc: "Analyse de votre demande" },
      { num: "03", title: "Rédaction", desc: "Travail précis et soigné" },
      { num: "04", title: "Livraison", desc: "Document prêt à l'emploi" }
    ]},
    contact: { title: "Contactez-nous", subtitle: "Disponibles à Mohammedia et partout au Maroc", whatsapp_btn: "Démarrer la conversation WhatsApp",
      form: { name: "Nom complet", email: "Email", phone: "Téléphone", city: "Votre ville", service: "Type de service", message: "Décrivez votre besoin", submit: "Envoyer via WhatsApp" }
    },
    footer: { tagline: "Écrivain public — Mohammedia et toutes les villes du Maroc", services_title: "Services", cities_title: "Villes", contact_title: "Contact", legal: "Tous droits réservés", privacy: "Confidentialité", terms: "Conditions" },
    whatsapp_float: "Chattez avec nous"
  },

  // ════════════════════════════════════════
  // English — Secondary language
  // ════════════════════════════════════════
  en: {
    dir: "ltr", lang: "en",
    meta: {
      title: "Public Writer Mohammedia | taboula.com — Administrative Services Morocco",
      description: "Professional public writer in Mohammedia and all Moroccan cities. Administrative help, CV, translation, visa assistance. Contact via WhatsApp.",
      keywords: "public writer Mohammedia, taboula, administrative services Morocco, CV Morocco, document translation Morocco"
    },
    site: { name: "taboula.com", tagline: "Your public writer — Mohammedia & all of Morocco" },
    nav: { home: "Home", services: "Services", cities: "Cities", blog: "Blog", contact: "Contact", whatsapp: "WhatsApp" },
    hero: {
      badge: "Certified Public Writer — Mohammedia, Morocco",
      headline: "Your documents,\ndone right",
      subheadline: "Professional public writing in Mohammedia and across Morocco. Administrative letters, CVs, translations, complaints — available by WhatsApp.",
      cta_primary: "Contact Us on WhatsApp",
      cta_secondary: "Explore Services",
      trust: "Over 2,000 files handled successfully across Morocco"
    },
    cities_section: { title: "Services Across All Moroccan Cities", subtitle: "Based in Mohammedia, serving all of Morocco remotely", primary_label: "Our home city", view_city: "Services", all_cities: "All cities" },
    services_section: { title: "Our Services", subtitle: "Complete solutions for all your administrative needs" },
    services: {
      admin: { title: "Administrative Services", desc: "Official requests, complaints, appeals and correspondence", items: ["Administrative requests","Complaint writing","Administrative appeals","Official letters","Formal correspondence"] },
      employment: { title: "Employment Services", desc: "Professional CV and cover letters", items: ["CV creation","CV redesign","Cover letters","Job applications"] },
      legal: { title: "Legal & Documents", desc: "Contract drafting and official document preparation", items: ["Contract assistance","Document formatting","File preparation","Official declarations"] },
      translation: { title: "Translation", desc: "Arabic, French, English, Spanish translations", items: ["Arabic ↔ French","Arabic ↔ English","French ↔ English","Spanish"] },
      immigration: { title: "Immigration & Visas", desc: "Visa applications and travel documents", items: ["Visa assistance","Invitation letters","Travel documents","Residence permits"] },
      business: { title: "Business Services", desc: "Business letters and professional correspondence", items: ["Business letters","Commercial correspondence","Company docs","Loan applications"] },
      digital: { title: "Digital Services", desc: "Online forms and digital document preparation", items: ["Form completion","Online applications","PDF & Word prep","Document conversion"] },
      civil: { title: "Civil Status", desc: "Help with civil status documents", items: ["Birth certificates","Residence certificate","National ID","Marriage documents"] }
    },
    testimonials: {
      title: "What Our Clients Say",
      items: [
        { name: "James O. — Mohammedia", text: "Excellent help with my visa documents. Got approved first try. Highly recommended.", stars: 5 },
        { name: "Elena V. — Casablanca", text: "Fast and accurate translation of my documents. Very professional service.", stars: 5 },
        { name: "Sarah M. — Rabat", text: "My CV was completely transformed. Got interviews within a week. Amazing service.", stars: 5 },
        { name: "Ahmed B. — Agadir", text: "Helped me draft a formal complaint that was resolved positively. Great work.", stars: 5 }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "What is a public writer?", a: "A public writer helps you draft administrative letters, CVs, official correspondence and translates documents professionally." },
        { q: "Do you serve cities outside Mohammedia?", a: "Yes, we serve all Moroccan cities and international clients remotely via WhatsApp and email." },
        { q: "How long does it take?", a: "Simple letters: same day. Complex files: 24–72 hours." },
        { q: "What languages do you work in?", a: "Arabic primarily, plus French, English and Spanish as needed." }
      ]
    },
    process: { title: "How It Works", steps: [
      { num: "01", title: "Contact Us", desc: "Send a WhatsApp message" },
      { num: "02", title: "Assessment", desc: "We review your request" },
      { num: "03", title: "Drafting", desc: "Precise, professional work" },
      { num: "04", title: "Delivery", desc: "Ready-to-use document" }
    ]},
    contact: { title: "Contact Us", subtitle: "Based in Mohammedia, serving all of Morocco and beyond", whatsapp_btn: "Start WhatsApp Chat",
      form: { name: "Full Name", email: "Email", phone: "Phone", city: "Your city", service: "Service type", message: "Describe your need", submit: "Send via WhatsApp" }
    },
    footer: { tagline: "Professional public writer — Mohammedia & all Moroccan cities", services_title: "Services", cities_title: "Cities", contact_title: "Contact", legal: "All rights reserved", privacy: "Privacy Policy", terms: "Terms" },
    whatsapp_float: "Chat with us"
  },

  // ════════════════════════════════════════
  // Español — Idioma secundario
  // ════════════════════════════════════════
  es: {
    dir: "ltr", lang: "es",
    meta: {
      title: "Escritor Público Mohammedia | taboula.com — Servicios Marruecos",
      description: "Escritor público profesional en Mohammedia y todas las ciudades de Marruecos. Trámites, CV, traducción, visados. Contacto por WhatsApp.",
      keywords: "escritor público Mohammedia, taboula, servicios administrativos Marruecos, CV profesional, traducción documentos"
    },
    site: { name: "taboula.com", tagline: "Su escritor público — Mohammedia y todo Marruecos" },
    nav: { home: "Inicio", services: "Servicios", cities: "Ciudades", blog: "Blog", contact: "Contacto", whatsapp: "WhatsApp" },
    hero: {
      badge: "Escritor Público Certificado — Mohammedia, Marruecos",
      headline: "Sus trámites,\nbien redactados",
      subheadline: "Servicios de escritura pública en Mohammedia y todo Marruecos. Cartas, CV, traducciones, reclamaciones — por WhatsApp.",
      cta_primary: "Contáctenos por WhatsApp",
      cta_secondary: "Ver servicios",
      trust: "Más de 2.000 expedientes gestionados en Marruecos"
    },
    cities_section: { title: "Servicios en Todas las Ciudades de Marruecos", subtitle: "Basados en Mohammedia, atendemos todo el reino a distancia", primary_label: "Nuestra ciudad principal", view_city: "Servicios", all_cities: "Todas las ciudades" },
    services_section: { title: "Nuestros Servicios", subtitle: "Soluciones completas para sus necesidades administrativas" },
    services: {
      admin: { title: "Servicios Administrativos", desc: "Solicitudes, reclamaciones, recursos y correspondencia", items: ["Solicitudes administrativas","Cartas de reclamación","Recursos administrativos","Cartas oficiales","Correspondencia"] },
      employment: { title: "Empleo y CV", desc: "CV profesionales y cartas de presentación", items: ["Creación de CV","Rediseño de CV","Cartas de presentación","Solicitudes de empleo"] },
      legal: { title: "Servicios Jurídicos", desc: "Contratos y documentos oficiales", items: ["Asistencia en contratos","Formateo de docs","Preparación expedientes","Declaraciones"] },
      translation: { title: "Traducción", desc: "Árabe, francés, inglés, español", items: ["Árabe ↔ Francés","Árabe ↔ Inglés","Francés ↔ Inglés","Español"] },
      immigration: { title: "Inmigración y Visados", desc: "Visados y documentos de viaje", items: ["Asistencia visados","Cartas de invitación","Documentos viaje","Permisos residencia"] },
      business: { title: "Servicios Empresariales", desc: "Cartas comerciales y correspondencia", items: ["Cartas comerciales","Correspondencia empresarial","Documentación empresa","Solicitudes crédito"] },
      digital: { title: "Servicios Digitales", desc: "Formularios y documentos digitales", items: ["Formularios en línea","Solicitudes digitales","PDF/Word","Conversión docs"] },
      civil: { title: "Estado Civil", desc: "Documentos de estado civil", items: ["Actas de nacimiento","Certificado residencia","DNI","Matrimonio/divorcio"] }
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      items: [
        { name: "María G. — Mohammedia", text: "Excelente servicio con mi documentación de visado. Lo obtuve sin problemas. Muy recomendable.", stars: 5 },
        { name: "Carlos M. — Casablanca", text: "Me rehízo el CV completamente. Conseguí entrevistas en una semana. Profesional.", stars: 5 },
        { name: "Lucía F. — Tánger", text: "Traducción rápida y precisa de mis documentos. Muy recomendable.", stars: 5 },
        { name: "Roberto J. — Agadir", text: "Me ayudaron con mi reclamación que fue resuelta favorablemente. Gracias.", stars: 5 }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        { q: "¿Qué es un escritor público?", a: "Le ayuda a redactar cartas administrativas, CV, correspondencia oficial y traducir documentos." },
        { q: "¿Atienden fuera de Mohammedia?", a: "Sí, servimos todas las ciudades de Marruecos y clientes internacionales por WhatsApp." },
        { q: "¿Cuánto tiempo tardan?", a: "Cartas simples: mismo día. Expedientes complejos: 24–72 horas." },
        { q: "¿En qué idiomas trabajan?", a: "Árabe principalmente, más francés, inglés y español según necesidad." }
      ]
    },
    process: { title: "Cómo Trabajamos", steps: [
      { num: "01", title: "Contáctenos", desc: "Mensaje de WhatsApp" },
      { num: "02", title: "Evaluación", desc: "Revisamos su solicitud" },
      { num: "03", title: "Redacción", desc: "Trabajo preciso y cuidadoso" },
      { num: "04", title: "Entrega", desc: "Documento listo para usar" }
    ]},
    contact: { title: "Contáctenos", subtitle: "Desde Mohammedia, servimos todo Marruecos", whatsapp_btn: "Iniciar conversación WhatsApp",
      form: { name: "Nombre completo", email: "Email", phone: "Teléfono", city: "Su ciudad", service: "Tipo de servicio", message: "Describa su necesidad", submit: "Enviar por WhatsApp" }
    },
    footer: { tagline: "Escritor público — Mohammedia y todas las ciudades de Marruecos", services_title: "Servicios", cities_title: "Ciudades", contact_title: "Contacto", legal: "Todos los derechos reservados", privacy: "Privacidad", terms: "Condiciones" },
    whatsapp_float: "Chatea con nosotros"
  }
};

if (typeof module !== 'undefined') module.exports = { TRANSLATIONS, MOROCCAN_CITIES };
