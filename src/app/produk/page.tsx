import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ProdukGridClient from "@/components/produk/ProdukGridClient";

export const metadata: Metadata = {
  title: "Katalog Produk PPOB Lengkap 300+ Layanan | PLN, Pulsa, PDAM, BPJS — Cult Mitra",
  description:
    "Jelajahi 11 kategori PPOB Cult Mitra × SBPAYS: Token & Tagihan PLN Flexi Admin Rp3rb-10rb (fee Rp450-7.350), Pulsa All Operator, E-Wallet GoPay OVO DANA, PDAM 400+ wilayah, BPJS, PBB 120+ daerah, Multifinance, Telkom/Internet, Tiket KAI/Pelni & Transfer Bank. Fee transparan H+3, deposit mulai Rp10.000.",
  keywords: [
    "katalog ppob",
    "produk ppob lengkap",
    "agen pulsa",
    "token PLN",
    "PDAM online",
    "BPJS PPOB",
    "PBB online",
    "topup e-wallet",
    "transfer bank fee murah",
    "cult mitra sbpays",
  ],
  openGraph: {
    title: "Katalog Produk PPOB Lengkap 300+ Layanan — Cult Mitra × SBPAYS",
    description:
      "11 kategori • PLN Flexi Admin, Pulsa, E-Wallet, PDAM 400+ wilayah, BPJS, PBB 120+ daerah, Multifinance, Telkom, Tiket & Transfer. Fee transparan, pencarian & filter cepat.",
    type: "website",
    locale: "id_ID",
  },
  alternates: { canonical: "/produk" },
};

export default function ProdukPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Katalog Produk PPOB • 300+ Layanan"
          title={<>Satu Aplikasi, <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Semua Tagihan</span> Laku.</>}
          description="11 kategori • PLN Flexi Admin, Pulsa, E-Wallet, PDAM 400+ wilayah, BPJS, PBB 120+ daerah, Multifinance, Telkom/Internet, Tiket & Transfer. Klik kategori untuk lihat detail fee."
          breadcrumb={[{ label: "Produk" }]}
        />
        <section className="bg-white py-12">
          <Container>
            <ProdukGridClient />

            <div className="mt-10 rounded-3xl bg-navy p-6 sm:p-8 text-white grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <div className="text-sm font-black">Butuh fee pasti? Cek tabel fee resmi.</div>
                <p className="mt-2 text-sm text-white/70">Fee PLN Rp450-7.350, PDAM Rp400-1.450, dll. Semua transparan & update sesuai SBPAYS.</p>
              </div>
              <div className="flex gap-3 justify-start lg:justify-end">
                <Link href="/fee" className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-black text-navy">Lihat Fee Lengkap →</Link>
                <Link href="/daftar" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-bold text-white">Daftar Gratis</Link>
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
