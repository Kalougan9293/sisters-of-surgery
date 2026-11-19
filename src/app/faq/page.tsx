import type { Metadata } from "next";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Douleurs, anesthésie, cicatrices, récupération, complications et résultats attendus.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
        FAQ
      </p>
      <h1 className="font-serif text-3xl text-ink md:text-5xl">
        Questions fréquentes
      </h1>
      <p className="mt-2 text-sm text-ink-soft">
        Réponses générales fictives — pas un avis médical.
      </p>

      <div className="mt-5">
        <FaqAccordion items={faqItems} />
      </div>

      <div className="mt-6">
        <MedicalDisclaimer compact />
      </div>
    </div>
  );
}
