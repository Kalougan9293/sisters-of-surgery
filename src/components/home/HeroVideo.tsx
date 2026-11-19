import type { Video } from "@/data/types";
import { HeroCtas } from "@/components/home/HeroCtas";
import { HeroMedia } from "@/components/home/HeroMedia";
import { HeroSocials } from "@/components/home/HeroSocials";

export function HeroVideo({ video }: { video: Video }) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <HeroMedia video={video} variant="bleed" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 pb-12 pt-10 text-center md:gap-7 md:px-6 md:pb-16 md:pt-12 lg:px-8">
        <h1 className="animate-fade-up font-serif text-[clamp(1.75rem,4.5vw,2.75rem)] leading-[1.15] tracking-tight text-ink">
          Le podcast qui décrypte
          <br />
          l’esthétique avec clarté
        </h1>

        <p className="animate-fade-up delay-1 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
          Sisters of Surgery — Sabrina &amp; Suzie. Un média indépendant pour
          comprendre, pas pour vendre.
        </p>

        <div className="animate-fade-up delay-2 flex w-full flex-col items-center gap-8">
          <HeroCtas />
          <HeroSocials />
        </div>
      </div>
    </section>
  );
}
