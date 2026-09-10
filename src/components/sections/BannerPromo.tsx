"use client";
import Link from "next/link";
import { Sparkles, ArrowRight, Gift } from "lucide-react";

export default function BannerPromo() {
  function scrollTop(){ window.scrollTo({ top: 0, behavior: "smooth" }); }
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy via-navy-light to-indigo-900 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl">🎁</div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-amber-300 border border-white/10"><Gift className="h-3.5 w-3.5" /> PROMO BERLANGSUNG</div>
              <div className="mt-1 text-sm sm:text-base font-black text-white">Promo Flexi Admin PLN September 2026 — Cashback Rp300 / Transaksi</div>
              <div className="text-xs text-white/60">Dukungan Cetak Struk Bluetooth & Thermal • Fee cair H+3 • Daftar gratis 2 menit</div>
            </div>
          </div>
          <Link href="/fee" onClick={scrollTop} className="relative inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-black text-navy hover:bg-zinc-50 whitespace-nowrap">
            Cek Detail Promo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-primary" /> Lisensi resmi PT Cipta Usaha Makmur × KB Bukopin Syariah</span>
          <span className="hidden sm:inline">•</span>
          <span>* sesuai ketentuan • S&K berlaku</span>
        </div>
      </div>
    </section>
  );
}
