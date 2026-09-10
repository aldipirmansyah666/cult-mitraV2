import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ProfitSimulator from "@/components/sections/ProfitSimulator";
import ReceiptPrintGuide from "@/components/sections/ReceiptPrintGuide";
import { guides } from "@/data/guides";
import Link from "next/link";
import { BookOpen, Search } from "lucide-react";

export default function PanduanPage() {
  const cats = [...new Set(guides.map(g=>g.category))];
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Pusat Panduan & Simulator"
          title={<>Panduan & <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Simulator Loket</span></>}
          description="Kalkulator komisi interaktif + 30+ panduan resmi SBPAYS: Aplikasi Pembantu Komputer (Cetak Nota), Login, Deposit, Printer, Flexi Admin, Transaksi Kolektif, & Troubleshooting."
          breadcrumb={[{ label: "Panduan" }]}
        />

        {/* Simulator embedded */}
        <ProfitSimulator />

        {/* Printer guide preview */}
        <section className="bg-white py-14">
          <Container>
            <h2 className="text-2xl font-black tracking-tighter text-navy">Panduan Cetak — 4 Jenis Printer (Thermal • Dot Matrix • Inkjet/Laserjet • Portable)</h2>
            <p className="mt-2 text-sm text-body">Kustom header/footer, pilih Thermal 58/80mm, Dot Matrix LX/LQ Continuous Form 9.5&quot;/10&quot;, Inkjet/Laserjet A4/F4, atau Portable Bluetooth 58mm. Atur paper size & margin, test print, cetak ulang kolektif.</p>
            <div className="mt-6"><ReceiptPrintGuide /></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-4 text-xs">
              <Link href="/panduan/konfigurasi-printer" className="rounded-2xl border bg-surface p-4 hover:bg-white"><div className="font-black">Konfigurasi Semua Printer →</div><div className="text-muted">Thermal/Dot Matrix/Inkjet/Portable</div></Link>
              <Link href="/panduan/setting-dot-matrix" className="rounded-2xl border bg-surface p-4 hover:bg-white"><div className="font-black">Dot Matrix Continuous →</div><div className="text-muted">9.5&quot;/10&quot; Epson LX/LQ</div></Link>
              <Link href="/panduan/setting-inkjet-laserjet" className="rounded-2xl border bg-surface p-4 hover:bg-white"><div className="font-black">Inkjet/Laserjet A4/F4 →</div><div className="text-muted">Rekap lembaran kolektif</div></Link>
              <Link href="/panduan/setting-portable-mobile" className="rounded-2xl border bg-surface p-4 hover:bg-white"><div className="font-black">Portable Mobile →</div><div className="text-muted">Bluetooth 58mm Android</div></Link>
            </div>
          </Container>
        </section>

        {/* Guides grid */}
        <section className="bg-[#FCFBF9] py-14">
          <Container>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black tracking-tighter text-navy">{guides.length}+ Panduan Lengkap</h2>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white border px-3 py-1 text-xs font-bold"><BookOpen className="h-4 w-4" /> {guides.length} artikel</span>
            </div>
            <div className="mt-3 text-sm text-body">Klik kartu untuk buka detail langkah-langkah. Sumber internal Cult Mitra — data & skema fee terintegrasi lokal.</div>

            {cats.map(cat=>(
              <div key={cat} className="mt-8">
                <div className="text-sm font-black text-navy border-l-4 border-primary pl-3">{cat}</div>
                <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {guides.filter(g=>g.category===cat).map(g=>(
                    <Link key={g.slug} href={`/panduan/${g.slug}`} className="rounded-2xl border bg-white p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                      <div className="text-sm font-black text-navy line-clamp-2">{g.title}</div>
                      <div className="mt-1 text-sm text-body line-clamp-2">{g.description}</div>
                      <div className="mt-3 inline-flex rounded-full bg-surface border px-3 py-1 text-xs font-semibold">Buka panduan →</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
