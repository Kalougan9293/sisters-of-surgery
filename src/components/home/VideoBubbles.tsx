"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Video } from "@/data/types";
import { categoryLabels } from "@/data/categories";
import { cn } from "@/lib/utils";

function shortLabel(video: Video) {
  const fromCategory = categoryLabels[video.category];
  if (fromCategory.length <= 22) return fromCategory.toLowerCase();
  return (
    video.title.split(/[:!?·—-]/)[0]?.trim().toLowerCase() ??
    fromCategory.toLowerCase()
  );
}

export function VideoBubbles({ videos }: { videos: Video[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEdges() {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(max <= 8 || el.scrollLeft >= max - 8);
  }

  useEffect(() => {
    updateEdges();
    const el = scrollerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);
    return () => ro.disconnect();
  }, [videos]);

  function scrollByDir(dir: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(340, el.clientWidth * 0.72);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden border-t border-ink/8 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
            Podcast
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Épisodes
          </h2>
          <p className="mt-3 text-sm text-ink-soft md:text-base">
            Glissez sur le côté pour parcourir nos thématiques.
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={updateEdges}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-none md:gap-5 md:px-6 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video, i) => (
            <Link
              key={video.id}
              href={`/videos/${video.slug}`}
              className={cn(
                "group relative h-[22rem] w-[11.5rem] shrink-0 snap-start overflow-hidden rounded-[100px] bg-beige shadow-[0_18px_40px_-24px_rgba(61,36,32,0.45)] ring-1 ring-ink/8 transition duration-500 sm:h-[26rem] sm:w-[13.5rem] md:h-[28rem] md:w-[14.5rem]",
                "hover:-translate-y-1 hover:ring-bordeaux/30",
              )}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <Image
                src={video.posterSrc}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 184px, 232px"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-ink/10" />
              <span className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <span className="font-serif text-lg leading-snug text-cream drop-shadow-sm sm:text-xl">
                  {shortLabel(video)}
                </span>
              </span>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-cream/90 px-2.5 py-1 text-[10px] font-medium tracking-wide text-bordeaux opacity-0 transition group-hover:opacity-100">
                {video.duration}
              </span>
            </Link>
          ))}
          {/* spacer so last bubble can breathe on the right */}
          <div className="w-2 shrink-0 sm:w-4" aria-hidden />
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 px-4 md:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            disabled={atStart}
            aria-label="Vidéos précédentes"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-cream text-ink transition hover:border-bordeaux/40 hover:text-bordeaux disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            disabled={atEnd}
            aria-label="Vidéos suivantes"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-cream text-ink transition hover:border-bordeaux/40 hover:text-bordeaux disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
