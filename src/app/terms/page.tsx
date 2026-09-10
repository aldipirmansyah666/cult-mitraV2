import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
export default function Page(){ return (<><Navbar /><main><PageHero title="Syarat & Ketentuan" description="Pendaftaran gratis, deposit mulai 10rb, fee transparan H+3. Fitur digital & cetak struk multi-printer sesuai ketentuan SBPAYS." breadcrumb={[{label:"Terms"}]} /><section className="bg-white py-10"><Container><div className="mx-auto max-w-3xl rounded-3xl border p-6 text-sm leading-relaxed text-body">Dengan mendaftar, mitra menyetujui verifikasi KTP/NIK & tata kelola fee SBPAYS (periode 1-akhir bulan, cair H+3, min Rp10.000).</div></Container></section></main><Footer /></>)}
