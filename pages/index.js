import Head from 'next/head';
import { useState } from 'react';

const WA_ORDER = "https://wa.me/6281234567890?text=Halo%20Doumi%2C%20saya%20mau%20pesan%20donat";
const WA_PARTNER = "https://wa.me/6281234567890?text=Halo%20Doumi%2C%20saya%20tertarik%20dengan%20kemitraan%20Doumi";
const WA_PLAIN = "https://wa.me/6281234567890";
const IG = "https://www.instagram.com/doumi.official?stkn=MXF2bnhvOWsxanpoZA==";
const TIKTOK = "https://www.tiktok.com/@doumi.official4?_r=1&_t=ZS-9A9tAESgEbq";
const FACEBOOK = "https://www.";
const YOUTUBE = "https://www.youtube.com/@Doumi.Official";
const THREADS = "https://www.threads.com/@doumi.official";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { src, alt } | null

  const closeNav = () => setNavOpen(false);
  const openLightbox = (src, alt) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <Head>
        <title>Doumi</title>
        <meta name="description" content="Doumi adalah brand donat lembut dengan topping melimpah dan harga bersahabat. Pesan sekarang atau gabung jadi mitra Doumi." />
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </Head>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="wrap">
          <a href="#home" className="logo">
            <img src="/images/donatlogo.png" alt="Doumi" />
          </a>
          <nav className={`nav-links${navOpen ? ' open' : ''}`} id="navLinks">
            <a href="#home" onClick={closeNav}>Home</a>
            <a href="#tentang" onClick={closeNav}>Tentang Kami</a>
            <a href="#menu" onClick={closeNav}>Menu</a>
            <a href="#keunggulan" onClick={closeNav}>Keunggulan</a>
            <a href="#gallery" onClick={closeNav}>Galeri</a>
            <a href="#kemitraan" onClick={closeNav}>Kemitraan</a>
            <a href="#contact" onClick={closeNav}>Contact</a>
          </nav>
          <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a className="btn btn-primary" href={WA_ORDER} target="_blank" rel="noopener noreferrer">
              <span>Pesan Sekarang</span>
            </a>
            <button className="nav-toggle" onClick={() => setNavOpen(!navOpen)} aria-label="Buka menu">☰</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="wrap">
          <div className="hero-copy">
            <div className="eyebrow-mark"><span className="dot"></span> Donat rumahan, dipanggang & digoreng fresh tiap hari</div>
            <h1>Digigit sekali,<br />langsung jatuh cinta.</h1>
            <p className="lede">Doumi bikin donat lembut dengan topping melimpah, dari coklat klasik sampai rasa kekinian cocok buat ngemil harian, arisan, sampai hampers momen spesial.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={WA_ORDER} target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
              <a className="btn btn-outline" href="#menu">Lihat Menu</a>
            </div>
          </div>
          <div className="hero-art">
          <div className="hero-art">
              <div className="halo"></div>
              <img src="/images/logo.png" alt="Doumi" className="hero-logo" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,20 C960,40 1200,55 1440,25 L1440,60 L0,60 Z" fill="#003494"></path>
        </svg>
      </div>

      {/* TENTANG DOUMI */}
      <section className="about" id="tentang">
        <div className="wrap about-grid">
          <div className="about-copy">
            <div className="eyebrow-mark"><span className="dot"></span> Tentang Kami</div>
            <h2 style={{ color: 'var(--cream)', fontSize: 'clamp(1.9rem,3.2vw,2.6rem)', marginBottom: 20 }}>Cerita di balik Doumi</h2>
            <p>Doumi lahir dari resep rumahan yang disempurnakan: adonan diistirahatkan lebih lama supaya teksturnya empuk dan tidak bantat, lalu dilapisi glasir dan topping yang murah hati — bukan sekadar taburan tipis.</p>
            <p className="visi">Visi kami: menjadikan donat lembut berkualitas sebagai camilan favorit yang bisa dinikmati semua kalangan, kapan saja.</p>
          </div>
          <div className="point-list">
            <div className="point"><div className="num">1</div><div><h3>Lembut & Fresh</h3><p>Dibuat dan diolah setiap hari, tanpa bahan pengawet.</p></div></div>
            <div className="point"><div className="num">2</div><div><h3>Topping Melimpah</h3><p>Tidak pelit topping — setiap gigitan kerasa penuh rasa.</p></div></div>
            <div className="point"><div className="num">3</div><div><h3>Harga Bersahabat</h3><p>Kualitas premium dengan harga yang tetap ramah di kantong.</p></div></div>
          </div>
        </div>
      </section>

      {/* MENU / PRODUK */}
      <section id="menu">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-mark"><span className="dot"></span> Menu Doumi Donut & Milk</div>
            <h2>More Donuts, More Happiness</h2>
            <p>Donat lezat dan minuman favorit dalam satu rasa bahagia. Ini beberapa item andalan dari tiap kategori — menu lengkap & harga terbaru ada di bagian bawah.</p>
          </div>
          <div className="menu-grid">

            <div className="menu-card">
              <div className="donut-wrap">
                <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#F3D9B8" /><path d="M6,46 C6,24 26,6 50,6 C74,6 94,24 94,46 C94,54 90,62 84,68 C78,63 70,61 62,64 C55,67 48,67 41,64 C33,61 25,63 18,68 C11,62 6,55 6,46 Z" fill="#4A2E22" /><circle cx="50" cy="50" r="19" fill="#fff" /><rect x="30" y="18" width="9" height="3.4" rx="1.7" fill="#fff" transform="rotate(15 34 19)" /><rect x="62" y="16" width="9" height="3.4" rx="1.7" fill="#fff" transform="rotate(25 66 18)" /><rect x="46" y="12" width="9" height="3" rx="1.5" fill="#fff" transform="rotate(-8 50 13)" /></svg>
              </div>
              <h3>Classic Chocolate</h3>
              <p className="desc">Classic Series — donat original dengan lapisan chocolate glaze.</p>
              <div className="price-row"><span className="price">Rp 4.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ pcs</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#F3D9B8" /><path d="M6,46 C6,24 26,6 50,6 C74,6 94,24 94,46 C94,54 90,62 84,68 C78,63 70,61 62,64 C55,67 48,67 41,64 C33,61 25,63 18,68 C11,62 6,55 6,46 Z" fill="#B99BE0" /><circle cx="50" cy="50" r="19" fill="#fff" /><rect x="36" y="16" width="8" height="8" rx="1.5" fill="#fff" transform="rotate(10 40 20)" /><rect x="52" y="12" width="8" height="8" rx="1.5" fill="#fff" transform="rotate(-12 56 16)" /></svg>
              </div>
              <h3>Taro Milky Cloud</h3>
              <p className="desc">Sweet Series (Bomboloni) — taro glaze, milky filling, marshmallow.</p>
              <div className="price-row"><span className="price">Rp 5.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ pcs</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#F3D9B8" /><path d="M6,46 C6,24 26,6 50,6 C74,6 94,24 94,46 C94,54 90,62 84,68 C78,63 70,61 62,64 C55,67 48,67 41,64 C33,61 25,63 18,68 C11,62 6,55 6,46 Z" fill="#FF5DA8" /><circle cx="50" cy="50" r="19" fill="#fff" /></svg>
              </div>
              <h3>Strawberry Milky</h3>
              <p className="desc">Sweet Series (Bomboloni) — strawberry glaze dengan milky filling lembut.</p>
              <div className="price-row"><span className="price">Rp 5.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ pcs</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                <svg viewBox="0 0 100 100"><path d="M28,30 L72,30 L66,92 Q50,98 34,92 Z" fill="#6B4636" /><ellipse cx="50" cy="30" rx="22" ry="7" fill="#E9C9A5" /><rect x="46" y="6" width="5" height="26" rx="2.5" fill="#fff" /></svg>
              </div>
              <h3>Kopi Susu Jajudu</h3>
              <p className="desc">Coffee Series — racikan kopi susu gula aren, house favorite.</p>
              <div className="price-row"><span className="price">Rp 10.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ cup</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                <svg viewBox="0 0 100 100"><path d="M28,30 L72,30 L66,92 Q50,98 34,92 Z" fill="#6C9A5C" /><ellipse cx="50" cy="30" rx="22" ry="7" fill="#F3E9D6" /><rect x="46" y="6" width="5" height="26" rx="2.5" fill="#fff" /></svg>
              </div>
              <h3>Matcha Latte</h3>
              <p className="desc">Matcha Series — matcha premium dipadukan susu creamy.</p>
              <div className="price-row"><span className="price">Rp 12.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ cup</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                <svg viewBox="0 0 100 100"><path d="M28,30 L72,30 L66,92 Q50,98 34,92 Z" fill="#7A4B32" /><ellipse cx="50" cy="30" rx="22" ry="7" fill="#F2A5C0" /><rect x="46" y="6" width="5" height="26" rx="2.5" fill="#fff" /></svg>
              </div>
              <h3>Choco Berry</h3>
              <p className="desc">Choco Series — perpaduan choco creamy dengan sentuhan berry.</p>
              <div className="price-row"><span className="price">Rp 12.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ cup</span></div>
            </div>

          </div>

          <div className="promo-strip">
            <div className="ptxt">🔥 <b>Promo Ceban</b> — kopi susu jadul / original milk + donat, cuma Rp10.000</div>
            <div className="pitems"><span>Terbatas 50 porsi/hari</span><span>Iced & Hot</span></div>
          </div>

          <div className="menu-foot">
            <a className="btn btn-outline" href="#menu-lengkap">Lihat Semua Menu</a>
          </div>

          <div className="menu-catalog" id="menu-lengkap">
            <div className="section-head" style={{ marginBottom: 28 }}>
              <div className="eyebrow-mark"><span className="dot"></span> Menu Lengkap</div>
              <h2 style={{ fontSize: '1.6rem' }}>Semua varian & harga terbaru</h2>
            </div>
            <div className="catalog-grid">
              <button type="button" className="catalog-card" onClick={() => openLightbox('/images/menu-donat.jpg', 'Menu lengkap donat Doumi')}>
                <img src="/images/menu-donat.jpg" alt="Menu lengkap donat Doumi" />
                <div className="cap"><h3>Menu Donat</h3><span>Lihat penuh ↗</span></div>
              </button>
              <button type="button" className="catalog-card" onClick={() => openLightbox('/images/menu-minuman.jpg', 'Menu lengkap minuman Doumi')}>
                <img src="/images/menu-minuman.jpg" alt="Menu lengkap minuman Doumi" />
                <div className="cap"><h3>Menu Minuman</h3><span>Lihat penuh ↗</span></div>
              </button>
            </div>
          </div>

          {/* LIGHTBOX */}
          <div
            className={`lightbox${lightbox ? ' open' : ''}`}
            onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          >
            <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Tutup">✕</button>
            {lightbox && <img src={lightbox.src} alt={lightbox.alt} />}
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="keunggulan" id="keunggulan">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-mark"><span className="dot"></span> Kenapa Doumi</div>
            <h2>Lima alasan orang balik lagi</h2>
          </div>
          <div className="adv-grid">
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--pink)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Donat Lembut</h3>
              <p>Tekstur empuk merata sampai gigitan terakhir.</p>
            </div>
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--butter)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Topping Beragam</h3>
              <p>Belasan varian rasa, dari klasik sampai kekinian.</p>
            </div>
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--choco)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Harga Terjangkau</h3>
              <p>Dari Rp 7.000-an, cocok buat jajan tiap hari.</p>
            </div>
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--pink-deep)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Cocok Berbagai Momen</h3>
              <p>Snack harian, arisan, hampers, sampai acara kantor.</p>
            </div>
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--cocoa)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Peluang Kemitraan</h3>
              <p>Buka usaha donat sendiri dengan dukungan penuh dari Doumi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-mark"><span className="dot"></span> Galeri</div>
            <h2>Doumi dalam gambar</h2>
            <p>Kotak bertanda di bawah ini adalah placeholder — tinggal ganti dengan foto asli produk, booth, dan momen pelanggan Doumi.</p>
          </div>
          <div className="gallery-grid">
            <div className="g-item produk big"><span className="g-tag">Foto Produk</span></div>
            <div className="g-item produk"><span className="g-tag">Foto Produk</span></div>
            <div className="g-item outlet"><span className="g-tag">Booth / Outlet</span></div>
            <div className="g-item outlet2"><span className="g-tag">Booth / Outlet</span></div>
            <div className="g-item customer"><span className="g-tag">Customer Moment</span></div>
            <div className="g-item customer"><span className="g-tag">Customer Moment</span></div>
          </div>
        </div>
      </section>

      {/* KEMITRAAN */}
      <section className="partner" id="kemitraan">
        <div className="wrap partner-inner">
          <div>
            <div className="eyebrow-mark"><span className="dot"></span> Kemitraan</div>
            <h2>Buka usaha Doumi di kotamu</h2>
            <p>Doumi membuka peluang kemitraan untuk kamu yang ingin punya usaha donat sendiri, lengkap dengan resep, supply bahan, dan pendampingan operasional.</p>
            <ul className="partner-list">
              <li>Modal kemitraan terjangkau, cocok untuk pemula</li>
              <li>Pelatihan produksi & pelayanan sebelum buka</li>
              <li>Supply bahan baku dan topping terjamin kualitasnya</li>
              <li>Pendampingan promosi di tahap awal buka outlet</li>
            </ul>
          </div>
          <div className="partner-card">
            <h3>Tertarik jadi mitra?</h3>
            <p>Ceritakan kotamu dan rencana usahamu, tim Doumi akan bantu hitungkan paket kemitraan yang paling pas.</p>
            <a className="btn btn-primary" href={WA_PARTNER} target="_blank" rel="noopener noreferrer">Tanya Kemitraan</a>
          </div>
        </div>
      </section>

      {/* OUTLET / LOKASI */}
      <section id="outlet">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-mark"><span className="dot"></span> Outlet & Lokasi</div>
            <h2>Temukan Doumi terdekat</h2>
            <p>Contoh titik outlet Doumi — sesuaikan dengan lokasi outlet asli sebelum website ini publish.</p>
          </div>
          <div className="outlet-grid">
            <div className="outlet-card">
              <iframe src="https://www.google.com/maps?q=Surabaya&output=embed" loading="lazy"></iframe>
              <div className="info"><h3>Doumi Surabaya Pusat</h3><p>Jl. Contoh Raya No. 10, Surabaya, Jawa Timur</p></div>
            </div>
            <div className="outlet-card">
              <iframe src="https://www.google.com/maps?q=Sidoarjo&output=embed" loading="lazy"></iframe>
              <div className="info"><h3>Doumi Sidoarjo</h3><p>Jl. Contoh Indah No. 22, Sidoarjo, Jawa Timur</p></div>
            </div>
            <div className="outlet-card">
              <iframe src="https://www.google.com/maps?q=Gresik&output=embed" loading="lazy"></iframe>
              <div className="info"><h3>Doumi Gresik</h3><p>Jl. Contoh Manis No. 5, Gresik, Jawa Timur</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-mark"><span className="dot"></span> Testimoni</div>
            <h2>Kata mereka soal Doumi</h2>
            <p>Contoh testimoni — ganti dengan ulasan asli pelanggan setelah tersedia.</p>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="quote">Donatnya beneran lembut dan toppingnya banyak banget, jadi langganan tiap minggu.</p>
              <div className="who">— Rani, Surabaya</div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="quote">Sering pesan buat acara kantor, semua orang suka dan harganya masih masuk budget.</p>
              <div className="who">— Bayu, Sidoarjo</div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="quote">Baru gabung mitra Doumi bulan lalu, timnya bantu banget dari awal sampai buka outlet.</p>
              <div className="who">— Sari, Gresik</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" id="contact">
        <div className="wrap">
          <h2>Sudah siap menikmati Doumi?</h2>
          <div className="cta-row">
            <a className="btn btn-light" href={WA_ORDER} target="_blank" rel="noopener noreferrer">Pesan via WhatsApp</a>
            <a className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }} href={IG} target="_blank" rel="noopener noreferrer">Follow Instagram</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <a href="#home" className="logo"><img src="/images/logo.png" alt="Doumi" /></a>
              <p className="tag">Donat lembut, topping melimpah, harga bersahabat, dibuat fresh setiap hari.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#tentang">Tentang Kami</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#keunggulan">Keunggulan</a></li>
                <li><a href="#gallery">Galeri</a></li>
                <li><a href="#kemitraan">Kemitraan</a></li>
              </ul>
            </div>
            <div>
              <h4>Sosial Media</h4>
              <ul>
                <li><a href={WA_PLAIN} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href={IG} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href={THREADS} target="_blank" rel="noopener noreferrer">Threads</a></li>
                <li><a href={TIKTOK} target="_blank" rel="noopener noreferrer">TikTok</a></li>
                <li><a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href={YOUTUBE} target="_blank" rel="noopener noreferrer">Youtube</a></li>
              </ul>
            </div>
            <div>
              <h4>Alamat</h4>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,245,247,0.75)' }}>Jl. Contoh Raya No. 10, Surabaya, Jawa Timur, Indonesia</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Doumi. Semua hak cipta dilindungi.</span>
            <span>Dibuat 🍩 untuk pecinta donat lembut.</span>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={WA_ORDER} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp Doumi">
        <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.6-1.28 1.18-1.76 1.2-.45.03-.9.2-3.03-.63-2.56-1.02-4.2-3.63-4.33-3.8-.13-.17-1.04-1.38-1.04-2.64s.66-1.87.9-2.13c.23-.25.5-.31.67-.31.17 0 .34 0 .48.01.16.01.36-.06.56.43.22.53.73 1.83.8 1.96.06.13.1.28.02.45-.08.17-.13.28-.25.43-.13.15-.27.34-.39.46-.13.13-.26.27-.11.53.15.26.66 1.09 1.42 1.77.98.87 1.8 1.14 2.06 1.27.26.13.42.11.57-.07.16-.18.66-.77.83-1.03.17-.26.34-.22.57-.13.23.09 1.47.69 1.72.82.25.13.42.19.48.3.06.11.06.62-.16 1.22z" /></svg>
      </a>
    </>
  );
}
