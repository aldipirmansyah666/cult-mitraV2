"use client";
import { motion } from "framer-motion";
import { UserPlus, Wallet, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { steps } from "@/data/content";

const icons: Record<string, any> = { UserPlus, Wallet, ShieldCheck, TrendingUp };

export default function Steps() {
  return (
    <section id="cara-kerja" className="bg-white py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="bg-amber-50 border-amber-200 text-amber-700">Skema 4 Langkah Praktis</Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tighter sm:text-4xl">Dari Daftar Sampai Cuan,<br />Gak Pakai Ribet.</h2>
          <p className="mt-3 text-sm text-body">UX disederhanakan khusus untuk pemilik loket biasa — no IT, no pusing.</p>
        </div>

        <div className="relative mt-10">
          {/* connector line desktop */}
          <div className="absolute left-1/2 top-[52px] hidden h-0.5 w-[72%] -translate-x-1/2 bg-gradient-to-r from-violet-200 via-emerald-200 to-orange-200 lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <motion.div key={s.n} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="relative">
                  <div className="rounded-3xl border border-border bg-surface p-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${s.accent}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-2xl font-black tracking-tighter text-navy/10">{s.n}</span>
                    </div>
                    <div className="mt-4 text-base font-black text-navy">{s.title}</div>
                    <div className="text-xs font-bold text-primary">{s.desc}</div>
                    <div className="mt-2 text-sm leading-relaxed text-body">{s.detail}</div>

                    {i < 3 && <div className="absolute -right-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white border shadow lg:flex"><ArrowRight className="h-4 w-4 text-muted" /></div>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="/daftar" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-black text-white shadow-[0_8px_24px_rgba(255,59,10,0.3)] hover:bg-primary-hover">Mulai Daftar — Gratis <ArrowRight className="ml-2 h-4 w-4" /></a>
          <span className="text-xs text-muted">Estimasi aktivasi &lt; 24 jam • Deposit 10rb langsung jalan</span>
        </div>
      </Container>
    </section>
  );
}
