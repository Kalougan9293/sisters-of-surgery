import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { interventions } from "@/data/interventions";

export const metadata: Metadata = {
  title: "Interventions",
  description:
    "Guides informatifs sur les principales interventions de chirurgie esthétique.",
};

export default function InterventionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
        Guides
      </p>
      <h1 className="font-serif text-3xl text-ink md:text-5xl">
        Les interventions
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-ink-soft md:text-base">
        Fiches pédagogiques générales — contenu fictif de démonstration.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:grid-cols-3">
        {interventions.map((item) => (
          <Link
            key={item.slug}
            href={`/interventions/${item.slug}`}
            className="group flex flex-col overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden rounded-sm bg-beige sm:aspect-[4/3]">
              <Image
                src={item.imageSrc}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <h2 className="absolute inset-x-0 bottom-0 p-2.5 font-serif text-[0.95rem] leading-snug text-cream sm:p-4 sm:text-xl">
                {item.name}
              </h2>
            </div>
            <p className="mt-2 line-clamp-2 text-center text-[11px] leading-snug text-ink-soft sm:mt-3 sm:text-left sm:text-sm">
              {item.tagline}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
