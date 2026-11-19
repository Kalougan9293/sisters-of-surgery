"use client";

import Image from "next/image";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import type { Video } from "@/data/types";
import { cn } from "@/lib/utils";

export function HeroMedia({ video }: { video: Video }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  async function play() {
    const el = ref.current;
    if (!el) return;
    setStarted(true);
    el.muted = false;
    setMuted(false);
    try {
      await el.play();
      setPlaying(true);
    } catch {
      el.muted = true;
      setMuted(true);
      await el.play();
      setPlaying(true);
    }
  }

  async function toggle() {
    const el = ref.current;
    if (!el) return;
    if (!started) {
      await play();
      return;
    }
    if (el.paused) {
      await el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  function toggleMute(e: React.MouseEvent) {
    e.stopPropagation();
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }

  return (
    <div
      className={cn(
        "animate-fade-up delay-1 group relative aspect-video w-full max-w-md overflow-hidden rounded-sm bg-ink shadow-[0_30px_80px_-30px_rgba(61,36,32,0.4)] sm:max-w-xl lg:max-w-3xl",
      )}
    >
      <video
        ref={ref}
        src={video.videoSrc}
        poster={video.posterSrc}
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {!started && (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 z-10"
          aria-label="Lancer la vidéo"
        >
          <Image
            src={video.posterSrc}
            alt={`Couverture — ${video.title}`}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 90vw, 768px"
            priority
          />
          <span className="absolute inset-0 bg-ink/15 transition group-hover:bg-ink/25" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-bordeaux shadow-xl transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
              <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
            </span>
          </span>
          <span className="absolute bottom-3 right-3 rounded-sm bg-ink/75 px-2.5 py-1 text-xs text-cream backdrop-blur-sm sm:bottom-4 sm:right-4">
            {video.duration}
          </span>
        </button>
      )}

      {started && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-ink/70 to-transparent p-3 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
          <button
            type="button"
            onClick={toggle}
            className="pointer-events-auto rounded-full bg-cream/95 p-2 text-bordeaux"
            aria-label={playing ? "Pause" : "Lecture"}
          >
            {playing ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4 fill-current" />
            )}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="pointer-events-auto rounded-full bg-cream/95 p-2 text-bordeaux"
            aria-label={muted ? "Activer le son" : "Couper le son"}
          >
            {muted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
