import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { RegistrationFormData } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function waLink(message: string, number = "6285173231909") {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function formatRupiah(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function generateRegistrationWhatsAppUrl(data: RegistrationFormData) {
  const lines = [
    `Halo Admin Cult Mitra 👋 Saya ingin DAFTAR MITRA SBPAYS`,
    ``,
    `*Data Loket:*`,
    `• Nama Loket: ${data.namaLoket}`,
    `• Pemilik: ${data.pemilik}`,
    `• NIK/KTP: ${data.noKtp}`,
    `• Alamat: ${data.alamat}, ${data.kota}`,
    `• No HP/WA: ${data.noHandphone}`,
    `• Email: ${data.email}`,
    `• Jenis Usaha: ${data.jenisUsaha}`,
    `• Aplikasi: ${data.aplikasi === "pc_android" ? "PC & Android" : data.aplikasi}`,
    `• Fee Masuk Ke: ${data.feeMasukKe === "rekening" ? "Rekening Bank" : "Saldo Deposit"}`,
  ];
  if (data.feeMasukKe === "rekening") {
    lines.push(`• Rekening: ${data.noRekening} (${data.namaBank}) a.n ${data.atasNama}`);
  }
  lines.push(``, `Mohon info verifikasi & cara top up deposit Rp10.000. Terima kasih.`);
  return waLink(lines.join("\n"), "6285173231909");
}
