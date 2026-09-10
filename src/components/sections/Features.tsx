"use client";
import { motion } from "framer-motion";
import { Zap, Coins, SlidersHorizontal, Printer, MonitorSmartphone, Headset } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { features } from "@/data/content";

const map: Record<string, any> = { Zap, Coins, SlidersHorizontal, Printer, MonitorSmartphone, Headset };

export default function Features() {
  return (
    <section id="fitur" className="bg-[#FCFBF9] py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700">Kenapa Cult Mitra • 6 Fitur Unggulan</Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tighter sm:text-4xl">Bukan Sekadar Aplikasi.<br />Ini Mesin Cuan Loket.</h2>
          <p className="mt-3 text-sm text-body">Dirangkum dari sistem internal Cult Mitra — benefit nyata buat pemilik loket, data fee terintegrasi lokal.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f,i)=>{
            const Icon = map[f.icon];
            return (
              <motion.div key={f.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
                className="group rounded-3xl border border-border bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white group-hover:bg-primary transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  {f.highlight && <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-black text-primary">{f.highlight}</span>}
                </div>
                <div className="mt-4 text-[15px] font-black text-navy">{f.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-body">{f.desc}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl bg-navy p-6 text-white lg:col-span-2">
            <div className="text-sm font-black">Keandalan Sistem • Bukan Janji Manis</div>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              {[
                {v:"99.8%", k:"Uptime"},
                {v:"1-3s", k:"Proses"},
                {v:"24/7", k:"Online"},
              ].map(s=>(
                <div key={s.k} className="rounded-2xl bg-white/10 py-4 border border-white/10">
                  <div className="text-xl font-black">{s.v}</div><div className="text-xs text-white/60">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6">
            <div className="text-sm font-black text-navy">Fitur Digital Lengkap</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2"><span>📊</span> Riwayat & laporan transaksi real-time</li>
              <li className="flex gap-2"><span>🧾</span> Kustom header/footer & cetak ulang struk</li>
              <li className="flex gap-2"><span>🔔</span> Notifikasi saldo & status transaksi instan</li>
            </ul>
            <div className="mt-3 text-xs text-muted">Semua fitur digital langsung aktif setelah akun terverifikasi.</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
