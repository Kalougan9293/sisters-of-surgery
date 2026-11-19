"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Video } from "@/data/types";
import { cn } from "@/lib/utils";

export function HeroMedia({
  video,
  variant = "framed",
}: {
  video: Video;
  variant?: "framed" | "bleed";
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const bleed = variant === "bleed";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.muted = true;
    setMuted(true);

    const tryPlay = async () => {
      try {
        await el.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };

    void tryPlay();
  }, [video.videoSrc]);

  async function toggle() {
    const el = ref.current;
    if (!el) return;
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
        "group relative w-full overflow-hidden bg-ink",
        bleed
          ? "aspect-[16/10] min-h-[42vh] sm:min-h-[48vh] md:aspect-[21/9] md:min-h-[52vh]"
          : "animate-fade-up delay-1 mx-auto max-w-md sm:max-w-xl lg:max-w-3xl",
        !bleed && "aspect-video shadow-[0_24px_60px_-28px_rgba(61,36,32,0.5)] ring-1 ring-[#9C5A4E]/25",
      )}
    >
      {!bleed && (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1 -top-1 z-20 h-7 w-7 border-l-2 border-t-2 border-[#C4786A] sm:h-9 sm:w-9"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-1 -top-1 z-20 h-7 w-7 border-r-2 border-t-2 border-[#C4786A] sm:h-9 sm:w-9"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-1 -left-1 z-20 h-7 w-7 border-b-2 border-l-2 border-[#C4786A] sm:h-9 sm:w-9"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-1 -right-1 z-20 h-7 w-7 border-b-2 border-r-2 border-[#C4786A] sm:h-9 sm:w-9"
          />
        </>
      )}

      <video
        ref={ref}
        src={video.videoSrc}
        poster={video.posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-ink/50 to-transparent p-3 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100 sm:p-4">
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
    </div>
  );
}
