import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { VideoCard } from "@/components/video/VideoCard";
import { Badge } from "@/components/ui/Badge";
import { categoryList } from "@/data/categories";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Toutes les vidéos",
  description:
    "Catalogue vidéo Sisters of Surgery : interventions, témoignages et explications médicales.",
};

function VideosCatalog({
  q,
  categorie,
}: {
  q?: string;
  categorie?: string;
}) {
  const query = q?.trim().toLowerCase() ?? "";

  const filtered = videos.filter((v) => {
    const matchCat = categorie ? v.category === categorie : true;
    const matchQ = query
      ? v.title.toLowerCase().includes(query) ||
        v.description.toLowerCase().includes(query)
      : true;
    return matchCat && matchQ;
  });

  return (
    <>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        <Link
          href="/videos"
          className={`rounded-xl px-2 py-2.5 text-center text-[11px] uppercase tracking-[0.1em] transition ${
            !categorie
              ? "bg-bordeaux text-cream"
              : "bg-ivory-deep text-ink-soft hover:text-ink"
          }`}
        >
          Toutes
        </Link>
        {categoryList.map((cat) => (
          <Link
            key={cat.slug}
            href={`/videos?categorie=${cat.slug}`}
            className={`rounded-xl px-2 py-2.5 text-center text-[11px] uppercase leading-snug tracking-[0.1em] transition ${
              categorie === cat.slug
                ? "bg-bordeaux text-cream"
                : "bg-ivory-deep text-ink-soft hover:text-ink"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {query && (
        <p className="mt-6 text-sm text-muted">
          Résultats pour « {q} » · {filtered.length} vidéo
          {filtered.length > 1 ? "s" : ""}
        </p>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} squareOnMobile />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center">
          <Badge>Aucun résultat</Badge>
          <p className="mt-4 text-ink-soft">
            Essayez une autre catégorie ou un autre mot-clé.
          </p>
        </div>
      )}
    </>
  );
}

async function VideosCatalogFromParams({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; categorie?: string }>;
}) {
  const { q, categorie } = await searchParams;
  return <VideosCatalog q={q} categorie={categorie} />;
}

export default function VideosPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; categorie?: string }>;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
        Catalogue
      </p>
      <h1 className="font-serif text-3xl text-ink md:text-5xl">Toutes les vidéos</h1>

      <Suspense
        fallback={
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square animate-pulse rounded-sm bg-beige sm:aspect-video"
              />
            ))}
          </div>
        }
      >
        <VideosCatalogFromParams searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
