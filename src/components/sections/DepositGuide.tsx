"use client";
import { useState } from "react";
import { Copy, Check, Wallet, Clock, Building2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function DepositGuide() {
  const [ppid, setPpid] = useState("25321");
  const [nominal, setNominal] = useState(100000);
  const sum = nominal + Number(ppid || 0);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border bg-white p-6">
        <div className="flex items-center gap-2 text-sm font-black text-navy"><Wallet className="h-5 w-5 text-primary" /> Kalkulator Nominal Transfer (PPID)</div>
        <p className="mt-2 text-sm text-body">Tambahkan kode PPID ke kelipatan Rp100.000 agar saldo otomatis masuk 100%.</p>
        <div className="mt-5 grid gap-4">
          <label className="text-sm font-semibold">Kode PPID Kamu <input value={ppid} onChange={e=>setPpid(e.target.value)} placeholder="contoh 25321" className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 font-mono text-sm outline-none focus:bg-white" /></label>
          <label className="text-sm font-semibold">Nominal Dasar
            <select value={nominal} onChange={e=>setNominal(Number(e.target.value))} className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm">
              {[100000,200000,500000,1000000,2000000].map(v=> <option key={v} value={v}>Rp{v.toLocaleString("id-ID")}</option>)}
            </select>
          </label>
          <div className="rounded-2xl bg-navy p-5 text-white">
            <div className="text-xs text-white/60">Nominal Yang Ditransfer</div>
            <div className="mt-1 text-2xl font-black">Rp{sum.toLocaleString("id-ID")}</div>
            <div className="text-xs text-white/60">= Rp{nominal.toLocaleString("id-ID")} + PPID {ppid}</div>
            <div className="mt-2 text-xs text-emerald-300">Saldo masuk: Rp{sum.toLocaleString("id-ID")} (100%)</div>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs leading-relaxed text-amber-800">Jika tanpa PPID di nominal, tulis PPID di berita/remark & hubungi CS untuk proses manual 5-10 menit.</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-3xl border bg-white p-6">
          <div className="flex items-center gap-2 text-sm font-black text-navy"><Building2 className="h-5 w-5 text-primary" /> Rekening Resmi (a.n Cipta Usaha Makmur)</div>
          <div className="mt-4 space-y-3">
            {siteConfig.depositAccounts.map(r=>(
              <div key={r.bank} className="flex items-center justify-between rounded-2xl border bg-surface px-4 py-3">
                <div><div className="text-sm font-black text-navy">{r.bank}</div><div className="font-mono text-sm">{r.norek}</div><div className="text-xs text-muted">{r.an}</div></div>
                <CopyButton text={r.norek} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2 text-xs text-emerald-700"><Clock className="h-4 w-4" /> Jam layanan: {siteConfig.depositHours} tiap hari (5-10 menit proses)</div>
        </div>

        <div className="rounded-3xl bg-navy p-6 text-white">
          <div className="text-sm font-black">Tanpa PPID? Tetap bisa manual</div>
          <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm text-white/80">
            <li>Simpan bukti transfer</li>
            <li>Chat CS WA 0853-5353-3656</li>
            <li>Kirim bukti + PPID + keterangan transfer</li>
          </ol>
          <a href={`https://wa.me/6285353533656?text=Halo%20CS%20SBPAYS,%20konfirmasi%20deposit%20PPID%20${ppid}%20nominal%20Rp${sum}`} target="_blank" className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-black text-navy">Konfirmasi ke CS →</a>
        </div>
      </div>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button onClick={async()=>{ await navigator.clipboard.writeText(text); setOk(true); setTimeout(()=>setOk(false),1500)}} className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white hover:bg-surface">
      {ok ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}
