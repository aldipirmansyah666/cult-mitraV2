import type { ProductCategory, ProductDetail } from "@/types";

export const categories: ProductCategory[] = [
  { id: "pln", name: "PLN", slug: "pln", description: "Token & Tagihan • Flexi Admin Rp3rb-10rb", icon: "Zap", count: "4 layanan", color: "from-amber-400 to-orange-500", popular: true, tag: "Paling Cuan" },
  { id: "pulsa", name: "Pulsa & Data", slug: "pulsa-paket-data", description: "All operator • Paket data harian-bulanan", icon: "Smartphone", count: "6 operator", color: "from-violet-500 to-indigo-500", popular: true },
  { id: "ewallet", name: "E-Wallet & E-Money", slug: "e-wallet", description: "GoPay OVO DANA ShopeePay LinkAja • Atur margin sendiri", icon: "Wallet", count: "8 dompet", color: "from-emerald-400 to-teal-500", popular: true },
  { id: "bpjs", name: "BPJS", slug: "bpjs", description: "Kesehatan & Ketenagakerjaan • Rp900-1.350 fee", icon: "Heart", count: "3 layanan", color: "from-rose-400 to-pink-500" },
  { id: "pdam", name: "PDAM", slug: "pdam", description: "400+ PDAM se-Indonesia • Fee Rp400-1.450", icon: "Droplets", count: "400+ wilayah", color: "from-sky-400 to-blue-500" },
  { id: "pbb", name: "PBB & Pajak", slug: "pbb", description: "PBB P2 • E-Samsat • PGN • 120+ daerah", icon: "Building2", count: "120+ daerah", color: "from-slate-600 to-slate-800" },
  { id: "multifinance", name: "Multifinance", slug: "cicilan", description: "FIF BAF WOM HomeCredit • Fee s/d Rp2.700", icon: "CreditCard", count: "25+ leasing", color: "from-orange-400 to-red-500" },
  { id: "telkom", name: "Telkom & Internet", slug: "telkom", description: "IndiHome Iconnet MyRepublic • Rp500-1.100", icon: "Wifi", count: "15+ ISP", color: "from-blue-500 to-cyan-500" },
  { id: "tiket", name: "Tiket & Travel", slug: "tiket", description: "KAI Pelni • Fee Rp1.400-4.500", icon: "Ticket", count: "3 moda", color: "from-amber-500 to-yellow-500" },
  { id: "transfer", name: "Transfer & Tarik", slug: "transfer", description: "Tarik tunai & transfer antar bank • Fee Rp300", icon: "ArrowLeftRight", count: "All bank", color: "from-green-500 to-emerald-600" },
  { id: "lainnya", name: "Lainnya", slug: "lainnya", description: "SiCepat Pos • Topup • Tagihan lain", icon: "Grid3X3", count: "20+ layanan", color: "from-zinc-500 to-zinc-700" },
];

export const productDetails: Record<string, ProductDetail[]> = {
  pln: [
    { name: "PLN Pascabayar", slug: "pln-pascabayar", category: "pln", description: "Bayar tagihan bulanan PLN. Flexi Admin Rp3.000-10.000, fee Rp450-7.350.", benefits: ["Flexi Admin atur sendiri", "Cek tagihan real-time", "Struk resmi"], howItWorks: ["Input ID Pelanggan", "Cek tagihan", "Bayar & cetak struk"], active: true },
    { name: "Token Listrik Prabayar", slug: "token-pln", category: "pln", description: "Beli token listrik 20rb - jutaan. Fee sama dengan pascabayar.", benefits: ["Token langsung jadi", "24 jam", "Semua nominal"], howItWorks: ["Input No Meter", "Pilih nominal", "Terima token"], active: true },
  ],
  pulsa: [
    { name: "Pulsa All Operator", slug: "pulsa-all-operator", category: "pulsa", description: "Isi pulsa Telkomsel, XL, Indosat, Tri, Smartfren - margin atur sendiri.", benefits: ["Proses detik-an", "Semua nominal", "Stok selalu ada"], howItWorks: ["Pilih operator & nominal", "Input nomor", "Transaksi"], active: true },
  ],
  ewallet: [
    { name: "Top Up E-Wallet", slug: "topup-ewallet", category: "ewallet", description: "GoPay, OVO, DANA, ShopeePay, LinkAja, Grab - admin & margin kamu tentukan.", benefits: ["Margin bebas", "Semua dompet", "Instan"], howItWorks: ["Pilih dompet", "Input nomor", "Pilih nominal"], active: true },
    { name: "E-Money & TapCash", slug: "emoney", category: "ewallet", description: "Isi saldo E-Money Mandiri, TapCash BNI, Brizzi - via SBPAYS.", benefits: ["Update saldo NFC", "Support HP/PC"], howItWorks: ["Pilih produk", "Input kartu", "Top up"], active: true },
  ],
};

export const featuredProductDetail: Record<string, { items: string[]; fee: string; admin: string }> = {
  pln: { items: ["PLN Pascabayar", "Token Prabayar", "Nontaglis", "VA PLN Mobile"], fee: "Rp450 - Rp7.350", admin: "Flexi Rp3rb-10rb" },
  pulsa: { items: ["Pulsa All Operator", "Paket Data", "Voucher Fisik", "Masa Aktif"], fee: "diatur mitra", admin: "bersaing" },
  ewallet: { items: ["GoPay", "OVO", "DANA", "ShopeePay"], fee: "diatur mitra", admin: "fleksibel" },
};

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug || c.id === slug);
}
export function getAllCategories() { return categories; }
