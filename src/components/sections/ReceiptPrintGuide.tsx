"use client";
import { useState } from "react";
import { Printer, Bluetooth, Usb, Settings, FileText, Smartphone, Layers } from "lucide-react";

type PrinterType = "thermal" | "dotmatrix" | "inkjet" | "portable";

const printerConfig: Record<PrinterType, { label: string; desc: string; sizes: string[]; icons: string; paper: string; tip: string }> = {
  thermal: { label: "Thermal", desc: "58mm / 80mm — struk harian", sizes: ["58mm", "80mm"], icons: "Bluetooth/USB", paper: "Thermal Roll 58/80mm", tip: "Paling umum untuk loket. Set margin 5mm, auto-cut." },
  dotmatrix: { label: "Dot Matrix", desc: "Epson LX-310 / LQ-310 — Continuous Form", sizes: ['9.5" (240mm)', '10" (254mm)'], icons: "USB / LPT / LAN", paper: "Continuous Form 9.5\" & 10\" (2-3 ply)", tip: "Wajib untuk nota kolektif PLN/PDAM resmi. Set tractor feed & perforasi." },
  inkjet: { label: "Inkjet / Laserjet", desc: "A4 / F4 (Legal) — nota lembaran", sizes: ["A4", "F4 / Legal"], icons: "USB / WiFi", paper: "Cut Sheet A4 210×297 • F4 215×330", tip: "Untuk rekap kolektif, bukti bayar resmi lembaran. Set margin 15mm." },
  portable: { label: "Portable Mobile", desc: "Thermal Mini Bluetooth — via Android", sizes: ["58mm Portable"], icons: "Bluetooth", paper: "Thermal Roll 58mm Portable", tip: "Untuk mitra keliling / HP saja. Pair via Bluetooth." },
};

export default function ReceiptPrintGuide() {
  const [header, setHeader] = useState("LOKET BERKAH • JL. RAYA BEKASI NO.12");
  const [footer, setFooter] = useState("Terima kasih • WA 0851-7323-1909");
  const [type, setType] = useState<PrinterType>("thermal");
  const [size, setSize] = useState("58mm");
  const cfg = printerConfig[type];

  function onTypeChange(t: PrinterType){
    setType(t);
    setSize(printerConfig[t].sizes[0]);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border bg-white p-6">
        <div className="flex items-center gap-2 text-sm font-black text-navy"><Printer className="h-5 w-5 text-primary" /> Setting Header/Footer & Jenis Printer</div>
        <p className="mt-1 text-xs text-muted">Pilih jenis printer — pengaturan paper size & margin menyesuaikan otomatis.</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {(Object.keys(printerConfig) as PrinterType[]).map(k=>{
            const c = printerConfig[k];
            return (
              <button key={k} onClick={()=>onTypeChange(k)} className={`rounded-2xl border-2 p-3 text-left ${type===k?"border-primary bg-primary/5 ring-2 ring-primary/10":"border-border hover:border-primary/20"}`}>
                <div className="text-sm font-black text-navy">{c.label}</div>
                <div className="text-xs text-muted line-clamp-1">{c.desc}</div>
                <div className="mt-1 text-[11px] font-semibold text-primary">{c.paper}</div>
              </button>
            );
          })}
        </div>
        <div className="mt-4 space-y-4">
          <label className="block text-sm font-semibold">Header (Nama Loket + Alamat)
            <input value={header} onChange={e=>setHeader(e.target.value)} className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />
          </label>
          <label className="block text-sm font-semibold">Footer (Ucapan / WA)
            <input value={footer} onChange={e=>setFooter(e.target.value)} className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />
          </label>
          <div>
            <div className="text-sm font-semibold">Paper Size / Kertas</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {cfg.sizes.map(s=>(
                <button key={s} onClick={()=>setSize(s)} className={`rounded-full px-4 py-2 text-xs font-bold border ${size===s?"bg-navy text-white border-navy":"bg-surface border-border"}`}>{s}</button>
              ))}
            </div>
            <div className="mt-2 text-xs text-muted">{cfg.tip} • Koneksi: {cfg.icons}</div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-muted">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border px-3 py-1"><Bluetooth className="h-4 w-4" /> {type==="thermal"||type==="portable"?"Bluetooth":"USB/LAN"}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border px-3 py-1"><Usb className="h-4 w-4" /> {type==="dotmatrix"?"Tractor Feed":"Auto"}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border px-3 py-1"><Settings className="h-4 w-4" /> Test Print</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border px-3 py-1"><FileText className="h-4 w-4" /> {size}</span>
          </div>
          {type==="dotmatrix" && <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs leading-relaxed text-amber-800"><b>Dot Matrix:</b> Atur di Control Panel → Devices & Printers → Printing Preferences → Paper Size = Continuous 9.5&quot;/10&quot; → Margin Top 12mm, Left 8mm. Gunakan driver Epson LX-310/LQ-310.</div>}
          {type==="inkjet" && <div className="rounded-xl bg-sky-50 border border-sky-200 p-3 text-xs leading-relaxed text-sky-800"><b>Inkjet/Laserjet:</b> Di browser cetak (Ctrl+P) → Paper = A4/F4 → Margin = 15mm → Scale 100% → Header/Footer browser dimatikan, pakai header loket saja.</div>}
          {type==="portable" && <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs leading-relaxed text-emerald-800"><b>Portable:</b> Pair bluetooth di Android → Settings → Printer → Pilih device → Test Print. Baterai full sebelum cetak kolektif.</div>}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className={`rounded-2xl border bg-white shadow-xl overflow-hidden ${type==="inkjet"?"w-full max-w-[420px]":"w-[320px]"} ${type==="dotmatrix"?"font-mono":""}`}>
          <div className="bg-zinc-50 px-4 py-2 flex items-center justify-between text-[10px] tracking-widest font-bold text-muted">
            <span>PREVIEW {type.toUpperCase()} • {size}</span>
            <span className="inline-flex items-center gap-1"><Layers className="h-3 w-3" /> {cfg.label}</span>
          </div>
          <div className={`p-5 text-xs leading-relaxed ${type==="dotmatrix"?"font-mono text-[11px]":"font-mono"}`}>
            <div className="text-center font-bold">{header}</div>
            <div className="mt-1 text-center text-[11px]">TELP: 0851-7323-1909 • {size}</div>
            <div className="mt-3 border-t border-dashed pt-3 space-y-1">
              <div className="flex justify-between"><span>Tgl</span><span>09 Sep 2026 10:32</span></div>
              <div className="flex justify-between"><span>Layanan</span><span>PLN TOKEN 100K</span></div>
              <div className="flex justify-between"><span>ID Pel</span><span>12345****890</span></div>
              <div className="flex justify-between"><span>Admin</span><span>Rp5.000</span></div>
              <div className="flex justify-between font-bold"><span>Total</span><span>Rp105.000</span></div>
              {type==="dotmatrix" && <div className="pt-2 text-[10px] text-muted border-t border-dotted mt-2">Continuous Form — perforasi — simpan arsip 2 ply</div>}
              {type==="inkjet" && <div className="pt-2 text-[10px] text-muted border-t mt-2">A4/F4 Cut Sheet — cocok untuk rekap kolektif 20-50 pelanggan/lembar</div>}
            </div>
            <div className="mt-3 border-t border-dashed pt-3 text-center text-[11px]">{footer}</div>
            <div className="mt-2 text-center text-[10px] text-muted">Simpan struk sebagai bukti sah • {cfg.paper}</div>
          </div>
          <div className="bg-surface px-4 py-3 flex gap-2">
            <button onClick={()=>window.print()} className="flex-1 rounded-full bg-navy py-2.5 text-xs font-black text-white inline-flex items-center justify-center gap-1"><Printer className="h-3.5 w-3.5" /> Cetak</button>
            <button onClick={()=>navigator.clipboard.writeText(`${header}\nPLN TOKEN 100K\nAdmin Rp5.000\n${footer} [${cfg.label} ${size}]`)} className="rounded-full border bg-white px-4 py-2.5 text-xs font-bold">Copy</button>
          </div>
        </div>
        <div className="w-full max-w-[420px] rounded-2xl border bg-white p-4">
          <div className="text-xs font-black text-navy">Ringkasan Dukungan</div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl bg-surface border p-2.5"><div className="font-bold flex items-center gap-1"><Printer className="h-3.5 w-3.5" /> Thermal 58/80</div><div className="text-muted">Bluetooth/USB • Roll</div></div>
            <div className="rounded-xl bg-surface border p-2.5"><div className="font-bold">Dot Matrix LX/LQ</div><div className="text-muted">Continuous 9.5&quot;/10&quot;</div></div>
            <div className="rounded-xl bg-surface border p-2.5"><div className="font-bold flex items-center gap-1"><FileText className="h-3.5 w-3.5" /> Inkjet/Laser</div><div className="text-muted">A4/F4 Cut Sheet</div></div>
            <div className="rounded-xl bg-surface border p-2.5"><div className="font-bold flex items-center gap-1"><Smartphone className="h-3.5 w-3.5" /> Portable</div><div className="text-muted">Mobile BT 58mm</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
