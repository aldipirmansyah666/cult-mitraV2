"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Ticket, ArrowLeftRight, Grid3X3, Sparkles, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { categories } from "@/data/products";

const iconMap: Record<string, any> = { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Ticket, ArrowLeftRight, Grid3X3 };

export default function ProductCatalog() {
  const [active, setActive] = useState<string | null>("pln");
  const detailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (active && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [active]);

  // Hybrid: homepage hanya preview 8 kategori populer/unggulan (3 popular + 5 terlaris)
  const popularSorted = [...categories].sort((a, b) => Number(!!b.popular) - Number(!!a.popular));
  const previewList = popularSorted.slice(0, 8);

  return (
    <section id="produk" className="bg-white py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="border-violet-200 bg-violet-50 text-violet-700">Katalog Produk PPOB • 300+ Layanan</Badge>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tighter sm:text-4xl">Satu Aplikasi, Semua<br />Tagihan Laku.</h2>
          <p className="mt-3 text-sm leading-relaxed text-body sm:text-[15px]">Katalog interaktif — klik kategori untuk lihat contoh produk & estimasi fee. Data fee final ada di halaman Fee internal Cult Mitra.</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {previewList.map((c, i)=>{
            const Icon = iconMap[c.icon] || Grid3X3;
            const isActive = active===c.id;
            return (
              <motion.button
                key={c.id}
                initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.02}}
                onClick={()=>{
                  const next = isActive ? null : c.id;
                  setActive(next);
                  if (next) setTimeout(()=> detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
                }}
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all ${isActive ? "border-navy bg-navy text-white shadow-xl scale-[1.02]" : "border-border bg-surface hover:bg-white hover:shadow-md hover:-translate-y-0.5"}`}
              >
                {c.popular && <span className={`absolute right-3 top-3 rounded-full px-2 py-1 text-[10px] font-black tracking-wide ${isActive?"bg-white text-navy":"bg-amber-400 text-navy"}`}>POPULER</span>}
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className={`mt-3 text-sm font-black leading-tight ${isActive?"text-white":"text-navy"}`}>{c.name}</div>
                <div className={`mt-1 text-xs leading-relaxed ${isActive?"text-white/70":"text-muted"}`}>{c.description}</div>
                <div className={`mt-3 inline-flex items-center gap-1 text-xs font-bold ${isActive?"text-white":"text-primary"}`}>{c.count} <ArrowRight className="h-3.5 w-3.5" /></div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Link href="/produk" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-8 text-sm font-black text-white shadow-[0_8px_24px_rgba(10,25,49,0.18)] hover:bg-navy/90 transition-colors">
            Lihat Katalog Lengkap 300+ Layanan <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-xs text-muted">Menampilkan 8 kategori terpopuler • <Link href="/produk" className="font-bold text-primary hover:underline">Jelajahi 11 kategori lengkap + pencarian</Link> di halaman katalog.</p>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div ref={detailRef} initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} exit={{opacity:0, y:10}} className="mt-6 rounded-3xl border border-border bg-gradient-to-br from-surface to-white p-5 sm:p-6">
              {(() => {
                const c = categories.find(x=>x.id===active)!;
                const Icon = iconMap[c.icon];
                return (
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white`}><Icon className="h-6 w-6" /></div>
                      <div>
                        <div className="text-base font-black text-navy">{c.name} — Detail Cepat</div>
                        <div className="text-sm text-body">{c.description} • Contoh fee & admin transparan.</div>
                        <div className="mt-3 hidden gap-2 sm:flex">
                          <a href="/fee" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="inline-flex h-9 items-center rounded-full bg-navy px-4 text-xs font-bold text-white">Cek Fee Lengkap</a>
                          <a href="/daftar" className="inline-flex h-9 items-center rounded-full border border-border bg-white px-4 text-xs font-bold">Daftar & Coba</a>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:min-w-[360px]">
                      <div className="rounded-2xl border bg-white p-4"><div className="text-xs font-bold text-muted">Estimasi Fee</div><div className="mt-1 text-sm font-black text-navy">Rp650 - Rp7.350+</div><div className="text-xs text-muted">khusus PLN Flexi</div></div>
                      <div className="rounded-2xl border bg-white p-4"><div className="text-xs font-bold text-muted">Admin ke Pelanggan</div><div className="mt-1 text-sm font-black text-navy">Rp3.000 - 10.000</div><div className="text-xs text-muted">kamu yang atur</div></div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted">
          <Sparkles className="h-4 w-4 text-primary" /> Fee & admin final mengikuti update internal Cult Mitra. Cek halaman Fee Produk untuk angka terbaru.
        </div>
      </Container>
    </section>
  );
}
