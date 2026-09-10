import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero badge="Tentang Cult Mitra × SBPAYS" title={<>Tentang <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Cult Mitra</span></>} description={`Brand kemitraan PPOB resmi ${siteConfig.company} × ${siteConfig.partner} (SBPAYS - Syariah Bukopin Payments).`} breadcrumb={[{ label: "Tentang" }]} />
        <section className="bg-white py-10">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border bg-[#FCFBF9] p-6">
                <div className="text-sm font-black text-navy">Siapa Kami</div>
                <p className="mt-2 text-sm leading-relaxed text-body">Cult Mitra adalah jalur kemitraan untuk pelaku UMKM, warung, konter, loket agar bisa melayani transaksi digital lengkap (PLN, pulsa, e-wallet, PDAM, BPJS, PBB, multifinance, tiket, dll) dalam satu aplikasi SBPAYS. Operasional didukung sistem PT Cipta Usaha Makmur dan jaringan Bank KB Bukopin Syariah.</p>
              </div>
              <div className="rounded-3xl border bg-navy p-6 text-white">
                <div className="text-sm font-black">Legal & Resmi</div>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>• PT Cipta Usaha Makmur</li>
                  <li>• Bank KB Bukopin Syariah (SBPAYS)</li>
                  <li>• Kanal resmi internal Cult Mitra & PT Cipta Usaha Makmur</li>
                  <li>• Rekening deposit a.n Cipta Usaha Makmur (BRI/Mandiri/BNI/BCA)</li>
                </ul>
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
