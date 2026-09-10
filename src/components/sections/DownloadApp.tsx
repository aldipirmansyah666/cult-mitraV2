"use client";
import Link from "next/link";
import { Smartphone, Monitor, ExternalLink, Download, LogIn, Settings, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function DownloadApp() {
  function scrollTop(){ window.scrollTo({ top: 0, behavior: "smooth" }); }
  const { android, web, onService } = siteConfig.apps;
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Android */}
      <div id="android" className="rounded-3xl border bg-white p-6 scroll-mt-24">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white"><Smartphone className="h-6 w-6" /></div>
          <div><div className="text-base font-black text-navy">Aplikasi Android</div><div className="text-xs text-muted">Cult Mitra • {android.version} • {android.size}</div></div>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-body">
          <li>• File APK resmi — install manual (aktifkan “Unknown Source”)</li>
          <li>• Login pakai user & password dari Admin setelah verifikasi</li>
          <li>• Support printer Bluetooth thermal + portable mobile</li>
          <li>• Min OS: {android.minOs}</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <a href={android.apkUrl} target="_blank" rel="noopener" className="inline-flex h-11 items-center gap-2 rounded-full bg-navy px-6 text-sm font-bold text-white hover:bg-navy-light"><Download className="h-4 w-4" /> Download APK</a>
          <a href={android.playStoreUrl} target="_blank" rel="noopener" className="inline-flex h-11 items-center gap-2 rounded-full border bg-white px-6 text-sm font-bold hover:bg-surface"><ExternalLink className="h-4 w-4" /> Play Store</a>
        </div>
        <p className="mt-3 text-xs text-muted">Jika link Play Store belum tersedia, gunakan tombol APK di atas. Semua link resmi & aman.</p>
      </div>

      {/* Web Desktop */}
      <div id="web" className="rounded-3xl border bg-white p-6 scroll-mt-24">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500 text-white"><Monitor className="h-6 w-6" /></div>
          <div><div className="text-base font-black text-navy">Web Desktop (PC/Laptop)</div><div className="text-xs text-muted">Chrome / Firefox • 3 Server Web Cadangan</div></div>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-body">
          <li>• Login via portal internal — pilih server yang online</li>
          <li>• Install Aplikasi Pembantu Komputer ({onService.version}) — Run as Administrator wajib</li>
          <li>• OpenVPN 2.3.2 hanya jika MAC/LAN tidak terdeteksi</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {web.loginUrls.map((url, i)=>(
            <a key={i} href={url} target="_blank" rel="noopener" onClick={scrollTop} className={`inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-bold ${i===0?"bg-primary text-white":"border bg-white hover:bg-surface"}`}><LogIn className="h-4 w-4" /> Login {i+1}</a>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <a href={onService.url} target="_blank" rel="noopener" className="inline-flex h-10 items-center gap-2 rounded-full border bg-surface px-5 text-sm font-bold hover:bg-white"><Settings className="h-4 w-4" /> {onService.version} • {onService.size}</a>
        </div>
        <p className="mt-2 text-xs text-muted">{onService.requirement} • Link resmi & aman.</p>
      </div>

      {/* OnService detail */}
      <div id="onservice" className="lg:col-span-2 rounded-3xl border bg-white p-6 scroll-mt-24">
        <div className="flex items-center gap-2 text-sm font-black text-navy"><Settings className="h-5 w-5 text-primary" /> Download Aplikasi Pembantu Komputer (Cetak Nota) — Wajib untuk PC</div>
        <p className="mt-2 text-sm text-body">Aplikasi Pembantu Komputer adalah aplikasi pendukung transaksi PPOB di PC. Tanpa ini, transaksi & cetak struk Dot Matrix/Inkjet tidak jalan. Install sekali, pakai selamanya.</p>
        <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm text-body">
          <li>Download file installer dari link resmi di atas (atau via Admin).</li>
          <li>Klik kanan → <b>Run as Administrator</b> → Next → Finish.</li>
          <li>Pastikan status “OnService Connected” di dashboard SBPAYS.</li>
        </ol>
        <Link href="/panduan/install-plugin-onservice" onClick={scrollTop} className="mt-4 inline-flex text-sm font-bold text-primary">Panduan lengkap Aplikasi Pembantu Komputer →</Link>
      </div>

      <div className="lg:col-span-2 rounded-3xl bg-navy p-6 text-white">
        <div className="flex items-center gap-2 text-sm font-black"><ShieldCheck className="h-5 w-5 text-emerald-400" /> Tips Biar Lancar</div>
        <div className="mt-3 grid gap-2 sm:grid-cols-3 text-sm text-white/80">
          <div className="rounded-xl bg-white/10 p-3 border border-white/10">Buat shortcut desktop — 1 klik buka Cult Mitra</div>
          <div className="rounded-xl bg-white/10 p-3 border border-white/10">Hapus cache (Ctrl+Shift+Delete) jika gagal login</div>
          <div className="rounded-xl bg-white/10 p-3 border border-white/10">Gunakan UltraViewer/AnyDesk hanya saat CS resmi minta</div>
        </div>
      </div>
    </div>
  );
}
