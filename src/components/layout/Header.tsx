"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";
import { BrandLogo } from "./BrandLogo";
import { cn } from "@/lib/utils";

/** Même beige que les boutons CTA (--header-beige) */
const HEADER_BG = "bg-[var(--header-beige)]";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b border-[#c4a882]/40 transition-colors duration-300",
          HEADER_BG,
          scrolled && "opacity-95 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 md:px-6 lg:px-8">
          <BrandLogo variant="light" />

          <nav
            className="ml-auto hidden items-center gap-1 lg:flex"
            aria-label="Navigation principale"
          >
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.href.startsWith("/#")
                    ? false
                    : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] transition",
                    active
                      ? "text-[#6b5428]"
                      : "text-[#4a3a28]/75 hover:text-[#6b5428]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="ml-auto inline-flex h-9 w-9 items-center justify-center border border-[#4a3a28]/20 text-[#4a3a28] transition hover:border-[#6b5428] hover:text-[#6b5428] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className={cn("border-t border-[#c4a882]/40 px-4 py-3 lg:hidden", HEADER_BG)}>
            <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2.5 text-sm uppercase tracking-[0.14em] text-[#4a3a28]/90"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
