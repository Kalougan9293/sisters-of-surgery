import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-bordeaux text-cream hover:bg-bordeaux-soft shadow-[0_10px_30px_-12px_rgba(156,90,78,0.5)]",
  secondary:
    "bg-ink text-cream hover:bg-ink-soft",
  ghost:
    "bg-transparent text-ink hover:bg-ivory-deep",
  outline:
    "border border-ink/15 bg-cream/60 text-ink hover:border-bordeaux/40 hover:text-bordeaux",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm tracking-wide transition-all duration-300",
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
