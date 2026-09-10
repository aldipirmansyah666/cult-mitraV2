import type { GuideItem } from "@/types";
import { siteConfig } from "@/config/site";

export const guides: GuideItem[] = [
  // ─── SETUP & INSTALLASI ───────────────
  {
    title: "Download & Akses SBPAYS — Android & PC/Laptop",
    slug: "download-akses-sbpays",
    description: "Cara download dan akses SBPAYS untuk HP Android dan PC/laptop — satu pintu resmi, tanpa link abal-abal.",
    category: "Setup & Installasi",
    icon: "Download",
    cta: [
      { label: "Download Aplikasi Android", href: siteConfig.apps.android.playStoreUrl, variant: "primary", external: true },
      { label: "Login Web — Server Utama", href: siteConfig.apps.web.primaryLogin, variant: "secondary", external: true },
    ],
    content: {
      intro: "Mulai pakai SBPAYS itu gampang. HP Android pakai aplikasi dari Play Store, PC/laptop pakai browser Chrome/Firefox + Aplikasi Pembantu Komputer (Cetak Nota). Semua akses cukup dari satu pintu resmi — jangan klik link yang dikirim orang tak dikenal.",
      sections: [
        {
          title: "Pilih Perangkat Anda",
          steps: [
            "HP Android → install aplikasi SBPAYS dari Play Store lewat tombol di atas (atau file APK resmi jika Play Store belum tersedia).",
            "PC/Laptop → pakai browser Chrome atau Firefox. Wajib install Aplikasi Pembantu Komputer (Cetak Nota) dulu (Run as Administrator).",
            "OpenVPN 2.3.2 TIDAK wajib untuk semua PC — hanya jika MAC/LAN tidak terdeteksi (muncul pesan Gagal Mendeteksi Sistem Keamanan).",
          ],
        },
        {
          title: "Akses Resmi Satu Pintu",
          steps: [
            "Buka halaman Download atau Login yang ada di website Cult Mitra ini (sudah terpusat di siteConfig).",
            "Jangan simpan link login lama dari chat/grup — selalu pakai tombol Server Utama + 3 Server Web Cadangan di atas.",
            "Login pakai username & password dari Admin setelah verifikasi KTP/NIK. OTP tidak perlu diisi, cukup kode verifikasi di layar.",
            "Simpan 4 link login di bookmark browser — jika server 1 maintenance, coba server 2/3/utama, semua sinkron.",
          ],
          tip: "Jika bingung, chat Admin WA resmi dulu baru klik login. Jangan pernah bagi password, PIN, atau OTP ke siapa pun.",
        },
      ],
      note: "Android tidak butuh Aplikasi Pembantu Komputer. PC/laptop wajib pakai Aplikasi Pembantu Komputer agar login & cetak struk jalan.",
    },
  },
  {
    title: "Cara Install Aplikasi Pembantu Komputer (Cetak Nota) di PC/Laptop",
    slug: "install-plugin-onservice",
    description: "Pasang Aplikasi Pembantu Komputer (OnService) di PC/laptop dengan Run as Administrator — cek Versi Plugin 2.0.0.1.",
    category: "Setup & Installasi",
    icon: "Download",
    cta: [
      { label: "Download Aplikasi Pembantu Komputer PC", href: siteConfig.apps.onService.url, variant: "primary", external: true },
    ],
    content: {
      intro: "Aplikasi Pembantu Komputer (nama teknis: OnService) adalah komponen keamanan wajib untuk akses SBPAYS lewat browser di PC/laptop. Bukan aplikasi PPOB utamanya, dan tidak dipasang di HP Android. Pasangnya cukup sekali, pakai selamanya. Wajib klik kanan → Run as Administrator.",
      sections: [
        {
          title: "Persiapan Sebelum Install",
          steps: [
            "PC/laptop Windows 7 / 8 / 10 / 11 dengan akses Administrator.",
            "Browser Chrome atau Firefox yang cocok dengan Windows Anda.",
            "Koneksi internet stabil.",
            "Download installer Aplikasi Pembantu Komputer dari tombol resmi di atas (±12 MB, .exe).",
          ],
        },
        {
          title: "Langkah Install (Wajib Run as Administrator)",
          steps: [
            "Tutup semua jendela browser.",
            "Klik kanan file installer → pilih Run as Administrator (jangan double-click biasa).",
            "Klik Yes jika Windows minta izin.",
            "Ikuti Next → Install sampai selesai → Finish. Ikon akan muncul di tray.",
            "Buka kembali browser. Jika belum terbaca, restart PC/laptop.",
            "Buka Login SBPAYS resmi dan lihat baris Versi Plugin di bawah form login.",
          ],
        },
        {
          title: "Cara Pastikan Sudah Aktif",
          steps: [
            "Versi Plugin KOSONG → belum terpasang / belum jalan. Ulangi install dengan Run as Administrator dan restart.",
            "Muncul angka 2.0.0.0 atau 2.0.0.1 → sudah aktif & terdeteksi. Siap login & transaksi.",
            "Jika sudah muncul tapi login mental balik lagi, coba hapus cache browser (Ctrl+Shift+Delete → Clear Data) lalu login ulang.",
          ],
          tip: "OpenVPN 2.3.2 beda dengan Aplikasi Pembantu Komputer. Jangan install OpenVPN dulu — hanya jika MAC/LAN tidak terdeteksi atau muncul pesan Gagal Mendeteksi Sistem Keamanan. Jika muncul Identitas Keamanan Tidak Terdaftar, hubungi CS untuk verifikasi perangkat, bukan install OpenVPN.",
        },
        {
          title: "Jika Versi Plugin Tetap Kosong",
          steps: [
            "Pastikan install di PC yang dipakai transaksi (bukan PC lain).",
            "Tutup semua browser, buka lagi. Masih kosong → install ulang dengan Run as Administrator.",
            "Restart PC, cek lagi Versi Plugin.",
            "Ambil screenshot halaman login + jam install, kirim ke CS WA resmi (jangan kirim password).",
          ],
        },
      ],
      note: "Aplikasi lama SBPaysV76.3GS.exe tidak lagi direkomendasikan. Pakai akses browser + Aplikasi Pembantu Komputer dari halaman resmi Cult Mitra.",
    },
  },
  {
    title: "Login ke Aplikasi PPOB SBPays",
    slug: "login-sbpays",
    description: "Cara login resmi ke SBPAYS via browser — pilih server yang online, cek Versi Plugin.",
    category: "Setup & Installasi",
    icon: "LogIn",
    cta: [
      { label: "Login Web — Server Utama (ppob4)", href: siteConfig.apps.web.primaryLogin, variant: "primary", external: true },
      { label: "Server 1 — ppob2", href: siteConfig.apps.web.loginUrls[0], variant: "secondary", external: true },
      { label: "Server 2 — ppob2.bck", href: siteConfig.apps.web.loginUrls[1], variant: "secondary", external: true },
      { label: "Server 3 — other", href: siteConfig.apps.web.loginUrls[2], variant: "secondary", external: true },
    ],
    content: {
      intro: "Setelah Aplikasi Pembantu Komputer terpasang, tinggal login lewat browser. Pakai satu pintu resmi — jangan pakai link dari orang tak dikenal. Pilih server yang paling cepat, pastikan Versi Plugin muncul.",
      sections: [
        {
          title: "Akses Halaman Login Resmi",
          steps: [
            "Klik salah satu tombol Server di atas (Utama atau Server Web Cadangan 1–3) — pilih yang paling cepat terbuka.",
            "Halaman login terbuka di tab baru. Cek alamat masih di domain sbpays-ppob.com.",
            "Lihat baris Versi Plugin di bawah form: harus ada angka 2.0.0.0 / 2.0.0.1 (tanda Aplikasi Pembantu Komputer aktif).",
          ],
        },
        {
          title: "Masukkan Kredensial",
          steps: [
            "Masukkan username (user) dari Admin.",
            "Masukkan password Anda (perhatikan huruf besar/kecil).",
            "Kolom OTP tidak perlu diisi.",
            "Masukkan kode verifikasi yang terlihat di layar.",
            "Klik MASUK.",
          ],
          tip: "Jika satu server lemot/error, coba Server Web Cadangan lain. Simpan 4 link di bookmark biar gampang.",
        },
        {
          title: "Jika Gagal Login Balik Lagi",
          steps: [
            "Cek Versi Plugin kosong? → install ulang Aplikasi Pembantu Komputer dengan Run as Administrator.",
            "Coba hapus cache browser: Ctrl+Shift+Delete → Semua Waktu → centang Cached images & Cookies → Clear Data.",
            "Coba browser lain (Chrome ↔ Firefox).",
            "Cek koneksi internet, dan pastikan username/password benar.",
            "Masih gagal → foto layar login (tutup password) + PPID, hubungi CS WA resmi.",
          ],
        },
      ],
    },
  },
  {
    title: "Konfigurasi Printer — Semua Jenis (Thermal, Dot Matrix, Inkjet, Portable)",
    slug: "konfigurasi-printer",
    description: "Panduan lengkap atur semua jenis printer: Thermal 58/80mm, Dot Matrix LX/LQ Continuous Form, Inkjet/Laserjet A4/F4, & Portable Mobile Bluetooth.",
    category: "Setup & Installasi",
    icon: "Printer",
    content: {
      intro: "SBPAYS mendukung 4 jenis printer sekaligus. Pilih sesuai loket: Thermal untuk struk harian, Dot Matrix untuk nota resmi Continuous Form, Inkjet/Laserjet untuk rekap A4/F4, Portable untuk Android keliling. Aturnya setelah login & Aplikasi Pembantu Komputer (Cetak Nota) aktif di PC.",
      sections: [
        {
          title: "Akses Pengaturan Printer",
          steps: [
            "Login ke aplikasi PPOB SBPays (via /download → Login Web).",
            "Masuk ke menu Pengaturan / Setting → Printer.",
            "Pilih tab Jenis Printer — akan tampil 4 pilihan: Thermal, Dot Matrix, Inkjet/Laserjet, Portable.",
          ],
        },
        {
          title: "A. Thermal 58mm / 80mm (Bluetooth / USB)",
          steps: [
            "Pilih Thermal → pilih 58mm atau 80mm sesuai roll.",
            "Koneksi: USB colok langsung, Bluetooth pair di Windows/Android (cari nama printer, PIN 0000/1234).",
            "Paper Size: 58mm (48mm printable) atau 80mm (72mm printable).",
            "Margin: Top 5mm, Left 3mm, Bottom 5mm. Aktifkan Auto-Cut jika ada.",
            "Header/Footer: isi nama loket, alamat, WA. Klik Simpan → Test Print.",
          ],
          tip: "Thermal paling hemat & cepat untuk struk harian PLN/pulsa/PDAM.",
        },
        {
          title: "B. Dot Matrix Epson LX-310 / LQ-310 (Continuous Form)",
          steps: [
            "Pilih Dot Matrix → pilih 9.5\" (240mm) atau 10\" (254mm) sesuai kertas continuous (2-3 ply).",
            "Install driver Epson LX-310 / LQ-310 dari epson.co.id → set sebagai Default Printer.",
            "Control Panel → Devices & Printers → Printer Properties → Preferences → Paper Size = Continuous 9.5\" x 11\" atau 10\" x 11\" (Fanfold).",
            "Atur margin: Top 12mm, Left 8mm, Bottom 6mm. Orientasi Portrait. Matikan Auto-Cut.",
            "Pasang kertas continuous via tractor feed, sejajarkan perforasi. Klik Simpan → Test Print (harus presisi di garis perforasi).",
          ],
          tip: "Wajib untuk loket resmi PC yang cetak nota kolektif PLN/PDAM & arsip 2 ply. Gunakan pita baru agar cetak tebal.",
        },
        {
          title: "C. Inkjet / Laserjet (A4 / F4 / Legal Cut Sheet)",
          steps: [
            "Pilih Inkjet/Laserjet → pilih A4 (210×297mm) atau F4/Legal (215×330mm).",
            "Di aplikasi SBPAYS pilih mode Cetak Kolektif → Format Lembaran (bukan struk).",
            "Saat dialog print browser (Ctrl+P): Paper = A4/F4, Margin = 15mm semua sisi, Scale 100%, uncheck Headers & Footers browser.",
            "Header/Footer loket tetap pakai yang di aplikasi. 1 lembar muat 20-50 pelanggan (tabel).",
            "Klik Print → pilih printer Inkjet/Laserjet → Print.",
          ],
          tip: "Ideal untuk rekap kolektif & bukti bayar resmi lembaran yang disimpan pelanggan/kolektor.",
        },
        {
          title: "D. Portable / Mobile Thermal (Android Bluetooth)",
          steps: [
            "Pilih Portable → 58mm Portable.",
            "Di Android: Settings → Bluetooth → Pair printer mini (nama mis. RPP02, MPT-II).",
            "Buka aplikasi SBPAYS Android → Pengaturan → Printer → pilih device yang ter-pair.",
            "Paper Size 58mm, koneksi Bluetooth. Pastikan baterai >50%.",
            "Klik Test Print — struk harus keluar 1-2 detik.",
          ],
        },
      ],
      note: "Semua jenis printer bisa dipakai bergantian. Thermal untuk harian, Dot Matrix/Inkjet untuk kolektif. Preview struk di aplikasi otomatis menyesuaikan.",
    },
  },
  {
    title: "Test Print Struk (Semua Printer)",
    slug: "test-print",
    description: "Cara test print untuk Thermal, Dot Matrix, Inkjet/Laserjet, & Portable agar presisi.",
    category: "Setup & Installasi",
    icon: "Printer",
    content: {
      intro: "Setelah konfigurasi, wajib test print per jenis printer untuk cek presisi kertas & margin. Jangan langsung transaksi banyak sebelum test.",
      sections: [
        {
          title: "Test Print per Jenis",
          steps: [
            "Thermal 58/80mm: Klik Test Print → cek teks di tengah, tidak terpotong. Jika miring, cek roll.",
            "Dot Matrix Continuous: Klik Test Print → cek tulisan tepat di atas perforasi, tidak nabrak lubang tractor. Atur ulang Top Margin jika geser.",
            "Inkjet/Laserjet A4/F4: Ctrl+P → Preview harus muat 1 lembar penuh, tabel tidak terpotong. Kurangi Scale ke 95% jika kepotong.",
            "Portable Bluetooth: Klik Test Print di Android → struk keluar 1-2 detik. Jika gagal, unpair → pair ulang.",
          ],
          tip: "Simpan hasil test print sebagai acuan margin. Jika ganti kertas, test ulang.",
        },
        {
          title: "Jika Gagal",
          steps: [
            "Cek kabel/USB/Bluetooth menyala & driver terinstall.",
            "Cek paper size di aplikasi = paper size di printer properties.",
            "Restart aplikasi SBPAYS & printer, coba lagi.",
            "Hubungi CS dengan foto hasil cetak + jenis printer (tanpa data rahasia).",
          ],
        },
      ],
    },
  },
  {
    title: "Setting Printer Dot Matrix (Epson LX/LQ Continuous Form)",
    slug: "setting-dot-matrix",
    description: "Panduan khusus Dot Matrix Epson LX-310/LQ-310 kertas Continuous Form 9.5\"/10\" untuk nota resmi.",
    category: "Setup & Installasi",
    icon: "Printer",
    content: {
      intro: "Dot Matrix adalah printer loket resmi PC untuk continuous form (kertas sobek perforasi, 2-3 ply karbon). Cocok untuk nota kolektif PLN/PDAM yang butuh arsip rangkap.",
      sections: [
        {
          title: "Install Driver",
          steps: [
            "Download driver Epson LX-310/LQ-310 dari epson.co.id (atau CD bawaan).",
            "Install → set sebagai Default Printer di Control Panel.",
            "Colok USB/LPT/LAN, pastikan status Ready.",
          ],
        },
        {
          title: "Setting Kertas Continuous",
          steps: [
            "Control Panel → Devices & Printers → klik kanan Epson → Printing Preferences.",
            "Advanced → Paper Size → pilih Fanfold 9.5\" x 11\" atau 10\" x 11\" (atau buat Custom 240×280mm / 254×280mm).",
            "Orientation Portrait, Quality Draft (hemat pita).",
            "Margin Top 12mm, Left 8mm, Bottom 6mm.",
            "Matikan Auto-Cut / Page Cut.",
          ],
        },
        {
          title: "Pasang Kertas & Test",
          steps: [
            "Buka tractor feed, masukkan kertas continuous, kunci sprocket ke lubang pinggir.",
            "Sejajarkan perforasi di tepi head printer.",
            "Di SBPAYS pilih Printer = Dot Matrix 9.5\"/10\" → Test Print → cek perforasi presisi.",
            "Jika tulisan naik/turun 2-3mm, geser Top Margin ±2mm.",
          ],
          tip: "Ganti pita tiap 1-2jt karakter agar cetak tetap tebal & tidak pudar untuk arsip.",
        },
      ],
      note: "Kertas continuous tersedia 9.5\" & 10\" lebar, 11\" tinggi per lembar. Beli 2 ply jika butuh rangkap pelanggan & arsip.",
    },
  },
  {
    title: "Setting Printer Inkjet / Laserjet (A4 / F4 Cut Sheet)",
    slug: "setting-inkjet-laserjet",
    description: "Panduan cetak rekap kolektif & struk lembaran via Inkjet/Laserjet kertas A4/F4.",
    category: "Setup & Installasi",
    icon: "FileText",
    content: {
      intro: "Inkjet/Canon/HP/Epson atau Laserjet dipakai untuk cetak rekap kolektif PLN/PDAM & bukti bayar lembaran resmi (bukan roll).",
      sections: [
        {
          title: "Pilih Mode Lembaran di SBPAYS",
          steps: [
            "Login SBPAYS PC → Transaksi → Kolektif PLN/PDAM → pilih Mode Cetak = Lembaran A4/F4.",
            "Import data pelanggan → klik Preview Cetak (tabel).",
          ],
        },
        {
          title: "Setting di Dialog Print Browser",
          steps: [
            "Tekan Ctrl+P → Destination = printer Inkjet/Laserjet Anda.",
            "Paper Size: A4 (210×297) atau F4/Legal (215×330) — samakan dengan kertas di tray.",
            "Margin: 15mm semua sisi. Scale: 100% (turunkan ke 95% jika tabel terpotong).",
            "Uncheck Headers and footers browser (biar hanya header loket SBPAYS yang tercetak).",
            "Centang Background graphics jika ingin logo warna.",
          ],
        },
        {
          title: "Cetak & Arsip",
          steps: [
            "Klik Print → tunggu 1 lembar keluar → cek tabel rapi, tidak terpotong.",
            "1 lembar A4 muat ±25-30 pelanggan, F4 muat ±35-50 (font 8-9pt).",
            "Simpan file PDF juga via Save as PDF untuk arsip digital.",
          ],
          tip: "Gunakan kertas HVS 70-80gsm. Untuk F4, atur tray ke Legal agar tidak miring.",
        },
      ],
    },
  },
  {
    title: "Setting Printer Portable Mobile (Android Bluetooth)",
    slug: "setting-portable-mobile",
    description: "Panduan printer mini thermal portable Bluetooth untuk transaksi via HP Android keliling.",
    category: "Setup & Installasi",
    icon: "Smartphone",
    cta: [{ label: "Download Aplikasi Android", href: siteConfig.apps.android.playStoreUrl, variant: "primary", external: true }],
    content: {
      intro: "Printer portable mini (58mm) cocok untuk mitra yang transaksi via Android saja / keliling tanpa PC.",
      sections: [
        {
          title: "Pair Bluetooth",
          steps: [
            "Nyalakan printer portable (tahan power 2 detik, lampu biru kedip).",
            "Di Android: Settings → Bluetooth → Scan → pilih nama printer (RPP02, MPT-II, ZJ-5802).",
            "PIN pairing: 0000 atau 1234. Jika gagal, matikan-nyalakan printer & coba lagi.",
          ],
        },
        {
          title: "Setting di SBPAYS Android",
          steps: [
            "Buka aplikasi SBPAYS Android (install via tombol di atas jika belum) → Pengaturan → Printer → Pilih Bluetooth Device → pilih nama printer yang sudah paired.",
            "Paper Size 58mm Portable, mode Bluetooth.",
            "Tes koneksi: klik Test Print → struk keluar 1-2 detik.",
          ],
        },
        {
          title: "Tips Baterai & Kertas",
          steps: [
            "Charge full (lampu hijau) sebelum keliling — tahan 4-6 jam / 50-100 struk.",
            "Gunakan roll thermal 58mm x 30mm diameter (kecil, muat di printer mini).",
            "Jika cetak pudar, charge ulang atau ganti roll.",
          ],
          tip: "Bawa powerbank. Simpan printer di tas kedap agar roll tidak lembab.",
        },
      ],
    },
  },
  {
    title: "Install Aplikasi Remote (Ultra Viewer) — Bantuan Jarak Jauh",
    slug: "install-remote-viewer",
    description: "Cara install Ultra Viewer / AnyDesk untuk bantuan remote CS — jangan beri password ke penghubung duluan.",
    category: "Setup & Installasi",
    icon: "Monitor",
    content: {
      intro: "Jika kesulitan install, CS bisa bantu via remote. Yang diutamakan adalah UltraViewer (AnyDesk alternatif). TeamViewer tidak direkomendasikan karena trial terbatas. Ingat: Anda yang harus hubungi CS dulu, jangan layani yang menghubungi duluan.",
      sections: [
        {
          title: "Download Aplikasi Remote Resmi",
          steps: [
            "Buka situs resmi ultraviewer.net atau anydesk.com (jangan dari link chat).",
            "Klik Download → dapat file installer.",
            "Pilih versi Windows Anda.",
          ],
        },
        {
          title: "Install Ultra Viewer",
          steps: [
            "Buka file installer → setujui lisensi → Install.",
            "Tunggu selesai → buka Ultra Viewer.",
            "Catat ID dan Password yang muncul (ganti tiap sesi).",
          ],
        },
        {
          title: "Hubungi CS dengan Aman",
          steps: [
            "Anda sendiri yang hubungi CS WA resmi (cek di halaman Kontak Cult Mitra).",
            "Berikan ID & Password hanya saat sesi bantuan akan dimulai.",
            "Setelah selesai, tutup aplikasi remote. Jangan berikan password akun, PIN, OTP, atau kode verifikasi.",
          ],
          tip: "Jangan pernah beri ID/Password remote ke orang yang menghubungi Anda duluan — itu ciri penipuan.",
        },
      ],
    },
  },
  {
    title: "Membuat Shortcut Aplikasi di Desktop",
    slug: "shortcut-desktop",
    description: "Bikin shortcut SBPAYS di desktop biar 1 klik langsung buka — tidak ketik alamat manual.",
    category: "Setup & Installasi",
    icon: "Monitor",
    content: {
      intro: "Shortcut di desktop bikin akses lebih cepat — 1 klik langsung ke halaman login resmi, tidak perlu ketik alamat.",
      sections: [
        {
          title: "Buat Shortcut di Desktop (Chrome/Firefox)",
          steps: [
            "Buka halaman Login SBPAYS resmi dari tombol di atas.",
            "Di Chrome: klik titik tiga kanan atas → Save and Share → Create shortcut → Create.",
            "Atau seret ikon gembok di address bar ke desktop.",
            "Di desktop akan muncul ikon SBPAYS. Klik untuk buka langsung.",
            "Klik kanan ikon → Properties → ganti nama jadi SBPAYS Loket biar gampang.",
          ],
        },
        {
          title: "Buat Shortcut Jika Pakai Aplikasi PC Lama",
          steps: [
            "Cari aplikasi di Start Menu atau folder instalasi.",
            "Klik kanan ikon → Send to → Desktop (create shortcut).",
            "Shortcut muncul di desktop.",
          ],
          tip: "Hapus shortcut lama jika alamat login sudah ganti. Selalu buat dari halaman resmi terbaru.",
        },
      ],
    },
  },

  // ─── TOPUP & DEPOSIT ──────────────────
  {
    title: "Cara Isi Saldo Deposit SBPAYS dengan Kode PPID",
    slug: "topup-saldo-deposit",
    description: "Isi saldo deposit pakai kode PPID biar otomatis — transfer kelipatan 100rb + PPID, 06.00-22.00 WIB.",
    category: "Topup & Deposit",
    icon: "Wallet",
    image: "/images/guides/deposit.png",
    content: {
      intro: "Saldo deposit adalah dana transaksi di akun SBPAYS Anda. Setiap mitra dapat kode PPID (kode loket) setelah aktivasi. Kode ini wajib dicantumkan di nominal transfer biar saldo masuk otomatis. Layanan deposit buka tiap hari 06.00-22.00 WIB, termasuk Minggu/libur.",
      imageCaption: "Cara Isi Saldo Deposit SBPAYS:\n\nBisa via Teller, ATM, Mobile Banking, Agen Bank, dll.\n\nSetiap mitra dapat kode PPID setelah daftar. PPID adalah kode loket sekaligus kode deposit.\n\nWajib sertakan kode PPID di nominal transfer biar otomatis. Jika lupa, bisa proses manual 5-10 menit dengan konfirmasi CS + bukti transfer.\n\nJumlah deposit kelipatan Rp 100.000 + kode PPID (contoh PPID 25321 → Rp125.321, Rp225.321).",
      sections: [
        {
          title: "Cara Hitung Nominal Biar Otomatis",
          steps: [
            "Catat kode PPID Anda (contoh: 25321). Lihat di akun/aplikasi setelah login.",
            "Pilih nominal dasar kelipatan 100rb: 100rb, 200rb, 500rb, 1jt, dst.",
            "Tambah PPID di belakang: Rp100.000 + 25321 = Rp125.321 . Rp500.000 → Rp525.321.",
            "Contoh lain: Mau isi 1jt dengan PPID 25321 → transfer Rp1.025.321 .",
            "Pilih rekening resmi a.n Cipta Usaha Makmur (lihat bawah) → pastikan nama penerima benar sebelum transfer.",
            "Simpan bukti transfer. Saldo masuk 100% sesuai nominal transfer (otomatis).",
          ],
          tip: "Jika lupa tambah PPID di nominal (misal transfer bulat Rp500.000), langsung tulis PPID di kolom berita/remark/keterangan transfer. Jika kolom tidak ada, cepat hubungi CS dengan bukti transfer + PPID + nominal + jam + bank pengirim.",
        },
        {
          title: "Rekening Deposit Resmi",
          steps: [
            "BANK BRI — No Rek: 0389-01-0004-06303, a.n: Cipta Usaha Makmur",
            "BANK MANDIRI — No Rek: 131-001-1408-988, a.n: Cipta Usaha Makmur",
            "BANK BNI — No Rek: 304776422, a.n: Cipta Usaha Makmur",
            "BANK BCA — No Rek: 2833780000, a.n: Cipta Usaha Makmur",
          ],
          description: "Pilih salah satu. Jika pakai bank yang sama dengan rekening Anda, biasanya lebih cepat.",
        },
        {
          title: "Jam & Estimasi Proses",
          steps: [
            "Jam layanan: tiap hari 06.00 – 22.00 WIB.",
            "Jika PPID dicantumkan di nominal → otomatis, cepat.",
            "Jika tanpa PPID / transfer bulat → proses manual 5-10 menit setelah konfirmasi CS (puncak tanggal 20 bisa hingga 15 menit).",
            "Jika lewat jam 22.00 atau gangguan bank/sistem, diproses esok hari.",
          ],
        },
        {
          title: "Ketentuan Saldo",
          steps: [
            "Saldo masuk 100% tanpa potongan — Rp525.321 masuk Rp525.321.",
            "Saldo bisa dipakai hingga Rp0 — tidak ada yang mengendap.",
            "Jika loket tutup, saldo dikembalikan sesuai ketentuan.",
            "Jangan transfer ke rekening pribadi mengatasnamakan SBPAYS — cek nama penerima Cipta Usaha Makmur.",
          ],
        },
      ],
      note: "Selalu sertakan PPID di nominal atau berita transfer. Bukti transfer wajib disimpan sampai saldo masuk.",
    },
  },
  {
    title: "Deposit Belum Masuk? Penyebab & Cara Konfirmasi",
    slug: "deposit-belum-masuk",
    description: "Saldo belum masuk 10 menit? Cek bukti, PPID, rekening — lalu konfirmasi ke CS, jangan transfer ulang.",
    category: "Topup & Deposit",
    icon: "AlertTriangle",
    content: {
      intro: "Jangan langsung transfer ulang jika saldo belum masuk. Cek dulu status transfer berhasil, PPID, rekening tujuan, dan jam. Jika masih belum masuk setelah estimasi normal, konfirmasi ke CS dengan bukti lengkap.",
      sections: [
        {
          title: "Berapa Lama Normalnya?",
          steps: [
            "Proses manual setelah konfirmasi CS: ±5-10 menit.",
            "Tanggal 20 (puncak loket) bisa hingga 15 menit.",
            "Di luar 06.00-22.00 atau saat gangguan bank → esok hari.",
          ],
        },
        {
          title: "Penyebab Sering Belum Masuk",
          steps: [
            "Transfer masih pending/belum berhasil di bank pengirim.",
            "PPID tidak dicantumkan di nominal → tidak auto-detect.",
            "PPID salah / beda loket.",
            "Nominal tidak kelipatan 100rb + PPID dan tidak ada berita/remark.",
            "Transaksi di jam puncak atau gangguan bank/sistem.",
          ],
        },
        {
          title: "Yang Harus Dilakukan",
          steps: [
            "Buka bukti transfer → pastikan status Berhasil dan nama penerima Cipta Usaha Makmur benar.",
            "Cek nominal & PPID sudah sesuai (contoh Rp525.321 untuk PPID 25321).",
            "Tunggu 10 menit di jam layanan.",
            "Jika belum masuk → hubungi CS WA resmi, kirim: bukti transfer, PPID, nominal, jam transfer, bank pengirim.",
            "Jangan transfer ulang sebelum transaksi pertama selesai dicek CS.",
          ],
          tip: "Jika tanpa kode unik tetap bisa diproses manual — wajib konfirmasi CS. Jangan beri bukti ke nomor selain CS resmi.",
        },
      ],
    },
  },
  {
    title: "Melihat Laporan Mutasi Saldo & Refund",
    slug: "laporan-mutasi-refund",
    description: "Cara cek mutasi saldo, refund, deposit, dan fee — cocokkan status & referensi sebelum ambil tindakan.",
    category: "Topup & Deposit",
    icon: "FileText",
    cta: [{ label: "Download Aplikasi Android", href: siteConfig.apps.android.playStoreUrl, variant: "primary", external: true }],
    content: {
      intro: "Mutasi saldo adalah catatan perubahan saldo (debit transaksi, deposit masuk, refund, koreksi, fee jika masuk saldo). Mutasi bukan status transaksi — jadi cocokkan status, nomor referensi, nominal, waktu, dan mutasi sebelum putuskan refund atau ulang transaksi.",
      sections: [
        {
          title: "Bedanya Mutasi, Refund, Deposit, Fee",
          steps: [
            "Mutasi saldo: catatan keluar/masuk saldo. Cek tanggal, nominal, keterangan.",
            "Refund: pengembalian karena gagal/batal/koreksi. Cek status gagal + potongan kembali.",
            "Deposit: dana isi saldo. Cek nominal transfer + waktu masuk.",
            "Fee: komisi transaksi berhasil (bulanan). Cek periode & tujuan pencairan (rekening/saldo).",
            "Jangan anggap semua saldo masuk adalah refund atau fee — cocokkan keterangannya.",
          ],
        },
        {
          title: "Cara Cek di PC/Laptop",
          steps: [
            "Login SBPAYS via Chrome/Firefox dengan Aplikasi Pembantu Komputer aktif.",
            "Buka menu Laporan / Riwayat Transaksi di akun.",
            "Pilih rentang tanggal, filter produk / ID pelanggan.",
            "Cocokkan: produk, ID, waktu, nominal, status, nomor referensi, dan mutasi saldo.",
            "Jika ada gagal/pending, cek dulu mutasi refund sebelum transaksi ulang.",
          ],
        },
        {
          title: "Cara Cek di Android",
          steps: [
            "Buka aplikasi SBPAYS → menu Laporan / Riwayat.",
            "Pilih Mutasi atau Refund, atur tanggal.",
            "Lihat daftar lengkap + detail. Simpan screenshot aman (tutup data rahasia).",
          ],
        },
      ],
    },
  },
  {
    title: "Mengecek Fee & Keuntungan — Fee Bulanan vs Margin Langsung",
    slug: "cek-fee-keuntungan",
    description: "Bedakan fee bulanan (H+3 hari kerja) vs margin Flexy Admin yang langsung masuk — cek di laporan.",
    category: "Topup & Deposit",
    icon: "TrendingUp",
    content: {
      intro: "Keuntungan loket ada 2: fee bulanan reguler (dikumpulkan sebulan, cair hari kerja ke-3 bulan berikutnya) dan margin Flexy Admin PLN yang langsung dari selisih admin pelanggan. Jangan samakan keduanya.",
      sections: [
        {
          title: "Fee Bulanan Reguler",
          steps: [
            "Dihitung dari transaksi berhasil tanggal 1 s.d akhir bulan.",
            "Dibayar hari kerja ke-3 setelah bulan berakhir (Sabtu/Minggu/libur tidak hitung), sore-malam.",
            "Masuk ke rekening bank atau saldo deposit sesuai setting akun.",
            "Minimum cair Rp10.000 — jika belum capai, akumulasi ke bulan berikutnya.",
            "Cek di laporan transaksi + tujuan pencairan fee di aplikasi.",
          ],
        },
        {
          title: "Margin Flexy Admin (Langsung)",
          steps: [
            "Selisih admin pelanggan - admin dasar (contoh: admin pelanggan 5.000 - dasar 4.500 = 500).",
            "Langsung diterima saat transaksi berhasil (tertera di struk).",
            "Bukan fee bulanan — tidak menunggu H+3.",
            "Cek di struk/resi + laporan harian.",
          ],
          tip: "Untuk angka terbaru, cek Halaman Fee Produk di website Cult Mitra & nominal di aplikasi sebelum transaksi.",
        },
      ],
    },
  },
  {
    title: "Flexy Admin PLN 2026 — Fungsi, Rentang, Slot & Margin",
    slug: "flexy-admin-pln-2026",
    description: "Atur markup admin PLN Rp3.000-10.000 sendiri — 15 slot, fee tetap jalan, margin langsung jadi cuan loket.",
    category: "Transaksi PLN",
    icon: "SlidersHorizontal",
    content: {
      intro: "Mulai 1 Agustus 2026, paket CID khusus Flexy Admin PLN (Postpaid Rp4.500 / Prepaid Rp3.000 / Nontaglis Rp6.000) bisa atur markup admin sendiri dalam rentang Rp3.000-10.000. Selisihnya langsung jadi cuan di struk, fee bulanan tetap cair terpisah.",
      sections: [
        {
          title: "Apa Itu Flexy Admin?",
          steps: [
            "Admin dasar tetap didebet dari deposit (misal Postpaid Rp4.500).",
            "Anda atur admin yang dibayar pelanggan (misal Rp5.000 atau Rp10.000).",
            "Selisihnya (Rp500 atau Rp5.500) langsung jadi pendapatan loket saat transaksi.",
            "Fee bulanan reguler tetap dapat (contoh Postpaid Rp1.950 per transaksi berhasil).",
            "Berlaku untuk Pascabayar, Prabayar/Token, dan Nontaglis — sesuai CID Flexy.",
          ],
        },
        {
          title: "Rentang & Slot",
          steps: [
            "Rentang admin pelanggan: Rp3.000 s.d 10.000 (pilih yang tersedia di sistem).",
            "Setiap loket dapat 15 slot Flexy Admin PLN — atur sesuai strategi (lokasi, saingan, operasional).",
            "Hanya untuk paket CID Flexy Admin khusus, bukan semua CID reguler.",
            "Live 1 Agustus 2026 — bisa di PC/laptop & Android.",
          ],
        },
        {
          title: "Contoh Hitung Cuan (Postpaid dasar 4.500, fee 1.950)",
          steps: [
            "Pelanggan bayar admin 5.000 → didebet 4.500, selisih 500 langsung + fee 1.950 bulanan = total 2.450 per transaksi.",
            "Pelanggan bayar admin 10.000 → selisih 5.500 + fee 1.950 = total 7.450 per transaksi.",
            "Semua tercantum di struk & laporan — sampaikan total ke pelanggan sebelum konfirmasi.",
            "Cek nominal admin dasar & fee untuk layanan lain di Halaman Fee Produk.",
          ],
          tip: "Jangan janjikan cuan besar tanpa hitung volume. Cuan tergantung jumlah transaksi & admin yang Anda pilih.",
        },
      ],
      note: "Ketentuan fee & admin bisa berubah. Selalu cocokkan dengan Halaman Fee Produk & nominal di aplikasi saat transaksi.",
    },
  },
  {
    title: "Cara Setting Flexy Admin PLN lewat PC & Android",
    slug: "setting-flexy-admin-pln",
    description: "Langkah atur markup admin PLN di SBPAYS — pilih slot, set nominal, simpan, cek di struk.",
    category: "Transaksi PLN",
    icon: "Settings",
    content: {
      intro: "Setting Flexy Admin gampang — buka menu PLN, pilih slot, atur nominal 3.000-10.000, simpan. Cek di struk & test transaksi kecil dulu.",
      sections: [
        {
          title: "Setting di PC/Laptop",
          steps: [
            "Login SBPAYS via Chrome/Firefox dengan Aplikasi Pembantu Komputer aktif.",
            "Buka layanan PLN Postpaid/Prepaid/Nontaglis sesuai CID Flexy Anda.",
            "Masuk menu Pengaturan Flexy Admin / Admin Setting.",
            "Pilih salah satu dari 15 slot → atur admin pelanggan (3.000-10.000) → Simpan.",
            "Lakukan transaksi test nominal kecil → cek struk: admin pelanggan & selisih harus sesuai.",
            "Jika tidak muncul, sinkronisasi katalog atau hubungi CS.",
          ],
        },
        {
          title: "Setting di Android",
          steps: [
            "Buka aplikasi SBPAYS → menu PLN → Pengaturan Flexy Admin.",
            "Pilih slot → atur nominal → Simpan.",
            "Test transaksi → cek struk & laporan.",
          ],
          tip: "Atur berbeda untuk tiap layanan jika perlu (Postpaid beda dengan Prepaid). Sampaikan admin ke pelanggan sebelum bayar.",
        },
      ],
    },
  },
  {
    title: "Bayar Tagihan ICONNET lewat SBPAYS",
    slug: "bayar-iconnet-sbpays",
    description: "Cara bayar ICONNET (fiber optik PLN) di SBPAYS — masukkan ID, cek tagihan, cocokkan admin.",
    category: "Transaksi",
    icon: "Wifi",
    content: {
      intro: "ICONNET adalah internet fiber optik dari PLN ICON Plus. Di SBPAYS Anda bisa layani pembayaran tagihannya — cukup ID pelanggan, cek tagihan, cocokkan admin, bayar.",
      sections: [
        {
          title: "Cara Bayar ICONNET",
          steps: [
            "Login SBPAYS (PC: Chrome/Firefox + Aplikasi Pembantu Komputer, Android: aplikasi).",
            "PC: buka menu pembayaran yang memuat ICONNET. Android: cari ICONNET di Internet & TV Berbayar.",
            "Masukkan ID pelanggan ICONNET dengan benar.",
            "Klik Cek Tagihan / Inquiry → lihat nama, periode, nominal, biaya admin.",
            "Jika data cocok & pelanggan setuju → Konfirmasi Bayar.",
            "Simpan/cetak bukti transaksi. Cek status sebelum beri bukti ke pelanggan.",
          ],
        },
        {
          title: "Jika Tagihan Tidak Muncul",
          steps: [
            "Cek lagi ID pelanggan (jangan salah ketik).",
            "Cek status layanan ICONNET pelanggan (mungkin nonaktif).",
            "Jangan paksa transaksi. Hubungi CS SBPAYS atau kanal resmi ICONNET/PLN Mobile.",
          ],
          tip: "Lokasi menu ICONNET bisa beda tiap versi aplikasi — gunakan pencarian produk jika ada.",
        },
      ],
    },
  },
  {
    title: "Bayar VA PLN Mobile lewat SBPAYS",
    slug: "bayar-va-pln-mobile",
    description: "Cara bayar Virtual Account dari PLN Mobile di SBPAYS — salin kode VA, pilih bank sesuai instruksi PLN Mobile.",
    category: "Transaksi PLN",
    icon: "CreditCard",
    content: {
      intro: "Pelanggan PLN Mobile bisa bayar via Virtual Account (VA). Salin kode VA dari PLN Mobile, lalu bayar lewat menu VA di SBPAYS. Jangan asal pilih Bank Mandiri — ikuti instruksi VA yang muncul di PLN Mobile saat itu.",
      sections: [
        {
          title: "Langkah Bayar VA PLN Mobile",
          steps: [
            "Buka PLN Mobile → pilih layanan/tagihan → pilih metode bayar Virtual Account (VA).",
            "Salin kode pembayaran/nomor VA + catat nominal yang harus dibayar.",
            "Buka SBPAYS → cari menu VA PLN Mobile / Virtual Account.",
            "Pilih bank/jalur VA sesuai instruksi di PLN Mobile (bisa beda tiap transaksi).",
            "Masukkan kode VA + nominal dengan benar → Periksa → Konfirmasi.",
            "Simpan/cetak bukti. Cek status transaksi sebelum beri ke pelanggan.",
          ],
        },
        {
          title: "Tips Anti Salah Bayar",
          steps: [
            "Salin kode VA langsung dari PLN Mobile, jangan ketik manual.",
            "Pastikan nominal sama persis dengan instruksi.",
            "Jangan pakai kode VA lama untuk transaksi baru.",
            "Jika status belum berhasil, cek laporan dulu — jangan langsung bayar ulang.",
            "Jika menu VA tidak muncul, update aplikasi & cek layanan tersedia di CID Anda.",
          ],
        },
      ],
    },
  },

  // ─── PENGELOLAAN AKUN ─────────────────
  {
    title: "Mengganti Password Akun SBPAYS",
    slug: "ubah-password",
    description: "Ganti password SBPAYS secara berkala — pakai kombinasi kuat, jangan bagi ke orang lain.",
    category: "Pengelolaan Akun",
    icon: "KeyRound",
    content: {
      intro: "Ganti password rutin biar akun aman. Jangan pernah bagi password, PIN, atau OTP ke siapa pun — termasuk yang mengaku CS.",
      sections: [
        {
          title: "Langkah Ganti Password",
          steps: [
            "Login ke aplikasi PPOB SBPays (PC atau Android).",
            "Masuk menu Pengaturan Akun / Profile.",
            "Pilih Ubah Password.",
            "Masukkan password lama → masukkan password baru → konfirmasi password baru.",
            "Klik Simpan / Update.",
            "Coba login ulang dengan password baru untuk pastikan.",
          ],
          tip: "Pakai kombinasi huruf besar, kecil, angka, simbol. Jangan pakai tanggal lahir atau 123456.",
        },
      ],
    },
  },
  {
    title: "Cek Kotak Spam Gmail — Jika Email SBPAYS Tidak Masuk",
    slug: "cek-spam-gmail",
    description: "Email SBPAYS tidak masuk inbox? Cek folder Spam/Sampah Gmail & pencarian in:anywhere.",
    category: "Pengelolaan Akun",
    icon: "Mail",
    content: {
      intro: "Jika email yang ditunggu tidak masuk inbox, biasanya masuk Spam/Promosi atau salah akun. Cek folder Spam segera — email di Spam terhapus permanen setelah 30 hari. Berlaku untuk Gmail Android & komputer.",
      sections: [
        {
          title: "Cek di HP Android (Aplikasi Gmail)",
          steps: [
            "Buka Gmail → pastikan akun Google yang aktif benar (jika punya banyak akun).",
            "Ketuk menu kiri atas → gulir ke bawah → pilih Spam.",
            "Cari email berdasarkan subjek/pengirim/waktu.",
            "Sebelum klik link/lampiran, cek alamat pengirim lengkap — pastikan asli.",
            "Jika ketemu & asli, buka → klik Bukan Spam / Pindah ke Kotak Masuk.",
          ],
        },
        {
          title: "Cek di Komputer (Browser)",
          steps: [
            "Buka Gmail di browser → menu kiri → klik Lainnya/More → Spam.",
            "Periksa email по subjek/pengirim/tanggal.",
            "Gunakan pencarian: ketik kata kunci → cek tab Utama/Promosi/Sosial/Semua Email.",
            "Di komputer coba ketik in:anywhere kata-kunci untuk cari di semua folder termasuk Spam/Sampah.",
            "Periksa juga folder Sampah jika terhapus tanpa sengaja.",
          ],
        },
        {
          title: "Pastikan Aman Sebelum Klik",
          steps: [
            "Jangan langsung klik link/download lampiran yang mengatasnamakan SBPAYS.",
            "Cek alamat pengirim & tujuan link — pastikan bukan phishing.",
            "Jangan masukkan username, password, PIN, OTP dari link email yang mencurigakan.",
            "Jika ragu, hubungi CS WA resmi Cult Mitra dulu.",
          ],
        },
      ],
    },
  },

  // ─── TRANSAKSI PLN LANJUTAN ─────────────────
  {
    title: "Biaya Admin PLN Pascabayar, Prabayar & Nontaglis",
    slug: "biaya-admin-pln",
    description: "Admin PLN beda layanan: Pascabayar bulanan, Token prabayar, Nontaglis non-rutin — cek di aplikasi sebelum transaksi.",
    category: "Info",
    icon: "Zap",
    content: {
      intro: "Biaya admin PLN tergantung layanan: Pascabayar (tagihan bulanan), Prabayar/Token (beli voucher), Nontaglis (layanan non-tagihan). Nominal & fee untuk masing-masing CID bisa beda — cek di aplikasi & Halaman Fee Produk sebelum transaksi.",
      sections: [
        {
          title: "Jenis Layanan PLN",
          steps: [
            "Pascabayar: tagihan bulanan sesuai pemakaian (KWH meter).",
            "Prabayar/Token: beli voucher token untuk meter prabayar (masukkan token ke meter).",
            "Nontaglis: layanan PLN non-tagihan rutin (pasang baru, ubah daya, dll) — sesuai ketersediaan biller.",
          ],
        },
        {
          title: "Cara Cek Admin & Fee Terbaru",
          steps: [
            "Login SBPAYS → pilih layanan PLN (Postpaid/Prepaid/Nontaglis) → cek nominal admin & fee yang tampil.",
            "Cocokkan dengan Halaman Fee Produk di website Cult Mitra (internal).",
            "Jangan pakai daftar admin lama dari chat — bisa kedaluwarsa.",
            "Sampaikan admin ke pelanggan sebelum konfirmasi bayar.",
          ],
        },
        {
          title: "Contoh Paket 2026",
          steps: [
            "Flexy CID contoh: Postpaid Rp4.500 / Prepaid Rp3.000 / Nontaglis Rp6.000 (admin dasar).",
            "Flexy Admin pelanggan bisa diatur 3.000-10.000 (margin langsung) + fee bulanan terpisah.",
            "Untuk CID non-Flexy, admin mengikuti paket reguler Anda — cek di akun.",
          ],
        },
      ],
    },
  },

  // ─── TRANSAKSI ─────────────────────────
  {
    title: "Transaksi Multi Payment — Modul Khusus, Bukan Kolektif",
    slug: "transaksi-multi-payment",
    description: "Kenali modul Multi Payment di SBPAYS PC — beda dengan Daftar Bayar/Grup Kolektif, jangan disamakan.",
    category: "Transaksi",
    icon: "CreditCard",
    content: {
      intro: "Multi Payment adalah nama modul tersendiri di SBPAYS PC — terpisah dari POSTPAID, PDAM, dll. Bukan fitur grup kolektif atau Daftar Bayar. Dokumentasi resmi saat ini baru mengonfirmasi keberadaannya, detail tombol/produk belum dipublish — jadi jangan samakan dengan alur Tambah Group / List Member.",
      sections: [
        {
          title: "Bedanya Multi Payment vs Kolektif",
          steps: [
            "Multi Payment = nama modul di daftar modul utama SBPAYS PC.",
            "Daftar Bayar/Kolektif = fitur simpan banyak ID pelanggan dalam 1 grup (ada Tambah Group, List Member, Member Group List, Transaksi Group).",
            "Jika Anda buka modul berlabel Multi Payment, itu baru Multi Payment. Jika Anda buka Tambah Group, itu jalur kolektif — bukan Multi Payment.",
            "Jangan samakan hanya karena transaksi banyak ID — cek label modul di aplikasi.",
          ],
        },
        {
          title: "Kapan Pakai Panduan Kolektif?",
          steps: [
            "Mau simpan banyak ID pelanggan dalam 1 grup → pakai panduan Transaksi Kolektif PLN/PDAM.",
            "Mau import banyak ID dari file → pakai panduan Import Data Kolektif.",
            "Di layar terlihat Daftar Bayar / Tambah Group / List Member → itu jalur kolektif.",
          ],
          tip: "Tutorial Multi Payment langkah-demi-langkah akan ditambah setelah screenshot resmi tersedia. Sementara, ikuti modul kolektif untuk kebutuhan banyak pelanggan.",
        },
      ],
    },
  },
  {
    title: "Transaksi Kolektif PLN — Buat Grup, Inquiry Massal, Verifikasi, Bayar",
    slug: "transaksi-kolektif-pln",
    description: "Bayar tagihan PLN banyak pelanggan sekaligus — buat grup, import ID, inquiry, cek hasil, baru bayar.",
    category: "Transaksi",
    icon: "Zap",
    content: {
      intro: "Kolektif PLN adalah cara simpan banyak ID pelanggan Pascabayar dalam 1 grup, cek tagihan massal (inquiry), verifikasi, lalu bayar yang benar saja. Penting: buat grup + inquiry BELUM bayar — saldo kepotong saat Anda konfirmasi Bayar.",
      sections: [
        {
          title: "Yang Perlu Disiapkan",
          steps: [
            "PC/laptop browser + Aplikasi Pembantu Komputer aktif (Versi Plugin muncul).",
            "ID pelanggan PLN Pascabayar yang sudah diperiksa (jangan salah ketik).",
            "Grup kolektif sesuai kebutuhan, saldo cukup saat mau bayar.",
            "Login via pintu resmi Cult Mitra.",
          ],
        },
        {
          title: "1. Buat Grup Kolektif",
          steps: [
            "Login → buka POSTPAID (Listrik Pascabayar) → tab Daftar Bayar.",
            "Klik Tambah Group → isi Nama Group, Telepon, Nama Kontak (wajib). Keterangan boleh kosong → Simpan.",
            "Daftar grup muncul kolom Option, Nama, Kontak, Telepon, Anggota, Terakhir Inquiry, Terakhir Bayar, Status.",
            "Di kolom Option: Edit Group, List Member, Hapus Group, Transaksi Group (ikon uang).",
          ],
        },
        {
          title: "2. Tambah ID Pelanggan (Manual / Import)",
          steps: [
            "Klik List Member → Tambah Member → isi ID Pelanggan + Nama → Simpan (untuk sedikit).",
            "Untuk banyak: klik Import → pilih file .xls atau .txt berisi daftar ID pelanggan tanpa nama → Import.",
            "Untuk format massal, ikut panduan Import Data Kolektif agar .xls / .txt tidak tertukar.",
            "Pastikan tidak ada ID salah ketik, digit terpotong, spasi, atau ganda.",
          ],
        },
        {
          title: "3. Inquiry / Cek Tagihan Massal",
          steps: [
            "Di daftar grup → klik ikon Transaksi Group → Klik Cek Tagihan Baru.",
            "Di jendela Member Group List → pilih ID yang mau dicek → Proses Inquiry → tunggu selesai.",
            "Status Inquiry = grup pernah di-inquiry, bukan semua berhasil. Tetap cek rincian tiap ID.",
            "Klik Transaksi Group lagi untuk lihat rincian hasil inquiry.",
          ],
        },
        {
          title: "4. Verifikasi Sebelum Bayar (Wajib)",
          steps: [
            "Cocokkan ID & identitas vs daftar pelanggan Anda.",
            "Cek jumlah pelanggan berhasil vs anggota grup.",
            "Periksa periode, nilai tagihan, biaya admin, total bayar.",
            "Pastikan saldo cukup untuk semua yang akan dibayar.",
            "Jangan klik Bayar sebelum semua diperiksa & pelanggan setuju.",
          ],
        },
        {
          title: "5. Proses Bayar & Cek Status",
          steps: [
            "Pilih pelanggan yang akan dibayar (Check All atau pilih sebagian). Jika ada, pakai Kalkulator → Proses Bayar.",
            "Tersedia juga Cetak Daftar Inquiry, Export Daftar Inquiry, Kembali.",
            "Setelah bayar → cek status tiap transaksi (berhasil/gagal/pending) sebelum cetak struk.",
            "Jika pending/gagal, jangan langsung bayar ulang — cek laporan & mutasi refund dulu.",
          ],
        },
      ],
    },
  },
  {
    title: "Import Data Pelanggan Kolektif — .xls / .txt Tanpa Salah Format",
    slug: "import-data-pelanggan-kolektif",
    description: "Import massal ID pelanggan kolektif PLN/PDAM — beda layanan beda format file, cek dulu.",
    category: "Transaksi",
    icon: "Upload",
    content: {
      intro: "Import memudahkan kolektif — masukkan banyak ID dari file Excel/CSV/TXT tanpa input manual satu-satu. Format beda tiap layanan — PLN vs PDAM beda, jadi cek dulu biar tidak gagal import.",
      sections: [
        {
          title: "Format File yang Terverifikasi",
          steps: [
            "PLN Pascabayar (kolektif): file .xls atau .txt berisi daftar ID pelanggan tanpa nama (per baris 1 ID).",
            "PDAM: file .txt dengan 2 pola: ID saja per baris ATAU ID,Nama dipisah koma.",
            "Jangan campur format — ikut template di aplikasi atau panduan Import Data Kolektif yang benar.",
            "Hindari spasi tambahan, digit terpotong, atau ID ganda.",
          ],
        },
        {
          title: "Langkah Import di PC",
          steps: [
            "Login SBPAYS PC → POSTPAID/PDAM → Daftar Bayar → pilih grup → List Member → Import.",
            "Pilih file .xls / .txt yang sudah disiapkan (sesuai layanan).",
            "Klik Import → tunggu proses → cek Member Group List: jumlah anggota harus sesuai file.",
            "Klik Transaksi Group → inquiry untuk verifikasi tagihan sebelum bayar.",
          ],
          tip: "Untuk PDAM, jangan campur biller/wilayah beda dalam 1 grup. Salah wilayah = ID tidak ditemukan.",
        },
        {
          title: "Jika Gagal Import",
          steps: [
            "Cek ekstensi file .xls vs .txt sesuai layanan.",
            "Buka file → pastikan tidak ada nama di PLN (hanya ID), PDAM ikuti pola yang diminta.",
            "Hapus kolom kosong, spasi, atau karakter aneh.",
            "Coba import 5 ID dulu untuk test, baru full.",
          ],
        },
      ],
    },
  },
  {
    title: "Transaksi Kolektif PDAM — 1 Grup 1 Wilayah, Inquiry Massal",
    slug: "transaksi-kolektif-pdam",
    description: "Kelola tagihan air PDAM kolektif — buat grup per biller, inquiry massal, verifikasi, bayar.",
    category: "Transaksi",
    icon: "Droplets",
    content: {
      intro: "Kolektif PDAM mirip PLN — simpan banyak ID dalam grup, cek tagihan massal, lalu bayar yang sudah benar. 1 grup untuk 1 biller/wilayah PDAM — jangan campur.",
      sections: [
        {
          title: "Yang Perlu Disiapkan",
          steps: [
            "Akses SBPAYS PC + Aplikasi Pembantu Komputer aktif.",
            "ID pelanggan PDAM yang sudah benar + wilayah/biller yang sesuai.",
            "Saldo cukup saat mau bayar. Login pintu resmi.",
          ],
        },
        {
          title: "1. Buat Grup PDAM",
          steps: [
            "Buka layanan PDAM → Daftar Bayar / menu kolektif → Tambah Group.",
            "Isi Nama Group, pilih Biller PDAM yang sesuai, isi Telepon/Nama Kontak/Keterangan → Simpan.",
            "Jangan campur biller beda dalam 1 grup — nanti inquiry tidak ketemu.",
          ],
        },
        {
          title: "2. Tambah Pelanggan",
          steps: [
            "Klik List Member → Member Group List (ada Tambah Member, Export, Import).",
            "Manual: Tambah Member → ID + Nama → Simpan.",
            "Import: Import → pilih file .txt (ID per baris atau ID,Nama) → Import → cek jumlah anggota.",
          ],
        },
        {
          title: "3. Inquiry & Verifikasi",
          steps: [
            "Klik Transaksi Group → Cek Tagihan Baru → pilih pelanggan → Proses Inquiry → tunggu hasil.",
            "Cek: ID/nama, wilayah/biller, jumlah berhasil, periode/nilai tagihan, admin & total.",
            "Sampaikan total ke pelanggan, pastikan setuju sebelum bayar.",
          ],
        },
        {
          title: "4. Bayar",
          steps: [
            "Pilih pelanggan (Check All / sebagian) → jika perlu Kalkulator → Proses Bayar.",
            "Cetak Daftar Inquiry / Export jika perlu. Cek status tiap transaksi setelah bayar.",
            "Jika pending, cek laporan & mutasi sebelum ulang.",
          ],
        },
      ],
    },
  },
  {
    title: "Isi Saldo Etoll Mandiri & TapCash BNI — Cek via NFC",
    slug: "isi-saldo-etoll-tapcash",
    description: "Isi & update saldo kartu uang elektronik — pakai NFC HP, cek produk tersedia di aplikasi.",
    category: "Transaksi",
    icon: "CreditCard",
    content: {
      intro: "Kartu uang elektronik (e-Money, TapCash, dll) bisa diisi & cek saldo lewat SBPAYS jika fiturnya tersedia dan HP mendukung NFC. Jenis kartu yang didukung bisa berubah — cek katalog produk dulu.",
      sections: [
        {
          title: "Cara Cek Saldo via NFC",
          steps: [
            "Aktifkan NFC di HP Android.",
            "Buka SBPAYS → menu e-money / kartu uang elektronik.",
            "Pilih Cek Saldo → tempel kartu di area NFC HP → tunggu terbaca.",
          ],
        },
        {
          title: "Isi Saldo & Update ke Kartu",
          steps: [
            "Pilih menu Transaksi → E-Money → Etoll Mandiri / TapCash BNI (sesuai produk tersedia).",
            "Masukkan nomor kartu → pilih nominal → Proses.",
            "Untuk kartu yang perlu update chip: setelah top up sukses, pakai fungsi update/cek saldo NFC → tempel kartu sampai selesai (jangan lepas).",
            "Jika HP tidak ada NFC, pakai ATM/merchant resmi penerbit kartu untuk update.",
          ],
        },
        {
          title: "Hal Penting",
          steps: [
            "Jangan anggap semua kartu didukung 1 menu — cek nama produk di aplikasi.",
            "Jika top up sukses tapi saldo kartu belum nambah, jangan ulang beli — cek status & lakukan update balance NFC dulu.",
            "Gunakan kanal resmi, jangan pakai APK tidak dikenal.",
          ],
        },
      ],
    },
  },
  {
    title: "Transaksi Gopay / Gojek — Top Up via Katalog Produk",
    slug: "transaksi-gopay-gojek",
    description: "Isi saldo Gopay/Gojek dari katalog SBPAYS — masukkan nomor HP, cek nominal & status.",
    category: "Transaksi",
    icon: "Smartphone",
    cta: [{ label: "Download Aplikasi Android", href: siteConfig.apps.android.playStoreUrl, variant: "primary", external: true }],
    content: {
      intro: "GoPay bisa diisi lewat SBPAYS jika produknya tersedia di katalog. Nominal & harga bisa berubah — pakai yang tampil di aplikasi saat transaksi, jangan pakai daftar lama.",
      sections: [
        {
          title: "Langkah Isi Saldo Gopay",
          steps: [
            "Login SBPAYS → buka menu Voucher / E-Wallet / Produk Digital → cari GoPay.",
            "Masukkan nomor HP akun GoPay pelanggan sesuai format.",
            "Pilih nominal yang tersedia → periksa nomor, nominal, harga, biaya.",
            "Konfirmasi jika data benar → cek status → simpan bukti.",
            "Jika status pending, cek laporan dulu jangan langsung top up ulang.",
          ],
          tip: "Konfirmasi nomor HP ke pelanggan sebelum bayar. Jangan janjikan saldo instan jika status biller belum sukses.",
        },
      ],
    },
  },
  {
    title: "Transaksi SIM — Perpanjangan via SINAR Digital Korlantas",
    slug: "transaksi-sim-online",
    description: "SIM perpanjangan online pakai SINAR di Digital Korlantas — daftar SIM baru masih akan segera hadir.",
    category: "Transaksi",
    icon: "Car",
    content: {
      intro: "Per 16 Agustus 2026, perpanjangan SIM bisa online via SINAR (SIM Nasional Presisi) di aplikasi Digital Korlantas Polri. Fitur pendaftaran SIM baru masih status akan segera hadir — jadi untuk SIM baru ikuti SATPAS resmi. Jangan pakai link SIM Online lama.",
      sections: [
        {
          title: "Apa Itu SINAR?",
          steps: [
            "SINAR = SIM Nasional Presisi di aplikasi Digital Korlantas Polri.",
            "Yang sudah bisa: perpanjangan SIM online. Yang belum: pendaftaran SIM baru (masih akan segera hadir).",
            "Korlantas juga luncurkan SIM Digital 22 Mei 2026 — bisa ditampilkan di Digital Korlantas saat perlu.",
          ],
        },
        {
          title: "Cara Perpanjangan SIM Online (Garis Besar)",
          steps: [
            "Install aplikasi Digital Korlantas Polri dari sumber resmi.",
            "Registrasi & verifikasi identitas.",
            "Pilih layanan SINAR / Perpanjangan SIM.",
            "Lengkapi syarat kesehatan & psikologi sesuai petunjuk resmi.",
            "Unggah dokumen → pilih pengiriman/pengambilan → bayar via kanal di aplikasi.",
            "Pantau status di aplikasi.",
          ],
        },
        {
          title: "Apakah Bayar SIM Lewat SBPAYS Masih Berlaku?",
          steps: [
            "Artikel lama pernah jelaskan bayar kode SIM via SBPAYS — tidak lagi jadi acuan 2026.",
            "Pakai metode bayar yang muncul di Digital Korlantas/SINAR.",
            "Jika kode bayar memang tersedia di SBPAYS, pastikan biller & instruksi cocok sebelum transaksi.",
          ],
        },
      ],
    },
  },
  {
    title: "Transaksi PBB — Pajak Bumi Bangunan Online per Wilayah",
    slug: "transaksi-pbb",
    description: "Bayar PBB via SBPAYS — masukkan NOP 18 digit + tahun pajak, cek biller wilayah tersedia.",
    category: "Transaksi",
    icon: "Building",
    content: {
      intro: "PBB bisa dibayar via SBPAYS selama biller wilayah pelanggan tersedia. Jangan andalkan daftar kota lama — cek langsung di aplikasi karena cakupan bisa berubah.",
      sections: [
        {
          title: "Data yang Disiapkan",
          steps: [
            "NOP (Nomor Objek Pajak) — umumnya 18 digit, lihat di SPPT. Jangan tebak jika tulisan tidak jelas.",
            "Tahun pajak/tagihan yang mau dibayar.",
            "Wilayah kota/kabupaten objek pajak (sesuai SPPT).",
            "Data tambahan jika biller minta (tergantung wilayah).",
          ],
        },
        {
          title: "Cara Bayar PBB Online",
          steps: [
            "Login SBPAYS (PC: Chrome/Firefox + Aplikasi Pembantu Komputer, Android: aplikasi).",
            "Buka layanan PBB / Pajak Daerah → pilih wilayah kota/kabupaten.",
            "Masukkan NOP + tahun → Cek/Inquiry → tunggu tagihan muncul.",
            "Periksa: nama wajib pajak, tahun, jumlah tagihan, admin. Jika cocok & pelanggan setuju → Konfirmasi Bayar.",
            "Simpan/cetak bukti. Cek status sebelum beri ke pelanggan.",
            "Nama tombol/menu bisa beda tiap versi — ikuti yang tampil di aplikasi.",
          ],
        },
        {
          title: "Jika Tagihan Tidak Muncul",
          steps: [
            "Cek lagi digit NOP, tahun, wilayah.",
            "Cek apakah biller wilayah tersebut sedang tersedia di SBPAYS.",
            "Jangan masukkan nominal manual jika sistem tidak tampilkan tagihan.",
            "Arahkan pelanggan ke kanal resmi Pemda terkait atau hubungi CS SBPAYS.",
          ],
          tip: "Untuk tagihan besar, ulangi cek 4 hal: NOP, nama, tahun, total bayar.",
        },
      ],
    },
  },
  {
    title: "Transaksi Pajak Kendaraan via SIGNAL (Pengganti SAMOLNAS)",
    slug: "transaksi-e-samsat-nasional",
    description: "Bayar pajak kendaraan tahunan via SIGNAL — Samsat Digital Nasional, bukan SAMOLNAS lama.",
    category: "Transaksi",
    icon: "Car",
    content: {
      intro: "Per 16 Agustus 2026, layanan digital nasional untuk pajak kendaraan adalah SIGNAL (Samsat Digital Nasional) untuk pengesahan STNK tahunan, PKB, SWDKLLJ — menggantikan SAMOLNAS. Jangan pakai link SAMOLNAS lama. Gunakan aplikasi SIGNAL resmi.",
      sections: [
        {
          title: "Apa Itu SIGNAL?",
          steps: [
            "SIGNAL = Samsat Digital Nasional — terhubung Polri, Dukcapil, pajak daerah.",
            "Fungsi: pengesahan STNK tahunan, bayar PKB & SWDKLLJ digital.",
            "Info resmi via kanal Polri & aplikasi SIGNAL.",
          ],
        },
        {
          title: "Cara Umum Bayar Pajak via SIGNAL",
          steps: [
            "Install aplikasi SIGNAL resmi (bukan APK sumber tak dikenal).",
            "Registrasi akun & data kendaraan.",
            "Pilih kendaraan → periksa rincian PKB/SWDKLLJ & biaya.",
            "Generate kode bayar → pilih kanal pembayaran yang ada di SIGNAL.",
            "Selesaikan bayar → simpan bukti sampai pengesahan selesai.",
          ],
        },
        {
          title: "Apakah Kode SIGNAL Bisa Dibayar di SBPAYS?",
          steps: [
            "Jangan anggap semua kode SIGNAL otomatis bisa di SBPAYS — cek biller tersedia di aplikasi SBPAYS dulu.",
            "Jika tidak ada, bayar via kanal yang ditawarkan SIGNAL.",
            "Jangan pakai petunjuk SAMOLNAS 2023 sebagai bukti.",
          ],
          tip: "Untuk pajak 5 tahunan / cek fisik / ganti dokumen, ikuti ketentuan Samsat/Korlantas yang berlaku.",
        },
      ],
    },
  },
  {
    title: "Transfer Uang Antar Bank — Isi Data Pengirim & Penerima Lengkap",
    slug: "transfer-uang-semua-bank",
    description: "Kirim uang ke semua bank via SBPAYS PC — isi data pengirim/penerima, cek nama, masukkan PIN Loket.",
    category: "Transaksi",
    icon: "ArrowLeftRight",
    content: {
      intro: "Transfer uang di SBPAYS PC via menu TRANSFER UANG → tab Transfer. Isi Data Pengirim & Penerima lengkap, Proses Kirim, cek ringkasan, masukkan PIN Loket sendiri, Kirim. Bukan Multi Payment & tidak pakai Group.",
      sections: [
        {
          title: "Syarat Sebelum Transfer",
          steps: [
            "Fitur Transfer Uang sudah terdaftar/aktif (lihat panduan aktivasi).",
            "Login PC via Chrome/Firefox + Aplikasi Pembantu Komputer aktif.",
            "Siapkan Data Pengirim & Penerima lengkap + saldo cukup.",
          ],
        },
        {
          title: "Cara Transfer di PC",
          steps: [
            "Pilih TRANSFER UANG → tab Transfer.",
            "Lengkapi Data Pengirim: KTP, nama, HP, alamat lengkap (jalan/RT/RW/kelurahan/kecamatan/provinsi/kabupaten), tempat/tanggal lahir, kewarganegaraan, gender, pekerjaan, NPWP, pesan opsional.",
            "Lengkapi Data Penerima: bank tujuan, no rekening, nama penerima, nominal, sumber dana, tujuan transfer, HP, alamat, provinsi, kabupaten/kota.",
            "Cek lagi: pengirim, bank, rekening, nama, nominal, biaya. Jika benar & pelanggan konfirmasi → Proses Kirim.",
            "Di halaman ringkasan cek lagi Data Pengirim/Penerima, nominal, admin, total bayar. Jika oke → masukkan PIN LOKET sendiri → Kirim.",
            "Jika salah urung → pakai Kosongkan untuk isi ulang.",
          ],
        },
        {
          title: "Setelah Kirim",
          steps: [
            "Cek hasil di tab Cek Transaksi sebelum beri bukti ke pelanggan.",
            "Jika pending/gagal, jangan langsung ulang — cek laporan & mutasi.",
            "Cetak Ulang / Laporan Harian / Rekap Bulanan / Test Print ada di tab menu Transfer.",
            "Biaya, limit, bank, jam layanan bisa berubah — pakai angka yang tampil di aplikasi saat transaksi.",
          ],
          tip: "PIN Loket wajib masukkan sendiri — jangan beri ke pelanggan/agen lain/CS gadungan.",
        },
      ],
    },
  },
  {
    title: "Aktivasi Fitur Transfer Uang di Android",
    slug: "aktifkan-transfer-uang-android",
    description: "Daftarkan fitur Transfer Uang SBPAYS di HP Android — cek data, setujui perjanjian, Cek Pendaftaran.",
    category: "Transaksi",
    icon: "Smartphone",
    cta: [{ label: "Download Aplikasi Android", href: siteConfig.apps.android.playStoreUrl, variant: "primary", external: true }],
    content: {
      intro: "Fitur transfer uang perlu diaktifkan dulu sebelum dipakai. Di Android via menu TRANSFER UANG → PENDAFTARAN, periksa data loket, baca perjanjian, centang, DAFTAR, lalu Cek Pendaftaran.",
      sections: [
        {
          title: "Langkah Aktivasi di Android",
          steps: [
            "Buka aplikasi SBPAYS Android (install via tombol di atas jika belum).",
            "Pilih menu TRANSFER UANG → bagian PENDAFTARAN.",
            "Periksa data loket: PPID, nama, alamat, provinsi, kabupaten, kecamatan, telepon, nama PIC, telepon PIC.",
            "Jika data benar → buka & baca tautan perjanjian yang berlaku → centang Saya menyetujui.",
            "Tekan DAFTAR → gunakan Cek Pendaftaran untuk lihat status.",
            "Arti status mengikuti keterangan di akun (screenshot tidak tunjuk hasil). Jika data salah, hubungi Agen untuk ubah data — jangan lanjut DAFTAR.",
          ],
          tip: "Tidak ada kolom PIN/OTP di tampilan pendaftaran yang terdokumentasi. Jika muncul verifikasi tambahan, ikuti petunjuk resmi & jangan bagi PIN/OTP.",
        },
      ],
    },
  },
  {
    title: "Aktivasi Fitur Transfer Uang di PC/Komputer",
    slug: "aktifkan-transfer-uang-komputer",
    description: "Daftar Transfer Uang di PC via TRANSFER UANG → PENDAFTARAN — cek data, setujui, DAFTAR.",
    category: "Transaksi",
    icon: "Monitor",
    cta: [
      { label: "Login Web — Server Utama (ppob4)", href: siteConfig.apps.web.primaryLogin, variant: "primary", external: true },
      { label: "Server 1 — ppob2", href: siteConfig.apps.web.loginUrls[0], variant: "secondary", external: true },
      { label: "Server 2 — ppob2.bck", href: siteConfig.apps.web.loginUrls[1], variant: "secondary", external: true },
      { label: "Server 3 — other", href: siteConfig.apps.web.loginUrls[2], variant: "secondary", external: true },
    ],
    content: {
      intro: "Di PC juga via TRANSFER UANG → PENDAFTARAN. Periksa semua data loket, baca perjanjian, centang, DAFTAR, lalu Cek Pendaftaran. Aplikasi Pembantu Komputer harus aktif (Versi Plugin muncul).",
      sections: [
        {
          title: "Langkah Aktivasi di PC",
          steps: [
            "Login via Chrome/Firefox + Aplikasi Pembantu Komputer aktif (cek Versi Plugin).",
            "Pilih TRANSFER UANG → PENDAFTARAN.",
            "Periksa PPID, nama, alamat, provinsi, kabupaten, kecamatan, telepon, nama PIC, telepon PIC.",
            "Buka & baca tautan perjanjian → centang Saya menyetujui dan sudah membaca perjanjian.",
            "Tekan DAFTAR → klik Cek Pendaftaran untuk cek status.",
            "Jika data tidak sesuai, hubungi Agen untuk perubahan data loket — jangan DAFTAR dengan data keliru.",
          ],
        },
        {
          title: "Catatan Penting",
          steps: [
            "Aplikasi Pembantu Komputer aktif ≠ otomatis terdaftar. Transfer perlu daftar terpisah.",
            "OpenVPN 2.3.2 tidak wajib — hanya jika MAC/LAN tidak terdeteksi (Gagal Mendeteksi Sistem Keamanan).",
            "Jika muncul Identitas Keamanan Tidak Terdaftar → hubungi CS untuk verifikasi perangkat.",
          ],
        },
      ],
    },
  },
  {
    title: "Top Up E-Wallet di PC — DANA, OVO, GoPay, ShopeePay",
    slug: "isi-saldo-ewallet-komputer",
    description: "Isi e-wallet dari PC via katalog produk — sinkronisasi katalog, pilih produk, cek harga.",
    category: "Transaksi",
    icon: "Monitor",
    cta: [
      { label: "Login Web — Server Utama (ppob4)", href: siteConfig.apps.web.primaryLogin, variant: "primary", external: true },
      { label: "Server 1 — ppob2", href: siteConfig.apps.web.loginUrls[0], variant: "secondary", external: true },
      { label: "Server 2 — ppob2.bck", href: siteConfig.apps.web.loginUrls[1], variant: "secondary", external: true },
      { label: "Server 3 — other", href: siteConfig.apps.web.loginUrls[2], variant: "secondary", external: true },
    ],
    content: {
      intro: "Top up e-wallet di PC via menu Voucher/Produk Digital. Pilih produk yang tersedia, masukkan nomor tujuan, cek harga & status. Jangan pakai kode produk lama (DN/GP/SP) — pakai katalog terbaru.",
      sections: [
        {
          title: "Langkah di PC",
          steps: [
            "Login via Chrome/Firefox + Aplikasi Pembantu Komputer aktif.",
            "Buka Voucher/Produk Digital → sinkronisasi katalog/daftar harga jika ada.",
            "Cari DANA / OVO / GoPay / ShopeePay / e-wallet lain → pilih produk & nominal.",
            "Masukkan nomor HP/ID tujuan sesuai format produk.",
            "Periksa produk, nomor, nominal, harga, biaya → Konfirmasi.",
            "Cek status & cetak/simpan bukti. Jika produk tidak muncul, sinkronisasi lagi atau hubungi CS.",
          ],
          tip: "Margin/harga ikuti yang tampil di aplikasi. Jangan andalkan contoh margin lama sebagai patokan untung.",
        },
      ],
    },
  },
  {
    title: "Top Up E-Wallet di Android — DANA, Grab, OVO, ShopeePay",
    slug: "topup-ewallet-android",
    description: "Isi e-wallet di HP Android via katalog — pilih produk tersedia, cek nomor & status.",
    category: "Transaksi",
    icon: "Smartphone",
    cta: [{ label: "Download Aplikasi Android", href: siteConfig.apps.android.playStoreUrl, variant: "primary", external: true }],
    content: {
      intro: "Di Android juga via katalog produk digital. Pilih e-wallet yang tampil saat itu — jangan andalkan daftar lama. Jika pending, cek status dulu jangan langsung ulang.",
      sections: [
        {
          title: "Langkah di Android",
          steps: [
            "Buka aplikasi SBPAYS → menu Voucher/Pulsa/E-Wallet/Produk Digital.",
            "Cari DANA / OVO / GoPay / ShopeePay / produk lain yang tersedia.",
            "Masukkan nomor HP/ID akun pelanggan sesuai format.",
            "Pilih nominal → periksa nomor, nama produk, nominal, harga, biaya.",
            "Konfirmasi jika benar → cek status → simpan bukti.",
          ],
        },
        {
          title: "Tips Anti Salah",
          steps: [
            "Minta pelanggan ulang nomor HP/ID.",
            "Pastikan produk sesuai e-wallet tujuan.",
            "Cek nominal sebelum bayar. Jika pending, cek status dulu.",
            "Jangan janjikan saldo instan jika status biller belum sukses.",
          ],
        },
      ],
    },
  },
  {
    title: "Top Up GoPay / ShopeePay via ... (Versi Ringkas)",
    slug: "topup-gopay-ringkas",
    description: "Ringkasan top up GoPay — buka katalog, masukkan nomor, pilih nominal, cek status.",
    category: "Transaksi",
    icon: "Smartphone",
    cta: [{ label: "Download Aplikasi Android", href: siteConfig.apps.android.playStoreUrl, variant: "primary", external: true }],
    content: {
      intro: "Gunakan katalog GoPay/GoJek yang tersedia saat transaksi. Jangan pakai nominal lama.",
      sections: [
        {
          title: "Langkah Singkat",
          steps: [
            "Login SBPAYS → katalog E-Wallet → GoPay.",
            "Masukkan nomor HP → pilih nominal → cek harga.",
            "Konfirmasi → cek status (pending jangan ulang dulu).",
          ],
        },
      ],
    },
  },

  // ─── CETAK ULANG ──────────────────────
  {
    title: "Cetak Ulang Struk di Komputer (Semua Printer)",
    slug: "cetak-ulang-komputer",
    description: "Cetak ulang via Thermal, Dot Matrix Continuous, atau Inkjet/Laserjet A4/F4 dari riwayat PC.",
    category: "Cetak Ulang",
    icon: "Printer",
    cta: [
      { label: "Login Web — Server Utama (ppob4)", href: siteConfig.apps.web.primaryLogin, variant: "primary", external: true },
      { label: "Server 1 — ppob2", href: siteConfig.apps.web.loginUrls[0], variant: "secondary", external: true },
      { label: "Server 2 — ppob2.bck", href: siteConfig.apps.web.loginUrls[1], variant: "secondary", external: true },
      { label: "Server 3 — other", href: siteConfig.apps.web.loginUrls[2], variant: "secondary", external: true },
    ],
    content: {
      intro: "Jika struk/nota tidak keluar atau hilang, cetak ulang dari riwayat — bisa ganti jenis printer. Inquiry/tagihan belum dibayar tidak punya struk bayar.",
      sections: [
        {
          title: "Cara Cetak Ulang di Komputer",
          steps: [
            "Login via Chrome/Firefox + Aplikasi Pembantu Komputer aktif.",
            "Masuk Riwayat Transaksi → filter tanggal & layanan → cari transaksi berhasil.",
            "Klik ikon Cetak / Cetak Ulang → pilih printer: Thermal 58/80mm, Dot Matrix 9.5\"/10\", atau Inkjet/Laserjet A4/F4.",
            "Cek paper size & margin sesuai printer → Cetak.",
            "Pastikan Versi Plugin muncul & driver printer Ready. Jika kosong, cek Aplikasi Pembantu Komputer dulu.",
          ],
        },
        {
          title: "Cetak Ulang Kolektif (Bulk)",
          steps: [
            "Di Riwayat → centang beberapa transaksi / pilih tanggal kolektif.",
            "Cetak Kolektif → pilih Continuous (Dot Matrix) atau Lembaran A4/F4 (Inkjet).",
            "Preview tabel → Print. Untuk 20+ transaksi, A4/F4 atau Continuous lebih hemat.",
          ],
          tip: "Jika struk tidak keluar sama sekali, cek Test Print dulu sebelum cetak ulang.",
        },
      ],
    },
  },
  {
    title: "Cetak Ulang Struk di Android (Thermal & Portable)",
    slug: "cetak-ulang-android",
    description: "Cetak ulang via Thermal & Portable Bluetooth dari HP Android.",
    category: "Cetak Ulang",
    icon: "Smartphone",
    cta: [{ label: "Download Aplikasi Android", href: siteConfig.apps.android.playStoreUrl, variant: "primary", external: true }],
    content: {
      intro: "Di Android, cetak ulang dari Riwayat dengan printer Bluetooth yang sudah paired. Pastikan ikon Bluetooth biru.",
      sections: [
        {
          title: "Cara Cetak Ulang di Android",
          steps: [
            "Buka aplikasi SBPAYS → Riwayat Transaksi → cari transaksi berhasil.",
            "Tap transaksi → Cetak Ulang → pilih paper 58mm → Cetak.",
            "Pastikan printer portable/thermal sudah terhubung (ikon Bluetooth biru, baterai >50%).",
            "Jika Bluetooth putus: matikan-nyalakan printer → Forget device → Pair ulang (0000/1234) → Test Print.",
          ],
        },
        {
          title: "Jika Struk Gagal Keluar",
          steps: [
            "Cek roll thermal habis/tidak terpasang terbalik.",
            "Cek koneksi Bluetooth masih pair.",
            "Restart aplikasi & printer, coba lagi.",
          ],
        },
      ],
    },
  },
  {
    title: "Cetak Ulang via Inkjet/Laserjet (A4/F4) — Arsip Lembaran",
    slug: "cetak-ulang-inkjet",
    description: "Cetak rekap kolektif & bukti lembaran A4/F4 untuk arsip — Save as PDF juga.",
    category: "Cetak Ulang",
    icon: "FileText",
    cta: [
      { label: "Login Web — Server Utama (ppob4)", href: siteConfig.apps.web.primaryLogin, variant: "primary", external: true },
      { label: "Server 1 — ppob2", href: siteConfig.apps.web.loginUrls[0], variant: "secondary", external: true },
      { label: "Server 2 — ppob2.bck", href: siteConfig.apps.web.loginUrls[1], variant: "secondary", external: true },
      { label: "Server 3 — other", href: siteConfig.apps.web.loginUrls[2], variant: "secondary", external: true },
    ],
    content: {
      intro: "Untuk arsip resmi & rekap kolektif, pakai Inkjet/Laserjet lembaran A4/F4 — 1 lembar muat puluhan pelanggan. Simpan juga PDF.",
      sections: [
        {
          title: "Langkah Cetak Lembaran",
          steps: [
            "Login → Riwayat → centang transaksi kolektif / banyak transaksi.",
            "Cetak Ulang → Format Lembaran A4/F4 → Preview tabel.",
            "Ctrl+P → Paper A4/F4, Margin 15mm, Scale 100%, uncheck browser headers, centang Background graphics jika mau logo warna.",
            "Pilih printer Inkjet/Laserjet → Print → simpan Save as PDF untuk arsip digital.",
          ],
          tip: "F4/Legal (215×330) lebih panjang — muat 10-15 baris lebih banyak dari A4.",
        },
      ],
    },
  },

  // ─── TIPS & TROUBLESHOOTING ───────────
  {
    title: "Mengatasi Gagal Login — Balik ke Login Lagi",
    slug: "mengatasi-gagal-login",
    description: "SBPAYS balik ke login terus? Cek Aplikasi Pembantu Komputer, Versi Plugin, browser, MAC address.",
    category: "Tips & Troubleshooting",
    icon: "AlertTriangle",
    content: {
      intro: "Gagal login balik lagi biasanya karena Versi Plugin kosong (Aplikasi Pembantu Komputer belum aktif), cache, browser tidak cocok, atau MAC/LAN tidak terdeteksi. Ikuti urutan ini, jangan langsung install OpenVPN.",
      sections: [
        {
          title: "Cek 1: Versi Plugin Muncul?",
          steps: [
            "Buka halaman login → lihat baris Versi Plugin di bawah form.",
            "Kosong → install ulang Aplikasi Pembantu Komputer dengan Run as Administrator → restart PC → cek lagi.",
            "Muncul 2.0.0.0/2.0.0.1 → lanjut cek berikutnya.",
            "Versi Plugin kosong juga bikin menu transaksi & printer tidak jalan.",
          ],
        },
        {
          title: "Cek 2: Browser & Cache",
          steps: [
            "Pakai Chrome atau Firefox terbaru (jangan browser lain).",
            "Hapus cache: Ctrl+Shift+Delete → Semua Waktu → centang Cached images & Cookies → Clear Data → tutup buka browser.",
            "Coba ganti browser (Chrome ↔ Firefox).",
            "Tutup semua ekstensi / coba mode Incognito.",
          ],
        },
        {
          title: "Cek 3: Username/Password & Koneksi",
          steps: [
            "Pastikan username benar, password perhatikan huruf besar/kecil.",
            "OTP kosongkan, isi kode verifikasi yang terlihat.",
            "Coba Server Web Cadangan lain (Server 1/2/3 atau Utama).",
            "Pastikan internet stabil.",
          ],
        },
        {
          title: "Cek 4: MAC/LAN & OpenVPN",
          steps: [
            "Jika muncul Gagal Mendeteksi Sistem Keamanan → MAC/LAN tidak terdeteksi → baru pertimbangkan install OpenVPN 2.3.2 (Run as Administrator).",
            "Jika muncul Identitas Keamanan Tidak Terdaftar → MAC beda dengan yang terdaftar → hubungi CS untuk verifikasi perangkat (bukan langsung install OpenVPN).",
            "Cek MAC Address: Win+R → cmd → ipconfig /all → lihat Physical Address.",
          ],
        },
        {
          title: "Jika Tetap Gagal",
          steps: [
            "Ambil screenshot pesan error + Versi Plugin + jam kejadian.",
            "Hubungi CS WA resmi Cult Mitra (Anda yang hubungi duluan).",
            "Jangan beri password/PIN/OTP ke siapa pun, dan jangan run remote jika bukan Anda yang minta.",
          ],
        },
      ],
    },
  },
  {
    title: "Cek MAC Address Komputer/Laptop",
    slug: "cek-mac-address",
    description: "Cara tahu MAC Address (Physical Address) untuk verifikasi keamanan SBPAYS.",
    category: "Tips & Troubleshooting",
    icon: "Info",
    content: {
      intro: "MAC Address adalah identitas kartu jaringan (LAN card) untuk keamanan. Jika sistem minta, cek via ipconfig /all. OpenVPN hanya jika MAC tidak terdeteksi.",
      sections: [
        {
          title: "Cara Cek di Windows",
          steps: [
            "Tekan Win+R → ketik cmd → Enter → Command Prompt terbuka.",
            "Ketik ipconfig /all → Enter.",
            "Cari adapter yang dipakai (Ethernet atau Wireless LAN).",
            "Lihat baris Physical Address — itulah MAC Address (contoh: 1A-2B-3C-4D-5E-6F).",
            "Foto/catat jika CS minta verifikasi (jangan sebar ke grup).",
          ],
          tip: "Jika Physical Address tidak muncul / 00-00-00-00, coba cek adapter lain atau hubungi CS — mungkin perlu OpenVPN.",
        },
      ],
    },
  },
  {
    title: "Hapus Cache & Riwayat Browsing — Agar Login Tidak Mental",
    slug: "hapus-cache-browsing",
    description: "Bersihkan cache browser biar SBPAYS tidak balik ke login terus — Chrome & Firefox.",
    category: "Tips & Troubleshooting",
    icon: "Trash2",
    content: {
      intro: "Cache lama bisa bikin halaman login balik lagi meski Versi Plugin sudah muncul. Bersihkan cache → tutup buka browser → login ulang.",
      sections: [
        {
          title: "Chrome",
          steps: [
            "Buka Chrome → tekan Ctrl+Shift+Delete.",
            "Time range: All time / Semua Waktu.",
            "Centang Cached images and files + Cookies and other site data.",
            "Klik Clear data → tunggu selesai → tutup & buka ulang Chrome → login lagi.",
          ],
        },
        {
          title: "Firefox",
          steps: [
            "Buka Firefox → Ctrl+Shift+Delete.",
            "Time range: Everything.",
            "Centang Cache + Cookies → OK → restart Firefox.",
          ],
        },
        {
          title: "Jika Masih Gagal",
          steps: [
            "Coba browser lain (Chrome ↔ Firefox) atau mode Incognito.",
            "Cek Versi Plugin masih muncul (Jika kosong, install ulang Aplikasi Pembantu Komputer).",
            "Hubungi CS dengan screenshot error.",
          ],
        },
      ],
    },
  },
  {
    title: "Cek Kotak Spam Gmail (Versi Lengkap)",
    slug: "cek-spam-gmail-lengkap",
    description: "Panduan lengkap cek Spam Gmail di HP & PC — pakai in:anywhere & cek Promosi/Sosial.",
    category: "Tips & Troubleshooting",
    icon: "Mail",
    content: {
      intro: "Email SBPAYS tidak masuk? Cek Spam, Promosi, Sosial, Sampah, dan pastikan akun Gmail benar. Link email lama jangan diklik sebelum verifikasi.",
      sections: [
        {
          title: "Cek Spam di Android & PC (Detail)",
          steps: [
            "Android: Gmail app → menu kiri → Spam → cari subjek/pengirim/waktu.",
            "PC: Gmail browser → More/Lainnya → Spam → pencarian in:anywhere kata-kunci untuk cari di semua folder.",
            "Cek juga tab Promosi, Sosial, Semua Email, dan Sampah.",
            "Jika ada & asli → Buka → Report not spam / Pindahkan ke Inbox → add ke Kontak.",
            "Email di Spam terhapus permanen setelah 30 hari — cek segera.",
          ],
        },
      ],
    },
  },

  // ─── LAPORAN ──────────────────────────
  {
    title: "Lihat Laporan Mutasi/Refund di Android & PC",
    slug: "laporan-mutasi-refund",
    description: "Cek laporan mutasi, refund, deposit, fee — filter tanggal, cocokkan referensi.",
    category: "Laporan",
    icon: "FileText",
    cta: [{ label: "Download Aplikasi Android", href: siteConfig.apps.android.playStoreUrl, variant: "primary", external: true }],
    content: {
      intro: "Laporan mutasi & refund ada di menu Laporan/Riwayat (PC & Android). Filter tanggal, cocokkan produk/ID/nominal/referensi. Mutasi ke saldo bisa jadi deposit, refund, atau fee — lihat keterangan.",
      sections: [
        {
          title: "Cara Lihat (PC & Android)",
          steps: [
            "Login → Laporan / Riwayat → pilih Mutasi atau Refund (atau Laporan Harian/Rekap Bulanan di menu Transfer).",
            "Atur rentang tanggal → Cari → cocokkan status, nominal, waktu, nomor referensi.",
            "Untuk transfer: cek tab Cek Transaksi + Laporan Harian + mutasi saldo.",
            "Jika pending/gagal, cek refund di mutasi sebelum transaksi ulang.",
          ],
          tip: "Simpan bukti screenshot dengan sensor data rahasia. Jika beda, hubungi CS dengan referensi.",
        },
      ],
    },
  },

  // ─── INFO ─────────────────────────────
  {
    title: "Jenis Kertas Struk PPOB & Fungsinya",
    slug: "jenis-kertas-struk-ppob",
    description: "Kenal 3 jenis kertas struk: Thermal roll, Continuous Form, HVS — pilih sesuai printer.",
    category: "Info",
    icon: "FileText",
    content: {
      intro: "Kertas struk ada 3: Thermal roll (58/80mm) untuk printer kecil, Continuous Form (9.5/10 inci) untuk Dot Matrix nota rangkap, HVS A4/F4 untuk Inkjet/Laser rekap lembaran. Pilih sesuai printer & kebutuhan arsip.",
      sections: [
        {
          title: "1. Thermal Roll (58mm / 80mm)",
          steps: [
            "Untuk printer thermal kecil (kasir).",
            "Ukuran umum: 58mm x 40-50mm atau 80mm x 50-80mm.",
            "Cetak via panas — tidak butuh tinta/pita. Simpan di tempat kering, tidak panas (bisa pudar).",
            "Paling hemat & cepat untuk struk harian.",
          ],
        },
        {
          title: "2. Continuous Form (Dot Matrix 9.5\" / 10\" x 11\" bagi 4)",
          steps: [
            "Untuk printer Dot Matrix (Epson LX/LQ) — kertas sobek perforasi, 2-3 ply (putih-pink-kuning) untuk rangkap.",
            "Ukuran dipakai SBPAYS: 9.5 inci bagi 4 & 10 inci bagi 4 (lebar 9.5/10 inci, tinggi 11 inci per lembar, bagi 4 kolom).",
            "Cocok untuk nota kolektif + arsip (1 untuk pelanggan, 1 untuk loket).",
            "Pakai pita baru biar tebal, jangan lipat tajam biar perforasi tidak sobek.",
          ],
        },
        {
          title: "3. HVS A4 / F4 / Legal (Inkjet/Laser)",
          steps: [
            "Untuk printer kantor biasa — cetak rekap tabel.",
            "A4 (210x297mm) atau F4/Legal (215x330mm), 70-80gsm.",
            "1 lembar A4 muat 25-30 pelanggan, F4 muat 35-50 (font 8-9pt).",
            "Simpan juga sebagai PDF untuk arsip digital.",
          ],
        },
      ],
      note: "Agen SBPAYS mendapat Dukungan Cetak Struk Bluetooth & Thermal — konfirmasi ketersediaan kertas & syarat program ke CS sebelum pengajuan.",
    },
  },
  {
    title: "Kertas Struk PPOB — Thermal, Continuous Form & A4 Bagi 4",
    slug: "kertas-struk-ppob",
    description: "Info kertas roll Thermal 58/80mm, Continuous Form Dot Matrix 9.5\"/10\", & HVS A4/F4 — harga & tips simpan.",
    category: "Info",
    icon: "FileText",
    content: {
      intro: "Pilih kertas sesuai printer. Thermal roll praktis, Continuous Form untuk nota resmi, HVS untuk rekap. Fitur Cetak Struk / Nota Lengkap tersedia — Bebas Atur Struk & Biaya Admin sesuai kebutuhan loket.",
      sections: [
        {
          title: "Pilihan & Harga Acuan",
          steps: [
            "Thermal Roll 58mm (40-50mm) & 80mm (50-80mm) — mulai Rp5.000/roll. Dukungan Cetak Struk Bluetooth & Thermal tersedia untuk mitra terdaftar.",
            "Continuous Form 9.5\" & 10\" x 11\" bagi 4, 2-3 ply — Rp45-75rb/box 500 lembar.",
            "HVS A4 (210×297) & F4/Legal (215×330) 70-80gsm — Rp35-55rb/rim.",
            "Bonus kertas untuk mitra baru sesuai printer saat registrasi — hubungi CS untuk promo.",
          ],
        },
        {
          title: "Tips Simpan",
          steps: [
            "Thermal: tempat kering, tidak panas & tidak lembab (bisa pudar).",
            "Continuous: jangan dilipat tajam, simpan datar biar perforasi tidak sobek, jauh dari air.",
            "HVS: simpan di tray printer Legal/A4 agar tidak miring saat cetak F4.",
          ],
          tip: "Tanya CS tentang Dukungan Cetak Struk Bluetooth & Thermal — pilihan kertas sesuai kebutuhan loket dan ketentuan program.",
        },
      ],
    },
  },
  {
    title: "Keamanan & Anti-Penipuan SBPAYS — Wajib Baca",
    slug: "keamanan-anti-penipuan",
    description: "Jaga akun SBPAYS: jangan bagi password/PIN/OTP, Anda yang hubungi CS dulu, remote hanya UltraViewer resmi.",
    category: "Keamanan",
    icon: "ShieldCheck",
    content: {
      intro: "Penipuan mengatasnamakan CS SBPAYS sering terjadi. Prinsip utama: Anda yang hubungi CS dulu via kanal resmi Cult Mitra. Jangan pernah bagi data rahasia, jangan layani remote jika bukan Anda yang minta.",
      sections: [
        {
          title: "4 Data Rahasia yang Tidak Boleh Dibagi",
          steps: [
            "Password akun SBPAYS.",
            "PIN transaksi / PIN Loket.",
            "Kode OTP / kode verifikasi.",
            "ID/Password UltraViewer/AnyDesk (beri hanya saat sesi resmi akan mulai).",
            "Juga jangan bagi MAC address & screenshot Versi Plugin ke orang tak dikenal.",
          ],
        },
        {
          title: "Cara Hubungi CS yang Aman",
          steps: [
            "Simpan nomor WA resmi Cult Mitra dari halaman Kontak website ini (bukan dari chat orang).",
            "Anda yang chat duluan — jelaskan PPID + kendala (tanpa data rahasia).",
            "CS tidak pernah minta password/PIN/OTP. Jika diminta, itu penipu.",
            "Untuk remote, CS utamakan UltraViewer dari ultraviewer.net resmi. Tutup remote setelah selesai.",
          ],
        },
        {
          title: "Jika Dihubungi Oknum",
          steps: [
            "Jangan klik link yang dikirim oknum yang hubungi duluan.",
            "Jangan install aplikasi dari link chat — download hanya dari Play Store / situs resmi.",
            "Blokir & laporkan, lalu hubungi CS resmi untuk verifikasi.",
            "Ganti password jika terlanjur beri data — hubungi CS segera.",
          ],
          tip: "Simpan halaman Kontak & Keamanan ini di bookmark. Waspada penipuan yang catut nama Cipta Usaha Makmur / Bank KB Bukopin Syariah.",
        },
      ],
      note: "Bantuan remote hanya setelah Anda hubungi CS resmi. Jangan berikan akses jika Anda tidak minta bantuan.",
    },
  },
];

export function getGuideBySlug(slug: string): GuideItem | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: string): GuideItem[] {
  return guides.filter((g) => g.category === category);
}

export function getGuideCategories(): string[] {
  return [...new Set(guides.map((g) => g.category))];
}

export function searchGuides(query: string): GuideItem[] {
  const q = query.toLowerCase();
  return guides.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
  );
}
