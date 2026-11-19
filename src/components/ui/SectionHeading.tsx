import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-6 flex flex-col gap-3 md:mb-10",
        centered && "items-center text-center lg:items-end lg:text-left",
        centered && action && "lg:flex-row lg:justify-between",
        !centered && action && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn(centered && "max-w-2xl")}>
        {eyebrow && (
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-2xl leading-tight text-ink md:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed text-ink-soft md:text-lg",
              centered ? "mx-auto max-w-2xl lg:mx-0" : "max-w-2xl",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
