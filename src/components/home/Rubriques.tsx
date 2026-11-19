import Link from "next/link";
import {
  CircleHelp,
  Globe2,
  Scale,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";

const rubriques = [
  {
    title: "Les interventions",
    description:
      "Rhinoplastie, liposuccion, lifting, implants mammaires, abdominoplastie…",
    href: "/interventions",
    icon: Stethoscope,
  },
  {
    title: "Les prix par pays",
    description:
      "Comparatifs indicatifs France, Turquie, Tunisie, Belgique, Espagne, Suisse…",
    href: "/prix",
    icon: Scale,
  },
  {
    title: "La chirurgie à l’étranger",
    description:
      "Voyages, séjours, soins postopératoires, risques et réglementations.",
    href: "/chirurgie-etranger",
    icon: Globe2,
  },
  {
    title: "Questions fréquentes",
    description:
      "Douleurs, anesthésie, cicatrices, récupération, complications, résultats.",
    href: "/faq",
    icon: CircleHelp,
  },
];

export function Rubriques() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 lg:px-8">
      <div className="mb-10 max-w-2xl md:mb-12">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
          Quatre portes d’entrée
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          Les grandes rubriques
        </h2>
        <p className="mt-3 text-ink-soft">
          Une architecture éditoriale claire pour s’orienter sans pression
          commerciale.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {rubriques.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-sm border border-ink/10 bg-cream/55 p-7 transition hover:border-bordeaux/30 hover:bg-cream md:p-8"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-bordeaux/[0.04] transition group-hover:bg-bordeaux/[0.08]" />
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-bordeaux/10 text-bordeaux">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bordeaux" />
              </div>
              <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
                0{i + 1}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-ink transition group-hover:text-bordeaux">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
