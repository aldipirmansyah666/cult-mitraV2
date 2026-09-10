import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Steps from "@/components/sections/Steps";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function CaraKerjaPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero badge="Skema 4 Langkah Praktis" title={<>Alur 4 Langkah — <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Daftar → Cuan</span></>} description="Daftar 2 menit → Top Up 10rb → Pasang Spanduk gratis* → Transaksi & nikmati komisi harian. Gak pakai ribet." breadcrumb={[{ label: "Cara Kerja" }]} />
        <Steps />
        <section className="bg-[#FCFBF9] py-10">
          <Container>
            <div className="mx-auto max-w-3xl rounded-3xl border bg-white p-6 text-sm leading-relaxed text-body">
              <div className="font-black text-navy">Detail Operasional</div>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Pendaftaran gratis, verifikasi KTP/NIK &lt;24 jam.</li>
                <li>Deposit via rekening resmi + kode PPID (otomatis 06.00-22.00).</li>
                <li>Dukungan Cetak Struk Bluetooth & Thermal — Cetak Struk & Nota Transaksi sesuai kebutuhan.</li>
                <li>Transaksi via PC (Chrome/Firefox + Aplikasi Pembantu Komputer (Cetak Nota)) atau Android (Play Store).</li>
              </ul>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
