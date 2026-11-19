import Image from "next/image";
import Link from "next/link";
import { Play, TrendingUp } from "lucide-react";
import type { Video } from "@/data/types";
import { categoryLabels } from "@/data/categories";
import { formatViews } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PopularVideos({ videos }: { videos: Video[] }) {
  const [main, ...rest] = videos;

  if (!main) return null;

  return (
    <section className="bg-ivory-deep/50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Audience"
          title="Vidéos populaires"
          description="Les contenus les plus consultés de la démonstration Sisters of Surgery."
          action={
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <TrendingUp className="h-4 w-4 text-bordeaux" />
              Classement indicatif
            </span>
          }
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Link
            href={`/videos/${main.slug}`}
            className="group relative aspect-[16/11] overflow-hidden rounded-sm bg-beige lg:aspect-auto lg:min-h-[420px]"
          >
            <Image
              src={main.posterSrc}
              alt=""
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-cream/75">
                {categoryLabels[main.category]} · {formatViews(main.views)} vues
              </p>
              <h3 className="font-serif text-2xl text-cream md:text-3xl">
                {main.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-cream">
                <Play className="h-4 w-4 fill-current" />
                Lire · {main.duration}
              </span>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            {rest.map((video, index) => (
              <Link
                key={video.id}
                href={`/videos/${video.slug}`}
                className="group flex gap-4 rounded-sm border border-ink/8 bg-cream/50 p-3 transition hover:border-bordeaux/25 hover:bg-cream"
              >
                <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-sm bg-beige sm:h-28 sm:w-44">
                  <Image
                    src={video.posterSrc}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="176px"
                  />
                  <span className="absolute bottom-1.5 right-1.5 rounded bg-ink/70 px-1.5 py-0.5 text-[10px] text-cream">
                    {video.duration}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-bordeaux">
                    #{index + 2} · {categoryLabels[video.category]}
                  </p>
                  <h3 className="mt-1 font-serif text-lg leading-snug text-ink transition group-hover:text-bordeaux">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted">
                    {formatViews(video.views)} vues
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
