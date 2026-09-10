import type { Feature, Step, FAQ, Testimonial } from "@/types";

export const features: Feature[] = [
  { title: "Sistem Super Ngebut", desc: "Transaksi detik-an, 24 jam non-stop. Server redundant 99.8% uptime. Dibuat untuk loket rame.", icon: "Zap", highlight: "1-3 detik" },
  { title: "Fee Transparan H+3", desc: "Cek fee real-time. Pilih masuk rekening atau saldo. Cair hari kerja ke-3, minimum Rp10.000.", icon: "Coins", highlight: "Transparan 100%" },
  { title: "Flexi Admin PLN", desc: "Atur margin admin PLN Rp3.000-10.000 langsung dari aplikasi. Selisih jadi cuan instan.", icon: "SlidersHorizontal", highlight: "Flexi Admin" },
  { title: "Cetak Struk Multi-Printer", desc: "Thermal 58/80mm Bluetooth/USB, Dot Matrix LX/LQ Continuous Form, Inkjet/Laser A4/F4 & Portable Mobile — header/footer kustom.", icon: "Printer", highlight: "4 Jenis Printer" },
  { title: "PC & Android", desc: "Akses via Chrome/Firefox (PC) + aplikasi Android. Aplikasi Pembantu Komputer (Cetak Nota) support & VPN opsional.", icon: "MonitorSmartphone", highlight: "Multi Device" },
  { title: "CS Siaga 7 Hari", desc: "Bantuan operasional & kendala via WhatsApp resmi 06.00-22.00. Anti-penipuan - jangan share OTP/PIN.", icon: "Headset", highlight: "7 hari" },
];

export const steps: Step[] = [
  { n: "01", title: "Daftar", desc: "Form 2 menit jadi", detail: "Isi formulir online atau via WhatsApp. Gratis biaya pendaftaran. Verifikasi KTP/NIK cepat.", icon: "UserPlus", accent: "bg-violet-500" },
  { n: "02", title: "Top Up", desc: "Deposit mulai 10rb", detail: "Transfer ke rekening resmi a.n Cipta Usaha Makmur + kode PPID. Saldo masuk otomatis 06.00-22.00 WIB.", icon: "Wallet", accent: "bg-emerald-500" },
  { n: "03", title: "Pasang Spanduk", desc: "Branding gratis", detail: "Dapat spanduk Cult Mitra gratis* untuk etalase. Loket langsung terlihat resmi & meyakinkan.", icon: "Store", accent: "bg-amber-500" },
  { n: "04", title: "Transaksi & Cuan", desc: "Komisi tiap transaksi", detail: "Layani PLN, pulsa, PDAM, BPJS dll. Komisi fee + margin admin jadi keuntungan harian.", icon: "TrendingUp", accent: "bg-primary" },
];

export const faqs: FAQ[] = [
  { q: "Apakah Cult Mitra resmi?", a: "Ya. Cult Mitra adalah layanan PPOB resmi PT Cipta Usaha Makmur bekerja sama dengan Bank KB Bukopin Syariah (SBPAYS). Semua alur, fee, dan deposit dikelola internal via sistem Cult Mitra dan WA resmi.", category: "Tentang" },
  { q: "Berapa modal awal jadi mitra?", a: "Pendaftaran GRATIS. Deposit awal mulai Rp10.000 saja (ditransfer ke rekening resmi + kode PPID). Tidak ada biaya bulanan atau target transaksi.", category: "Deposit" },
  { q: "Berapa fee/komisi yang didapat?", a: "Bervariasi per produk. Contoh PLN fee Rp450-Rp7.350 tergantung admin Flexi (Rp3.000-10.000). E-Wallet & pulsa margin diatur mitra sendiri. Fee cair H+3 hari kerja ke rekening/saldo, min Rp10.000.", category: "Fee" },
  { q: "Bisa di HP saja atau harus pakai PC?", a: "Bisa keduanya. Android via aplikasi Cult Mitra, PC/laptop via browser Chrome/Firefox. Untuk PC perlu install Aplikasi Pembantu Komputer (Cetak Nota) (gratis). OpenVPN 2.3.2 hanya jika MAC address tidak terdeteksi.", category: "Aplikasi" },
  { q: "Apakah dapat struk & spanduk gratis?", a: "Anda mendapat Fitur Cetak Struk / Nota Lengkap di aplikasi — Dukungan Cetak Struk Bluetooth & Thermal, Bebas Atur Struk & Biaya Admin, dan Cetak Struk & Nota Transaksi untuk semua printer (Thermal/Dot Matrix/Inkjet/Portable). Bonus spanduk sesuai ketentuan program, cek syarat di dashboard mitra setelah aktivasi.", category: "Bonus" },
  { q: "Jam berapa deposit diproses & rekening apa?", a: "Deposit diproses 06.00-22.00 WIB setiap hari via BRI 0389-01-0004-06303, Mandiri 131-001-1408-988, BNI 304776422, BCA 2833780000 a.n Cipta Usaha Makmur. Wajib sertakan kode PPID pada nominal agar otomatis (contoh: Rp125.321 untuk PPID 25321).", category: "Deposit" },
  { q: "Bagaimana cetak struk & kustom header/footer?", a: "Di pengaturan aplikasi pilih jenis printer: Thermal 58/80mm (Bluetooth/USB), Dot Matrix Epson LX/LQ (Continuous Form 9.5\"/10\"), Inkjet/Laserjet A4/F4, atau Portable Mobile. Atur paper size, margin, orientasi, dan header/footer (nama loket, alamat, WA). Ada test print & cetak ulang dari riwayat. Panduan lengkap di /panduan.", category: "Printer" },
  { q: "Bagaimana cara daftar?", a: "Klik Daftar Gratis → isi data loket & pemilik → kirim via WhatsApp Admin → verifikasi KTP → akun aktif. Proses rata-rata <24 jam. Data dikirim via wa.me aman.", category: "Pendaftaran" },
];

export const testimonials: Testimonial[] = [
  { name: "Ibu Siti", role: "Warung Sembako", kota: "Bekasi", text: "Awalnya cuma warung, sekarang jadi loket tetangga langganan bayar listrik & pulsa. Sehari 30-40 transaksi lumayan buat tambahan.", profit: "+Rp1,8jt/bln", },
  { name: "Pak Agus", role: "Konter HP", kota: "Bandung", text: "Flexi Admin PLN enak, bisa atur margin sendiri. Cetak struk rapi, pelanggan percaya.", profit: "+Rp3,2jt/bln", },
  { name: "Rina", role: "Ibu Rumah Tangga", kota: "Surabaya", text: "Daftar gampang, CS ramah. Deposit 50rb langsung bisa jualan. Cocok buat ibu rumah tangga.", profit: "+Rp1,2jt/bln", },
];

export const promoBanner = {
  title: "Promo Flexi Admin PLN September 2026",
  desc: "Cashback Rp300 per transaksi PLN — kuota terbatas!",
  cta: "Cek Promo",
  link: "/fee",
};

export const depositRekening = [
  { bank: "BRI", norek: "0389-01-0004-06303", an: "Cipta Usaha Makmur" },
  { bank: "MANDIRI", norek: "131-001-1408-988", an: "Cipta Usaha Makmur" },
  { bank: "BNI", norek: "304776422", an: "Cipta Usaha Makmur" },
  { bank: "BCA", norek: "2833780000", an: "Cipta Usaha Makmur" },
];

export const appDownload = {
  android: "/download#android",
  pcLogin: "/download#web",
  onService: "/download#onservice",
  panduan: "/panduan",
};
