import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { guides } from "@/data/guides";
import Link from "next/link";
import { ExternalLink, Download, LogIn, Smartphone, Monitor } from "lucide-react";
import type { GuideCTA } from "@/types";

export function generateStaticParams() { return guides.map(g=>({ slug: g.slug })); }

function CTABox({ cta }: { cta: GuideCTA[] }) {
  if (!cta || cta.length === 0) return null;
  const primary = cta.filter(c=>c.variant === "primary");
  const others = cta.filter(c=>c.variant !== "primary");
  return (
    <div className="rounded-2xl border bg-white p-4 sm:p-5 shadow-sm">
      <div className="text-xs font-black tracking-widest text-navy">AKSI CEPAT — LINK RESMI</div>
      <p className="mt-1 text-xs text-muted">Tombol di bawah adalah link resmi Cult Mitra — klik langsung untuk download atau login tanpa perlu copy-paste manual.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {cta.map((c, i)=> {
          const isPrimary = c.variant === "primary";
          const isSecondary = c.variant === "secondary";
          const cls = isPrimary
            ? "bg-primary text-white hover:bg-primary-hover shadow-[0_4px_12px_rgba(255,59,10,0.3)]"
            : isSecondary
            ? "bg-navy text-white hover:bg-navy-light"
            : "bg-white border border-border text-navy hover:bg-surface";
          return (
            <a key={i} href={c.href} target={c.external !== false ? "_blank" : undefined} rel={c.external !== false ? "noopener noreferrer" : undefined}
               className={`inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-bold transition-colors ${cls}`}>
              {c.label.includes("Android") || c.label.includes("📱") ? <Smartphone className="h-4 w-4" /> : c.label.includes("OnService") ? <Download className="h-4 w-4" /> : c.label.includes("Login") || c.label.includes("Server") ? <LogIn className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
              {c.label.replace(/^[^a-zA-Z0-9]+/, "")}
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
          );
        })}
      </div>
      {cta.some(c=>c.href.includes("sbpays-ppob.com")) && (
        <div className="mt-3 text-xs leading-relaxed text-muted">
          <b>Tips:</b> Simpan 4 link (Server Utama + 3 Server Web Cadangan) di bookmark. Jika satu maintenance, coba server lain — semua sinkron.
        </div>
      )}
    </div>
  );
}

export default async function GuideDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guides.find(x=>x.slug===slug);
  if (!g) return notFound();
  return (
    <>
      <Navbar />
      <main>
        <PageHero badge={g.category} title={g.title} description={g.description} breadcrumb={[{ label: "Panduan", href: "/panduan" }, { label: g.title }]} />
        <section className="bg-white py-10">
          <Container>
            <div className="mx-auto max-w-3xl rounded-3xl border bg-[#FCFBF9] p-6 sm:p-8">
              {g.content && (
                <>
                  <p className="text-sm leading-relaxed text-body">{g.content.intro}</p>
                  {g.cta && g.cta.length > 0 && <div className="mt-6"><CTABox cta={g.cta} /></div>}
                  {g.content.imageCaption && <div className="mt-6 rounded-xl bg-white border p-4 text-xs whitespace-pre-wrap leading-relaxed">{g.content.imageCaption}</div>}
                  <div className="mt-6 space-y-6">
                    {g.content.sections.map((s, i)=>(
                      <div key={i} className="rounded-2xl bg-white border p-5">
                        <div className="text-sm font-black text-navy">{i+1}. {s.title}</div>
                        {s.description && <p className="mt-1 text-sm text-body">{s.description}</p>}
                        <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm text-body">
                          {s.steps.map((st, j)=> <li key={j}>{st}</li>)}
                        </ol>
                        {s.tip && <div className="mt-3 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">💡 {s.tip}</div>}
                      </div>
                    ))}
                  </div>
                  {g.content.note && <div className="mt-6 rounded-xl bg-navy p-4 text-sm text-white">{g.content.note}</div>}
                </>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/panduan" className="inline-flex h-11 items-center rounded-full border bg-white px-6 text-sm font-bold">← Kembali ke Panduan</Link>
                <Link href="/daftar" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-bold text-white">Daftar Gratis</Link>
                <Link href="/download" className="inline-flex h-11 items-center rounded-full border bg-surface px-6 text-sm font-bold">Download & Login →</Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
