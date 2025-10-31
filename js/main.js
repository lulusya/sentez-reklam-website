// ================================================================
// SENTEZ REKLAM - MAIN JAVASCRIPT
// Temel fonksiyonellik (1. Adım)
// 2. ve 3. adımlarda modern efektler eklenecek
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    // === PRELOADER (Step 3) ===
    initPreloader();
    
    // === CUSTOM CURSOR ===
    initCustomCursor();
    
    // === MOBILE MENU ===
    initMobileMenu();
    
    // === PORTFOLIO FILTER ===
    initPortfolioFilter();
    
    // === SMOOTH SCROLL ===
    initSmoothScroll();
    
    // === NAVBAR SCROLL EFFECT ===
    initNavbarScroll();
    
    // === FAQ ACCORDION ===
    initFAQ();
    
    // === CONTACT FORM ===
    initContactForm();

    // === CURSOR LABEL HOOKS (Step 2) ===
    initCursorLabels();

    // === LIGHTBOX (Step 3) ===
    initLightbox();

    // === COUNTERS (Step 3) ===
    initCounters();

    // === HERO CANVAS (Step 3, optional) ===
    initHeroCanvas();

    // === A11Y ROLES & ATTRIBUTES (Perf/A11y Step) ===
    initA11yAttributes();

    // === COOKIE BANNER (Perf/A11y Step) ===
    initCookieBanner();

    // === PAGE TRANSITIONS (Step 3) ===
    initPageTransitions();

    // === SCROLL PROGRESS BAR (Step 3) ===
    initScrollProgress();

    // === SPLIT TEXT (Step 3) ===
    initSplitText();

    // === MAGNETIC + TILT (Step 3) ===
    initMagnetic();
    initHoverTilt();
    initMiniTOC();

    // === IMAGE FALLBACKS ===
    initImageFallbacks();

    // === ANALYTICS (GA4 placeholder) ===
    initAnalytics();
    
});

// === CUSTOM CURSOR ===
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const follower = document.getElementById('cursorFollower');
    
    if (!cursor || !follower) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    // Mouse hareket takibi
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor hareketi
    function animate() {
        // Cursor (hızlı)
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Follower (yavaş)
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();
    
    // Hover efektleri
    const interactiveElements = document.querySelectorAll('a, button, .portfolio-card, .service-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// === A11Y ROLES & ATTRIBUTES ===
function initA11yAttributes() {
    const nav = document.getElementById('mainNav');
    if (nav) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Ana menü');
    }
    const footer = document.querySelector('footer.main-footer');
    if (footer) footer.setAttribute('role', 'contentinfo');

    const toggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'navLinks');
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
        });
    }

    // Dropdown accessibility basics
    document.querySelectorAll('.dropdown > a').forEach(a => {
        a.setAttribute('aria-haspopup', 'true');
        a.setAttribute('aria-expanded', 'false');
        a.addEventListener('focus', () => a.setAttribute('aria-expanded', 'true'));
        a.addEventListener('blur', () => a.setAttribute('aria-expanded', 'false'));
    });
}

// === COOKIE BANNER ===
function initCookieBanner() {
    try {
        const key = 'cookieConsent';
        if (localStorage.getItem(key)) return; // already accepted

        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <p>Deneyiminizi iyileştirmek için çerezler kullanıyoruz. Devam ederek çerezleri kabul etmiş olursunuz. <a href="#" style="color:#FF6B00; text-decoration:underline;">Gizlilik Politikası</a></p>
            <div class="cookie-actions">
                <button class="btn-settings" type="button">Ayarlar</button>
                <button class="btn-accept" type="button">Kabul Et</button>
            </div>
        `;
        document.body.appendChild(banner);
        requestAnimationFrame(() => banner.classList.add('show'));

        banner.querySelector('.btn-accept').addEventListener('click', () => {
            localStorage.setItem(key, 'accepted');
            banner.classList.remove('show');
            setTimeout(() => banner.remove(), 300);
        });
        banner.querySelector('.btn-settings').addEventListener('click', () => {
            alert('Çerez ayarları yakında burada yönetilecek. Şimdilik yalnızca gerekli çerezler kullanılmaktadır.');
        });
    } catch (e) {
        // fail silently
        console.warn('Cookie banner init failed', e);
    }
}

// === CURSOR LABELS (Step 2) ===
function initCursorLabels() {
    const follower = document.getElementById('cursorFollower');
    if (!follower) return;

    const bindings = [
        { selector: '.portfolio-card, .project-image, .card-image, .project-view', label: 'GÖRÜNTÜLE' },
        { selector: 'a.btn-primary, .cta-button', label: 'TIKLA' },
        { selector: 'a[href^="tel:"]', label: 'ARA' },
        { selector: '.service-card .service-link', label: 'DETAY' }
    ];

    bindings.forEach(b => {
        document.querySelectorAll(b.selector).forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.dataset.label = b.label;
                follower.classList.add('has-label');
            });
            el.addEventListener('mouseleave', () => {
                delete follower.dataset.label;
                follower.classList.remove('has-label');
            });
        });
    });
}

// === MOBILE MENU ===
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!toggle || !navLinks) return;
    
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active');
    });
    
    // Menü dışına tıklayınca kapat
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
}

// === PORTFOLIO FILTER ===
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const tagButtons = document.querySelectorAll('.tag-filter');
    const searchInput = document.getElementById('portfolioSearch');
    const portfolioItems = document.querySelectorAll('.portfolio-card');
    if (portfolioItems.length === 0) return;

    let state = {
        category: 'all',
        tags: new Set(),
        query: ''
    };

    function applyFilters() {
        const q = state.query.toLowerCase().trim();
        portfolioItems.forEach(item => {
            const itemCategory = (item.getAttribute('data-category') || '').toLowerCase();
            const tags = (item.getAttribute('data-tags') || '')
                .split(',')
                .map(t => t.trim().toLowerCase())
                .filter(Boolean);
            const text = (
                (item.querySelector('.card-title')?.textContent || '') + ' ' +
                (item.querySelector('.card-excerpt')?.textContent || '') + ' ' +
                (item.querySelector('img')?.alt || '')
            ).toLowerCase();

            const passCategory = state.category === 'all' || itemCategory === state.category;
            const passTags = state.tags.size === 0 || [...state.tags].every(t => tags.includes(t));
            const passQuery = q === '' || text.includes(q);

            if (passCategory && passTags && passQuery) {
                item.style.display = 'inline-block';
                item.style.animation = 'fadeInUp 0.4s ease both';
            } else {
                item.style.display = 'none';
            }
        });

        // URL parametrelerini güncelle (temiz URL için varsayılanları yazma)
        try {
            const params = new URLSearchParams(window.location.search);
            if (state.category && state.category !== 'all') params.set('category', state.category); else params.delete('category');
            if (state.tags.size > 0) params.set('tag', [...state.tags].join(',')); else params.delete('tag');
            if (q) params.set('q', state.query); else params.delete('q');
            const qs = params.toString();
            const url = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
            window.history.replaceState({}, '', url);
        } catch (e) {
            // sessiz geç
        }
    }

    // Kategori
    if (filterButtons.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                state.category = (button.getAttribute('data-category') || 'all').toLowerCase();
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                applyFilters();
            });
        });
    }

    // Etiketler
    if (tagButtons.length) {
        tagButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tag = (btn.getAttribute('data-tag') || '').toLowerCase();
                if (!tag) return;
                if (btn.classList.contains('active')) {
                    btn.classList.remove('active');
                    state.tags.delete(tag);
                } else {
                    btn.classList.add('active');
                    state.tags.add(tag);
                }
                applyFilters();
            });
        });
    }

    // Arama
    if (searchInput) {
        let t;
        searchInput.addEventListener('input', () => {
            clearTimeout(t);
            t = setTimeout(() => {
                state.query = searchInput.value || '';
                applyFilters();
            }, 120);
        });
    }

    // URL'den başlangıç durumu oku
    try {
        const params = new URLSearchParams(window.location.search);
        const pCategory = (params.get('category') || '').toLowerCase();
        const pTags = (params.get('tag') || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
        const pQuery = params.get('q') || '';
        if (pCategory) state.category = pCategory;
        if (pTags.length) state.tags = new Set(pTags);
        if (pQuery) state.query = pQuery;

        // UI'yı senkronize et
        if (filterButtons.length) {
            filterButtons.forEach(btn => {
                const cat = (btn.getAttribute('data-category') || '').toLowerCase();
                btn.classList.toggle('active', (state.category === 'all' && cat === 'all') || cat === state.category);
            });
        }
        if (tagButtons.length) {
            tagButtons.forEach(btn => {
                const tag = (btn.getAttribute('data-tag') || '').toLowerCase();
                btn.classList.toggle('active', state.tags.has(tag));
            });
        }
        if (searchInput) searchInput.value = state.query;
    } catch (e) {/* sessiz */}

    applyFilters();
}

// === SMOOTH SCROLL ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// === NAVBAR SCROLL EFFECT ===
function initNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Scroll down -> gizle
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        // Scroll aşağıda -> shadow ekle
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(44, 58, 71, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(44, 58, 71, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
}

// === FAQ ACCORDION ===
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) return;
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Tüm açık FAQ'leri kapat
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Tıklanan FAQ'i aç/kapat
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// === CONTACT FORM ===
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const endpoint = (form.getAttribute('data-endpoint') || '').trim();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validasyon
        if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
            alert('Lütfen tüm zorunlu alanları doldurun.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Geçerli bir e-posta adresi girin.');
            return;
        }

        // Backend yoksa simüle et
        if (!endpoint) {
            console.log('Form Data (simulated):', data);
            form.style.display = 'none';
            if (successMessage) successMessage.style.display = 'block';
            setTimeout(() => {
                form.style.display = 'block';
                if (successMessage) successMessage.style.display = 'none';
                form.reset();
            }, 5000);
            return;
        }

        // Formspree/Netlify Forms gibi basit JSON gönderimi
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            });
            if (res.ok) {
                form.style.display = 'none';
                if (successMessage) successMessage.style.display = 'block';
                form.reset();
            } else {
                alert('Gönderim sırasında bir sorun oluştu. Lütfen daha sonra tekrar deneyin.');
            }
        } catch (err) {
            alert('Ağ bağlantısında sorun oluştu. Lütfen daha sonra tekrar deneyin.');
            console.error(err);
        }
    });
}

// === PARALLAX EFFECT (Basit versiyon - 2. adımda geliştirilecek) ===
window.addEventListener('scroll', () => {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const scrolled = window.pageYOffset;
    
    parallaxLayers.forEach(layer => {
        const speed = layer.getAttribute('data-speed') || 0.5;
        layer.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// === SCROLL REVEAL ANIMATION ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animasyonlu elementleri gözlemle
document.querySelectorAll('.service-card, .project-item, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// === CONSOLE WATERMARK ===
console.log('%c🚀 Sentez Reklam Web Sitesi', 'font-size: 20px; color: #FF6B00; font-weight: bold;');
console.log('%cGeliştirici: GitHub Copilot', 'font-size: 14px; color: #2C3A47;');
console.log('%c3 Adımlı Modern Geliştirme Süreci', 'font-size: 12px; color: #8895A7;');

// === PRELOADER (Step 3) ===
function initPreloader() {
    // Overlay oluştur
    const pre = document.createElement('div');
    pre.id = 'preloader';
    pre.innerHTML = '<div class="spinner" aria-label="Yükleniyor"></div>';
    document.body.appendChild(pre);

    window.addEventListener('load', () => {
        // Küçük bir gecikme ile fade-out
        setTimeout(() => {
            pre.classList.add('hide');
            // DOM'dan kaldır
            setTimeout(() => pre.remove(), 700);
        }, 200);
    });
}

// === LIGHTBOX (Step 3) ===
function initLightbox() {
    // Lightbox DOM
    const backdrop = document.createElement('div');
    backdrop.className = 'lightbox-backdrop';
    backdrop.innerHTML = `
        <div class="lightbox" role="dialog" aria-modal="true" aria-label="Görüntü Önizleme">
            <button class="lightbox-close" aria-label="Kapat">✕</button>
            <div class="lightbox-nav">
                <button class="prev" aria-label="Önceki">◀</button>
                <button class="next" aria-label="Sonraki">▶</button>
            </div>
            <img alt="" />
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(backdrop);

    const imgEl = backdrop.querySelector('img');
    const captionEl = backdrop.querySelector('.lightbox-caption');
    const btnClose = backdrop.querySelector('.lightbox-close');
    const btnPrev = backdrop.querySelector('.prev');
    const btnNext = backdrop.querySelector('.next');

    // Kaynaklar (tüm portfolyo görüntüleri)
    const items = Array.from(document.querySelectorAll('.portfolio-card .card-image img, .project-item img'));
    let currentIndex = -1;

    if (items.length === 0) return;

    function openAt(index) {
        if (index < 0 || index >= items.length) return;
        currentIndex = index;
        const src = items[index].getAttribute('data-large') || items[index].src;
        const caption = items[index].getAttribute('data-caption') || items[index].alt || '';
        imgEl.src = src;
        imgEl.alt = caption;
        captionEl.textContent = caption;
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
        currentIndex = -1;
    }

    function prev() { if (currentIndex > -1) openAt((currentIndex - 1 + items.length) % items.length); }
    function next() { if (currentIndex > -1) openAt((currentIndex + 1) % items.length); }

    // Kartlara tıklama
    items.forEach((img, i) => {
        const parent = img.closest('.portfolio-card, .project-item, .card-image') || img;
        parent.style.cursor = 'zoom-in';
        parent.addEventListener('click', (e) => {
            // Linke tıklanmadıysa aç
            if (e.target.tagName.toLowerCase() !== 'a') {
                e.preventDefault();
                openAt(i);
            }
        });
    });

    // Kontroller
    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', next);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    document.addEventListener('keydown', (e) => {
        if (!backdrop.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });
}

// === COUNTERS (Step 3) ===
function initCounters() {
    const counters = document.querySelectorAll('.counter, [data-count], [data-target]');
    if (counters.length === 0) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            io.unobserve(el);

            const target = Number(el.getAttribute('data-count') || el.getAttribute('data-target') || el.textContent.replace(/[^0-9.]/g, '')) || 0;
            const duration = 1000 + Math.min(2000, target * 5);
            const start = performance.now();

            function tick(now) {
                const p = Math.min(1, (now - start) / duration);
                const val = Math.floor(target * (p < 0.5 ? 2*p*p : -1 + (4 - 2*p) * p)); // easeInOut
                el.textContent = new Intl.NumberFormat('tr-TR').format(val);
                if (p < 1) requestAnimationFrame(tick); else el.textContent = new Intl.NumberFormat('tr-TR').format(target);
            }
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.3 });

    counters.forEach(c => io.observe(c));
}

// === HERO CANVAS (Step 3, subtle particles) ===
function initHeroCanvas() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'hero-canvas';
    hero.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let w, h, particles;

    function resize() {
        w = canvas.width = hero.clientWidth;
        h = canvas.height = hero.clientHeight;
        createParticles();
    }

    function createParticles() {
        const count = Math.floor((w * h) / 25000); // yoğunluk düşük
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.8 + 0.4,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3
        }));
    }

    function step() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(step);
    }

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(step);
}

// === PAGE TRANSITIONS (Swup) ===
function initPageTransitions() {
    if (window.__swupInstance) return; // avoid duplicate

    const start = () => {
        try {
            const swup = new Swup({ containers: ['#main'] });
            window.__swupInstance = swup;

            const reInit = () => {
                initMobileMenu();
                initPortfolioFilter();
                initSmoothScroll();
                initNavbarScroll();
                initFAQ();
                initContactForm();
                initCursorLabels();
                initLightbox();
                initCounters();
                initHeroCanvas();
                initA11yAttributes();
                initCookieBanner();
                initSplitText();
                initMagnetic();
                initHoverTilt();
                initMiniTOC();
                initScrollProgress(true);
                initImageFallbacks();
                initAnalytics();
            };

            // Swup v4 hooks
            swup.hooks.on('content:replace', reInit);
        } catch (e) {
            console.warn('Swup init failed', e);
        }
    };

    if (window.Swup) {
        start();
    } else {
        const s = document.createElement('script');
        s.src = 'https://unpkg.com/swup@4';
        s.defer = true;
        s.onload = start;
        document.head.appendChild(s);
    }
}

// === IMAGE FALLBACKS ===
function initImageFallbacks() {
    const svg = encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="#ECEFF3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" fill="#8895A7">Görsel hazırlanıyor</text></svg>`);
    const placeholder = `data:image/svg+xml;charset=utf-8,${svg}`;
    document.querySelectorAll('img').forEach(img => {
        if (!img.getAttribute('loading')) img.setAttribute('loading', 'lazy');
        img.addEventListener('error', () => {
            if (img.__fallbackApplied) return;
            img.__fallbackApplied = true;
            img.src = placeholder;
        }, { once: true });
    });
}

// === GA4 INIT (placeholder) ===
function initAnalytics() {
    const GA_ID = document.documentElement.getAttribute('data-ga-id') || '';
    if (!GA_ID || GA_ID === 'G-XXXXXXX' || window.__gaLoaded) return;
    window.__gaLoaded = true;
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    const s2 = document.createElement('script');
    s2.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${GA_ID}');`;
    document.head.appendChild(s1);
    document.head.appendChild(s2);
}

// === SCROLL PROGRESS BAR ===
function initScrollProgress(forceRecalc = false) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let bar = document.getElementById('scrollProgress');
    if (!bar) {
        bar = document.createElement('div');
        bar.id = 'scrollProgress';
        document.body.appendChild(bar);
    }

    function update() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    }
    update();
    window.removeEventListener('scroll', update); // ensure single listener
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
}

// === SPLIT TEXT (words/chars) ===
function initSplitText() {
    const nodes = document.querySelectorAll('[data-split]');
    nodes.forEach(node => {
        if (node.__splitApplied) return;
        node.__splitApplied = true;
        const mode = node.getAttribute('data-split');
        const text = node.textContent.trim();
        node.textContent = '';
        if (mode === 'words') {
            text.split(/(\s+)/).forEach(part => {
                if (part.trim().length === 0) {
                    node.appendChild(document.createTextNode(part));
                } else {
                    const span = document.createElement('span');
                    span.className = 'split-word';
                    span.textContent = part;
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(16px)';
                    span.style.display = 'inline-block';
                    node.appendChild(span);
                }
            });
        } else if (mode === 'chars') {
            Array.from(text).forEach(ch => {
                const span = document.createElement('span');
                span.className = 'split-char';
                span.textContent = ch;
                span.style.opacity = '0';
                span.style.transform = 'translateY(16px)';
                span.style.display = 'inline-block';
                node.appendChild(span);
            });
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                observer.unobserve(entry.target);
                const children = entry.target.querySelectorAll('.split-word, .split-char');
                children.forEach((el, i) => {
                    setTimeout(() => {
                        el.style.transition = 'opacity .4s cubic-bezier(.2,.8,.2,1), transform .4s cubic-bezier(.2,.8,.2,1)';
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, i * 28);
                });
            });
        }, { threshold: 0.2 });
        observer.observe(node);
    });
}

// === MAGNETIC BUTTONS ===
function initMagnetic() {
    const list = document.querySelectorAll('.btn, .cta-button');
    list.forEach(el => {
        el.classList.add('magnetic');
        let rect;
        function onMove(e) {
            rect = rect || el.getBoundingClientRect();
            const mx = e.clientX - rect.left - rect.width/2;
            const my = e.clientY - rect.top - rect.height/2;
            el.style.transform = `translate(${mx * 0.08}px, ${my * 0.12}px)`;
        }
        function onLeave() {
            rect = null;
            el.style.transform = 'translate(0,0)';
        }
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
    });
}

// === HOVER 3D TILT ===
function initHoverTilt() {
    const items = document.querySelectorAll('.service-card, .portfolio-card');
    items.forEach(card => {
        let rect;
        function move(e) {
            rect = rect || card.getBoundingClientRect();
            const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -6; // tilt up/down
            const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 6;  // tilt left/right
            card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
        }
        function leave() {
            rect = null;
            card.style.transform = 'rotateX(0) rotateY(0)';
        }
        card.addEventListener('mousemove', move);
        card.addEventListener('mouseleave', leave);
    });
}

// === MINI TOC (sticky, aria-current) ===
function initMiniTOC() {
    const toc = document.querySelector('.mini-toc');
    if (!toc) return;
    const links = toc.querySelectorAll('a[href^="#"]');
    const map = new Map();
    links.forEach(a => {
        const id = a.getAttribute('href');
        const target = document.querySelector(id);
        if (target) map.set(target, a);
    });
    if (map.size === 0) return;

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const link = map.get(entry.target);
            if (!link) return;
            if (entry.isIntersecting) {
                links.forEach(l => l.removeAttribute('aria-current'));
                link.setAttribute('aria-current', 'true');
            }
        });
    }, { threshold: 0.6, rootMargin: '0px 0px -20% 0px' });

    map.forEach((_, section) => io.observe(section));
}
