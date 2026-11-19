"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";
import { BrandLogo } from "./BrandLogo";
import { SearchBar } from "./SearchBar";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-ink/10 bg-ivory/92 shadow-[0_8px_30px_-18px_rgba(156,90,78,0.35)] backdrop-blur-xl"
          : "border-transparent bg-ivory/75 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6 lg:px-8">
        <BrandLogo compact />

        <nav
          className="ml-2 hidden items-center gap-1 xl:flex"
          aria-label="Navigation principale"
        >
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-sm px-3 py-2 text-[13px] transition",
                  active
                    ? "bg-bordeaux/10 font-medium text-bordeaux"
                    : "text-ink-soft hover:bg-ivory-deep hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden w-full max-w-xs md:block">
          <SearchBar />
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink/10 text-ink xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/8 bg-ivory px-4 py-4 xl:hidden">
          <SearchBar className="mb-4 md:hidden" />
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-3 text-sm text-ink hover:bg-ivory-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
