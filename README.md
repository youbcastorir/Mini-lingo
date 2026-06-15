# taboula.com — كاتب عمومي المحمدية وجميع مدن المغرب

> موقع متعدد اللغات للكاتب العمومي في المحمدية، يشمل أقساماً لجميع المدن المغربية.
> **اللغة الرسمية: العربية** 🇲🇦 | ثانوية: Français 🇫🇷 | English 🇬🇧 | Español 🇪🇸

---

## 📋 جدول المحتويات

1. [نظرة عامة على المشروع](#نظرة-عامة)
2. [هيكل الملفات](#هيكل-الملفات)
3. [نشر على GitHub Pages](#نشر-على-github-pages)
4. [دليل SEO](#دليل-seo)
5. [إدارة المحتوى](#إدارة-المحتوى)
6. [إدارة الترجمات](#إدارة-الترجمات)
7. [إدارة المدن](#إدارة-المدن)
8. [تكامل واتساب](#تكامل-واتساب)
9. [إدارة المدونة](#إدارة-المدونة)

---

## 🎯 نظرة عامة

**الموقع:** taboula.com
**الخدمة:** كاتب عمومي محترف — المحمدية وجميع مدن المغرب
**واتساب:** +212661001122
**البريد الإلكتروني:** contact@taboula.com

### المدينة الرئيسية
**المحمدية** — مدينتنا الأساسية ومركز عملياتنا

### المدن المشمولة (40 مدينة)
المحمدية، الدار البيضاء، الرباط، فاس، مراكش، طنجة، أكادير، مكناس، وجدة، القنيطرة، تطوان، آسفي، الجديدة، بني ملال، الناظور، خريبكة، سطات، برشيد، سلا، تمارة، العرائش، خنيفرة، تازة، الصويرة، كلميم، ورزازات، الداخلة، العيون، إفران، أزيلال، تزنيت، الراشيدية، زاكورة، تاوريرت، بركان، بوسكورة، عين السبع، إنزكان، القصر الكبير، سيدي بطاش

### الخدمات المقدمة
- ✅ الخدمات الإدارية (طلبات، شكايات، طعون)
- ✅ التوظيف والعمل (سيرة ذاتية، رسائل تحفيز)
- ✅ الخدمات القانونية والوثائقية
- ✅ خدمات الترجمة (AR ↔ FR ↔ EN ↔ ES)
- ✅ الهجرة والتأشيرات
- ✅ خدمات الأعمال والمقاولات
- ✅ الخدمات الرقمية
- ✅ وثائق الحالة المدنية

---

## 📁 هيكل الملفات

```
taboula.com/
├── index.html          # الصفحة الرئيسية (متعددة اللغات)
├── style.css           # التصميم الكامل (RTL + LTR + ألوان المغرب)
├── app.js              # منطق التطبيق + رندر الصفحات
├── translations.js     # النصوص بـ 4 لغات + بيانات 40 مدينة
├── services.js         # 8 خدمات + شبكة المدن
├── blog.js             # 230 مقال SEO
├── sitemap.xml         # خريطة الموقع (صفحات + مدن + مقالات)
├── robots.txt          # إعدادات محركات البحث
├── manifest.json       # PWA
├── service-worker.js   # التخزين المؤقت (Offline)
├── seo.json            # مرجع SEO
├── .gitignore
└── README.md
```

---

## 🚀 نشر على GitHub Pages

### الخطوة 1 — إنشاء المستودع

```bash
# أنشئ مستودعاً جديداً على github.com باسم: taboula
git clone https://github.com/YOUR_USERNAME/taboula.git
cd taboula
```

### الخطوة 2 — نسخ الملفات

انسخ جميع ملفات المشروع إلى مجلد المستودع.

### الخطوة 3 — أيقونات PWA

قبل النشر، أنشئ الأيقونات المطلوبة:
```bash
npx pwa-asset-generator icon-source.png icons/
```
استخدم صورة رمز الكتابة ✍️ مع خلفية خضراء (#006233).

### الخطوة 4 — رفع الملفات

```bash
git add .
git commit -m "🚀 taboula.com — نشر أولي"
git push origin main
```

### الخطوة 5 — تفعيل GitHub Pages

1. اذهب إلى **Settings → Pages**
2. Source: **Deploy from branch → main / root**
3. احفظ التغييرات
4. الموقع سيكون متاحاً على: `https://YOUR_USERNAME.github.io/taboula/`

### الخطوة 6 — ربط النطاق taboula.com

1. في GitHub Pages، أدخل النطاق: `taboula.com`
2. أنشئ ملف `CNAME` في المجلد الجذري بالمحتوى: `taboula.com`
3. في إعدادات DNS الخاصة بك، أضف:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
4. فعّل **Enforce HTTPS**

### الخطوة 7 — تحديث الروابط

بعد ربط النطاق، تأكد من تحديث:
- `sitemap.xml` — جميع الروابط تبدأ بـ `https://taboula.com/`
- `index.html` — `<link rel="canonical">` وـ hreflang
- `seo.json` — حقل `base_url`

---

## 🔍 دليل SEO

### ما تم تطبيقه

| الميزة | الحالة |
|--------|--------|
| هريفلانج (4 لغات) | ✅ |
| Canonical URLs | ✅ |
| Open Graph | ✅ |
| Twitter Cards | ✅ |
| Schema LocalBusiness | ✅ |
| Schema ProfessionalService | ✅ |
| FAQ Schema | ✅ |
| مقاييس Geo | ✅ |
| Sitemap.xml | ✅ |
| Robots.txt | ✅ |
| PWA Manifest | ✅ |
| Service Worker | ✅ |
| تصميم RTL | ✅ |
| صفحات مخصصة لكل مدينة | ✅ (40 مدينة) |
| 230 مقال SEO | ✅ |

### استراتيجية الكلمات المفتاحية

**العربية (رئيسي):**
- `كاتب عمومي المحمدية` — الأولوية القصوى
- `taboula كاتب عمومي`
- `كاتب عمومي [اسم كل مدينة]` — لكل 40 مدينة
- `خدمات إدارية المحمدية`
- `سيرة ذاتية احترافية المغرب`
- `ترجمة وثائق المغرب`

**الفرنسية:**
- `écrivain public Mohammedia`
- `services administratifs Mohammedia`
- `écrivain public [ville]` — لكل مدينة كبرى

**الإنجليزية:**
- `public writer Mohammedia`
- `administrative services Morocco`

**الإسبانية:**
- `escritor público Mohammedia`
- `servicios administrativos Marruecos`

### إجراءات SEO المحلي المطلوبة

1. **Google Business Profile** — أنشئ/ادّعِ حسابك على business.google.com
   - الاسم: `كاتب عمومي المحمدية — taboula.com`
   - التصنيف: Administrative Services / Writer
   - الهاتف: +212661001122
   - الموقع: المحمدية، المغرب

2. **Bing Places** — سجّل على bingplaces.com

3. **الدلائل المحلية:**
   - Yelo.ma
   - Maroc Annuaire
   - المواقع المحلية للمحمدية

4. **الاتساق NAP:**
   ```
   الاسم: taboula.com — كاتب عمومي المحمدية
   العنوان: المحمدية، المغرب، 28800
   الهاتف: +212661001122
   ```

---

## ✏️ إدارة المحتوى

### تعديل النصوص

جميع النصوص موجودة في `translations.js`. مثال:

```javascript
ar: {
  hero: {
    headline: "نكتب عنك،\nننجز ملفاتك الإدارية",
    // عدّل هنا
  }
}
```

### تعديل الشهادات (testimonials)

```javascript
ar: {
  testimonials: {
    items: [
      { name: "اسم العميل — المدينة", text: "نص الشهادة...", stars: 5 },
      // أضف المزيد هنا
    ]
  }
}
```

### تعديل الأسئلة الشائعة

```javascript
ar: {
  faq: {
    items: [
      { q: "السؤال؟", a: "الجواب هنا." },
      // أضف المزيد
    ]
  }
}
```

### تعديل الخدمات

```javascript
ar: {
  services: {
    newService: {
      title: "اسم الخدمة الجديدة",
      desc: "وصف الخدمة",
      items: ["البند 1", "البند 2", "البند 3"]
    }
  }
}
```

---

## 🌐 إدارة الترجمات

### إضافة لغة جديدة

1. في `translations.js`، أضف مفتاح اللغة الجديدة:
```javascript
const TRANSLATIONS = {
  ar: { /* العربية */ },
  fr: { /* الفرنسية */ },
  // أضف:
  pt: {
    dir: "ltr",
    lang: "pt",
    meta: { title: "...", description: "...", keywords: "..." },
    nav: { home: "Início", /* ... */ },
    // أكمل جميع الأقسام
  }
};
```

2. في `app.js`، أضف اللغة في مصفوفة التبديل:
```javascript
['ar','fr','en','es'] // → ['ar','fr','en','es','pt']
```

3. في `index.html`، أضف hreflang:
```html
<link rel="alternate" hreflang="pt" href="https://taboula.com/?lang=pt">
```

4. في `sitemap.xml`، أضف متغير URL للغة الجديدة.

---

## 🗺️ إدارة المدن

### إضافة مدينة جديدة

في `translations.js`، أضف إلى مصفوفة `MOROCCAN_CITIES`:

```javascript
{ id: "new_city", ar: "اسم المدينة", fr: "Nom de Ville", slug: "new-city" }
```

### إنشاء صفحة مدينة مخصصة

أنشئ `cities/[slug].html` لكل مدينة:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <title>كاتب عمومي [اسم المدينة] | taboula.com</title>
  <meta name="description" content="خدمات الكاتب العمومي في [اسم المدينة]...">
  <link rel="canonical" href="https://taboula.com/cities/[slug].html">
  <script type="application/ld+json">
  {
    "@type": "LocalBusiness",
    "name": "taboula.com — كاتب عمومي [المدينة]",
    "areaServed": { "@type": "City", "name": "[المدينة]" }
  }
  </script>
</head>
<body>
  <!-- محتوى الصفحة + زر واتساب + الكلمات المفتاحية المحلية -->
</body>
</html>
```

**ملاحظة مهمة لـ SEO:** صفحة مخصصة لكل مدينة تعني فرصة ترتيب لاستعلامات مثل:
- `كاتب عمومي الدار البيضاء`
- `écrivain public Casablanca`
- `public writer Marrakech`

---

## 📱 تكامل واتساب

### رقم واتساب
```
+212661001122
رابط: https://wa.me/212661001122
```

### واتساب يظهر في
✅ شريط التنقل العلوي
✅ قسم البطل (CTA رئيسي)
✅ كل بطاقة خدمة
✅ الأسئلة الشائعة
✅ نموذج التواصل (يحول إلى رسالة واتساب)
✅ التذييل
✅ زر عائم (كل الصفحات)

### الرسائل المسبقة التخصيص

في `app.js`، عدّل دالة `waMsg(lang)`:

```javascript
function waMsg(lang) {
  return encodeURIComponent({
    ar: 'مرحباً من taboula.com، أريد الاستفسار عن خدماتكم',
    fr: 'Bonjour de taboula.com, je souhaite me renseigner',
    en: 'Hello from taboula.com, I\'d like to inquire',
    es: 'Hola de taboula.com, me gustaría consultar'
  }[lang] || '');
}
```

### نموذج التواصل → واتساب

عند إرسال النموذج، تتولد رسالة واتساب تشمل:
- اسم العميل
- مدينته
- الخدمة المطلوبة
- وصف الطلب

---

## 📝 إدارة المدونة

### إحصائيات المدونة الحالية

| اللغة | المقالات |
|-------|----------|
| العربية | 100 |
| الفرنسية | 50 |
| الإنجليزية | 50 |
| الإسبانية | 30 |
| **المجموع** | **230** |

### إضافة مقال جديد

في `blog.js`، أضف إلى المصفوفة المناسبة:

```javascript
ar: [
  // ... المقالات الحالية
  {
    id: "ar-101",
    slug: "عنوان-المقال-بالعربية",  // URL slug (لا مسافات)
    title: "عنوان المقال الكامل",
    excerpt: "ملخص قصير للمقال 150 حرفاً تقريباً",
    category: "mohammedia",  // أو: admin, employment, translation...
    readTime: 7
  }
]
```

### فئات المقالات

| الكود | المعنى |
|-------|--------|
| `mohammedia` | مقالات خاصة بالمحمدية |
| `casablanca` | الدار البيضاء |
| `rabat` | الرباط |
| `admin` | إداري عام |
| `employment` | توظيف |
| `translation` | ترجمة |
| `immigration` | هجرة وتأشيرات |
| `legal` | قانوني |
| `business` | أعمال |
| `digital` | رقمي |
| `civil` | حالة مدنية |
| `general` | عام |
| *(اسم أي مدينة)* | صفحة مدينة مخصصة |

### إنشاء صفحات المقالات الفردية

أنشئ `blog/[slug].html` لكل مقال مع:
- Schema Article
- زر واتساب في نهاية المقال
- روابط داخلية للخدمات والمدن ذات الصلة
- Breadcrumb Schema

---

## 📊 تحليلات ومتابعة

### Google Analytics 4

أضف قبل `</head>` في `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### تتبع نقرات واتساب

```javascript
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'whatsapp_click', {
      event_category: 'conversion',
      event_label: document.documentElement.getAttribute('data-lang')
    });
  });
});
```

### Google Search Console

1. أضف الموقع: `https://taboula.com/`
2. تحقق من الملكية
3. أرسل sitemap: `https://taboula.com/sitemap.xml`
4. راقب الأداء أسبوعياً

---

## 🔧 قائمة الصيانة الشهرية

- [ ] أضف 5+ مقالات عربية جديدة
- [ ] أضف 2+ مقالات فرنسية/إنجليزية
- [ ] حدّث شهادات العملاء
- [ ] راجع أداء Google Search Console
- [ ] رد على مراجعات Google Business
- [ ] تحقق من Core Web Vitals

---

## 📞 معلومات التواصل

**واتساب:** +212661001122
**البريد:** contact@taboula.com
**الموقع:** taboula.com
**المدينة الرئيسية:** المحمدية، المغرب

---

*تم إنشاء هذا المشروع بواسطة Claude (Anthropic) — موقع احترافي متعدد اللغات لخدمات الكاتب العمومي في المحمدية وجميع مدن المغرب.*

*© taboula.com — جميع الحقوق محفوظة*
