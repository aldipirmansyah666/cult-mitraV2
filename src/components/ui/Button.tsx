import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";
const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover shadow-[0_8px_24px_rgba(255,59,10,0.3)] hover:shadow-[0_12px_32px_rgba(255,59,10,0.35)] hover:-translate-y-0.5",
  secondary: "bg-navy text-white hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5",
  ghost: "bg-transparent text-navy hover:bg-surface",
  outline: "bg-white text-navy border border-border hover:border-navy/20 hover:bg-surface",
};
const sizes = {
  sm: "h-9 px-5 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export default function Button({ children, href, variant="primary", size="lg", className, onClick, type="button" }: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
