# 🕌 MesjidKu — Platform Informasi Masjid

Website **informasi dan manajemen masjid** yang menyediakan layanan lengkap untuk jamaah. Mulai dari jadwal sholat, galeri kegiatan, hingga kontak — semuanya dalam satu platform yang modern dan responsif.

## ✨ Fitur

### Landing Page (Halaman Publik)
- **Hero Section** — Tampilan pembuka yang menarik
- **About Us** — Profil dan sejarah masjid
- **Contact Us** — Formulir kontak untuk jamaah
- **Theme Selector** — Pilih tema tampilan
- **Receive News** — Langganan berita kegiatan masjid

### Home Page (Internal)
- **Namaz Timings** — Jadwal sholat harian
- **Pillars of Islam** — Informasi rukun Islam
- **Our Gallery** — Galeri foto kegiatan masjid
- **Events & Blog** — Informasi acara dan artikel
- **History of Center** — Sejarah masjid
- **Newsletter** — Berlangganan berita
- **Contact Us** — Form kontak internal

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI** | shadcn/ui (Radix), Custom components |
| **Icons** | Lucide React, React Icons |

## 📁 Struktur Proyek

```
app/
├── page.tsx                      # Landing page
└── home/
    └── page.tsx                  # Home internal

components/
├── core/
│   ├── Button.tsx                # Tombol standar
│   └── ButtonFull.tsx            # Tombol full-width
├── layouts/
│   ├── Navbar.tsx                # Navigasi utama
│   └── Footer.tsx                # Footer
└── pages/
    ├── LandingPage/
    │   ├── HeroSectionLP.tsx     # Hero landing
    │   ├── AboutUs.tsx           # Tentang masjid
    │   ├── ContactUs.tsx         # Kontak landing
    │   ├── ReceiveNews.tsx       # Newsletter
    │   └── SelectTheme.tsx       # Pemilih tema
    └── HomePageT1/
        ├── HeroSectionHP.tsx     # Hero home
        ├── NamazTimings.tsx      # Jadwal sholat
        ├── PillarsOfIslam.tsx    # Rukun Islam
        ├── OurGallery.tsx        # Galeri foto
        ├── EventsBlog.tsx        # Acara & blog
        ├── HistoryOfCenter.tsx   # Sejarah
        ├── NewsLetter.tsx        # Berlangganan
        └── ContactUsHome.tsx     # Kontak internal
```

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 📄 Lisensi

MIT License

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan)
