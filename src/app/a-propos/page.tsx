import type { Metadata } from "next";
import Image from "next/image";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "À propos",
  description: `${brand.name} — ${brand.description}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
        Le média
      </p>
      <h1 className="font-serif text-3xl text-ink md:text-5xl">
        À propos de{" "}
        <span className="font-script text-bordeaux">Sisters</span>
        <span className="mt-1 block text-lg uppercase tracking-[0.18em] md:text-2xl">
          of Surgery
        </span>
      </h1>

      <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src="/images/brand-sisters.jpg"
          alt="Identité visuelle Sisters of Surgery"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="prose-esthe mt-5 space-y-3 text-sm md:text-base">
        <p>
          Sisters of Surgery est un média d’information sur la chirurgie et la
          médecine esthétique : vidéos, guides et prix indicatifs — sans
          acquisition de patients.
        </p>
        <p>
          Pas de réservation, pas de classement, pas de commission. Démonstration
          avec contenus fictifs clairement identifiés.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {Object.entries({
          Blush: brand.colors.blush,
          Nude: brand.colors.nude,
          "Rose gold": brand.colors.roseGold,
          Bronze: brand.colors.bronze,
        }).map(([label, hex]) => (
          <div
            key={hex}
            className="flex items-center gap-2 rounded-xl border border-ink/8 bg-cream/70 p-2.5"
          >
            <span
              className="h-8 w-8 shrink-0 rounded-lg border border-ink/10"
              style={{ backgroundColor: hex }}
            />
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-ink">{label}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted">
                {hex}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <MedicalDisclaimer compact />
      </div>
    </div>
  );
}
