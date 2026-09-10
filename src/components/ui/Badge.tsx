import { cn } from "@/lib/utils";
export default function Badge({ children, className, dot }: { children: React.ReactNode; className?: string; dot?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-1.5 text-xs font-semibold tracking-wide text-navy shadow-sm", className)}>
      {dot && <span className="h-2 w-2 animate-pulse rounded-full bg-success" />}
      {children}
    </span>
  );
}
