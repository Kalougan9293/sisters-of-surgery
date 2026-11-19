"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand } from "@/data/brand";
import { mainNav } from "@/data/navigation";
import { BrandLogo } from "./BrandLogo";
import { cn } from "@/lib/utils";

/** Brun chaud studio — transition douce avec le hero */
const HEADER_BG = "bg-[#2a221c]";
const HEADER_BG_SCROLL = "bg-[#2a221c]/95";

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
          "border-b border-white/10 backdrop-blur-md transition-colors duration-300",
          scrolled ? HEADER_BG_SCROLL : HEADER_BG,
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 md:px-6 lg:px-8">
          <BrandLogo variant="dark" />

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
                      ? "text-[#e8c547]"
                      : "text-white/85 hover:text-[#e8c547]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href={brand.contact.messageHref}
            className="ml-auto hidden bg-[#917812] px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#b89a2e] sm:inline-flex lg:ml-2"
          >
            {brand.contact.messageLabel}
          </Link>

          <button
            type="button"
            className="ml-auto inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className={cn("border-t border-white/10 px-4 py-3 lg:hidden", HEADER_BG)}>
            <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2.5 text-sm uppercase tracking-[0.14em] text-white/90"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={brand.contact.messageHref}
                className="mt-1 bg-[#917812] px-3 py-2.5 text-center text-sm font-medium uppercase tracking-[0.14em] text-white"
              >
                {brand.contact.messageLabel}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
