import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { VideoCard } from "@/components/video/VideoCard";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import {
  getInterventionBySlug,
  interventions,
} from "@/data/interventions";
import { getVideosByIntervention } from "@/data/videos";

export function generateStaticParams() {
  return interventions.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getInterventionBySlug(slug);
  if (!item) return { title: "Intervention" };
  return { title: item.name, description: item.tagline };
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24 border-t border-ink/10 py-5 md:py-8">
      <h2 className="font-serif text-xl text-ink md:text-3xl">{title}</h2>
      <div className="mt-3 text-sm md:mt-4 md:text-base">{children}</div>
    </section>
  );
}

export default async function InterventionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getInterventionBySlug(slug);
  if (!item) notFound();

  const relatedVideos = getVideosByIntervention(slug);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0">
          <Image
            src={item.imageSrc}
            alt=""
            fill
            className="object-cover opacity-35"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/92 to-ivory/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-16 lg:px-8">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
            Intervention
          </p>
          <h1 className="max-w-3xl font-serif text-3xl text-ink md:text-5xl">
            {item.name}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft md:text-lg">
            {item.tagline}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-2 md:px-6 md:py-4 lg:px-0">
        <Block title="Présentation">
          <p className="leading-relaxed text-ink-soft">{item.presentation}</p>
        </Block>

        <Block title="Déroulement général">
          <ol className="space-y-3">
            {item.deroulement.map((step, i) => (
              <li key={step} className="flex gap-4 text-ink-soft">
                <span className="font-serif text-xl text-bordeaux">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Techniques existantes">
          <div className="space-y-4">
            {item.techniques.map((t) => (
              <div
                key={t.name}
                className="rounded-sm border border-ink/10 bg-cream/60 p-4"
              >
                <h3 className="font-medium text-ink">{t.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{t.description}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Préparation">
          <ul className="list-disc space-y-2 pl-5 text-ink-soft">
            {item.preparation.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Block>

        <Block title="Suites opératoires">
          <ul className="list-disc space-y-2 pl-5 text-ink-soft">
            {item.suites.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Block>

        <Block title="Risques et complications">
          <ul className="list-disc space-y-2 pl-5 text-ink-soft">
            {item.risques.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Block>

        <Block title="Résultats et limites">
          <ul className="list-disc space-y-2 pl-5 text-ink-soft">
            {item.resultats.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Block>

        <Block title="Questions fréquentes">
          <div className="space-y-4">
            {item.faq.map((f) => (
              <div key={f.question}>
                <h3 className="font-medium text-ink">{f.question}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </Block>

        <div className="py-5">
          <MedicalDisclaimer compact />
        </div>
      </div>

      {relatedVideos.length > 0 && (
        <section className="border-t border-ink/10 bg-ivory-deep/40 py-8 md:py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <h2 className="mb-4 font-serif text-2xl text-ink md:text-3xl">
              Vidéos associées
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {relatedVideos.map((v) => (
                <VideoCard key={v.id} video={v} squareOnMobile />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
