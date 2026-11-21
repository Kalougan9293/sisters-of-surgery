import Image from "next/image";
import { BodyCurves } from "@/components/home/BodyCurves";
import { BrandWordmark } from "@/components/home/BrandWordmark";
import { ContactForm } from "@/components/home/ContactForm";
import { RevealImage } from "@/components/ui/RevealImage";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#2a221c]">
        <div className="relative min-h-[62vh] md:min-h-[68vh]">
          <Image
            src="/images/podcast-studio-2.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#2a221c]/45" />

          <div className="relative mx-auto flex min-h-[62vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center md:min-h-[68vh] md:px-6 md:py-20">
            <h1>
              <BrandWordmark />
            </h1>

            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white md:text-lg">
              Écrivez-nous — Sabrina &amp; Suzie vous répondent
              personnellement.
            </p>

            <div className="mt-9 flex w-full max-w-md flex-col items-center gap-3">
              <Button
                href="#contact"
                variant="gold"
                className="w-full sm:w-auto sm:min-w-[200px]"
              >
                Nous écrire
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="concept"
        className="scroll-mt-28 border-t border-[#1a1a1a]/8 bg-white py-16 md:py-24"
      >
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6 lg:px-8">
          <SectionTitle>Le concept</SectionTitle>
          <p className="mt-6 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
            Un podcast où l’on peut parler de chirurgie esthétique sans tabou
            et sans complexe — avec Sabrina &amp; Suzie.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
            Ce sujet reste encore sensible pour beaucoup — ici, on ouvre la
            conversation sur tout ce que vous vous demandez vraiment.
          </p>
          <BodyCurves className="mt-10" />
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 bg-[#f7f5f0] px-4 pt-14 pb-6 md:px-6 md:pt-16 md:pb-8"
      >
        <div className="mx-auto max-w-xl">
          <div className="border border-[#917812]/25 bg-white px-5 py-8 shadow-[0_24px_60px_-28px_rgba(26,26,26,0.2)] md:px-8 md:py-10">
            <SectionTitle>Contact</SectionTitle>
            <p className="mx-auto mt-6 max-w-sm text-center text-sm leading-relaxed text-[#4a4a4a]">
              Un témoignage à nous confier, ou besoin d’un conseil&nbsp;?
              Suzie &amp; Sabrina vous répondent personnellement.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section
        id="podcast"
        className="scroll-mt-28 overflow-hidden bg-[#f7f5f0] pt-6 pb-16 md:pt-8 md:pb-24"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle>Vidéos</SectionTitle>
            <div className="mt-8">
              <span
                aria-disabled="true"
                className="btn-cta inline-flex cursor-default items-center justify-center gap-2 px-5 py-2.5"
              >
                Voir les vidéos
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 border border-[#917812]/45 md:-inset-2.5"
              />
              <RevealImage
                src="/images/podcast-studio-2.jpg"
                alt="Vidéo à venir"
                direction="left"
                showPlay
                className="aspect-[16/10]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 border border-[#917812]/45 md:-inset-2.5"
              />
              <RevealImage
                src="/images/podcast-studio-1.jpg"
                alt="Vidéo à venir"
                direction="right"
                showPlay
                className="aspect-[16/10]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
