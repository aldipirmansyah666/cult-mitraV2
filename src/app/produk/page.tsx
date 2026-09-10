import type { Metadata } from "next";
import Link from "next/link";
import { Grid3X3, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { categories } from "@/data/products";
import { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Gamepad2, Ticket, ArrowLeftRight } from "lucide-react";

const iconMap: Record<string, any> = { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Gamepad2, Ticket, ArrowLeftRight, Grid3X3 };

export const metadata: Metadata = { title: "Katalog Layanan PPOB Lengkap — Cult Mitra × SBPAYS" };

export default function ProdukPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Katalog Produk PPOB • 300+ Layanan"
          title={<>Satu Aplikasi, <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Semua Tagihan</span> Laku.</>}
          description="12 kategori • PLN Flexi Admin, Pulsa, E-Wallet, PDAM 400+ wilayah, BPJS, PBB 120+ daerah, Multifinance, Telkom/Internet, Game, Tiket & Transfer. Klik kategori untuk lihat detail fee."
          breadcrumb={[{ label: "Produk" }]}
        />
        <section className="bg-white py-12">
          <Container>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map(c=>{
                const Icon = iconMap[c.icon] || Grid3X3;
                return (
                  <Link key={c.id} href={`/produk/${c.slug}`} className="group flex flex-col rounded-3xl border border-border bg-surface p-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} text-white`}><Icon className="h-6 w-6" /></div>
                    {c.popular && <span className="mt-3 inline-flex w-fit rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-navy">{c.tag || "POPULER"}</span>}
                    <h3 className="mt-3 text-lg font-black text-navy">{c.name}</h3>
                    <p className="mt-1 text-sm text-body">{c.description}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">{c.count} <ArrowRight className="h-3.5 w-3.5" /></div>
                    <div className="mt-4 flex gap-2">
                      <span className="rounded-full bg-white border px-3 py-1 text-xs font-semibold">Fee transparan</span>
                      <span className="rounded-full bg-white border px-3 py-1 text-xs font-semibold">Cek detail</span>
                    </div>
                  </Link>
                );
              })}
            </div>

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
