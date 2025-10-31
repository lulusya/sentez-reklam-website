# 🎯 Sentez Reklam ve Tanıtım - Web Sitesi

Modern, minimalist ve yaratıcı bir reklam üretim firması web sitesi. 3 adımlı geliştirme süreciyle oluşturulmuştur.

---

## 📋 Proje Hakkında

**Sentez Reklam ve Tanıtım**, tabela, dijital baskı ve fuar standı üretiminde uzmanlaşmış bir firmadır. Bu web sitesi, firmanın:
- Üretim gücünü
- Görsel portfolyosunu
- Profesyonel hizmetlerini
- İletişim bilgilerini

modern ve etkileyici bir şekilde sunmak için tasarlanmıştır.

---

## 🎨 Tasarım Konsepti

### Renk Paleti
- **Antrasit Gri**: `#2C3A47` (Ana renk, güven ve kurumsal kimlik)
- **Parlak Turuncu**: `#FF6B00` (Vurgu rengi, enerji ve yaratıcılık)
- **Beyaz**: `#FFFFFF` (Temizlik ve açıklık)

### Tipografi
- **Font Ailesi**: [Inter](https://fonts.google.com/specimen/Inter) (Sans-serif, modern, okunabilir)
- **Font Ağırlıkları**: 300, 400, 500, 600, 700, 800

### Tasarım İlkeleri
- ✅ Minimalist ve temiz arayüz
- ✅ Responsive (Mobil uyumlu)
- ✅ Erişilebilir (WCAG standartlarına uygun)
- ✅ Performanslı (Hızlı yükleme)
- ✅ SEO optimize edilmiş

---

## 📁 Proje Yapısı

```
reklamci-website/
│
├── docs/                     # Dokümantasyon (rekabet, IA, motion)
│   ├── 01-competitive-analysis.md
│   ├── 02-ia-and-components.md
│   └── 03-motion-and-interactions.md
│
├── index.html              # Ana sayfa
├── about.html              # Hakkımızda
├── portfolio.html          # Projeler (Filtrelenebilir)
├── contact.html            # İletişim (Google Maps + Form)
│
├── services/               # Hizmet sayfaları
│   ├── tabela.html         # Tabela & Yönlendirme
│   ├── baski.html          # Dijital Baskı & Matbaa
│   ├── stand.html          # Fuar Standı
│   └── tasarim.html        # Kurumsal Kimlik & Tasarım
│
├── css/
│   └── style.css           # Ana stil dosyası (1. ve 2. Adım tamamlandı; 3. adım stilleri eklendi)
│
├── js/
│   └── main.js             # Ana JavaScript (1. ve 2. Adım + 3. Adım interaktivite eklendi)
│
├── assets/
│   └── images/             # Görsel dosyalar (placeholder)
│
└── README.md               # Bu dosya
```

---

## 🚀 3 Adımlı Geliştirme Süreci

### ✅ **1. ADIM: İSKELET VE İÇERİK** (TAMAMLANDI)

**Yapılanlar:**
- ✅ Tüm HTML sayfaları oluşturuldu (7 ana sayfa + 4 hizmet sayfası)
- ✅ Semantik HTML5 yapısı
- ✅ Responsive container ve layout sistemi
- ✅ Temel CSS framework (renk paleti, tipografi, düğmeler, grid)
- ✅ Temel JavaScript (mobil menü, portfolio filtresi, smooth scroll)
- ✅ Google Maps entegrasyonu (İletişim sayfası)
- ✅ İletişim formu (validasyon dahil)
- ✅ Custom cursor temel yapısı
- ✅ Footer ve navigasyon

**İçerik:**
- Ana Sayfa: Hero, Hizmetler, Öne Çıkan Projeler, Neden Biz, Referanslar, CTA
- Hakkımızda: Firma hikayesi, misyon-vizyon, değerler, ekip, üretim tesisi
- Hizmetler: 4 detaylı hizmet sayfası (Tabela, Baskı, Stand, Tasarım)
- Portfolio: 12 proje kartı, filtreleme sistemi
- İletişim: Form, harita, SSS, hızlı iletişim kartları

---

### ✅ **2. ADIM: MODERN CSS EFEKTLERİ** (TAMAMLANDI)

**Yapılanlar:**
- ✅ CSS Scroll-Driven Animations (destek kontrolü ile)
- ✅ Masonry benzeri portfolio (CSS columns) ve responsive kırılımlar
- ✅ Modern hover efektleri (3D transform, filtreler)
- ✅ Gelişmiş custom cursor ve bağlamsal etiketler ("GÖRÜNTÜLE", "TIKLA", "ARA", "DETAY")
- ✅ Referanslar bölümünde marquee animasyonu
- ✅ Parallax katmanları için scroll-timeline ve JS hibrit yaklaşım

Kodlar `css/style.css` ve `js/main.js` içerisinde işaretlendi (Step 2 notlarıyla).

---

### � **3. ADIM: JAVASCRIPT İNTERAKTİVİTE** (KISMEN TAMAMLANDI)

**Şu an eklenenler:**
- ✅ Lightbox/Modal: Portfolio görselleri için klavye (ESC, oklar) destekli
- ✅ Preloader: Yükleme ekranı (otomatik eklenir ve fade-out sonrası kaldırılır)
- ✅ Sayaç Animasyonları: Intersection Observer ile görünürlükte sayma
- ✅ Hero Canvas: Hero bölümünde hafif partikül arka plan (performans dostu)

**Planlanan/opsiyonel:**
- ⏳ GSAP / Locomotive Scroll entegrasyonu (sinematik scroll)
- ⏳ Gelişmiş metin ayrıştırma ve animasyonları (SplitType)
- ⏳ Slider/Carousel (Swiper.js) gerektiğinde

---

## 💻 Kurulum ve Çalıştırma

### Gereksinimler
- Modern bir web tarayıcı (Chrome, Firefox, Safari, Edge)
- Yerel sunucu (opsiyonel, ancak önerilen)

### Adım 1: Dosyaları İndirin
```bash
# Bu dizini zaten oluşturduğunuz için atlanabilir
cd c:\Users\lenovo\Desktop\reklamci-website
```

### Adım 2: Yerel Sunucu Başlatın

**Seçenek A: VS Code Live Server**
1. VS Code'da projeyi açın
2. `index.html` dosyasına sağ tıklayın
3. "Open with Live Server" seçin

**Seçenek B: Python HTTP Server**
```bash
# Python 3.x
python -m http.server 8000

# Tarayıcıda: http://localhost:8000
```

**Seçenek C: Node.js http-server**
```bash
npx http-server -p 8000

# Tarayıcıda: http://localhost:8000
```

### Adım 3: Tarayıcıda Görüntüleyin
- Ana Sayfa: `http://localhost:8000/index.html`
- Diğer sayfalar: Navigasyon menüsünden erişilebilir

---

## 🖼️ Görseller Hakkında

**ÖNEMLİ:** Proje placeholder görsel yolları içermektedir. Gerçek görselleri eklemek için:

1. `assets/images/` dizinine görselleri yükleyin
2. Aşağıdaki görselleri hazırlayın:

### Gerekli Görseller:
- `project-placeholder-1.jpg` → `project-placeholder-4.jpg` (Ana sayfa)
- `about-hero.jpg` (Hakkımızda)
- `facility-1.jpg` → `facility-4.jpg` (Üretim tesisi)
- `team-placeholder.jpg` (Ekip fotoğrafı)
- `service-tabela-main.jpg` (Tabela hizmeti)
- `service-baski-main.jpg` (Baskı hizmeti)
- `service-stand-main.jpg` (Stand hizmeti)
- `service-tasarim-main.jpg` (Tasarım hizmeti)
- `portfolio/` dizinine proje görselleri

**Önerilen Görsel Boyutları:**
- Hero görsel: 1920x1080px
- Proje kartları: 800x600px (landscape)
- Servis görselleri: 1200x800px
- Team fotoğrafları: 400x400px (square)

---

## 🌐 SEO ve Performans

### 1. Adımda Eklenenler:
- ✅ Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- ✅ Meta descriptions (her sayfada)
- ✅ Title tags (benzersiz ve tanımlayıcı)
- ✅ Alt text (tüm görseller için)
- ✅ Responsive images (loading="lazy")
- ✅ Structured data hazırlığı (schema.org)

### 2. ve 3. Adımlarda Eklenecekler:
- 🔄 Open Graph meta tags (sosyal medya paylaşımı)
- 🔄 Favicon ve app icons
- 🔄 robots.txt ve sitemap.xml
- 🔄 Performance optimizasyonu (minify, compress)
- 🔄 Progressive Web App (PWA) özellikleri

---

## 📞 İletişim Bilgileri

**Firma:** Sentez Reklam ve Tanıtım  
**Adres:** Ferhat Paşa Mah., Mareşal Fevzi Çakmak Cad., No:98, Ataşehir, İstanbul  
**Telefon:** +90 216 661 70 70  
**E-posta:** info@sentezreklam.com  

---

## 🛠️ Teknolojiler

### 1. Adım (Mevcut):
- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)
- Google Maps Embed API

### 2. Adım (Planlanan):
- Modern CSS (Scroll-driven animations, Container queries)
- CSS Houdini (özel paint worklets)

### 3. Adım (Planlanan):
- GSAP
- Locomotive Scroll
- Intersection Observer API
- Canvas API / WebGL

---

## 📝 Lisans

Bu proje özel bir proje olup, Sentez Reklam ve Tanıtım için geliştirilmiştir.

---

## 🙏 Teşekkürler

Bu web sitesi, **GitHub Copilot** ve **modern web geliştirme best practices** kullanılarak oluşturulmuştur.

---

## 📊 Adım İlerlemesi

| Adım | Durum | Tamamlanma |
|------|-------|------------|
| 1. İskelet ve İçerik | ✅ Tamamlandı | %100 |
| 2. Modern CSS Efektleri | ✅ Tamamlandı | %100 |
| 3. JavaScript İnteractivite | 🔧 Devam Ediyor | %60 |

---

**🚀 3. Adım ileri seviye efektler için öneri isterseniz (GSAP/Locomotive) haber verin!**

---

## 🧭 Geliştirme Yol Haritası (5 Adım)

Bu yol haritası rakip analizi ve güncel endüstri pratikleri doğrultusunda oluşturulmuştur. İlgili dokümanlara `docs/` klasöründen erişebilirsiniz.

1) Rakip analizi ve IA revizyonu — Tamamlandı (docs/01, 02, 03)
2) Performans ve erişilebilirlik — Planlandı (Lighthouse > 90/95/100)
3) İleri seviye hareket ve geçişler — Planlandı (swup, GSAP/Lenis, SplitText)
4) Portfolyo ve vaka şablonları — Planlandı (case/slug, metrikler, galeri)
5) Entegrasyonlar ve yayınlama — Planlandı (GA4, Form backend, Netlify/Vercel)
