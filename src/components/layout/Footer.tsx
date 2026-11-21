import Link from "next/link";
import { brand } from "@/data/brand";
import { mainNav } from "@/data/navigation";
import { BrandLogo } from "./BrandLogo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z" />
    </svg>
  );
}

const socials = [
  { label: "TikTok", href: brand.social.tiktok, Icon: TikTokIcon },
  { label: "Instagram", href: brand.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: brand.social.youtube, Icon: YoutubeIcon },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#c4a882]/40 bg-[var(--header-beige)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-5 text-center md:px-6 lg:px-8">
        <BrandLogo variant="light" />

        <nav
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.16em] text-[#4a3a28]/75"
          aria-label="Pied de page"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#6b5428]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav
          className="flex items-center justify-center gap-4"
          aria-label="Réseaux sociaux"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              className="text-[#6b5428]/80 transition hover:text-[#917812]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>

        <p className="text-[10px] text-[#4a3a28]/45">© 2026 {brand.name}</p>
      </div>
    </footer>
  );
}
