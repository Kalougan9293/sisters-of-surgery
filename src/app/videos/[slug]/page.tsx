import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { VideoCard } from "@/components/video/VideoCard";
import { Badge } from "@/components/ui/Badge";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import { categoryLabels } from "@/data/categories";
import {
  getRelatedVideos,
  getVideoBySlug,
  videos,
} from "@/data/videos";
import { formatDate, formatViews } from "@/lib/utils";

export function generateStaticParams() {
  return videos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) return { title: "Vidéo introuvable" };
  return {
    title: video.title,
    description: video.description,
  };
}

export default async function VideoWatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) notFound();

  const index = videos.findIndex((v) => v.slug === slug);
  const previous = index > 0 ? videos[index - 1] : null;
  const next = index < videos.length - 1 ? videos[index + 1] : null;
  const related = getRelatedVideos(slug, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:gap-8">
        <div>
          <VideoPlayer video={video} previous={previous} next={next} />

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge>{categoryLabels[video.category]}</Badge>
            <span className="text-xs text-muted">
              {video.duration} · {formatDate(video.publishedAt)} ·{" "}
              {formatViews(video.views)} vues
            </span>
          </div>

          <h1 className="mt-2 font-serif text-2xl leading-snug text-ink md:text-4xl">
            {video.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
            {video.description}
          </p>

          {video.interventionSlug && (
            <p className="mt-3 text-sm">
              <Link
                href={`/interventions/${video.interventionSlug}`}
                className="font-medium text-bordeaux hover:underline"
              >
                Fiche intervention →
              </Link>
            </p>
          )}

          <div className="mt-5">
            <MedicalDisclaimer compact />
          </div>
        </div>

        <aside>
          <h2 className="mb-3 font-serif text-xl text-ink">Recommandées</h2>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
            {related.map((item) => (
              <VideoCard key={item.id} video={item} squareOnMobile />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
