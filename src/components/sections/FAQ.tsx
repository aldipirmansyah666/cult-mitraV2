"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { faqs } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[#FCFBF9] py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge className="border-navy/10 bg-navy text-white">FAQ • Jawaban Cepat</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tighter sm:text-4xl">Yang Sering<br />Ditanyakan.</h2>
            <p className="mt-3 text-sm text-body">Masih ragu? Chat Admin WA langsung — respons cepat 09:00-21:00.</p>
            <a href="https://wa.me/6285173231909?text=Halo%20Admin%20Cult%20Mitra%20Saya%20mau%20tanya%20FAQ" target="_blank" className="mt-6 inline-flex h-11 items-center rounded-full border bg-white px-6 text-sm font-bold">Tanya di WhatsApp</a>
          </div>
          <div className="space-y-3">
            {faqs.map((f,i)=> {
              const isOpen = open===i;
              return (
                <div key={i} className={`rounded-2xl border bg-white ${isOpen?"shadow-md border-navy/10":"border-border"}`}>
                  <button onClick={()=>setOpen(isOpen?null:i)} className="flex w-full items-center justify-between gap-4 p-4 text-left">
                    <span className="text-sm font-bold text-navy">{f.q}</span>
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${isOpen?"bg-navy text-white border-navy rotate-180":"bg-surface"}`}><ChevronDown className="h-4 w-4" /></span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{height:0, opacity:0}} animate={{height:"auto", opacity:1}} exit={{height:0, opacity:0}} className="overflow-hidden">
                        <div className="px-4 pb-4 text-sm leading-relaxed text-body">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
