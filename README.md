# Doumi — Landing Page (Next.js)

Versi Next.js dari landing page Doumi (sebelumnya Express + HTML statis). Semua konten, warna, menu, dan lightbox galeri menu sama persis — hanya dipindah ke komponen React/Next.js.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Untuk build production:

```bash
npm run build
npm start
```

## Struktur folder

```
doumi-nextjs/
├── pages/
│   ├── _app.js       # load global CSS
│   └── index.js       # seluruh landing page (1 komponen React)
├── styles/
│   └── globals.css    # sama seperti style.css versi sebelumnya
└── public/
    └── images/         # logo.png, menu-donat.jpg, menu-minuman.jpg
```

## Yang berubah dari versi Express

- Toggle menu mobile & lightbox galeri menu sekarang pakai **React state** (`useState`), bukan lagi manipulasi DOM manual lewat `script.js`.
- `<meta>`, `<title>`, dan favicon dipindah ke komponen `<Head>` dari `next/head`.
- Semua `class` → `className`, atribut `style="..."` (string) → `style={{...}}` (object), sesuai aturan JSX.
- Gambar memakai tag `<img>` biasa (bukan `next/image`) supaya perilakunya sama seperti sebelumnya — tidak perlu konfigurasi domain tambahan.

## Yang masih perlu kamu ganti sebelum publish

Sama seperti versi sebelumnya — cari di `pages/index.js`:

- **Nomor WhatsApp**: masih placeholder `6281234567890` (didefinisikan di atas komponen sebagai `WA_ORDER`, `WA_PARTNER`, `WA_PLAIN`).
- **Instagram / TikTok**: link masih `doumi.id` (variabel `IG`, `TIKTOK`).
- **Galeri**: kotak "Foto Produk / Booth / Customer Moment" masih placeholder warna.
- **Outlet & Lokasi**: 3 outlet contoh masih alamat contoh.
- **Testimoni**: masih contoh, ganti dengan ulasan pelanggan asli.
