// app.js — taboula.com
// كاتب عمومي — المحمدية وجميع المدن المغربية

(function () {
  'use strict';

  const WA_NUMBER = '212661001122';
  const WA_URL = `https://wa.me/${WA_NUMBER}`;
  const DEFAULT_LANG = 'ar';
  const STORAGE_KEY = 'taboula_lang';

  // ── Language ────────────────────────────────────────
  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY) || detectLang(); }
    catch (e) { return DEFAULT_LANG; }
  }

  function detectLang() {
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('ar')) return 'ar';
    if (nav.startsWith('fr')) return 'fr';
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('en')) return 'en';
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLanguage(lang);
  }

  function applyLanguage(lang) {
    const t = TRANSLATIONS[lang];
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.documentElement.setAttribute('data-lang', lang);
    document.body.className = document.body.className.replace(/lang-\w+/g, '').trim();
    document.body.classList.add(`lang-${lang}`);

    // Meta
    document.title = t.meta.title;
    setMeta('description', t.meta.description);
    setMeta('keywords', t.meta.keywords);
    setOG('og:title', t.meta.title);
    setOG('og:description', t.meta.description);

    // Render
    renderHeader(lang, t);
    renderHero(lang, t);
    renderServices(lang, t);
    renderCities(lang, t);
    renderProcess(lang, t);
    renderTestimonials(lang, t);
    renderFAQ(lang, t);
    renderBlog(lang, t);
    renderContact(lang, t);
    renderFooter(lang, t);
    renderFloatingWA(lang, t);
    updateLangSwitcher(lang);
  }

  function setMeta(name, content) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
    el.content = content;
  }

  function setOG(prop, content) {
    let el = document.querySelector(`meta[property="${prop}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
    el.content = content;
  }

  // ── WA Message ─────────────────────────────────────
  function waMsg(lang) {
    return encodeURIComponent({
      ar: 'مرحباً، أريد الاستفسار عن خدمات الكاتب العمومي في taboula.com',
      fr: 'Bonjour, je souhaite me renseigner sur vos services sur taboula.com',
      en: 'Hello, I\'d like to inquire about your services on taboula.com',
      es: 'Hola, me gustaría consultar sobre sus servicios en taboula.com'
    }[lang] || '');
  }

  const WA_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  // ── Header ─────────────────────────────────────────
  function renderHeader(lang, t) {
    const el = document.getElementById('main-nav');
    if (!el) return;
    el.innerHTML = `
      <div class="nav__logo">
        <a href="index.html">
          <span class="nav__logo-icon">✍️</span>
          <span class="nav__logo-text">
            <span class="nav__logo-primary">taboula.com</span>
            <span class="nav__logo-sub">${lang==='ar'?'كاتب عمومي — المغرب':lang==='fr'?'Écrivain Public — Maroc':lang==='es'?'Escritor Público — Marruecos':'Public Writer — Morocco'}</span>
          </span>
        </a>
      </div>
      <nav class="nav__links" id="nav-links">
        <a href="#hero" class="nav__link">${t.nav.home}</a>
        <a href="#services" class="nav__link">${t.nav.services}</a>
        <a href="#cities" class="nav__link">${t.nav.cities}</a>
        <a href="#blog" class="nav__link">${t.nav.blog}</a>
        <a href="#contact" class="nav__link">${t.nav.contact}</a>
        <a href="${WA_URL}?text=${waMsg(lang)}" class="nav__link nav__link--wa" target="_blank" rel="noopener">
          ${WA_SVG} ${t.nav.whatsapp}
        </a>
      </nav>
      <div class="nav__lang">
        ${['ar','fr','en','es'].map(l=>`<button class="lang-btn${l===lang?' lang-btn--active':''}" onclick="window.TAB.setLang('${l}')">${l.toUpperCase()}</button>`).join('')}
      </div>
      <button class="nav__menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="nav-links">
        <span></span><span></span><span></span>
      </button>`;

    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        const open = navLinks.classList.toggle('nav__links--open');
        toggle.setAttribute('aria-expanded', open);
      });
    }
  }

  // ── Hero ───────────────────────────────────────────
  function renderHero(lang, t) {
    const el = document.getElementById('hero');
    if (!el) return;
    const h = t.hero;
    el.innerHTML = `
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__bg-pattern"></div>
        <div class="hero__bg-overlay"></div>
      </div>
      <div class="hero__content container">
        <div class="hero__city-badge">${lang==='ar'?'📍 المحمدية، المغرب':'📍 Mohammedia, Maroc'}</div>
        <span class="hero__badge">${h.badge}</span>
        <h1 class="hero__headline">${h.headline.replace('\n','<br>')}</h1>
        <p class="hero__sub">${h.subheadline}</p>
        <div class="hero__actions">
          <a href="${WA_URL}?text=${waMsg(lang)}" class="btn btn--wa btn--lg" target="_blank" rel="noopener">
            ${WA_SVG} ${h.cta_primary}
          </a>
          <a href="#services" class="btn btn--outline btn--lg">${h.cta_secondary}</a>
        </div>
        <div class="hero__trust"><span class="hero__trust-badge">✓ ${h.trust}</span></div>
        <div class="hero__cities-strip">
          ${MOROCCAN_CITIES.slice(0,8).map(c=>`<span class="hero__city-tag">${lang==='ar'?c.ar:c.fr}</span>`).join('')}
          <span class="hero__city-tag hero__city-tag--more">+${MOROCCAN_CITIES.length-8} ${lang==='ar'?'مدينة':'villes'}</span>
        </div>
      </div>`;
  }

  // ── Services ───────────────────────────────────────
  function renderServices(lang, t) {
    const el = document.getElementById('services');
    if (!el) return;
    const st = t.services_section;
    el.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${st.title}</h2>
          <p class="section-subtitle">${st.subtitle}</p>
        </header>
        <div class="services-grid">${typeof renderServicesGrid==='function'?renderServicesGrid(lang):''}</div>
        <div class="services__cta">
          <a href="${WA_URL}?text=${waMsg(lang)}" class="btn btn--wa btn--lg" target="_blank" rel="noopener">
            ${WA_SVG} ${lang==='ar'?'تواصل معنا الآن':lang==='fr'?'Nous contacter':lang==='es'?'Contáctenos':'Contact Us Now'}
          </a>
        </div>
      </div>`;
  }

  // ── Cities Grid ────────────────────────────────────
  function renderCities(lang, t) {
    const el = document.getElementById('cities');
    if (!el) return;
    const cs = t.cities_section;
    el.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${cs.title}</h2>
          <p class="section-subtitle">${cs.subtitle}</p>
        </header>
        <div class="cities-grid">${typeof renderCitiesGrid==='function'?renderCitiesGrid(lang):''}</div>
        <div class="cities__note">
          <p>${lang==='ar'?'نخدم جميع المدن المغربية عن بُعد عبر واتساب والبريد الإلكتروني. لا تتردد في التواصل معنا من أي مكان في المغرب أو خارجه.':lang==='fr'?'Nous servons toutes les villes du Maroc à distance par WhatsApp et email.':lang==='es'?'Atendemos todas las ciudades de Marruecos de forma remota por WhatsApp.':'We serve all Moroccan cities remotely via WhatsApp and email.'}</p>
        </div>
      </div>`;
  }

  // ── Process ────────────────────────────────────────
  function renderProcess(lang, t) {
    const el = document.getElementById('process');
    if (!el) return;
    const p = t.process;
    el.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${p.title}</h2>
        </header>
        <ol class="process-steps">
          ${p.steps.map((s,i)=>`
            <li class="process-step" data-step="${i+1}">
              <div class="process-step__num">${s.num}</div>
              <div class="process-step__content">
                <h3 class="process-step__title">${s.title}</h3>
                <p class="process-step__desc">${s.desc}</p>
              </div>
            </li>`).join('')}
        </ol>
      </div>`;
  }

  // ── Testimonials ───────────────────────────────────
  function renderTestimonials(lang, t) {
    const el = document.getElementById('testimonials');
    if (!el) return;
    const tm = t.testimonials;
    el.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${tm.title}</h2>
        </header>
        <div class="testimonials-grid">
          ${tm.items.map(item=>`
            <blockquote class="testimonial-card" itemscope itemtype="https://schema.org/Review">
              <div class="testimonial-card__stars">${'★'.repeat(item.stars)}</div>
              <p class="testimonial-card__text" itemprop="reviewBody">"${item.text}"</p>
              <footer class="testimonial-card__author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                <cite itemprop="name">${item.name}</cite>
              </footer>
            </blockquote>`).join('')}
        </div>
      </div>`;
  }

  // ── FAQ ────────────────────────────────────────────
  function renderFAQ(lang, t) {
    const el = document.getElementById('faq');
    if (!el) return;
    const faq = t.faq;
    el.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${faq.title}</h2>
        </header>
        <div class="faq-list" itemscope itemtype="https://schema.org/FAQPage">
          ${faq.items.map((item,i)=>`
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="faq-item__question" aria-expanded="false" aria-controls="faq-${i}" onclick="window.TAB.toggleFAQ(this)">
                <span itemprop="name">${item.q}</span>
                <span class="faq-item__icon">+</span>
              </button>
              <div class="faq-item__answer" id="faq-${i}" hidden itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">${item.a}</p>
                <a href="${WA_URL}?text=${waMsg(lang)}" class="faq-wa-link" target="_blank" rel="noopener">
                  ${lang==='ar'?'تواصل معنا →':lang==='fr'?'Nous contacter →':lang==='es'?'Contáctenos →':'Contact us →'}
                </a>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  // ── Blog ───────────────────────────────────────────
  function renderBlog(lang) {
    const el = document.getElementById('blog');
    if (!el || typeof BLOG_ARTICLES === 'undefined') return;
    const titles = { ar:'المدونة', fr:'Blog', en:'Blog', es:'Blog' };
    const subs = {
      ar:'مقالات ونصائح حول الخدمات الإدارية في المحمدية وجميع مدن المغرب',
      fr:'Articles et conseils sur les démarches administratives au Maroc',
      en:'Articles and tips on administrative procedures across Morocco',
      es:'Artículos sobre trámites administrativos en Marruecos'
    };
    el.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${titles[lang]}</h2>
          <p class="section-subtitle">${subs[lang]}</p>
          <div class="blog-lang-tabs">
            ${['ar','fr','en','es'].map(l=>`
              <button class="blog-tab${l===lang?' blog-tab--active':''}" onclick="window.TAB.setLang('${l}')">
                ${l.toUpperCase()} <span class="blog-tab__count">(${BLOG_ARTICLES[l].length})</span>
              </button>`).join('')}
          </div>
        </header>
        <div class="blog-grid" id="blog-grid">
          ${typeof renderBlogGrid==='function'?renderBlogGrid(lang,9):''}
        </div>
        <div class="blog__more">
          <button class="btn btn--outline" onclick="window.TAB.loadMoreBlog('${lang}')">
            ${lang==='ar'?'عرض المزيد':lang==='fr'?'Voir plus':lang==='es'?'Ver más':'Load More'}
          </button>
        </div>
      </div>`;
  }

  // ── Contact ────────────────────────────────────────
  function renderContact(lang, t) {
    const el = document.getElementById('contact');
    if (!el) return;
    const c = t.contact; const f = c.form;
    const cityOptions = MOROCCAN_CITIES.map(city =>
      `<option value="${city.id}">${lang==='ar'?city.ar:city.fr}</option>`).join('');
    const serviceOptions = Object.values(t.services).map(s =>
      `<option value="${s.title}">${s.title}</option>`).join('');
    el.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${c.title}</h2>
          <p class="section-subtitle">${c.subtitle}</p>
        </header>
        <div class="contact-grid">
          <div class="contact-info">
            <a href="${WA_URL}?text=${waMsg(lang)}" class="btn btn--wa btn--xl contact-wa-btn" target="_blank" rel="noopener">
              ${WA_SVG} ${c.whatsapp_btn}
            </a>
            <div class="contact-details">
              <div class="contact-detail"><span class="contact-detail__icon">📱</span><span>+212 661 001 122</span></div>
              <div class="contact-detail"><span class="contact-detail__icon">📧</span><a href="mailto:contact@taboula.com">contact@taboula.com</a></div>
              <div class="contact-detail"><span class="contact-detail__icon">📍</span><span>${lang==='ar'?'المحمدية، المغرب':'Mohammedia, Maroc'}</span></div>
              <div class="contact-detail"><span class="contact-detail__icon">🌍</span><span>${lang==='ar'?'نخدم جميع مدن المغرب':lang==='fr'?'Toutes les villes du Maroc':lang==='es'?'Todas las ciudades de Marruecos':'All Moroccan cities'}</span></div>
            </div>
            <div class="contact-cities-list">
              <h4>${lang==='ar'?'نخدم أيضاً:':lang==='fr'?'Nous servons aussi:':lang==='es'?'También servimos:':'We also serve:'}</h4>
              <div class="mini-cities">
                ${MOROCCAN_CITIES.filter(c=>!c.primary).slice(0,12).map(c=>`
                  <a href="cities/${c.slug}.html" class="mini-city">${lang==='ar'?c.ar:c.fr}</a>`).join('')}
              </div>
            </div>
          </div>
          <div class="contact-form-wrap">
            <form class="contact-form" onsubmit="window.TAB.submitForm(event,'${lang}')">
              <div class="form-group">
                <label for="cf-name">${f.name}</label>
                <input type="text" id="cf-name" name="name" required placeholder="${f.name}">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="cf-phone">${f.phone}</label>
                  <input type="tel" id="cf-phone" name="phone" placeholder="+212...">
                </div>
                <div class="form-group">
                  <label for="cf-city">${f.city}</label>
                  <select id="cf-city" name="city">${cityOptions}</select>
                </div>
              </div>
              <div class="form-group">
                <label for="cf-service">${f.service}</label>
                <select id="cf-service" name="service">${serviceOptions}</select>
              </div>
              <div class="form-group">
                <label for="cf-message">${f.message}</label>
                <textarea id="cf-message" name="message" rows="4" required placeholder="${f.message}"></textarea>
              </div>
              <button type="submit" class="btn btn--wa btn--block">${WA_SVG} ${f.submit}</button>
            </form>
          </div>
        </div>
      </div>`;
  }

  // ── Footer ─────────────────────────────────────────
  function renderFooter(lang, t) {
    const el = document.getElementById('main-footer');
    if (!el) return;
    const f = t.footer;
    const topCities = MOROCCAN_CITIES.slice(0,10);
    el.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">✍️ taboula.com</div>
            <p class="footer-tagline">${f.tagline}</p>
            <a href="${WA_URL}" class="footer-wa" target="_blank" rel="noopener">
              ${WA_SVG} +212 661 001 122
            </a>
            <div class="footer-langs">
              ${['ar','fr','en','es'].map(l=>`<button class="lang-btn-sm" onclick="window.TAB.setLang('${l}')">${l.toUpperCase()}</button>`).join('')}
            </div>
          </div>
          <div class="footer-services">
            <h3>${f.services_title}</h3>
            <ul>${Object.values(t.services).map(s=>`<li><a href="#services">${s.title}</a></li>`).join('')}</ul>
          </div>
          <div class="footer-cities">
            <h3>${f.cities_title}</h3>
            <ul>${topCities.map(c=>`<li><a href="cities/${c.slug}.html">${lang==='ar'?c.ar:c.fr}</a></li>`).join('')}</ul>
          </div>
          <div class="footer-contact">
            <h3>${f.contact_title}</h3>
            <ul>
              <li><a href="${WA_URL}" target="_blank" rel="noopener">WhatsApp: +212 661 001 122</a></li>
              <li><a href="mailto:contact@taboula.com">contact@taboula.com</a></li>
              <li>${lang==='ar'?'المحمدية، المغرب':'Mohammedia, Maroc'}</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} taboula.com — ${f.legal}</p>
          <div class="footer-legal">
            <a href="privacy.html">${f.privacy}</a>
            <a href="terms.html">${f.terms}</a>
          </div>
        </div>
      </div>`;
  }

  // ── Floating WA ─────────────────────────────────────
  function renderFloatingWA(lang, t) {
    let fab = document.getElementById('wa-fab');
    if (!fab) { fab = document.createElement('a'); fab.id = 'wa-fab'; document.body.appendChild(fab); }
    fab.href = `${WA_URL}?text=${waMsg(lang)}`;
    fab.target = '_blank'; fab.rel = 'noopener'; fab.className = 'wa-fab';
    fab.setAttribute('aria-label', 'WhatsApp');
    fab.innerHTML = `${WA_SVG}<span class="wa-fab__label">${t.whatsapp_float}</span>`;
  }

  function updateLangSwitcher(lang) {
    document.querySelectorAll('.lang-btn, .lang-btn-sm').forEach(btn => {
      const isActive = btn.textContent.trim().toLowerCase() === lang;
      btn.classList.toggle('lang-btn--active', isActive);
    });
  }

  // ── Global helpers ──────────────────────────────────
  let blogOffset = 9;

  window.TAB = {
    setLang,
    toggleFAQ(btn) {
      const item = btn.closest('.faq-item');
      const ans = item.querySelector('.faq-item__answer');
      const icon = btn.querySelector('.faq-item__icon');
      const wasOpen = !ans.hidden;
      document.querySelectorAll('.faq-item__answer').forEach(a => { a.hidden = true; });
      document.querySelectorAll('.faq-item__icon').forEach(i => { i.textContent = '+'; });
      document.querySelectorAll('.faq-item__question').forEach(b => b.setAttribute('aria-expanded','false'));
      if (!wasOpen) { ans.hidden = false; icon.textContent = '−'; btn.setAttribute('aria-expanded','true'); }
    },
    submitForm(e, lang) {
      e.preventDefault();
      const form = e.target;
      const name = form.querySelector('#cf-name').value;
      const city = form.querySelector('#cf-city').value;
      const service = form.querySelector('#cf-service').value;
      const message = form.querySelector('#cf-message').value;
      const msgs = {
        ar: `مرحباً، أنا ${name} من ${city}.\nأريد الاستفسار عن: ${service}\n\n${message}`,
        fr: `Bonjour, je suis ${name} de ${city}.\nJe souhaite: ${service}\n\n${message}`,
        en: `Hello, I'm ${name} from ${city}.\nI need: ${service}\n\n${message}`,
        es: `Hola, soy ${name} de ${city}.\nNecesito: ${service}\n\n${message}`
      };
      window.open(`${WA_URL}?text=${encodeURIComponent(msgs[lang]||msgs.ar)}`, '_blank');
    },
    loadMoreBlog(lang) {
      const grid = document.getElementById('blog-grid');
      if (!grid || typeof BLOG_ARTICLES === 'undefined') return;
      const batch = BLOG_ARTICLES[lang].slice(blogOffset, blogOffset + 6);
      if (!batch.length) return;
      batch.forEach(a => {
        const card = document.createElement('article');
        card.className = 'blog-card is-visible';
        card.innerHTML = `
          <div class="blog-card__cat blog-cat--${a.category}">${getCategoryLabel(lang, a.category)}</div>
          <h3 class="blog-card__title"><a href="blog/${a.slug}.html">${a.title}</a></h3>
          <p class="blog-card__excerpt">${a.excerpt}</p>
          <div class="blog-card__meta">
            <span class="read-time">⏱ ${a.readTime} ${lang==='ar'?'دق':'min'}</span>
            <a href="blog/${a.slug}.html" class="read-more">${lang==='ar'?'اقرأ المزيد →':'Read more →'}</a>
          </div>`;
        grid.appendChild(card);
      });
      blogOffset += 6;
    }
  };

  // ── Scroll / Observer ──────────────────────────────
  function initScrollEffects() {
    const header = document.getElementById('site-header');
    if (!header) return;
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      header.classList.toggle('header--scrolled', y > 50);
      header.classList.toggle('header--hidden', y > lastY && y > 200);
      lastY = y;
    }, { passive: true });
  }

  function initObserver() {
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.service-card,.process-step,.testimonial-card,.blog-card,.faq-item,.city-card').forEach(el => obs.observe(el));
  }

  // ── Init ──────────────────────────────────────────
  function init() {
    applyLanguage(getStoredLang());
    initScrollEffects();
    setTimeout(initObserver, 100);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
