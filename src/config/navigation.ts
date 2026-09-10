export interface NavItem { label: string; href: string; badge?: string; }

export const mainNavigation: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Fee", href: "/fee", badge: "Transparan" },
  { label: "Panduan", href: "/panduan" },
  { label: "Deposit", href: "/deposit" },
  { label: "FAQ", href: "/faq" },
];

export const footerNavigation = {
  produk: [
    { label: "Katalog Produk", href: "/produk" },
    { label: "Fee Produk", href: "/fee" },
    { label: "Simulator Komisi", href: "/#simulator" },
  ],
  panduan: [
    { label: "Panduan SBPAYS", href: "/panduan" },
    { label: "Deposit & Mutasi", href: "/deposit" },
    { label: "Download Aplikasi", href: "/download" },
    { label: "Cara Daftar", href: "/cara-kerja" },
  ],
  perusahaan: [
    { label: "Tentang Cult Mitra", href: "/tentang" },
    { label: "Kontak", href: "/kontak" },
    { label: "FAQ & Bantuan", href: "/faq" },
  ],
  legal: [
    { label: "Kebijakan Privasi", href: "/privacy" },
    { label: "Syarat & Ketentuan", href: "/terms" },
  ],
};
