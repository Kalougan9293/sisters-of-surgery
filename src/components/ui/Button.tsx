import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "gold";

const variants: Record<Variant, string> = {
  primary: "bg-[#1a1a1a] text-white hover:bg-black",
  secondary: "bg-white text-[#1a1a1a] hover:bg-[#f7f5f0]",
  ghost: "bg-transparent text-[#1a1a1a] hover:bg-[#ebe7df]",
  outline:
    "border border-[#1a1a1a]/20 bg-transparent text-[#1a1a1a] hover:border-[#1a1a1a]/50",
  gold: "bg-[#917812] text-white hover:bg-[#b89a2e] tracking-[0.14em] uppercase",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "gold",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
