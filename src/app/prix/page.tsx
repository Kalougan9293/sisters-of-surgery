import type { Metadata } from "next";
import { PriceComparator } from "@/components/content/PriceComparator";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Prix par pays",
  description:
    "Comparateur de prix indicatifs de chirurgie esthétique par pays et intervention.",
};

export default function PrixPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
        Comparateur
      </p>
      <h1 className="font-serif text-3xl text-ink md:text-5xl">
        Prix indicatifs par pays
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-ink-soft">
        Fourchettes fictives — pas un devis, pas de mise en relation.
      </p>

      <div className="mt-5">
        <PriceComparator />
      </div>

      <div className="mt-6">
        <MedicalDisclaimer compact />
      </div>
    </div>
  );
}
