import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Video } from "@/data/types";
import { VideoCard } from "@/components/video/VideoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LatestVideos({ videos }: { videos: Video[] }) {
  return (
    <section className="mx-auto max-w-7xl border-t border-ink/8 px-4 py-8 md:px-6 md:py-14 lg:px-8">
      <SectionHeading
        align="center"
        eyebrow="Média vidéo"
        title="Dernières vidéos"
        description="Contenus fictifs de démonstration."
        action={
          <Link
            href="/videos"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-bordeaux transition hover:gap-3"
          >
            Découvrir nos vidéos
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {videos.slice(0, 4).map((video) => (
          <VideoCard key={video.id} video={video} squareOnMobile />
        ))}
      </div>
    </section>
  );
}
