import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/utils";

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero badge="Kontak Resmi" title={<>Kontak & <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Bantuan</span></>} description="Hubungi via WhatsApp resmi untuk pendaftaran, deposit, dan kendala teknis." breadcrumb={[{ label: "Kontak" }]} />
        <section className="bg-[#FCFBF9] py-10">
          <Container>
            <div className="mx-auto max-w-2xl rounded-3xl border bg-white p-6 text-center">
              <div className="text-sm font-black text-navy">WhatsApp Cult Mitra</div>
              <div className="mt-1 text-2xl font-black text-primary">{siteConfig.whatsapp.displayNumber}</div>
              <a href={waLink(siteConfig.whatsapp.defaultMessage)} target="_blank" className="mt-4 inline-flex h-11 items-center rounded-full bg-navy px-6 text-sm font-bold text-white">Chat Sekarang</a>
              <div className="mt-6 text-sm text-body">Email: {siteConfig.email}</div>
              <div className="mt-1 text-xs text-muted">Jam operasional CS: {siteConfig.depositHours} • Hati-hati penipuan, jangan share OTP/PIN.</div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
