import type { Metadata } from "next";
import Link from "next/link";
import {
  FileWarning,
  HeartPulse,
  Plane,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Chirurgie à l’étranger",
  description:
    "Voyages médicaux, suivi postopératoire, risques et cadre réglementaire — information générale.",
};

const sections = [
  {
    icon: Plane,
    title: "Voyages et séjours",
    body: "Transport, hébergement, durée minimale et retour à anticiper. Contenu fictif.",
  },
  {
    icon: HeartPulse,
    title: "Soins postopératoires",
    body: "Le suivi compte autant que l’acte. Anticipez les contrôles une fois rentré.",
  },
  {
    icon: ShieldAlert,
    title: "Risques spécifiques",
    body: "Langue, dossier incomplet, implants, pression commerciale…",
  },
  {
    icon: Scale,
    title: "Réglementations",
    body: "Normes et responsabilités varient selon les pays.",
  },
  {
    icon: FileWarning,
    title: "Ce qu’on ne fait pas",
    body: "Pas de séjours, pas de classement, pas de commission.",
  },
];

export default function ChirurgieEtrangerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
        International
      </p>
      <h1 className="font-serif text-3xl text-ink md:text-5xl">
        Chirurgie à l’étranger
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-ink-soft">
        Repères généraux — sans recommandation commerciale.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <article
              key={s.title}
              className="rounded-xl border border-ink/8 bg-cream/70 p-3 sm:p-4"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-bordeaux/10 text-bordeaux">
                <Icon className="h-4 w-4" />
              </span>
              <h2 className="mt-2.5 font-serif text-base leading-snug text-ink sm:text-xl">
                {s.title}
              </h2>
              <p className="mt-1.5 text-[11px] leading-relaxed text-ink-soft sm:text-sm">
                {s.body}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <Button href="/prix" className="w-full sm:w-auto">
          Prix indicatifs
        </Button>
        <Button
          href="/videos?categorie=explications-medicales"
          variant="outline"
          className="w-full sm:w-auto"
        >
          Vidéos associées
        </Button>
        <Link
          href="/faq"
          className="py-2 text-center text-sm text-bordeaux hover:underline"
        >
          FAQ →
        </Link>
      </div>

      <div className="mt-6">
        <MedicalDisclaimer compact />
      </div>
    </div>
  );
}
