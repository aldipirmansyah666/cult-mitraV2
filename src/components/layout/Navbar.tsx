"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronRight, Download, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/layout/Logo";
import Container from "@/components/ui/Container";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/utils";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Scroll to top on pathname change (also handled by ScrollToTop globally)
  useEffect(() => { scrollToTop(); }, [pathname]);

  return (
    <>
      <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? "bg-white/90 backdrop-blur-xl border-border/60 shadow-sm" : "bg-white border-transparent"}`}>
        <Container>
          <div className="flex h-[64px] items-center justify-between gap-6">
            <div onClick={scrollToTop}><Logo /></div>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi utama">
              {mainNavigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={scrollToTop}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive ? "bg-navy text-white" : "text-body hover:bg-surface hover:text-ink"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-1.5">
              <a href={siteConfig.apps.android.apkUrl} className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-white px-3.5 text-xs font-bold text-navy hover:bg-surface">
                <Download className="h-3.5 w-3.5" /> Download
              </a>
              <a href={siteConfig.apps.web.primaryLogin} className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-white px-3.5 text-xs font-bold text-navy hover:bg-surface">
                <Monitor className="h-3.5 w-3.5" /> Login Web
              </a>
              <a href={waLink(siteConfig.whatsapp.defaultMessage)} target="_blank" rel="noopener" className="hidden xl:inline-flex h-10 items-center gap-2 rounded-full border border-border bg-white px-4 text-sm font-semibold text-navy hover:bg-surface">
                Konsultasi
              </a>
              <Link href="/daftar" onClick={scrollToTop} className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-white hover:bg-primary-hover shadow-[0_6px_16px_rgba(255,59,10,0.3)]">
                Daftar Gratis
              </Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white" aria-label={isOpen ? "Tutup menu" : "Buka menu"} aria-expanded={isOpen}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-secondary/60 backdrop-blur-sm lg:hidden" onClick={closeMenu} />
              <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl lg:hidden" role="dialog" aria-modal="true">
                <div className="flex h-full flex-col overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-border p-5">
                    <Logo />
                    <button onClick={closeMenu} className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface" aria-label="Tutup menu">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <nav className="flex-1 p-4" aria-label="Navigasi mobile">
                    <ul className="space-y-1.5">
                      {mainNavigation.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => { closeMenu(); scrollToTop(); }}
                              aria-current={isActive ? "page" : undefined}
                              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium ${isActive ? "bg-primary/10 text-primary" : "text-body hover:bg-surface"}`}
                            >
                              <span className="flex items-center gap-3">{isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}{item.label}</span>
                              <ChevronRight className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted"}`} />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                  <div className="border-t border-border p-4 space-y-2">
                    <a href={siteConfig.apps.android.apkUrl} onClick={closeMenu} className="flex h-11 items-center justify-center gap-2 rounded-full border bg-white font-bold text-navy"><Download className="h-4 w-4" /> Download Android</a>
                    <a href={siteConfig.apps.web.primaryLogin} onClick={closeMenu} className="flex h-11 items-center justify-center gap-2 rounded-full border bg-surface font-bold text-navy"><Monitor className="h-4 w-4" /> Login Web / PC</a>
                    <a href={siteConfig.apps.onService.url} onClick={closeMenu} className="flex h-11 items-center justify-center gap-2 rounded-full border bg-white font-semibold text-body">Download Aplikasi Pembantu Komputer</a>
                    <a href={waLink(siteConfig.whatsapp.defaultMessage)} target="_blank" onClick={closeMenu} className="flex h-11 items-center justify-center rounded-full border font-semibold">Chat Admin</a>
                    <Link href="/daftar" onClick={() => { closeMenu(); scrollToTop(); }} className="flex h-11 items-center justify-center rounded-full bg-primary font-bold text-white">Daftar Gratis</Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
