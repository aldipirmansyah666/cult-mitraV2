"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { faqs } from "@/data/content";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/utils";
import { ChevronDown, Headset, Clock, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  const cats = [...new Set(faqs.map(f=>f.category || "Umum"))];
  const [filter, setFilter] = useState<string>("Semua");
  const list = filter==="Semua" ? faqs : faqs.filter(f=>f.category===filter);
  return (
    <>
      <Navbar />
      <main>
        <PageHero badge="Pusat Bantuan • CS 06.00-22.00 WIB" title={<>Pusat Bantuan & <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">FAQ</span></>} description="Jawaban cepat + channel bantuan resmi. Untuk deposit, login, printer, fee — semua ada di sini." breadcrumb={[{ label: "FAQ" }]} />
        <section className="bg-[#FCFBF9] py-10">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  <button onClick={()=>{setFilter("Semua"); window.scrollTo({top:0,behavior:"smooth"}); setOpen(0)}} className={`rounded-full px-4 py-2 text-xs font-bold border whitespace-nowrap ${filter==="Semua"?"bg-navy text-white":"bg-white"}`}>Semua</button>
                  {cats.map(c=> <button key={c} onClick={()=>{setFilter(c); window.scrollTo({top:0,behavior:"smooth"}); setOpen(0)}} className={`rounded-full px-4 py-2 text-xs font-bold border whitespace-nowrap ${filter===c?"bg-navy text-white":"bg-white"}`}>{c}</button>)}
                </div>

                <div className="mt-4 space-y-3">
                  {list.map((f,i)=>{
                    const isOpen = open===i;
                    return (
                      <div key={i} className={`rounded-2xl border bg-white ${isOpen?"shadow-md border-navy/10":"border-border"}`}>
                        <button onClick={()=>setOpen(isOpen?null:i)} className="flex w-full items-center justify-between gap-4 p-4 text-left">
                          <span className="text-sm font-bold text-navy">{f.q}</span>
                          <span className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${isOpen?"bg-navy text-white rotate-180":"bg-surface"}`}><ChevronDown className="h-4 w-4" /></span>
                        </button>
                        <AnimatePresence>
                          {isOpen && <motion.div initial={{height:0, opacity:0}} animate={{height:"auto", opacity:1}} exit={{height:0, opacity:0}} className="overflow-hidden"><div className="px-4 pb-4 text-sm leading-relaxed text-body">{f.a}</div></motion.div>}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-navy p-6 text-white">
                  <div className="flex items-center gap-2 text-sm font-black"><Headset className="h-5 w-5" /> Hubungi CS Resmi</div>
                  <div className="mt-3 space-y-3 text-sm">
                    <div className="flex justify-between rounded-xl bg-white/10 p-3 border border-white/10"><span>WA Cult Mitra</span><span className="font-bold">{siteConfig.whatsapp.displayNumber}</span></div>
                    <div className="flex justify-between rounded-xl bg-white/10 p-3 border border-white/10"><span>WA CS Deposit</span><span className="font-bold">0853-5353-3656</span></div>
                    <div className="flex justify-between rounded-xl bg-white/10 p-3 border border-white/10"><span>Email</span><span className="font-bold">{siteConfig.email}</span></div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs"><Clock className="h-4 w-4" /> {siteConfig.depositHours} • 7 hari/minggu</div>
                  </div>
                  <a href={waLink(siteConfig.whatsapp.defaultMessage)} target="_blank" className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-white text-sm font-black text-navy">Chat WhatsApp Sekarang →</a>
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/60"><ShieldCheck className="h-4 w-4" /> Jangan share password/PIN/OTP ke siapapun. Hubungi CS Cult Mitra via WA resmi.</div>
                </div>

                <div className="rounded-3xl border bg-white p-6">
                  <div className="text-sm font-black text-navy">Jam Operasional & SLA</div>
                  <ul className="mt-3 space-y-2 text-sm text-body">
                    <li>• Deposit: 06.00-22.00 WIB (5-10 menit)</li>
                    <li>• Fee cair H+3 hari kerja, min Rp10.000</li>
                    <li>• Gangguan bank = estimasi lebih lama</li>
                  </ul>
                </div>
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
