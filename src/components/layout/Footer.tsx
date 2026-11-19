import Link from "next/link";
import { brand } from "@/data/brand";
import { mainNav } from "@/data/navigation";
import { BrandLogo } from "./BrandLogo";

const footerLinks = [
  ...mainNav,
  { label: "À propos", href: "/a-propos" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-ivory-deep/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-7 text-center md:px-6 lg:px-8">
        <BrandLogo compact />

        <p className="max-w-md text-xs leading-relaxed text-ink-soft">
          {brand.description}
        </p>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-ink-soft"
          aria-label="Pied de page"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-bordeaux"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-[11px] text-muted">
          © 2026 {brand.name} · Contenus fictifs · Pas de mise en relation
          commerciale
        </p>
      </div>
    </footer>
  );
}
