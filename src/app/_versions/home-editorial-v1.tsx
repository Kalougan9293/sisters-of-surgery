/**
 * VERSION SAUVEGARDÉE — Home éditoriale v1 (avant variante conversion)
 * Pour la restaurer : remplacer le contenu de src/app/page.tsx par celui-ci
 * (en adaptant l’export default si besoin).
 */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";

export default function HomeEditorialV1() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-black">
        <Image
          src="/images/podcast-studio-2.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85" />

        <div className="relative mx-auto flex min-h-[72vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center md:px-6 md:py-20">
          <h1 className="flex flex-col items-center">
            <span
              className="text-[clamp(4.25rem,14vw,7.5rem)] leading-[0.9]"
              style={{
                fontFamily: "var(--font-signature), Allura, cursive",
                paddingInline: "0.12em 0.06em",
                paddingBottom: "0.06em",
                backgroundImage:
                  "linear-gradient(180deg, #f5e6a8 0%, #e8c547 42%, #b8922a 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 8px 28px rgba(232, 197, 71, 0.28))",
              }}
            >
              Sisters
            </span>
            <span className="mt-4 flex w-full max-w-[16rem] items-center gap-3 sm:max-w-[20rem]">
              <span
                aria-hidden
                className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e8c547]/80 to-[#e8c547]/80"
              />
              <span className="font-display text-[0.72rem] font-medium uppercase tracking-[0.62em] text-[#e8c547] sm:text-[0.8rem]">
                of
              </span>
              <span
                aria-hidden
                className="h-px flex-1 bg-gradient-to-l from-transparent via-[#e8c547]/80 to-[#e8c547]/80"
              />
            </span>
            <span
              className="mt-3.5 font-display text-[clamp(1.25rem,3.4vw,1.85rem)] font-semibold uppercase tracking-[0.48em] text-[#e8c547]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #f5e6a8 0%, #e8c547 45%, #b8922a 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Surgery
            </span>
          </h1>
          <p className="mx-auto mt-5 text-[10px] font-medium uppercase tracking-[0.46em] text-white/50 sm:text-[11px]">
            {brand.tagline}
          </p>
          <p className="mx-auto mt-7 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
            Le podcast de Sabrina &amp; Suzie. On parle chirurgie et médecine
            esthétique — sans tabou, sans complexe.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="/contact" variant="gold" className="min-w-[200px]">
              {brand.contact.messageLabel}
            </Button>
            <Button
              href="#podcast"
              variant="outline"
              className="min-w-[200px] border-white/40 text-white hover:border-[#c4a029] hover:bg-transparent hover:text-[#c4a029]"
            >
              Le podcast
            </Button>
          </div>
        </div>
      </section>

      <section
        id="concept"
        className="scroll-mt-28 border-t border-[#1a1a1a]/8 bg-white py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe7df]">
            <Image
              src="/images/podcast-studio-1.jpg"
              alt="Studio Sisters of Surgery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#917812]">
              Le concept
            </p>
            <h2 className="mt-3 font-display text-3xl text-[#1a1a1a] md:text-4xl">
              Sisters of Surgery
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
              C’est le podcast de Sabrina &amp; Suzie. On parle de chirurgie et
              de médecine esthétique sans tabou et sans complexe — pour
              comprendre, échanger, et avancer sereinement.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
              Une conversation claire, humaine, et accessible. Si vous avez une
              question ou un projet, on est là.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block text-[12px] font-medium uppercase tracking-[0.2em] text-[#917812] underline-offset-4 transition hover:underline"
            >
              Nous écrire →
            </Link>
          </div>
        </div>
      </section>

      <section
        id="podcast"
        className="scroll-mt-28 bg-black py-16 text-white md:py-24"
      >
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#c4a029]">
            Le podcast
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Épisodes &amp; conversations
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            Des échanges sur l’esthétique, les parcours et les questions que
            tout le monde se pose — bientôt à retrouver ici.
          </p>
          <div className="mt-10">
            <Button href="/videos" variant="gold">
              Voir les vidéos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
