export const siteConfig = {
  name: "Cult Mitra",
  fullName: "Cult Mitra × SBPAYS",
  tagline: "Lengkapi Usaha. Tambah Layanan. Tumbuh Bersama.",
  description:
    "Platform kemitraan PPOB resmi PT Cipta Usaha Makmur × Bank KB Bukopin Syariah (SBPAYS). Daftar gratis, deposit mulai Rp10.000, komisi transparan.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cultmitra.com",
  company: "PT Cipta Usaha Makmur",
  partner: "Bank KB Bukopin Syariah",
  productName: "SBPAYS - Syariah Bukopin Payments",
  whatsapp: {
    number: "6285173231909",
    displayNumber: "0851-7323-1909",
    defaultMessage:
      "Halo Admin Cult Mitra 👋 Saya ingin konsultasi menjadi Mitra SBPAYS. Mohon info pendaftaran gratis & cara top up deposit.",
    csDeposit: "6285353533656",
  },
  email: "cultmitra@gmail.com",
  address: "Layanan Nasional • Support 7 hari/minggu",
  minDeposit: "Rp10.000",
  registrationFee: "Gratis",
  feePayout: "H+3 hari kerja",
  depositHours: "06.00 - 22.00 WIB",
  stats: {
    mitra: "12.000+",
    kota: "150+",
    transaksi: "2.5Jt+",
    uptime: "99.8%",
  },
  social: {
    cum: "https://ciptausahamakmur.co.id",
  },
  ogImage: "/og-cultmitra.png",
  // ── Sentral Download & Login (resmi SBPAYS — env overrideable) ──
  apps: {
    android: {
      apkUrl: process.env.NEXT_PUBLIC_ANDROID_APK_URL || "https://play.google.com/store/apps/details?id=io.onmobile&hl=en&pli=1",
      playStoreUrl: process.env.NEXT_PUBLIC_PLAYSTORE_URL || "https://play.google.com/store/apps/details?id=io.onmobile&hl=en&pli=1",
      version: "2.4.1",
      size: "±18 MB",
      minOs: "Android 7.0+",
    },
    web: {
      loginUrls: [
        process.env.NEXT_PUBLIC_LOGIN_URL_1 || "http://ppob2.sbpays-ppob.com",
        process.env.NEXT_PUBLIC_LOGIN_URL_2 || "http://ppob2.bck.sbpays-ppob.com",
        process.env.NEXT_PUBLIC_LOGIN_URL_3 || "http://other.sbpays-ppob.com",
      ],
      primaryLogin: process.env.NEXT_PUBLIC_LOGIN_PRIMARY_URL || "https://ppob4.sbpays-ppob.com",
    },
    onService: {
      url: process.env.NEXT_PUBLIC_ONSERVICE_URL || "https://bit.ly/onSERVICE",
      version: "OnService v3.2",
      size: "±12 MB",
      requirement: "Windows 7/10/11 • Run as Administrator",
    },
    vpn: {
      url: process.env.NEXT_PUBLIC_VPN_URL || "/panduan/install-remote-viewer",
      version: "OpenVPN 2.3.2",
    },
  },
  depositAccounts: [
    { bank: "BRI", norek: "0389-01-0004-06303", an: "Cipta Usaha Makmur" },
    { bank: "MANDIRI", norek: "131-001-1408-988", an: "Cipta Usaha Makmur" },
    { bank: "BNI", norek: "304776422", an: "Cipta Usaha Makmur" },
    { bank: "BCA", norek: "2833780000", an: "Cipta Usaha Makmur" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
