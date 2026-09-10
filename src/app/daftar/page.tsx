"use client";
import { useState } from "react";
import { ChevronRight, Check, MessageCircle, AlertTriangle, X, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { generateRegistrationWhatsAppUrl } from "@/lib/utils";
import type { RegistrationFormData } from "@/types";

const steps = ["Informasi Diri", "Informasi Usaha", "Pilihan Aplikasi", "Review & Kirim"];
const processSteps = [
  { step: "01", title: "Isi Informasi Pendaftaran", description: "Lengkapi data diri dan usaha." },
  { step: "02", title: "Kirim ke WA Admin", description: "Data langsung ke Admin Cult Mitra." },
  { step: "03", title: "Siapkan KTP & NIK", description: "Untuk verifikasi identitas." },
  { step: "04", title: "Verifikasi Admin", description: "Tim Admin verifikasi <24 jam." },
  { step: "05", title: "Aktivasi Mitra", description: "Akun & PPID aktif." },
  { step: "06", title: "Mulai Transaksi", description: "Top up 10rb & jualan." },
];

const initial: RegistrationFormData = {
  namaLoket: "", pemilik: "", noKtp: "", alamat: "", kota: "", noHandphone: "", email: "",
  aplikasi: "", jenisUsaha: "", feeMasukKe: "", noRekening: "", namaBank: "", atasNama: "",
};

export default function DaftarPage() {
  const [cur, setCur] = useState(0);
  const [form, setForm] = useState<RegistrationFormData>(initial);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [showConfirm, setShowConfirm] = useState(false);

  function upd(k: keyof RegistrationFormData, v: string) {
    setForm(p=>({ ...p, [k]: v }));
    if (errors[k]) setErrors(p=>{ const n={...p}; delete n[k]; return n; });
  }

  function validate(s: number) {
    const e: Record<string,string> = {};
    if (s===0) {
      if (!form.namaLoket.trim()) e.namaLoket="Wajib diisi";
      if (!form.pemilik.trim()) e.pemilik="Wajib diisi";
      if (!form.noKtp.trim()) e.noKtp="Wajib diisi";
      if (!form.alamat.trim()) e.alamat="Wajib diisi";
      if (!form.kota.trim()) e.kota="Wajib diisi";
      if (!form.noHandphone.trim()) e.noHandphone="Wajib diisi";
      if (!form.email.trim()) e.email="Wajib diisi";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email="Format email salah";
    } else if (s===1) {
      if (!form.jenisUsaha.trim()) e.jenisUsaha="Wajib diisi";
      if (!form.feeMasukKe) e.feeMasukKe="Pilih salah satu";
      if (form.feeMasukKe==="rekening") {
        if (!form.noRekening.trim()) e.noRekening="Wajib diisi";
        if (!form.namaBank.trim()) e.namaBank="Wajib diisi";
        if (!form.atasNama.trim()) e.atasNama="Wajib diisi";
      }
    } else if (s===2) {
      if (!form.aplikasi) e.aplikasi="Pilih aplikasi";
    }
    setErrors(e);
    return Object.keys(e).length===0;
  }

  function next(){ if(validate(cur)) setCur(p=>Math.min(p+1, steps.length-1)); }
  function prev(){ setCur(p=>Math.max(p-1,0)); }
  function submit(){ setShowConfirm(true); }
  function confirm(){
    setShowConfirm(false);
    const url = generateRegistrationWhatsAppUrl(form);
    window.open(url,"_blank","noopener,noreferrer");
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero badge="Pendaftaran Gratis • 2 Menit Jadi" title={<>Mulai Jadi <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Mitra Cult</span></>} description="Form lengkap 4 langkah — data dikirim via WhatsApp ke Admin resmi untuk verifikasi KTP/NIK. Tanpa biaya daftar." breadcrumb={[{ label:"Daftar"}]} />
        <section className="bg-[#FCFBF9] py-10">
          <Container>
            <div className="grid gap-8 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <h3 className="text-sm font-black text-navy">Proses Pendaftaran</h3>
                <div className="mt-4 space-y-3">
                  {processSteps.map(s=>(
                    <div key={s.step} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border text-xs font-black text-navy">{s.step}</div>
                      <div><div className="text-sm font-bold">{s.title}</div><div className="text-xs text-muted">{s.description}</div></div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border bg-white p-4 text-xs leading-relaxed text-muted">Pendaftaran gratis. KTP & NIK diminta via WhatsApp untuk verifikasi. Deposit mulai Rp10.000 setelah akun aktif.</div>
                <div className="mt-4 rounded-2xl bg-navy p-4 text-white">
                  <div className="text-xs font-bold">Kenapa via WhatsApp?</div>
                  <p className="mt-1 text-xs text-white/70">Tanpa backend ribet. Data langsung ke Admin resmi 0851-7323-1909. Aman & ada bukti chat.</p>
                  <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold"><ShieldCheck className="h-4 w-4" /> Aman • Cepat • Resmi</div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="mb-4 flex items-center gap-2">
                  {steps.map((s,i)=>(
                    <div key={s} className="flex items-center">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${i<cur?"bg-primary text-white":i===cur?"bg-navy text-white ring-2 ring-primary/20":"bg-white border text-muted"}`}>{i<cur?<Check className="h-4 w-4"/>:i+1}</div>
                      {i<steps.length-1 && <div className={`ml-2 h-0.5 w-6 sm:w-8 ${i<cur?"bg-primary":"bg-border"}`} />}
                    </div>
                  ))}
                </div>
                <div className="mb-4 text-xs font-bold text-muted">Langkah {cur+1} dari {steps.length}: {steps[cur]}</div>

                <div className="rounded-3xl border bg-white p-6 sm:p-7">
                  {cur===0 && (
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div><label className="text-sm font-semibold">Nama Loket *</label><input value={form.namaLoket} onChange={e=>upd("namaLoket",e.target.value)} placeholder="Loket Berkah Bekasi" className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />{errors.namaLoket && <div className="text-xs text-red-500 mt-1">{errors.namaLoket}</div>}</div>
                        <div><label className="text-sm font-semibold">Pemilik *</label><input value={form.pemilik} onChange={e=>upd("pemilik",e.target.value)} placeholder="Nama lengkap" className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />{errors.pemilik && <div className="text-xs text-red-500 mt-1">{errors.pemilik}</div>}</div>
                      </div>
                      <div><label className="text-sm font-semibold">No KTP / NIK *</label><input value={form.noKtp} onChange={e=>upd("noKtp",e.target.value)} placeholder="16 digit NIK" className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />{errors.noKtp && <div className="text-xs text-red-500 mt-1">{errors.noKtp}</div>}</div>
                      <div><label className="text-sm font-semibold">Alamat Lengkap *</label><textarea value={form.alamat} onChange={e=>upd("alamat",e.target.value)} rows={2} placeholder="Jl. ... Desa/Kel ..." className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />{errors.alamat && <div className="text-xs text-red-500 mt-1">{errors.alamat}</div>}</div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div><label className="text-sm font-semibold">Kota *</label><input value={form.kota} onChange={e=>upd("kota",e.target.value)} placeholder="Bekasi" className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />{errors.kota && <div className="text-xs text-red-500 mt-1">{errors.kota}</div>}</div>
                        <div><label className="text-sm font-semibold">No HP/WA *</label><input value={form.noHandphone} onChange={e=>upd("noHandphone",e.target.value)} placeholder="08xxx" className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />{errors.noHandphone && <div className="text-xs text-red-500 mt-1">{errors.noHandphone}</div>}</div>
                      </div>
                      <div><label className="text-sm font-semibold">Email *</label><input type="email" value={form.email} onChange={e=>upd("email",e.target.value)} placeholder="nama@email.com" className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />{errors.email && <div className="text-xs text-red-500 mt-1">{errors.email}</div>}</div>
                    </div>
                  )}
                  {cur===1 && (
                    <div className="space-y-4">
                      <div><label className="text-sm font-semibold">Jenis Usaha *</label><input value={form.jenisUsaha} onChange={e=>upd("jenisUsaha",e.target.value)} placeholder="Warung / Toko / Konter / Loket" className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:bg-white" />{errors.jenisUsaha && <div className="text-xs text-red-500 mt-1">{errors.jenisUsaha}</div>}</div>
                      <div><label className="text-sm font-semibold">Fee Masuk Ke *</label>
                        <div className="mt-2 grid gap-3 sm:grid-cols-2">
                          {[{v:"rekening", l:"Ke Rekening", d:"Fee ke rekening bank"}, {v:"deposit", l:"Saldo Deposit", d:"Fee jadi saldo"}].map(o=>(
                            <button key={o.v} type="button" onClick={()=>upd("feeMasukKe",o.v)} className={`rounded-2xl border-2 p-4 text-left ${form.feeMasukKe===o.v?"border-primary bg-primary/5 ring-2 ring-primary/10":"border-border hover:border-primary/30"}`}>
                              <div className="text-sm font-bold">{o.l}</div><div className="text-xs text-muted">{o.d}</div>
                            </button>
                          ))}
                        </div>
                        {errors.feeMasukKe && <div className="text-xs text-red-500 mt-1">{errors.feeMasukKe}</div>}
                      </div>
                      {form.feeMasukKe==="rekening" && (
                        <div className="rounded-2xl border bg-surface p-4 space-y-3">
                          <div className="text-sm font-bold">Data Rekening</div>
                          <input value={form.noRekening} onChange={e=>upd("noRekening",e.target.value)} placeholder="No Rekening" className="w-full rounded-xl border bg-white px-4 py-3 text-sm" />{errors.noRekening && <div className="text-xs text-red-500">{errors.noRekening}</div>}
                          <input value={form.namaBank} onChange={e=>upd("namaBank",e.target.value)} placeholder="Nama Bank (BCA/Mandiri/BRI...)" className="w-full rounded-xl border bg-white px-4 py-3 text-sm" />{errors.namaBank && <div className="text-xs text-red-500">{errors.namaBank}</div>}
                          <input value={form.atasNama} onChange={e=>upd("atasNama",e.target.value)} placeholder="Atas Nama" className="w-full rounded-xl border bg-white px-4 py-3 text-sm" />{errors.atasNama && <div className="text-xs text-red-500">{errors.atasNama}</div>}
                        </div>
                      )}
                    </div>
                  )}
                  {cur===2 && (
                    <div className="space-y-4">
                      <div className="text-sm font-semibold">Pilih Perangkat *</div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {[{v:"android", l:"Android", d:"HP Android"}, {v:"pc", l:"PC/Laptop", d:"Komputer"}, {v:"pc_android", l:"Keduanya", d:"PC & Android"}].map(o=>(
                          <button key={o.v} type="button" onClick={()=>upd("aplikasi",o.v)} className={`rounded-2xl border-2 p-4 ${form.aplikasi===o.v?"border-primary bg-primary/5 ring-2 ring-primary/10":"border-border"}`}>
                            <div className="text-sm font-bold">{o.l}</div><div className="text-xs text-muted">{o.d}</div>
                          </button>
                        ))}
                      </div>
                      {errors.aplikasi && <div className="text-xs text-red-500">{errors.aplikasi}</div>}
                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs leading-relaxed">PC butuh install Aplikasi Pembantu Komputer (Cetak Nota) (Run as Admin). Android via Play Store. OpenVPN hanya jika MAC tidak terdeteksi.</div>
                    </div>
                  )}
                  {cur===3 && (
                    <div className="space-y-3 text-sm">
                      <div className="font-black text-navy">Review Data</div>
                      {[
                        ["Nama Loket", form.namaLoket],
                        ["Pemilik", form.pemilik],
                        ["NIK", form.noKtp],
                        ["Alamat", `${form.alamat}, ${form.kota}`],
                        ["HP/WA", form.noHandphone],
                        ["Email", form.email],
                        ["Usaha", form.jenisUsaha],
                        ["Fee Ke", form.feeMasukKe==="rekening"?"Rekening":"Deposit"],
                        ["Aplikasi", form.aplikasi],
                      ].map(([k,v])=>(
                        <div key={k} className="flex justify-between border-b py-2"><span className="text-muted">{k}</span><span className="font-bold">{v || "-"}</span></div>
                      ))}
                      {form.feeMasukKe==="rekening" && <div className="rounded-xl bg-surface border p-3 text-xs">Rek: {form.noRekening} • {form.namaBank} a.n {form.atasNama}</div>}
                    </div>
                  )}

                  <div className="mt-6 flex justify-between">
                    <button onClick={prev} className={`rounded-full border bg-white px-6 py-3 text-sm font-bold ${cur===0?"invisible":""}`}>Kembali</button>
                    {cur<3 ? <button onClick={next} className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white">Selanjutnya <ChevronRight className="h-4 w-4" /></button>
                    : <button onClick={submit} className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-black text-white">Kirim via WhatsApp <MessageCircle className="h-4 w-4" /></button>}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6">
            <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100"><AlertTriangle className="h-5 w-5 text-amber-600" /></div><div className="text-sm font-black">Peringatan Penting</div></div>
            <p className="mt-3 text-sm text-body">Siapkan <b>foto KTP</b> untuk dilampirkan di WhatsApp — syarat wajib verifikasi.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={()=>setShowConfirm(false)} className="flex-1 rounded-full border bg-white py-3 text-sm font-bold flex items-center justify-center gap-2"><X className="h-4 w-4" /> Batal</button>
              <button onClick={confirm} className="flex-1 rounded-full bg-primary py-3 text-sm font-black text-white flex items-center justify-center gap-2"><MessageCircle className="h-4 w-4" /> Kirim</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
