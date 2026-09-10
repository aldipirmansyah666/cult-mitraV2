"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Play, Check, Download, Monitor, Settings } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FCFBF9]">
      {/* subtle grid + gradient blobs */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-primary/15 to-amber-200/30 blur-[60px]" />
      <div className="absolute -bottom-32 left-[-10%] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-navy/10 to-indigo-200/20 blur-[60px]" />

      <Container>
        <div className="relative grid items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:py-14">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="">
            <Badge dot className="border-primary/15 bg-primary-soft text-primary">Pendaftaran Gratis • Deposit Mulai 10rb</Badge>
            <h1 className="mt-5 text-[32px] font-black leading-[0.95] tracking-tighter text-navy sm:text-[42px] lg:text-[48px]">
              Usaha Kecil
              <span className="relative inline-block px-2">
                <span className="relative z-10 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Naik Level</span>
                <span className="absolute inset-x-1 bottom-1 h-3 bg-primary/10 -rotate-1" />
              </span>
              <br />Jadi Loket Serba Bisa.
            </h1>
            <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-body sm:text-base">
              Gabung <b className="text-ink">Cult Mitra × SBPAYS</b> — layanan PPOB resmi <b className="text-ink">{siteConfig.company}</b> × {siteConfig.partner}. Satu aplikasi untuk PLN, pulsa, e-wallet, PDAM, BPJS & 300+ produk. <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-800 font-semibold">Flexi Admin PLN hingga 10rb</span> jadi cuan kamu yang atur.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/daftar" size="lg" className="shadow-[0_8px_24px_rgba(255,59,10,0.35)]">DAFTAR GRATIS SEKARANG <ArrowRight className="h-4 w-4" /></Button>
              <a href={waLink(siteConfig.whatsapp.defaultMessage)} target="_blank" className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-white px-6 text-sm font-semibold hover:bg-surface">
                <Play className="h-4 w-4 text-primary" /> Konsultasi WhatsApp
              </a>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
              <span>Sudah jadi mitra?</span>
              <a href={siteConfig.apps.android.apkUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-semibold text-navy underline underline-offset-4 hover:text-primary"><Download className="h-3.5 w-3.5" /> Download Android</a>
              <span className="text-border">•</span>
              <a href={siteConfig.apps.web.primaryLogin} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-semibold text-navy underline underline-offset-4 hover:text-primary"><Monitor className="h-3.5 w-3.5" /> Login Web</a>
              <span className="text-border">•</span>
              <a href={siteConfig.apps.onService.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-semibold text-navy underline underline-offset-4 hover:text-primary"><Settings className="h-3.5 w-3.5" /> Aplikasi Pembantu Komputer (Cetak Nota)</a>
            </div>
            <div className="mt-2 text-xs text-muted">3 Server Web Cadangan • Pilih yang online</div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-muted">
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Tanpa biaya daftar</span>
              <span className="h-3 w-px bg-border" />
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Fee cair H+3</span>
              <span className="h-3 w-px bg-border" />
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> PC & Android</span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i=> <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-zinc-200 to-zinc-300" />)}
              </div>
              <div className="text-xs leading-tight">
                <div className="font-bold text-navy">{siteConfig.stats.mitra} mitra aktif</div>
                <div className="text-muted">Tersebar di {siteConfig.stats.kota} kota • Rating 4.8/5</div>
              </div>
              <div className="hidden sm:flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-sm border">
                <ShieldCheck className="h-4 w-4 text-success" /> <span className="text-xs font-bold">RESMI • Terverifikasi</span>
              </div>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="relative mx-auto max-w-[520px]">
              {/* phone mock */}
              <div className="relative rounded-[28px] bg-navy p-3 shadow-[0_24px_64px_rgba(10,25,49,0.25)]">
                <div className="rounded-[20px] bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold tracking-widest text-muted">SBPAYS • DASHBOARD</div>
                    <span className="rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-bold text-success">● ONLINE</span>
                  </div>
                  <div className="mt-4 rounded-2xl bg-gradient-to-br from-navy to-navy-light p-4 text-white">
                    <div className="text-xs text-white/60">Saldo Deposit</div>
                    <div className="mt-1 text-2xl font-black">Rp 2.450.000</div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      {[{k:"Hari ini",v:"47 trx"},{k:"Komisi",v:"Rp 86k"},{k:"Admin",v:"Rp 142k"}].map(x=>(
                        <div key={x.k} className="rounded-xl bg-white/10 py-2">
                          <div className="text-[11px] text-white/60">{x.k}</div>
                          <div className="text-sm font-bold">{x.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {[
                      {n:"PLN", c:"bg-amber-500"}, {n:"Pulsa",c:"bg-violet-500"}, {n:"OVO",c:"bg-emerald-500"}, {n:"PDAM",c:"bg-sky-500"},
                      {n:"BPJS",c:"bg-rose-500"}, {n:"PBB",c:"bg-slate-700"}, {n:"Tiket",c:"bg-amber-500"}, {n:"Lain",c:"bg-zinc-500"},
                    ].map(b=>(
                      <div key={b.n} className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 bg-surface p-3">
                        <div className={`h-8 w-8 rounded-lg ${b.c}`} />
                        <span className="text-[11px] font-semibold">{b.n}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-border bg-surface p-3">
                    <div className="text-xs font-bold text-navy">Transaksi Terakhir</div>
                    <div className="mt-2 space-y-2 text-xs">
                      <div className="flex justify-between"><span>Token PLN 100k</span><span className="font-bold text-success">+ Rp2.450 fee</span></div>
                      <div className="flex justify-between"><span>PDAM Kab. Bandung</span><span className="font-bold text-success">+ Rp1.100 fee</span></div>
                      <div className="flex justify-between"><span>Topup DANA 200k</span><span className="font-bold text-success">margin atur sendiri</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating cards */}
              <div className="absolute -left-4 top-10 hidden sm:flex items-center gap-2 rounded-2xl bg-white p-3 shadow-xl border">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">⚡</div>
                <div><div className="text-xs font-bold">Flexi Admin PLN</div><div className="text-xs text-muted">Atur Rp3rb-10rb</div></div>
              </div>
              <div className="absolute -right-2 bottom-14 hidden sm:flex items-center gap-2 rounded-2xl bg-white p-3 shadow-xl border">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">🧾</div>
                <div><div className="text-xs font-bold">Cetak Struk & Nota</div><div className="text-xs text-muted">Thermal & Dot Matrix</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* trust bar */}
      <div className="border-y border-border/60 bg-white/70 backdrop-blur">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 text-xs font-semibold tracking-wide text-muted">
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> DIPERCAYA MITRA DI 150+ KOTA</span>
            <span className="hidden sm:inline">PT CIPTA USAHA MAKMUR • BANK KB BUKOPIN SYARIAH • SBPAYS</span>
            <span className="inline-flex items-center gap-2">{siteConfig.stats.transaksi} transaksi • Uptime {siteConfig.stats.uptime}</span>
          </div>
        </Container>
      </div>
    </section>
  );
}
