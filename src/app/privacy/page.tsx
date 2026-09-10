import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
export default function Page(){ return (<><Navbar /><main><PageHero title="Kebijakan Privasi" description="Data pendaftaran dikirim via WhatsApp ke Admin resmi untuk verifikasi KTP/NIK. Tidak dibagikan ke pihak ketiga tanpa persetujuan." breadcrumb={[{label:"Privasi"}]} /><section className="bg-white py-10"><Container><div className="mx-auto max-w-3xl rounded-3xl border p-6 text-sm leading-relaxed text-body">Privasi Anda penting. Hubungi Admin untuk detail penghapusan data.</div></Container></section></main><Footer /></>)}
