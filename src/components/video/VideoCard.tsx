import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import type { Video } from "@/data/types";
import { categoryLabels } from "@/data/categories";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function VideoCard({
  video,
  squareOnMobile = false,
}: {
  video: Video;
  squareOnMobile?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col text-center sm:text-left">
      <Link
        href={`/videos/${video.slug}`}
        className={cn(
          "relative mb-2.5 block overflow-hidden rounded-sm bg-beige sm:mb-4",
          squareOnMobile ? "aspect-square sm:aspect-video" : "aspect-video",
        )}
      >
        <Image
          src={video.posterSrc}
          alt=""
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-80" />
        <span className="absolute bottom-2 left-2 rounded-sm bg-ink/70 px-1.5 py-0.5 text-[10px] text-cream backdrop-blur-sm sm:bottom-3 sm:left-3 sm:px-2 sm:py-1 sm:text-[11px]">
          {video.duration}
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-bordeaux shadow-lg transition duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
            <Play className="ml-0.5 h-4 w-4 fill-current sm:h-5 sm:w-5" aria-hidden />
          </span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col items-center sm:items-start">
        <Badge className="mb-1.5 hidden w-fit sm:mb-2 sm:inline-flex">
          {categoryLabels[video.category]}
        </Badge>
        <h3 className="font-serif text-[0.95rem] leading-snug text-ink transition group-hover:text-bordeaux sm:text-xl">
          <Link href={`/videos/${video.slug}`} className="line-clamp-2">
            {video.title}
          </Link>
        </h3>
        <p className="mt-auto hidden pt-3 text-xs text-muted sm:block">
          {formatDate(video.publishedAt)}
        </p>
      </div>
    </article>
  );
}
