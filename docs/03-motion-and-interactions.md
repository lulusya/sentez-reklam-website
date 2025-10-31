# Motion & Micro-Interactions Spesifikasyonu

Tarih: 30.10.2025

## İlkeler
- Hiyerarşi: giriş (reveal) < hover < klik < sayfa geçişi
- Süreler: fast 160–200ms, base 280–360ms, slow 480–700ms
- Easing: standard (cubic-bezier(.2,.8,.2,1)), out (cubic-bezier(.16,1,.3,1)), in (cubic-bezier(.32,0,.67,0))
- Performans: transform/opacity ağırlıklı; 60fps hedef; compositor dostu
- Erişilebilirlik: prefers-reduced-motion: reduce ile animasyonları sadeleştir

## Bileşen Bazlı Kurallar
- Navigation: scroll’da shadow ve hide/reveal; mobile aç/kapa yumuşak; odak görünür
- Buttons: hover’da 2–3px elevate, hafif scale (.98–1.02), manyetik opsiyonel
- Cards (service/project): hover’da 3D tilt ≤ 2–3deg, overlay fade-in; tap state kısa
- Filters/Chips: seçili olduğunda renk/çizgi animasyonu; çoklu seçime hazır
- Masonry: item görünümde reveal (stagger 40–80ms); filter değişiminde smooth hide/show
- Lightbox: backdrop fade + içerik scale-in (0.98→1) 200–280ms; ESC/overlay kapat
- FAQ: tek açık; height animasyonu max-height ile (prefers-reduced-motion’ta anında aç/kapat)
- Counters: easeInOut sayı artışı; format tr-TR; tekrar tetiklenmez
- Marquee: hover’da pause; reduce’da sabit listeye düş
- Preloader: yüklemede göster; load sonrası fade-out; 700ms içinde kaldır
- Page Transition: çıkış fade 120–200ms, giriş reveal 200–320ms; pjax/swup fallback’li
- Scroll Progress: üst bar; 8px; renk marka turuncu; reduce’da devre dışı bırakılabilir
- Sticky TOC: bölümler arası active state; klavye erişimi; aria-current
- Text Split: satır/kelime reveal; reduce’da tek seferlik fade-in

## Scroll Tetikleyiciler (opsiyonel GSAP/Lenis)
- Hero → Services: threshold %15; SectionHeader reveal
- Services → Projects: grid items stagger; 2 sütundan itibaren gecikme
- Projects → Values/References: marquee görünürlükte animasyon start
- Case sayfalarında bölüm başlıkları sticky + TOC active güncellemesi

## Guardrails
- Maksimum eşzamanlı animasyon sayısı: 3–4
- Ağır medya (video/WebGL) sadece hero veya bağımsız sahnede; mobilde otomatik düşür
- Her animasyon için erişilebilirlik ve performans düşüş senaryosu zorunlu
