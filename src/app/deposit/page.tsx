import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import DepositGuide from "@/components/sections/DepositGuide";

export default function DepositPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero badge="Deposit & Mutasi Saldo • 06.00-22.00 WIB" title={<>Deposit & <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Mutasi Saldo</span></>} description="Transfer ke rekening resmi a.n Cipta Usaha Makmur + kode PPID. Jam layanan 06.00-22.00 WIB, proses 5-10 menit. 100% masuk saldo, bisa dipakai hingga Rp0." breadcrumb={[{ label: "Deposit" }]} />
        <section className="bg-[#FCFBF9] py-10">
          <Container>
            <DepositGuide />
            <div className="mt-8 rounded-3xl border bg-white p-6">
              <h3 className="text-sm font-black text-navy">Cara Cek Mutasi & Refund</h3>
              <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm text-body">
                <li>Buka aplikasi SBPAYS → Laporan / Riwayat</li>
                <li>Pilih Mutasi atau Refund, atur rentang tanggal</li>
                <li>Cek detail per transaksi — fee ikut tercatat</li>
              </ol>
              <div className="mt-3 text-xs text-muted">Gangguan bank bisa bikin proses lebih dari 10 menit — simpan bukti transfer sampai saldo masuk.</div>
            </div>
            <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
              ⚠️ Jangan transfer ke rekening pribadi/mengatasnamakan SBPAYS. Selalu cek nama penerima <b>Cipta Usaha Makmur</b> sebelum konfirmasi.
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
