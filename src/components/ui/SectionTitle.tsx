import { cn } from "@/lib/utils";

/**
 * Titres de section — élégant, chic.
 * Cormorant Garamond, brun chaud, traits or fins.
 */
export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <span
        aria-hidden
        className="mb-4 h-px w-10 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent"
      />
      <Tag
        className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-medium italic leading-tight tracking-[0.04em] text-[#6b5428]"
      >
        {children}
      </Tag>
      <span
        aria-hidden
        className="mt-4 h-px w-10 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent"
      />
    </div>
  );
}
