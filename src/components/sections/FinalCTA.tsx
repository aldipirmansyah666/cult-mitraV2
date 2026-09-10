import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/utils";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-navy py-10">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary to-orange-500 p-6 sm:p-10">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold"><ShieldCheck className="h-4 w-4" /> RESMI PT CIPTA USAHA MAKMUR × KB BUKOPIN SYARIAH</div>
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tighter text-white sm:text-4xl">Siap Jadi Loket<br />Serba Bisa Hari Ini?</h2>
              <p className="mt-3 max-w-xl text-sm text-white/80">Daftar gratis, deposit mulai 10rb, Fitur Cetak Struk / Nota Lengkap & Bebas Atur Struk & Biaya Admin, fee transparan cair H+3.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/daftar" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-black text-navy hover:bg-zinc-50">Daftar Gratis Sekarang <ArrowRight className="ml-2 h-4 w-4" /></a>
                <a href={waLink(siteConfig.whatsapp.defaultMessage)} target="_blank" className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-7 text-sm font-bold text-white">Chat Admin WA</a>
              </div>
              <div className="mt-4 text-xs text-white/70">* sesuai ketentuan program SBPAYS • Aktivasi &lt; 24 jam</div>
            </div>
            <div className="rounded-3xl bg-white p-5 text-navy">
              <div className="text-sm font-black">Yang kamu dapat:</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>✅ Akses SBPAYS PC + Android</li>
                <li>✅ 300+ produk PPOB siap jual</li>
                <li>✅ Flexi Admin PLN Rp3rb-10rb</li>
                <li>✅ Fee transparan, cair H+3</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
