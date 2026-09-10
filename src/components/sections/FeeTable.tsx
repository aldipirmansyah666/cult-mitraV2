"use client";
import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { feeItems, feeCategories } from "@/data/fees";

export default function FeeTable() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("Semua");
  const [page, setPage] = useState(1);
  const perPage = 24;

  const filtered = useMemo(()=>{
    let list = feeItems;
    if (cat !== "Semua") list = list.filter(f=> f.category===cat);
    if (q) {
      const qq=q.toLowerCase();
      list = list.filter(f=> f.product.toLowerCase().includes(qq) || f.category.toLowerCase().includes(qq) || (f.subcategory && f.subcategory.toLowerCase().includes(qq)));
    }
    return list;
  },[q,cat]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const slice = filtered.slice((page-1)*perPage, page*perPage);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-muted whitespace-nowrap"><Filter className="h-3.5 w-3.5" /> Filter:</span>
          <button onClick={()=>{setCat("Semua"); setPage(1); window.scrollTo({top:0,behavior:"smooth"})}} className={`rounded-full px-4 py-2 text-xs font-bold border whitespace-nowrap ${cat==="Semua"?"bg-navy text-white border-navy":"bg-white border-border hover:bg-surface"}`}>Semua ({feeItems.length})</button>
          {feeCategories.map(c=>(
            <button key={c} onClick={()=>{setCat(c); setPage(1); window.scrollTo({top:0,behavior:"smooth"})}} className={`rounded-full px-4 py-2 text-xs font-bold border whitespace-nowrap ${cat===c?"bg-navy text-white border-navy":"bg-white border-border hover:bg-surface"}`}>{c}</button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input value={q} onChange={e=>{setQ(e.target.value); setPage(1)}} placeholder="Cari: PLN, PDAM, FIF..." className="h-10 w-full sm:w-[280px] rounded-full border border-border bg-surface pl-9 pr-4 text-sm outline-none focus:bg-white" />
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Produk</th>
                <th className="px-4 py-3 text-left font-bold">Kategori</th>
                <th className="px-4 py-3 text-left font-bold hidden sm:table-cell">Sub Wilayah</th>
                <th className="px-4 py-3 text-left font-bold">Admin</th>
                <th className="px-4 py-3 text-left font-bold">Fee</th>
                <th className="px-4 py-3 text-left font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {slice.map((r,i)=>(
                <tr key={i} className={i%2===0?"bg-white":"bg-surface/50"}>
                  <td className="px-4 py-3 font-semibold text-navy">{r.product}</td>
                  <td className="px-4 py-3 text-body">{r.category}</td>
                  <td className="px-4 py-3 text-muted hidden sm:table-cell">{r.subcategory || "—"}</td>
                  <td className="px-4 py-3 font-mono text-xs">{r.admin}</td>
                  <td className="px-4 py-3 font-black text-success">{r.fee}</td>
                  <td className="px-4 py-3"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${r.status==="active"?"bg-emerald-50 text-emerald-700 border border-emerald-200":r.status==="closed"?"bg-zinc-100 text-zinc-600 border":"bg-amber-50 text-amber-700 border border-amber-200"}`}>{r.status==="active"?"Aktif":r.status==="closed"?"Tutup":"Atur Sendiri"}</span></td>
                </tr>
              ))}
              {slice.length===0 && <tr><td colSpan={6} className="px-6 py-12 text-center text-muted">Tidak ada data untuk filter ini.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="text-xs text-muted">{filtered.length} hasil • Hal {page}/{totalPages||1}</div>
        <div className="flex gap-2">
          <button disabled={page<=1} onClick={()=>{setPage(p=>Math.max(1,p-1)); window.scrollTo({top:0,behavior:"smooth"})}} className="rounded-full border bg-white px-4 py-2 text-xs font-bold disabled:opacity-40">Prev</button>
          <button disabled={page>=totalPages} onClick={()=>{setPage(p=>Math.min(totalPages,p+1)); window.scrollTo({top:0,behavior:"smooth"})}} className="rounded-full border bg-white px-4 py-2 text-xs font-bold disabled:opacity-40">Next</button>
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">Fee dibayar H+3 hari kerja setelah periode (1 s/d akhir bulan) • Minimum payout Rp10.000 • Nominal mengikuti kebijakan internal Cult Mitra.</div>
    </div>
  );
}
