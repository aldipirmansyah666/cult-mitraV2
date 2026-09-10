import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import DownloadApp from "@/components/sections/DownloadApp";

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero badge="Aplikasi Android & Web Desktop" title={<>Download & <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Akses Cult Mitra</span></>} description="Android & PC/Laptop via Chrome/Firefox + Aplikasi Pembantu Komputer (Cetak Nota) internal. Login resmi hanya via portal internal Cult Mitra (menu Download/Panduan)." breadcrumb={[{ label: "Download" }]} />
        <section className="bg-[#FCFBF9] py-10">
          <Container>
            <DownloadApp />
            <div className="mt-8 rounded-3xl border bg-white p-6 grid gap-4 sm:grid-cols-2">
              <div><div className="text-sm font-black text-navy">Keamanan</div><p className="mt-1 text-sm text-body">Jangan pernah bagikan password, PIN, OTP ke siapapun. Gunakan hanya channel resmi. Untuk remote, pakai UltraViewer/AnyDesk dari situs resmi.</p></div>
              <div><div className="text-sm font-black text-navy">Butuh bantuan install?</div><p className="mt-1 text-sm text-body">Hubungi CS WhatsApp resmi, siapkan kode PPID & screenshot kendala (tanpa data rahasia).</p></div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
