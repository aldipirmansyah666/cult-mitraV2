import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { categories, getCategoryBySlug, productDetails } from "@/data/products";
import { feeItems } from "@/data/fees";
import { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Ticket, ArrowLeftRight, Grid3X3 } from "lucide-react";

const iconMap: Record<string, any> = { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Ticket, ArrowLeftRight, Grid3X3 };

const seoBySlug: Record<string, { title: string; description: string; keywords: string[] }> = {
  pln: {
    title: "PLN Token & Tagihan — Flexi Admin Rp3rb-10rb, Fee Rp450-7.350 | Cult Mitra",
    description: "Jual token & bayar tagihan PLN 24 jam via SBPAYS. Fitur Flexi Admin atur Rp3.000-10.000 sendiri, fee transparan Rp450-7.350 cair H+3. Deposit Rp10.000, daftar gratis Cult Mitra.",
    keywords: ["token PLN", "bayar tagihan PLN", "PLN Flexi Admin", "fee PLN PPOB"],
  },
  "pulsa-paket-data": {
    title: "Pulsa & Paket Data All Operator — Margin Bebas | Cult Mitra PPOB",
    description: "Isi pulsa & paket data Telkomsel, XL, Indosat, Tri, Smartfren. Stok 24 jam, margin atur sendiri, transaksi detik-an via SBPAYS. Daftar mitra gratis.",
    keywords: ["agen pulsa", "paket data murah", "pulsa all operator", "jual pulsa PPOB"],
  },
  "e-wallet": {
    title: "Top Up E-Wallet & E-Money — GoPay OVO DANA ShopeePay | Cult Mitra",
    description: "Top up GoPay, OVO, DANA, ShopeePay, LinkAja, Grab & E-Money Mandiri/TapCash. Admin & margin fleksibel kamu tentukan. Daftar gratis, deposit Rp10.000.",
    keywords: ["top up e-wallet", "isi gopay ovo dana", "e-money mandiri", "agen e-wallet"],
  },
  bpjs: {
    title: "BPJS Kesehatan & Ketenagakerjaan — Fee Rp900-1.350 | Cult Mitra",
    description: "Layanan BPJS Kesehatan, Denda & Ketenagakerjaan BPU. Fee Rp900-1.350, admin Rp2.500. Pelanggan rutin bulanan, cuan stabil untuk loket PPOB.",
    keywords: ["bayar BPJS", "BPJS kesehatan online", "BPJS ketenagakerjaan PPOB"],
  },
  pdam: {
    title: "PDAM 400+ Wilayah — Fee Rp400-1.450 | Bayar Air Online Cult Mitra",
    description: "Bayar PDAM 400+ kota/kab se-Indonesia — Jateng, Jatim, Jabar, DKI, Bali & Sumatera. Fee Rp400-1.450, cek tagihan real-time. Daftar loket gratis.",
    keywords: ["bayar PDAM online", "PDAM 400 wilayah", "cek tagihan PDAM"],
  },
  pbb: {
    title: "PBB & Pajak Daerah 120+ — Fee s/d Rp2.550 | Cult Mitra PPOB",
    description: "Bayar PBB P2 120+ daerah, E-Samsat & PGN. Fee s/d Rp2.550, admin Rp3.500-5.000. Lengkap untuk loket pajak daerah via SBPAYS.",
    keywords: ["bayar PBB online", "PBB P2", "E-Samsat", "pajak daerah PPOB"],
  },
  cicilan: {
    title: "Multifinance & Cicilan — FIF BAF WOM HomeCredit Fee s/d Rp2.700",
    description: "Bayar cicilan FIF, BAF, WOM, Home Credit & 25+ leasing. Fee s/d Rp2.700 via SBPAYS. Tambah layanan, tambah trafik loket.",
    keywords: ["bayar cicilan", "multifinance PPOB", "FIF BAF WOM"],
  },
  telkom: {
    title: "Telkom & Internet — IndiHome Iconnet MyRepublic Fee Rp500-1.700",
    description: "Bayar IndiHome, Iconnet, MyRepublic, CBN & 15+ ISP. Fee Rp500-1.700. Tagihan internet bulanan = pelanggan loyal loket.",
    keywords: ["bayar indihome", "tagihan internet", "telkom PPOB"],
  },
  tiket: {
    title: "Tiket KAI & Pelni — Fee Rp1.400-4.500 | Agen Tiket Cult Mitra",
    description: "Booking & bayar tiket KAI & Kapal Pelni. Fee Rp1.400-4.500 via SBPAYS. Tambah layanan travel tanpa stok.",
    keywords: ["tiket KAI", "tiket Pelni", "agen tiket kereta"],
  },
  transfer: {
    title: "Transfer & Tarik Tunai Antar Bank — Fee Rp300 | EDC Mini ATM Cult Mitra",
    description: "Layanan tarik tunai, transfer antar bank & cek saldo semua bank. Fee Rp300, admin Rp4.000-6.500. Jadi mini ATM di loket kamu.",
    keywords: ["transfer antar bank", "tarik tunai", "mini ATM", "EDC PPOB"],
  },
  lainnya: {
    title: "Produk Lainnya — Pos, SiCepat & Tagihan Lain 20+ Layanan | Cult Mitra",
    description: "20+ layanan lain: Pos, SiCepat, topup & tagihan variatif. Lengkapi loket serba bisa satu aplikasi SBPAYS. Daftar gratis sekarang.",
    keywords: ["produk PPOB lainnya", "layanan pos", "tagihan PPOB lengkap"],
  },
};

export function generateStaticParams() {
  return categories.map(c=>({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  const seo = seoBySlug[slug] || seoBySlug[cat.id] || {
    title: `${cat.name} — Produk PPOB Lengkap | Cult Mitra`,
    description: `${cat.description} • Fee transparan H+3, deposit mulai Rp10.000. Daftar gratis Cult Mitra × SBPAYS.`,
    keywords: [cat.name, "PPOB", "cult mitra"],
  };
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: "id_ID",
    },
    alternates: { canonical: `/produk/${slug}` },
  };
}

export default async function ProdukDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return notFound();
  const Icon = iconMap[cat.icon] || Grid3X3;
  const details = productDetails[cat.id] || [];
  const fees = feeItems.filter(f => {
    const s = cat.name.toLowerCase();
    if (cat.id==="pln" && f.category==="PLN") return true;
    if (cat.id==="pulsa" && f.category.toLowerCase().includes("voucher")) return true;
    if (cat.id==="ewallet" && f.category==="Voucher & E-Money") return true;
    if (cat.id==="pdam" && f.category==="PDAM") return true;
    if (cat.id==="pbb" && f.category==="PBB") return true;
    if (cat.id==="multifinance" && f.category==="Multifinance") return true;
    if (cat.id==="telkom" && f.category.includes("Telkom")) return true;
    if (cat.id==="transfer" && f.category==="EDC Mini ATM") return true;
    return false;
  }).slice(0,12);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge={`${cat.count} • ${cat.name}`}
          title={<><span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white mr-2`}><Icon className="h-5 w-5" /></span>{cat.name}</>}
          description={cat.description + " • Detail fee, admin & cara transaksi."}
          breadcrumb={[{ label: "Produk", href: "/produk" }, { label: cat.name }]}
        />
        <section className="bg-white py-10">
          <Container>
            {details.length>0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {details.map(d=>(
                  <div key={d.slug} className="rounded-3xl border bg-surface p-6">
                    <div className="text-sm font-black text-navy">{d.name}</div>
                    <div className="mt-1 text-sm text-body">{d.description}</div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {d.benefits.map(b=> <span key={b} className="rounded-full bg-white border px-3 py-1 text-xs">{b}</span>)}
                    </div>
                    <div className="mt-3 text-xs text-muted">Cara: {d.howItWorks.join(" → ")}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10 rounded-3xl border bg-white overflow-hidden">
              <div className="bg-navy px-6 py-4 text-white font-black text-sm">Fee Terkait {cat.name} — Preview (10 besar)</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr><th className="px-4 py-3 text-left">Produk</th><th className="px-4 py-3">Admin</th><th className="px-4 py-3">Fee</th><th className="px-4 py-3">Status</th></tr>
                  </thead>
                  <tbody>
                    {fees.map((f,i)=>(
                      <tr key={i} className="border-t"><td className="px-4 py-3 font-semibold">{f.product}</td><td className="px-4 py-3">{f.admin}</td><td className="px-4 py-3 font-bold text-success">{f.fee}</td><td className="px-4 py-3">{f.status}</td></tr>
                    ))}
                    {fees.length===0 && <tr><td colSpan={4} className="px-6 py-8 text-center text-muted">Fee diatur mitra (fleksibel) — cek SBPAYS untuk update.</td></tr>}
                  </tbody>
                </table>
              </div>
              <div className="p-4 flex flex-wrap gap-3">
                <Link href="/fee" className="inline-flex h-10 items-center rounded-full bg-navy px-6 text-sm font-bold text-white">Lihat Fee Lengkap →</Link>
                <Link href="/daftar" className="inline-flex h-10 items-center rounded-full bg-primary px-6 text-sm font-bold text-white shadow-[0_6px_16px_rgba(255,59,10,0.3)]">Daftar Gratis Sekarang →</Link>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#FCFBF9] border p-6">
              <div className="text-sm font-black text-navy">Kenapa {cat.name} laris di loket?</div>
              <p className="mt-2 text-sm text-body">Pelanggan rutin butuh {cat.name.toLowerCase()} tiap bulan. Loket yang sedia lengkap → trafik naik, cross-sell ke produk lain, komisi compounding.</p>
            </div>

            {/* CTA Cepat — Daftar Gratis Sekarang */}
            <div className="mt-8 rounded-3xl bg-navy p-6 sm:p-8 text-white grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-wide">Siap jual {cat.name} hari ini?</div>
                <h3 className="mt-3 text-xl font-black leading-tight">Daftar Gratis Sekarang — Deposit Mulai Rp10.000</h3>
                <p className="mt-2 text-sm text-white/70">Aktivasi cepat, fee transparan H+3, support 7 hari/minggu. Klik daftar, isi form 2 menit, langsung bisa transaksi {cat.name}.</p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link href="/daftar" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-black text-white shadow-[0_8px_24px_rgba(255,59,10,0.35)] hover:bg-primary-hover transition-colors">Daftar Gratis Sekarang →</Link>
                <Link href="/produk" className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-bold text-white hover:bg-white hover:text-navy transition-colors">← Kembali ke Katalog</Link>
                <span className="text-xs text-white/50">Gratis pendaftaran • Tanpa biaya bulanan</span>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
