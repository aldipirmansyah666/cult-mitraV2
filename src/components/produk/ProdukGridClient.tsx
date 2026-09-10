"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Grid3X3, ArrowRight, Search } from "lucide-react";
import { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Ticket, ArrowLeftRight } from "lucide-react";
import { categories, featuredProductDetail } from "@/data/products";

const iconMap: Record<string, any> = { Zap, Smartphone, Wallet, Heart, Droplets, Building2, CreditCard, Wifi, Ticket, ArrowLeftRight, Grid3X3 };

const filters = ["Semua", "Paling Cuan", "Tagihan", "Digital"] as const;

// Fee preview per kategori — sinkron dengan data/fees.ts & products.ts
const feePreview: Record<string, { fee: string; admin: string }> = {
  pln: { fee: "Rp450 - Rp7.350", admin: "Flexi Rp3rb-10rb" },
  pulsa: { fee: "Margin bebas", admin: "Atur sendiri" },
  ewallet: { fee: "Margin bebas", admin: "Fleksibel" },
  bpjs: { fee: "Rp900 - Rp1.350", admin: "Rp2.500" },
  pdam: { fee: "Rp400 - Rp1.450", admin: "Rp2.000-3.000" },
  pbb: { fee: "Rp400 - Rp2.550", admin: "Rp3.500-5.000" },
  multifinance: { fee: "Rp350 - Rp2.700", admin: "Rp0-10.000" },
  telkom: { fee: "Rp500 - Rp1.700", admin: "Rp0-3.500" },
  tiket: { fee: "Rp1.400 - Rp4.500", admin: "Rp0-10.000" },
  transfer: { fee: "Rp300 - Rp1.400", admin: "Rp4.000-6.500" },
  lainnya: { fee: "Rp400 - Rp1.800", admin: "Variatif" },
};

export default function ProdukGridClient() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("Semua");

  const list = useMemo(() => {
    return categories.filter((c) => {
      const matchQ = !q || c.name.toLowerCase().includes(q.toLowerCase()) || c.description.toLowerCase().includes(q.toLowerCase()) || c.slug.toLowerCase().includes(q.toLowerCase());
      if (!matchQ) return false;
      if (filter === "Paling Cuan") return !!c.popular;
      if (filter === "Tagihan") return ["pln", "pdam", "bpjs", "pbb", "telkom", "multifinance"].includes(c.id);
      if (filter === "Digital") return ["pulsa", "ewallet", "tiket", "transfer"].includes(c.id);
      return true;
    });
  }, [q, filter]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${filter === f ? "bg-navy text-white shadow" : "bg-surface hover:bg-white border border-border text-body"}`}
            >
              {f}
            </button>
          ))}
          <span className="ml-1 text-xs text-muted">{list.length} kategori</span>
        </div>
        <div className="relative w-full sm:w-[320px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari: PLN, PDAM, OVO, PBB..."
            className="h-10 w-full rounded-full border border-border bg-surface pl-9 pr-4 text-sm outline-none focus:bg-white focus:border-navy/20"
          />
        </div>
      </div>

      {list.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed bg-surface p-10 text-center">
          <div className="text-sm font-bold text-navy">Tidak ada hasil untuk &quot;{q}&quot;</div>
          <p className="mt-1 text-sm text-muted">Coba kata kunci lain atau reset filter.</p>
          <button onClick={() => { setQ(""); setFilter("Semua"); }} className="mt-4 inline-flex h-9 items-center rounded-full border bg-white px-4 text-xs font-bold">Reset pencarian</button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => {
            const Icon = iconMap[c.icon] || Grid3X3;
            const preview = feePreview[c.id] || { fee: "Cek detail", admin: "Variatif" };
            const featured = featuredProductDetail[c.id];
            return (
              <Link
                key={c.id}
                href={`/produk/${c.slug}`}
                className="group flex flex-col rounded-3xl border border-border bg-surface p-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  {c.popular && <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-navy">{c.tag || "POPULER"}</span>}
                </div>
                <h3 className="mt-4 text-lg font-black text-navy group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="mt-1 text-sm text-body leading-relaxed">{c.description}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">{c.count} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-2xl border bg-white px-3 py-2.5">
                    <div className="text-[11px] font-bold tracking-wide text-muted uppercase">Estimasi Fee</div>
                    <div className="mt-0.5 text-xs font-black text-navy">{preview.fee}</div>
                  </div>
                  <div className="rounded-2xl border bg-white px-3 py-2.5">
                    <div className="text-[11px] font-bold tracking-wide text-muted uppercase">Admin Pelanggan</div>
                    <div className="mt-0.5 text-xs font-black text-navy">{preview.admin}</div>
                  </div>
                </div>

                {featured && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {featured.items.slice(0, 3).map((it) => (
                      <span key={it} className="rounded-full bg-white border px-2.5 py-1 text-[11px] font-semibold text-body">{it}</span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-navy px-3 py-1.5 text-xs font-bold text-white">Cek detail & fee →</span>
                  <span className="rounded-full bg-white border px-3 py-1.5 text-xs font-semibold">Fee transparan</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
