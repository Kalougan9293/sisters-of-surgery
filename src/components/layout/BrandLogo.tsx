"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();
  const onDark = variant === "dark";

  function goHome(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.href = "/";
  }

  return (
    <a
      href="/"
      onClick={goHome}
      className={cn("group shrink-0", className)}
      aria-label="Sisters of Surgery — Accueil"
    >
      <span
        className={cn(
          "font-display text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition sm:text-[0.85rem]",
          onDark
            ? "text-[#e8c547] group-hover:text-[#f0d56a]"
            : "text-[#6e5420] group-hover:text-[#8a6a28]",
        )}
      >
        Sisters Of Surgery
      </span>
    </a>
  );
}
