import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { categories, getCategoryBySlug, productDetails } from "@/data/products";
import { feeItems } from "@/data/fees";
import { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Gamepad2, Ticket, ArrowLeftRight, Grid3X3 } from "lucide-react";

const iconMap: Record<string, any> = { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Gamepad2, Ticket, ArrowLeftRight, Grid3X3 };

export function generateStaticParams() {
  return categories.map(c=>({ slug: c.slug }));
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
              <div className="p-4 flex gap-3">
                <Link href="/fee" className="inline-flex h-10 items-center rounded-full bg-navy px-6 text-sm font-bold text-white">Lihat Fee Lengkap →</Link>
                <Link href="/daftar" className="inline-flex h-10 items-center rounded-full bg-primary px-6 text-sm font-bold text-white">Daftar & Coba</Link>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#FCFBF9] border p-6">
              <div className="text-sm font-black text-navy">Kenapa {cat.name} laris di loket?</div>
              <p className="mt-2 text-sm text-body">Pelanggan rutin butuh {cat.name.toLowerCase()} tiap bulan. Loket yang sedia lengkap → trafik naik, cross-sell ke produk lain, komisi compounding.</p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
