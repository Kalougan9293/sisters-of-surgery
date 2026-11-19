"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const pathname = usePathname();

  function goHome(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo(0, 0);
      window.location.reload();
      return;
    }
    window.location.href = "/";
  }

  return (
    <a href="/" onClick={goHome} className={cn("group shrink-0", className)}>
      <span className="flex flex-col leading-none">
        <span className="font-script text-[1.65rem] leading-none text-bordeaux transition group-hover:text-bronze md:text-[1.85rem]">
          Sisters
        </span>
        <span className="mt-0.5 font-serif text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-ink md:text-[0.78rem]">
          of Surgery
        </span>
      </span>
      {!compact && (
        <span className="mt-1.5 block text-[9px] uppercase tracking-[0.22em] text-muted">
          Beauty · Aesthetics · Confidence
        </span>
      )}
    </a>
  );
}
