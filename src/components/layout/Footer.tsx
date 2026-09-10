import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/utils";
import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-navy">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <Container>
        <div className="py-14 lg:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Logo variant="white" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{siteConfig.tagline}</p>
              <p className="mt-2 text-xs text-white/50">{siteConfig.company}</p>
              <div className="mt-6 flex flex-col gap-3">
                <a href={waLink(siteConfig.whatsapp.defaultMessage)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/70 hover:bg-[#25D366]/10 hover:text-[#25D366] transition-colors">
                  <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  {siteConfig.whatsapp.displayNumber}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/70 hover:bg-primary/10 hover:text-primary-light transition-colors">
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-light">Produk</h3>
              <ul className="mt-4 space-y-2.5">
                {footerNavigation.produk.map((item) => (
                  <li key={item.href}><Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors inline-block">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-light">Panduan</h3>
              <ul className="mt-4 space-y-2.5">
                {footerNavigation.panduan.map((item) => (
                  <li key={item.href}><Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors inline-block">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70">Perusahaan</h3>
              <ul className="mt-4 space-y-2.5">
                {footerNavigation.perusahaan.map((item) => (
                  <li key={item.href}><Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors inline-block">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70">Legal</h3>
              <ul className="mt-4 space-y-2.5">
                {footerNavigation.legal.map((item) => (
                  <li key={item.href}><Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors inline-block">{item.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-xs text-white/50">© {currentYear} {siteConfig.name}. Hak Cipta Dilindungi. • Independent branding — tidak terhubung ke eksternal.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs text-white/50 hover:text-white">Kebijakan Privasi</Link>
              <Link href="/terms" className="text-xs text-white/50 hover:text-white">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
