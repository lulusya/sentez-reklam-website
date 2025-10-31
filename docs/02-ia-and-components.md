# Bilgi Mimarisi (IA) ve Bileşen Envanteri

Tarih: 30.10.2025

## Önerilen Site Haritası (IA)

/
├─ index.html (Ana Sayfa)
│  ├─ Hero (parallax + canvas, hafif)
│  ├─ Hizmetler (kısa kartlar)
│  ├─ Öne Çıkan Projeler (3-6 kart)
│  ├─ Üretim Süreci (kısa timeline)
│  ├─ Referanslar (marquee/logolar)
│  └─ CTA (Teklif/İletişim)
├─ about.html (Hakkımızda)
│  ├─ Hikaye, Misyon/Vizyon, Değerler
│  ├─ Tesis/Atölye (galeri)
│  └─ Ekip
├─ services/
│  ├─ tabela.html
│  ├─ baski.html
│  ├─ stand.html
│  └─ tasarim.html
├─ portfolio.html (Projeler)
│  ├─ Filtreler (kategori/etiket)
│  ├─ Masonry Grid (resim/video kartlar)
│  └─ (Yeni) Proje Detay URL’leri
│      └─ case/slug.html (Case Study Şablonu)
├─ contact.html (İletişim)
│  ├─ Kartlar (tel/mail/konum/whatsapp)
│  ├─ Form (backend entegrasyonu)
│  └─ Harita + SSS
└─ yasal/
   ├─ gizlilik.html
   └─ cerezler.html

Önerilen URL Yapısı:
- /case/<slug> (ör: /case/marka-proje-2025)
- /tag/<etiket> (opsiyonel sanal filtreleme)

## İçerik Modeli (Proje/Case)
- title, slug, client, year, services[], tags[]
- coverMedia (img/video), gallery[] (img/video + caption)
- challenge, solution, process (adımlar), results (metrikler)
- testimonial (opsiyonel), links (basın vs.)

## Bileşen Envanteri ve Durumları
- Navigation (desktop/mobile, dropdown; sticky, hide-on-scroll)
- Hero (image/video/canvas; overlay; headline + split text)
- SectionHeader (label, title, subtitle)
- ServiceCard (ikon+başlık+özet+link; hover 3D)
- ProjectCard (görsel+kategori+başlık; hover overlay; lightbox/cta)
- Filters/Chips (aktif/pasif; çoklu seçim opsiyonel)
- MasonryGrid (columns; responsive kırılımlar)
- ProcessTimeline (ikonlu adımlar)
- Stats/Counters (appear on view; format)
- ClientsMarquee (loop; pause-on-hover)
- FAQ Accordion (tek açık; klavye desteği)
- ContactForm (validasyon; gönderim durumları)
- MapEmbed (adres/rota CTA)
- Footer (linkler, sosyal, telif)
- Preloader (load-state; otomatik kaldırma)
- Lightbox/Modal (caption; nav; ESC/okları)
- CustomCursor (etiketli; reduced-motion’da sade)
- CookieBanner (izin durumları)
- PageTransition (pjax/swup; fallback)
- ScrollProgress (yatay bar; sticky)
- StickyTOC (case sayfalarında mini içindekiler)
- MediaPlayer (video için kontroller, poster)
- BeforeAfterSlider (önce/sonra)
- WhatsApp/QuickCTA (sabit buton)

## Backlog ve Önceliklendirme
1) Performans/erişilebilirlik paketi (srcset/lazy/preconnect, odak/kontrast, ARIA, OG/SEO, robots+sitemap, cookie)
2) Page Transition altyapısı (swup veya pjax) + ScrollProgress
3) Split text + GSAP/ScrollTrigger/Lenis ile sahneler (degrade ile)
4) Case Study şablonları (slug, galeri, metrikler, testimonial)
5) Before/After slider + Malzeme kütüphanesi mini bileşeni
6) Form backend (Formspree/Netlify) + spam koruma
7) GA4 event’leri ve temel izleme
8) WhatsApp/QuickCTA + microcopy iyileştirmeleri

Not: Her kalemde prefers-reduced-motion ve erişilebilirlik kontrolleri zorunlu.
