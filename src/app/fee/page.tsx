import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FeeTable from "@/components/sections/FeeTable";

export const metadata: Metadata = { title: "Fee Produk PPOB Lengkap — Transparan H+3" };

export default function FeePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Transparansi Fee • H+3 Cair"
          title={<>Transparansi Fee <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Produk</span></>}
          description="Tabel fee & admin resmi SBPAYS — PLN Flexi Rp3.000-10.000 (fee Rp450-7.350), PDAM 400+ wilayah, PBB 120+ daerah, Multifinance, dll. Payout H+3 hari kerja, min Rp10.000."
          breadcrumb={[{ label: "Fee Produk" }]}
        />
        <section className="bg-[#FCFBF9] py-10">
          <Container>
            <div className="rounded-3xl bg-white border p-4 sm:p-6">
              <FeeTable />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border bg-white p-5"><div className="text-sm font-black">Flexi Admin PLN</div><p className="mt-1 text-sm text-body">Admin dasar Rp4.500 (fee Rp1.950). Pilih Rp3.000-10.000 — selisih langsung jadi cuan. Contoh: set Rp5.000 → +Rp500 instan + fee bulanan.</p><a href="/panduan" className="mt-3 inline-flex text-xs font-bold text-primary">Cara setting Flexi →</a></div>
              <div className="rounded-2xl border bg-white p-5"><div className="text-sm font-black">E-Wallet Margin Bebas</div><p className="mt-1 text-sm text-body">GoPay OVO DANA ShopeePay — atur admin sendiri, tanpa batas. Cocok buat loket yang mau agresif.</p></div>
              <div className="rounded-2xl border bg-navy p-5 text-white"><div className="text-sm font-black">Butuh Simulasi?</div><p className="mt-1 text-sm text-white/70">Hitung potensi bulanan pakai kalkulator interaktif.</p><a href="/#simulator" className="mt-3 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black text-navy">Buka Simulator →</a></div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
