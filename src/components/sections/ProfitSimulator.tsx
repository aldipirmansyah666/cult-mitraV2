"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Coins, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { formatRupiah } from "@/lib/utils";

const avgFee: Record<string, number> = {
  pln: 1800,
  pulsa: 1200,
  ewallet: 1000,
  pdam: 900,
  bpjs: 1100,
  pbb: 1750,
};

export default function ProfitSimulator() {
  const [trxPerDay, setTrxPerDay] = useState(25);
  const [mix, setMix] = useState("campur");
  const [marginAdmin, setMarginAdmin] = useState(3500);

  const { feePerTrx, monthlyFee, monthlyAdmin, total } = useMemo(() => {
    let fee = 1300;
    if (mix === "pln") fee = avgFee.pln;
    if (mix === "pulsa") fee = avgFee.pulsa;
    if (mix === "campur") fee = 1350;
    const monthly = fee * trxPerDay * 30;
    const adminProfit = marginAdmin > 0 ? Math.round(marginAdmin * 0.35) : 0; // ilustrasi: 35% dari admin jadi profit tambahan (flexi logic simplified)
    const adminMonthly = adminProfit * trxPerDay * 30 * 0.4; // 40% trx adalah PLN
    return { feePerTrx: fee, monthlyFee: monthly, monthlyAdmin: adminMonthly, total: monthly + adminMonthly };
  }, [trxPerDay, mix, marginAdmin]);

  return (
    <section id="simulator" className="bg-navy py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-white">
            <Badge className="border-white/15 bg-white/10 text-white">Kalkulator Komisi • Interaktif</Badge>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tighter sm:text-4xl text-white">Hitung Cuan<br /><span className="text-primary-light">Bulanan Mu.</span></h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">Geser slider & pilih mix produk. Estimasi ini pakai rata-rata fee internal Cult Mitra. Angka real tergantung admin Flexi yang kamu pilih.</p>

            <div className="mt-8 rounded-3xl bg-white p-5 text-navy sm:p-6">
              <div className="flex items-center gap-2 text-sm font-black"><Calculator className="h-5 w-5 text-primary" /> Simulator Keuntungan</div>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-sm font-semibold"><span>Transaksi per hari</span><span className="rounded-full bg-navy px-3 py-1 text-xs font-black text-white">{trxPerDay} trx</span></div>
                  <input type="range" min={5} max={80} value={trxPerDay} onChange={e=>setTrxPerDay(Number(e.target.value))} className="mt-3 w-full accent-primary" />
                  <div className="flex justify-between text-xs text-muted"><span>5 trx</span><span>80 trx</span></div>
                </div>

                <div>
                  <div className="text-sm font-semibold">Mix produk dominan</div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {[
                      {id:"campur", label:"Campur"},
                      {id:"pln", label:"PLN Heavy"},
                      {id:"pulsa", label:"Pulsa/E-Wallet"},
                    ].map(o=>(
                      <button key={o.id} onClick={()=>setMix(o.id)} className={`rounded-full px-3 py-2.5 text-xs font-bold border ${mix===o.id?"bg-navy text-white border-navy":"bg-surface text-body border-border hover:bg-white"}`}>{o.label}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm font-semibold"><span>Admin PLN pilihan</span><span className="text-xs font-bold text-primary">Rp{marginAdmin.toLocaleString("id-ID")}</span></div>
                  <input type="range" min={3000} max={10000} step={500} value={marginAdmin} onChange={e=>setMarginAdmin(Number(e.target.value))} className="mt-3 w-full accent-primary" />
                  <div className="text-xs text-muted">Flexi Admin Rp3.000 - Rp10.000</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border bg-surface p-3 text-center"><div className="text-xs text-muted">Fee/trx</div><div className="text-sm font-black">{formatRupiah(feePerTrx)}</div></div>
                <div className="rounded-2xl border bg-surface p-3 text-center"><div className="text-xs text-muted">Trx/bulan</div><div className="text-sm font-black">{trxPerDay*30}</div></div>
                <div className="rounded-2xl border bg-surface p-3 text-center"><div className="text-xs text-muted">Fee admin</div><div className="text-sm font-black">Flexi</div></div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <motion.div initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted"><TrendingUp className="h-4 w-4 text-success" /> ESTIMASI KOMISI BULANAN</div>
              <div className="mt-3 text-4xl font-black tracking-tighter text-navy">{formatRupiah(total)}</div>
              <div className="text-xs font-medium text-muted">* estimasi kotor, belum potongan operasional</div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-2xl border bg-surface px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold"><Coins className="h-4 w-4 text-primary" /> Komisi Fee</span>
                  <span className="text-sm font-black">{formatRupiah(monthlyFee)}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border bg-surface px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold"><Zap className="h-4 w-4 text-amber-500" /> Margin Admin (est)</span>
                  <span className="text-sm font-black">{formatRupiah(monthlyAdmin)}</span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-br from-primary to-orange-500 p-4 text-white">
                <div className="text-sm font-bold">Mulai dari {trxPerDay} trx/hari = {formatRupiah(total)} / bulan</div>
                <div className="text-xs text-white/80">Naikkan ke 40 trx/hari → potensi {formatRupiah(Math.round(total*1.6))}/bulan</div>
                <a href="/daftar" className="mt-3 inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-black text-navy">Ambil Slot Mitra Gratis →</a>
              </div>

              <div className="mt-4 text-center text-xs text-muted">Simulasi edukasi. Fee real lihat <a href="/fee" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="underline">Halaman Fee</a>.</div>
            </motion.div>

            <div className="rounded-2xl bg-white/10 p-4 text-white border border-white/10">
              <div className="text-sm font-bold">Kenapa simulasi ini realistis?</div>
              <ul className="mt-2 list-disc pl-5 text-xs leading-relaxed text-white/70 space-y-1">
                <li>Fee PLN Rp650-7.350 (variatif admin)</li>
                <li>PDAM/BPJS fee Rp500-1.500 per trx</li>
                <li>E-Wallet margin bebas kamu tentukan</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
