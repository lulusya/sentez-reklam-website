# Rekabet Analizi (Sentez Reklam)

Tarih: 30.10.2025
Kapsam: Global üst seviye ajans web siteleri üzerinden (ilham alarak, kopyalamadan) Sentez Reklam sitesi için fırsatlar ve uygulanabilir tasarım/etkileşim prensipleri.

İncelenen Referanslar (özet):
- BASIC/DEPT — net IA, yüksek görsel kalite, micro-interactions, case-first yaklaşım
- Fantasy — tipografi ağırlıklı sahneleme, split text, akıcı geçişler
- Instrument — erişilebilirlik ve performans dengesi, güçlü “Work/Case” IA
- AKQA — medya ağırlıklı hikâye anlatımı, OG/SEO kusursuz, grid disiplini
- ustwo — insan odaklı anlatı, erişilebilirlik ve sürdürülebilirlik vurgusu
- Wieden+Kennedy — kültürel etki, case kurgusunda metrik/veri vurgusu

Ortak Desenler (uygulanabilir pattern’ler):
- Work/Case odaklı IA ve güçlü alt bilgi (clients, contact)
- Mikro etkileşimler: buton/manyetik hover, card hover 3D/zoom, reveal animasyonları
- Akıcı sayfa geçişleri (pjax/swup) ve scroll bazlı sahneler (GSAP/ScrollTrigger/Lenis)
- Tipografi animasyonları (Split text), sticky bölüm başlıkları, scroll progress bar
- Performans: responsive görsel boru hattı (srcset/sizes), lazy, preconnect
- Erişilebilirlik: klavye ile gezinme, odak halkaları, prefers-reduced-motion, kontrast
- SEO/OG: sayfa başına benzersiz meta; sosyal paylaşım optimizasyonu
- Yasal/İzin: cookie banner, privacy ve izin yönetimi

Sentez Reklam’a Özgü Fırsatlar (farklaştırıcı):
- Üretim gücü ve atölye: “Nasıl üretiyoruz?” mini akış (ham madde → üretim → montaj → saha)
- Öncesi/Sonrası slider: tabela yenilemede etkiyi gösteren interaktif bileşen
- Malzeme kütüphanesi: pleksi/metal/ahşap uygulamaları için mikro galeri + teknik notlar
- Hızlı Teklif Akışı: 3 adımlı ihtiyaç toplayıcı (ölçü, malzeme, teslim süresi)
- WhatsApp/telefon hızlı erişim; harita ve rota CTA’ları
- Vaka sayfalarında sonuç metrikleri: teslim süresi, maliyet verimliliği, etki ölçümü

Riskler ve Kaçınmalar (anti-pattern):
- Aşırı ağır WebGL/video; düşük cihazlarda jank → progressive enhancement + uygun fallback
- Kopya tipografi/stil → markaya özgü, mevcut renk/ton korunmalı
- Aşırı animasyon yoğunluğu → motion hiyerarşisi ve reduced-motion desteği

Sonuç: Yukarıdaki desenler, mevcut statik mimari üzerinde düşük riskle (progressive) uygulanabilir. Öncelik, IA netliği, performans/erişilebilirlik ve üretim süreci vurgusudur.
