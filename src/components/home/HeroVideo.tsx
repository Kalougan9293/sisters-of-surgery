import Image from "next/image";
import type { Video } from "@/data/types";
import { HeroCtas } from "@/components/home/HeroCtas";
import { HeroMedia } from "@/components/home/HeroMedia";
import { HeroSocials } from "@/components/home/HeroSocials";

export function HeroVideo({ video }: { video: Video }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={video.posterSrc}
          alt=""
          fill
          priority
          className="animate-soft-scale object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/85 to-ivory" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-ivory/50" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 pb-10 pt-5 text-center md:gap-6 md:px-6 md:pb-14 md:pt-8 lg:px-8">
        <div className="animate-fade-up flex w-full max-w-2xl flex-col items-center">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-bordeaux md:mb-3">
            Sisters of Surgery
          </p>
          <h1 className="font-serif text-[clamp(0.92rem,4.35vw,3.5rem)] leading-none tracking-tight text-ink whitespace-nowrap">
            {video.title}
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            {video.description}
          </p>
        </div>

        <HeroMedia video={video} />

        <p
          className="animate-fade-up delay-1 w-full overflow-visible px-2 text-center font-script text-[clamp(1.15rem,4.8vw,2.15rem)] tracking-tight text-bordeaux whitespace-nowrap"
          style={{ lineHeight: 1.55, paddingTop: "0.2em", paddingBottom: "0.15em" }}
        >
          Présenté par les Sisters Of Surgery — Sabrina &amp; Suzie !
        </p>

        <div className="animate-fade-up delay-2 flex w-full flex-col items-center gap-4">
          <HeroCtas />
          <HeroSocials />
        </div>
      </div>
    </section>
  );
}
