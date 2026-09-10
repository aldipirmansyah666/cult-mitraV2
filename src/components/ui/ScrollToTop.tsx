"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    // also smooth fallback
    if (window.scrollY !== 0) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
