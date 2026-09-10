import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export default function Logo({ variant = "default", className = "" }: LogoProps) {
  const isWhite = variant === "white";
  return (
    <Link href="/" className={`flex items-center ${className}`} aria-label={siteConfig.name}>
      <Image
        src={isWhite ? "/images/brand/logo-cultxcum-white.png" : "/images/brand/logo-cultxcum.png"}
        alt="Cult Mitra Logo"
        width={103}
        height={40}
        className={`h-10 w-auto sm:h-11 ${isWhite ? "drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]" : "drop-shadow-[0_1px_3px_rgba(0,20,68,0.25)]"}`}
        sizes="(max-width: 640px) 103px, 124px"
        priority
      />
    </Link>
  );
}
