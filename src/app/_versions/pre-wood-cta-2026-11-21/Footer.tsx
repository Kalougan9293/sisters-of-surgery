import Link from "next/link";
import { brand } from "@/data/brand";
import { mainNav } from "@/data/navigation";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#2a221c] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center md:px-6 lg:px-8">
        <BrandLogo variant="dark" />

        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/65"
          aria-label="Pied de page"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#c4a029]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-[11px] text-white/40">
          © 2026 {brand.name}
        </p>
      </div>
    </footer>
  );
}
