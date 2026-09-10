"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { testimonials } from "@/data/content";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary"><Quote className="h-4 w-4" /> TESTIMONI MITRA</div>
            <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">Cerita Loket yang<br />Sudah Cuan Duluan.</h2>
          </div>
          <div className="flex items-center gap-1 text-sm font-bold"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.8/5 dari 1.200+ ulasan mitra</div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {testimonials.map((t,i)=>(
            <motion.div key={t.name} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="rounded-3xl border bg-surface p-6 hover:bg-white hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400" />
                <div><div className="text-sm font-black text-navy">{t.name}</div><div className="text-xs text-muted">{t.role} • {t.kota}</div></div>
                <span className="ml-auto rounded-full bg-success/10 px-2.5 py-1 text-xs font-black text-success">{t.profit}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-body">“{t.text}”</p>
              <div className="mt-4 flex gap-1">{[1,2,3,4,5].map(s=> <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
