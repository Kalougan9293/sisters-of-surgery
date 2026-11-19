import Image from "next/image";
import { BrandWordmark } from "@/components/home/BrandWordmark";
import { ContactForm } from "@/components/home/ContactForm";
import { RevealImage } from "@/components/ui/RevealImage";
import { Button } from "@/components/ui/Button";

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
                className="min-h-[3.25rem] w-full text-[13px] sm:w-auto sm:min-w-[240px]"
              >
                Nous écrire
              </Button>
              <p className="text-[11px] tracking-wide text-white/70">
                Message privé · réponse personnelle
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 bg-[#f7f5f0] px-4 py-14 md:px-6 md:py-16"
      >
        <div className="mx-auto max-w-xl">
          <div className="border border-[#917812]/25 bg-white px-5 py-8 shadow-[0_24px_60px_-28px_rgba(26,26,26,0.2)] md:px-8 md:py-10">
            <p className="text-center text-[11px] uppercase tracking-[0.28em] text-[#917812]">
              Contact
            </p>
            <h2 className="mt-3 text-center font-display text-2xl text-[#1a1a1a] md:text-3xl">
              On vous lit
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-[#4a4a4a]">
              Une question, une envie d’échanger&nbsp;? Envoyez un message —
              on revient vers vous rapidement.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section
        id="concept"
        className="scroll-mt-28 border-t border-[#1a1a1a]/8 bg-white py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6 lg:px-8">
          <RevealImage
            src="/images/podcast-studio-1.jpg"
            alt="Studio Sisters of Surgery"
            direction="left"
            className="aspect-[4/5] md:aspect-[3/4]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div>
            <h2 className="font-display text-3xl text-[#1a1a1a] md:text-4xl">
              Le concept
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
              Un podcast où l’on peut parler de chirurgie esthétique sans tabou
              et sans complexe — avec Sabrina &amp; Suzie.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
              Et si vous voulez nous écrire, on est là pour vous lire.
            </p>
            <Button href="#contact" variant="gold" className="mt-8">
              Nous écrire
            </Button>
          </div>
        </div>
      </section>

      <section
        id="podcast"
        className="scroll-mt-28 overflow-hidden bg-[#f7f5f0] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-[#1a1a1a] md:text-4xl">
              Vidéos
            </h2>
            <div className="mt-8">
              <Button href="/videos" variant="gold">
                Voir les vidéos
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <RevealImage
              src="/images/podcast-studio-2.jpg"
              alt="Vidéo à venir"
              direction="left"
              showPlay
              className="aspect-[16/10]"
              sizes="(max-width: 640px) 100vw, 50vw"
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
      </section>
    </>
  );
}
