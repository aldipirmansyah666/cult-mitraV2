import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BannerPromo from "@/components/sections/BannerPromo";
import ProductCatalog from "@/components/sections/ProductCatalog";
import ProfitSimulator from "@/components/sections/ProfitSimulator";
import Features from "@/components/sections/Features";
import Steps from "@/components/sections/Steps";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import DepositGuide from "@/components/sections/DepositGuide";
import ReceiptPrintGuide from "@/components/sections/ReceiptPrintGuide";
import DownloadApp from "@/components/sections/DownloadApp";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BannerPromo />
        <ProductCatalog />
        <ProfitSimulator />
        <Features />
        <Steps />

        {/* Deposit & Cetak Struk Preview - requested integrated */}
        <section className="bg-white py-14 sm:py-20 border-t border-border/40">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Badge className="border-blue-200 bg-blue-50 text-blue-700">Operasional Loket • Deposit & Struk</Badge>
              <h2 className="mt-4 text-3xl font-black tracking-tighter sm:text-4xl">Deposit Kilat & Struk Profesional.</h2>
              <p className="mt-3 text-sm text-body">Dua hal paling penting buat loket: saldo gampang diisi & struk meyakinkan. Ini caranya di SBPAYS.</p>
            </div>
            <div className="mt-10 space-y-12">
              <div>
                <h3 className="text-lg font-black text-navy mb-4">Sistem Deposit & Mutasi Saldo</h3>
                <DepositGuide />
                <div className="mt-4 text-center"><a href="/deposit" className="inline-flex h-10 items-center rounded-full border bg-white px-6 text-sm font-bold">Lihat Halaman Deposit Lengkap →</a></div>
              </div>
              <div>
                <h3 className="text-lg font-black text-navy mb-4">Fitur Cetak Multi-Printer — Thermal • Dot Matrix • Inkjet/Laserjet • Portable</h3>
                <ReceiptPrintGuide />
                <div className="mt-4 flex flex-wrap gap-2 justify-center text-xs">
                  <a href="/panduan/konfigurasi-printer" className="inline-flex h-10 items-center rounded-full border bg-white px-6 text-sm font-bold">Semua Printer →</a>
                  <a href="/panduan/setting-dot-matrix" className="inline-flex h-10 items-center rounded-full border bg-surface px-6 text-sm font-bold">Dot Matrix Continuous →</a>
                  <a href="/panduan/setting-inkjet-laserjet" className="inline-flex h-10 items-center rounded-full border bg-surface px-6 text-sm font-bold">Inkjet A4/F4 →</a>
                  <a href="/panduan/kertas-struk-ppob" className="inline-flex h-10 items-center rounded-full border bg-white px-6 text-sm font-bold">Kertas & Continuous Form →</a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-navy mb-4">Aplikasi Android & Web Desktop</h3>
                <DownloadApp />
                <div className="mt-4 text-center"><a href="/download" className="inline-flex h-10 items-center rounded-full bg-navy px-6 text-sm font-bold text-white">Download & Login SBPAYS →</a></div>
              </div>
            </div>
          </Container>
        </section>

        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
