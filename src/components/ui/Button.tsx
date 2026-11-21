import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "gold";

const variants: Record<Variant, string> = {
  primary: "bg-[#1a1a1a] text-white hover:bg-black",
  secondary: "bg-white text-[#1a1a1a] hover:bg-[#f7f5f0]",
  ghost: "bg-transparent text-[#1a1a1a] hover:bg-[#ebe7df]",
  outline:
    "border border-[#1a1a1a]/20 bg-transparent text-[#1a1a1a] hover:border-[#1a1a1a]/50",
  gold: "btn-cta",
};

/** Beige + liseré or — style unique pour Nous écrire / Envoyer */
const goldCtaStyle: React.CSSProperties = {
  backgroundColor: "var(--header-beige)",
  color: "#3d2a14",
  boxShadow: "0 0 0 2px #917812",
  border: "none",
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
  style,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-300",
    variant === "gold"
      ? "px-5 py-2.5 text-[11px] font-normal uppercase tracking-[0.22em]"
      : "px-6 py-3 text-sm font-medium",
    variants[variant],
    className,
  );

  const mergedStyle =
    variant === "gold" ? { ...goldCtaStyle, ...style } : style;

  if (href) {
    return (
      <Link href={href} className={classes} style={mergedStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props} style={mergedStyle}>
      {children}
    </button>
  );
}
