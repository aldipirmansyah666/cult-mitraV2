import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function PageHero({ badge, title, description, breadcrumb }: { badge?: string; title: React.ReactNode; description?: string; breadcrumb?: { label: string; href?: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-[#FCFBF9] border-b border-border/40">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-24 right-[-10%] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-primary/10 to-amber-200/20 blur-[40px]" />
      <Container>
        <div className="relative py-10 sm:py-14">
          {breadcrumb && (
            <div className="mb-4 flex items-center gap-1.5 text-xs text-muted">
              <Link href="/" className="hover:text-navy">Beranda</Link>
              {breadcrumb.map((b,i)=>(
                <span key={i} className="flex items-center gap-1.5"><span>›</span>{b.href ? <Link href={b.href} className="hover:text-navy">{b.label}</Link> : <span className="text-navy font-semibold">{b.label}</span>}</span>
              ))}
            </div>
          )}
          {badge && <Badge className="border-primary/15 bg-primary-soft text-primary">{badge}</Badge>}
          <h1 className="mt-4 text-3xl font-black tracking-tighter text-navy sm:text-4xl leading-tight">{title}</h1>
          {description && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body sm:text-[15px]">{description}</p>}
        </div>
      </Container>
    </section>
  );
}
