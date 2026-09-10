"use client";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/utils";
export default function FloatingWhatsApp() {
  return (
    <a href={waLink(siteConfig.whatsapp.defaultMessage)} target="_blank" rel="noopener"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-105 transition">
      <span className="text-xl">✆</span>
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-black">1</span>
    </a>
  );
}
