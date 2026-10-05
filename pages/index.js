import Head from 'next/head';
import { useState } from 'react';

const WA = "https://wa.me/6285122414249";
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
        <link rel="icon" type="image/png" href="/images/logo_doumi.png" />
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
            <a className="btn btn-primary" href={WA} target="_blank" rel="noopener noreferrer">
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
            <h1>Donut & Milk for Every Moment</h1>
            <p className="lede">Lembutnya donat, segarnya minuman pilihan. Doumi hadir untuk setiap jeda kecil yang layak dinikmati. Satu gigitan, satu tegukan, <b>Doumi</b></p>
            <div className="cta-row">
              <a className="btn btn-primary" href={WA} target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
              <a className="btn btn-outline" href="#menu">Lihat Menu</a>
            </div>
          </div>
          <div className="hero-art">
          <div className="hero-art">
              <div className="halo"></div>
              <img src="/images/logo_doumi.png" alt="Doumi" className="hero-logo" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,20 C960,40 1200,55 1440,25 L1440,60 L0,60 Z" fill="#1E2D45"></path>
        </svg>
      </div>

      {/* TENTANG DOUMI */}
      <section className="about" id="tentang">
        <div className="wrap about-grid">
          <div className="about-copy">
            <div className="eyebrow-mark"><span className="dot"></span> Tentang Kami</div>
            <h2 style={{ color: 'var(--cream)', fontSize: 'clamp(1.9rem,3.2vw,2.6rem)', marginBottom: 20 }}>Cerita di balik Doumi</h2>
            <p>Doumi (Donut & Milk) adalah brand kuliner yang menghadirkan perpaduan donat dan minuman berbasis susu dalam satu konsep yang praktis, modern, dan mudah dinikmati. Doumi menghadirkan beragam pilihan donat dan minuman sehingga pelanggan dapat menikmati perpaduan camilan manis dan minuman dalam satu pilihan. Produk Doumi dirancang untuk menemani berbagai momen, mulai dari camilan sehari-hari hingga waktu berkumpul bersama keluarga, teman, maupun rekan. 
              Dengan mengutamakan produk yang menarik, cita rasa yang konsisten, serta konsep brand yang mudah dikenali, Doumi hadir untuk memberikan pengalaman menikmati donat dan milk yang menyenangkan sekaligus membuka peluang usaha bagi para mitra.</p>
          </div>
          <div className="point-list">
            <p className="visi">Visi kami: Menjadi brand Donut & Milk pilihan masyarakat yang terus berkembang dan tumbuh bersama mitra.</p>
            <div className="point"><h2>Misi :</h2></div>
            <div className="point"><div className="num">1</div><div><h3>Menghadirkan produk berkualitas dengan cita rasa yang konsisten.</h3></div></div>
            <div className="point"><div className="num">2</div><div><h3>Mengembangkan produk yang inovatif dan menarik.</h3></div></div>
            <div className="point"><div className="num">3</div><div><h3>Memberikan pengalaman terbaik bagi pelanggan Membangun sistem kemitraan yang terstruktur dan berkelanjutan.</h3></div></div>
            <div className="point"><div className="num">4</div><div><h3>Memperluas jangkauan Doumi melalui pertumbuhan bersama mitra </h3></div></div>
          </div>
        </div>
      </section>

      {/* MENU / PRODUK */}
      <section id="menu">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-mark"><span className="dot"></span> Menu Doumi Donut & Milk</div>
            <h2>Donut & Milk for Every Moment</h2>
            <p>Donat lezat dan minuman favorit dalam satu rasa bahagia. Ini beberapa item andalan dari tiap kategori - menu lengkap & harga terbaru ada di bagian bawah.</p>
          </div>
          <div className="menu-grid">

            <div className="menu-card">
              <div className="donut-wrap">
                <img src="/images/coklat-klasik.png" alt="Donat Coklat" />
              </div>
              <h3>Classic Chocolate</h3>
              <p className="desc">Classic Series - donat original dengan lapisan chocolate glaze.</p>
              <div className="price-row"><span className="price">Rp 4.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ pcs</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                  <img src="/images/taro.png" alt="Donat Taro" />
                </div>
              <h3>Taro Milky Cloud</h3>
              <p className="desc">Sweet Series (Bomboloni) - taro glaze, milky filling, marshmallow.</p>
              <div className="price-row"><span className="price">Rp 5.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ pcs</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                  <img src="/images/mayo.png" alt="Donat Mayo" />
                </div>
              <h3>Mayo Floss Delight</h3>
              <p className="desc">Savory Series - Mayo glaze dengan taburan abon topping.</p>
              <div className="price-row"><span className="price">Rp 5.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ pcs</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                <img src="/images/pinnapple-honeytea.png" alt="Pannaple Honey Tea" />
              </div>
              <h3>Pinnapple Honey Tea</h3>
              <p className="desc">Tea Series - perpaduan segarnya nanas dan manisnya madu dalam secangkir teh</p>
              <div className="price-row"><span className="price">Rp 8.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ cup</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                <img src="/images/matcha-latte.png" alt="Matcha Latte" />
              </div>
              <h3>Matcha Latte</h3>
              <p className="desc">Matcha Series - matcha premium dipadukan susu creamy.</p>
              <div className="price-row"><span className="price">Rp 12.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ cup</span></div>
            </div>

            <div className="menu-card">
              <div className="donut-wrap">
                <img src="/images/mocha-choco.png" alt="Mocho Choco" />
              </div>
              <h3>Mocha Choco</h3>
              <p className="desc">Choco Series - perpaduan mochacino dengan choco creamy.</p>
              <div className="price-row"><span className="price">Rp 12.000</span><span style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)' }}>/ cup</span></div>
            </div>
          </div>

          <div className="promo-strip">
            <div className="ptxt">🔥 <b>Promo Ceban</b> - kopi susu jadul / original milk + donat, cuma Rp10.000</div>
            <div className="pitems"><span>Terbatas 50 porsi/hari</span><span>Iced & Hot</span></div>
          </div>

          <div className="menu-foot">
            <a className="btn btn-outline" href="#menu-lengkap">Lihat Semua Menu</a>
          </div>

          <div className="menu-catalog" id="menu-lengkap">
            <div className="section-head" style={{ marginBottom: 28 }}>
              <div className="eyebrow-mark"><span className="dot"></span> Menu Lengkap</div>
              <h2 style={{ fontSize: '1.6rem' }}>Semua varian</h2>
            </div>
            <div className="catalog-grid">
              <button type="button" className="catalog-card" onClick={() => openLightbox('/images/menu-donat.png', 'Menu lengkap donat Doumi')}>
                <img src="/images/menu-donat.png" alt="Menu lengkap donat Doumi" />
                <div className="cap"><h3>Menu Donat</h3><span>Lihat penuh ↗</span></div>
              </button>
              <button type="button" className="catalog-card" onClick={() => openLightbox('/images/menu-minuman.png', 'Menu lengkap minuman Doumi')}>
                <img src="/images/menu-minuman.png" alt="Menu lengkap minuman Doumi" />
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
            <div className="eyebrow-mark"><span className="dot"></span> Kenapa Harus Doumi</div>
            <h2>Bukan Sekadar Donat, tetapi Peluang Usaha yang Menjanjikan</h2>
          </div>
          <div className="adv-grid">
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--pink)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Produk Familiar</h3>
              <p>Donat merupakan produk yang mudah diterima oleh berbagai kalangan.</p>
            </div>
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--cocoa-soft)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Fleksibel dalam Penempatan</h3>
              <p>Konsep booth dapat ditempatkan di area dengan potensi traffic yang sesuai.</p>
            </div>
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--brown)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Modal Dapat Disesuaikan</h3>
              <p>Tersedia beberapa pilihan paket kemitraan sesuai kebutuhan dan skala usaha.</p>
            </div>
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--cocoa)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Sistem Operasional Terstruktur</h3>
              <p>Mitra mendapatkan panduan terkait operasional dan standar usaha.</p>
            </div>
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--choco)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Dukungan Branding & Promosi</h3>
              <p>Mitra mendapatkan materi branding dan promosi yang mendukung penjualan.</p>
            </div>
            <div className="adv-card">
              <svg className="icon" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="var(--pink-deep)" /><circle cx="17" cy="17" r="6" fill="var(--cream)" /></svg>
              <h3>Pendampingan Kemitraan</h3>
              <p>Doumi membantu mitra dalam proses persiapan hingga operasional usaha.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-mark"><span className="dot"></span> Galeri</div>
            <h2>Setiap sudut punya cerita, setiap momen punya rasa.</h2>
            <p>Intip berbagai produk, outlet, dan momen seru bersama Doumi yang bikin setiap kunjungan jadi lebih berkesan.</p>
          </div>
          <div className="gallery-grid">
            <div className="g-item produk big">
              <img src="/images/produk.jpeg" alt="Produk Doumi" />
              <span className="g-tag">Foto Produk</span></div>
            <div className="g-item produk">
              <img src="/images/minuman.jpeg" alt="Produk Doumi" />
              <span className="g-tag">Foto Produk</span></div>
            <div className="g-item outlet">
              <img src="/images/Outlet.png" alt="Container outlet Doumi" />
              <span className="g-tag">Container / Outlet</span>
            </div>
            <div className="g-item customer">
              <img src="/images/customer.jpeg" alt="Costomer Doumi" />
            <span className="g-tag">Customer Moment</span></div>
          </div>
        </div>
      </section>

      {/* KEMITRAAN */}
      <section className="partner" id="kemitraan">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-mark"><span className="dot"></span> Kemitraan</div>
            <h2 style={{ color: 'var(--cream)' }}>Buka Usaha Doumi di Kotamu</h2>
            <p style={{ color: 'rgba(255,245,247,0.82)' }}>Pilih paket kemitraan yang paling sesuai dengan kebutuhan dan gaya usahamu - mulai dari yang kamu kelola sendiri sampai yang sepenuhnya dikelola tim Doumi.</p>
          </div>

          {/* PAKET KEMITRAAN */}
          <div className="package-grid">
            <div className="package-card featured">
              <span className="package-tag">Doumi Reguler</span>
              <div className="package-price">Mulai <b>Rp 69 Juta</b></div>
              <p className="package-desc">Mitra yang ingin mengelola operasional usaha secara mandiri.</p>
              <table className="package-table">
                <thead><tr><th>Pilihan Outlet</th><th>Investasi</th></tr></thead>
                <tbody>
                  <tr><td>Container</td><td>Rp 69.000.000</td></tr>
                  <tr><td>Building</td><td>Rp 89.000.000</td></tr>
                </tbody>
              </table>
              <p className="package-sub">Mitra mendapatkan:</p>
              <ul className="package-list">
                <li>Booth Doumi</li>
                <li>Branding booth</li>
                <li>Peralatan usaha</li>
                <li>Starter produk</li>
                <li>Packaging</li>
                <li>SOP operasional</li>
                <li>Training karyawan</li>
                <li>Free marketing kit</li>
                <li>Supply bahan baku, apron & topi</li>
              </ul>
            </div>

            <div className="package-card featured">
              <span className="package-tag">Doumi Reguler Private</span>
              <div className="package-price">Mulai <b>Rp 69 Juta</b></div>
              <p className="package-desc">Mitra yang menginginkan paket usaha branding sendiri dan siap operasional.</p>
              <table className="package-table">
                <thead><tr><th>Pilihan Outlet</th><th>Investasi</th></tr></thead>
                <tbody>
                  <tr><td>Container</td><td>Rp 69.000.000</td></tr>
                  <tr><td>Building</td><td>Rp 89.000.000</td></tr>
                </tbody>
              </table>
              <p className="package-sub">Mitra mendapatkan:</p>
              <ul className="package-list">
                <li>Booth</li>
                <li>Branding lengkap</li>
                <li>Peralatan usaha</li>
                <li>Starter produk</li>
                <li>Packaging</li>
                <li>SOP operasional</li>
                <li>Training karyawan</li>
                <li>Free marketing kit</li>
                <li>Pendampingan operasional</li>
                <li>Supply bahan baku</li>
                <li>Brand baru sesuai keinginan mitra</li>
                <li>Free logo & desain booth</li>
                <li>Apron & topi</li>
              </ul>
            </div>

            <div className="package-card featured">
              <span className="package-tag">Doumi Autopilot</span>
              <div className="package-price">Mulai <b>Rp 79 Juta</b></div>
              <p className="package-desc">Mitra yang ingin memiliki usaha tanpa terlibat langsung dalam operasional harian.</p>
              <table className="package-table">
                <thead><tr><th>Pilihan Outlet</th><th>Investasi</th></tr></thead>
                <tbody>
                  <tr><td>Container</td><td>Rp 79.000.000</td></tr>
                  <tr><td>Building</td><td>Rp 99.000.000</td></tr>
                </tbody>
              </table>
              <p className="package-sub">Mitra mendapatkan:</p>
              <ul className="package-list">
                <li>Persiapan outlet</li>
                <li>Rekrutmen & penyediaan operator</li>
                <li>Training karyawan</li>
                <li>Operasional harian</li>
                <li>Pengadaan produk</li>
                <li>Kontrol operasional</li>
                <li>Monitoring penjualan</li>
                <li>Laporan penjualan</li>
                <li>Evaluasi outlet</li>
                <li>Apron & topi</li>
              </ul>
            </div>
          </div>

          {/* PILIHAN OUTLET */}
          <div className="outlet-type-head">
            <h3>Pilihan Outlet Doumi</h3>
            <p>Setiap mitra bebas memilih konsep outlet Doumi sesuai kebutuhan, karakteristik lokasi, dan skala usaha yang diinginkan.</p>
          </div>
          <div className="outlet-type-grid">
            <div className="outlet-type-card">
              <span className="otn">1</span>
              <h4>Container</h4>
              <p>Konsep outlet dengan tampilan modern dan ruang operasional lebih luas, cocok untuk lokasi yang membutuhkan area usaha lebih besar.</p>
            </div>
            <div className="outlet-type-card">
              <span className="otn">2</span>
              <h4>Building</h4>
              <p>Konsep outlet berupa bangunan kecil dengan ruang lebih lengkap dan permanen untuk mendukung aktivitas operasional.</p>
            </div>
          </div>

          {/* SISTEM KERJASAMA */}
          <div className="kerjasama-grid">
            <div className="kerjasama-card">
              <h4>Sistem Kerjasama Autopilot</h4>
              <ol>
                <li>Masa kerja sama 5 tahun berdasarkan kontrak kemitraan.</li>
                <li>Mitra wajib menggunakan & membeli bahan baku dari Doumi Pusat sesuai ketentuan yang berlaku.</li>
                <li>Selama mitra belum mencapai balik modal, management fee sebesar 10% dari omzet kotor.</li>
                <li>Setelah mitra mencapai balik modal, management fee menjadi 5% dari omzet kotor.</li>
                <li>Tim Doumi membantu pengelolaan dan pemantauan operasional outlet sesuai sistem yang disepakati.</li>
              </ol>
            </div>
            <div className="kerjasama-card">
              <h4>Sistem Kerjasama Reguler</h4>
              <ol>
                <li>Masa kerja sama 5 tahun berdasarkan kontrak kemitraan.</li>
                <li>Mitra wajib menggunakan & membeli bahan baku dari Doumi sesuai ketentuan yang berlaku.</li>
                <li>Manajemen Doumi memberikan bimbingan dan pendampingan kepada mitra.</li>
                <li>Mitra bertanggung jawab terhadap pengelolaan operasional outlet sehari-hari.</li>
                <li>Doumi memberikan dukungan dalam promosi, marketing, pengembangan produk, dan inovasi.</li>
                <li>Evaluasi dan pendampingan dilakukan untuk membantu menjaga standar dan perkembangan outlet.</li>
              </ol>
            </div>
          </div>

          <div className="partner-cta">
            <h3>Tertarik jadi mitra Doumi?</h3>
            <p>Ceritakan kotamu dan paket yang kamu minati, tim Doumi akan bantu proses selanjutnya.</p>
            <a className="btn btn-primary" href={WA} target="_blank" rel="noopener noreferrer">Tanya Kemitraan</a>
          </div>
        </div>
      </section>

      {/* OUTLET / LOKASI */}
      <section id="outlet">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-mark"><span className="dot"></span> Outlet & Lokasi</div>
            <h2>Temukan Doumi terdekat</h2>
          </div>
          <div className="outlet-grid">
            <div className="outlet-card">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.536720523086!2d112.716964726544!3d-7.30830547461492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb7f8b02a0cd%3A0x1e03a560196c1667!2sJl.%20Karah%20No.116%2C%20Karah%2C%20Kec.%20Jambangan%2C%20Surabaya%2C%20Jawa%20Timur%2060232!5e0!3m2!1sid!2sid!4v1790842135924!5m2!1sid!2sidc" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" title="Peta Outlet Doumi"></iframe>
              <div className="info"><h3>Doumi Surabaya Selatan</h3><p>Jl. Karah No.116, Surabaya, Jawa Timur</p></div>
            </div>
            <div className="outlet-card">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4060317608137!2d112.72224272357198!3d-7.308199021848865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb787814409f%3A0xc3be34873078acb!2sJl.%20Ketintang%20No.16%2C%20Wonokromo%2C%20Kec.%20Gayungan%2C%20Surabaya%2C%20Jawa%20Timur%2060231!5e0!3m2!1sid!2sid!4v1790842477946!5m2!1sid!2sid" loading="lazy"></iframe>
              <div className="info"><h3>Doumi Ketintang</h3><p>Jl. Ketintang No.16, Ketintang, Gayungan, Sidoarjo, Jawa Timur</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" id="contact">
        <div className="wrap">
          <h2>Sudah siap menikmati Doumi?</h2>
          <div className="cta-row">
            <a className="btn btn-light" href={WA} target="_blank" rel="noopener noreferrer">Pesan via WhatsApp</a>
            <a className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }} href={IG} target="_blank" rel="noopener noreferrer">Follow Instagram</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <a href="#home" className="logo"><img src="/images/logo_doumi.png" alt="Doumi" /></a>
              <p className="tag">Donat & Milk harga bersahabat, dibuat fresh setiap hari.</p>
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
                <li><a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href={IG} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href={THREADS} target="_blank" rel="noopener noreferrer">Threads</a></li>
                <li><a href={TIKTOK} target="_blank" rel="noopener noreferrer">TikTok</a></li>
                <li><a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href={YOUTUBE} target="_blank" rel="noopener noreferrer">Youtube</a></li>
              </ul>
            </div>
            <div>
              <h4>Alamat</h4>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,245,247,0.75)' }}>Jl. Karah No 116, Surabaya, Jawa Timur, Indonesia</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Doumi. Semua hak cipta dilindungi.</span>
            <span>Dibuat 🍩 untuk pecinta donat lembut.</span>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp Doumi">
        <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.6-1.28 1.18-1.76 1.2-.45.03-.9.2-3.03-.63-2.56-1.02-4.2-3.63-4.33-3.8-.13-.17-1.04-1.38-1.04-2.64s.66-1.87.9-2.13c.23-.25.5-.31.67-.31.17 0 .34 0 .48.01.16.01.36-.06.56.43.22.53.73 1.83.8 1.96.06.13.1.28.02.45-.08.17-.13.28-.25.43-.13.15-.27.34-.39.46-.13.13-.26.27-.11.53.15.26.66 1.09 1.42 1.77.98.87 1.8 1.14 2.06 1.27.26.13.42.11.57-.07.16-.18.66-.77.83-1.03.17-.26.34-.22.57-.13.23.09 1.47.69 1.72.82.25.13.42.19.48.3.06.11.06.62-.16 1.22z" /></svg>
      </a>
    </>
  );
}
