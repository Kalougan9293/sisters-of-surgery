"use client";

import {
  Maximize,
  Minimize,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Video } from "@/data/types";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  video: Video;
  previous?: Video | null;
  next?: Video | null;
  className?: string;
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VideoPlayer({
  video,
  previous,
  next,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = useCallback(async () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      await el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
    setProgress(0);
    setMuted(true);
    el.muted = true;
  }, [video.slug]);

  useEffect(() => {
    const onFs = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  async function toggleFullscreen() {
    const node = containerRef.current;
    if (!node) return;
    if (!document.fullscreenElement) {
      await node.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }

  function onSeek(value: number) {
    const el = videoRef.current;
    if (!el || !duration) return;
    el.currentTime = (value / 100) * duration;
    setProgress(value);
  }

  function onVolume(value: number) {
    const el = videoRef.current;
    if (!el) return;
    const v = value / 100;
    el.volume = v;
    setVolume(v);
    setMuted(v === 0);
    el.muted = v === 0;
  }

  function toggleMute() {
    const el = videoRef.current;
    if (!el) return;
    const nextMuted = !muted;
    el.muted = nextMuted;
    setMuted(nextMuted);
    if (!nextMuted && volume === 0) {
      el.volume = 0.8;
      setVolume(0.8);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative overflow-hidden rounded-sm bg-ink",
        className,
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(playing ? false : true)}
    >
      <video
        ref={videoRef}
        src={video.videoSrc}
        poster={video.posterSrc}
        preload="metadata"
        playsInline
        muted={muted}
        className="aspect-video w-full object-cover"
        onClick={togglePlay}
        onTimeUpdate={(e) => {
          const t = e.currentTarget.currentTime;
          const d = e.currentTarget.duration || 0;
          setProgress(d ? (t / d) * 100 : 0);
        }}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-ink/20"
          aria-label="Lire la vidéo"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-bordeaux shadow-xl transition hover:scale-105">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
        </button>
      )}

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent px-3 pb-3 pt-10 transition duration-300",
          showControls || !playing ? "opacity-100" : "opacity-0",
        )}
      >
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={(e) => onSeek(Number(e.target.value))}
          className="mb-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-cream/25 accent-bordeaux"
          aria-label="Progression"
        />

        <div className="flex items-center gap-2 text-cream">
          {previous && (
            <Link
              href={`/videos/${previous.slug}`}
              className="rounded p-1.5 hover:bg-cream/10"
              aria-label="Vidéo précédente"
            >
              <SkipBack className="h-4 w-4" />
            </Link>
          )}

          <button
            type="button"
            onClick={togglePlay}
            className="rounded p-1.5 hover:bg-cream/10"
            aria-label={playing ? "Pause" : "Lecture"}
          >
            {playing ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 fill-current" />
            )}
          </button>

          {next && (
            <Link
              href={`/videos/${next.slug}`}
              className="rounded p-1.5 hover:bg-cream/10"
              aria-label="Vidéo suivante"
            >
              <SkipForward className="h-4 w-4" />
            </Link>
          )}

          <div className="ml-1 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMute}
              className="rounded p-1.5 hover:bg-cream/10"
              aria-label={muted ? "Activer le son" : "Couper le son"}
            >
              {muted || volume === 0 ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={100}
              value={muted ? 0 : volume * 100}
              onChange={(e) => onVolume(Number(e.target.value))}
              className="hidden w-20 accent-bordeaux sm:block"
              aria-label="Volume"
            />
          </div>

          <span className="ml-2 text-xs tabular-nums text-cream/80">
            {formatTime((progress / 100) * duration)} / {formatTime(duration)}
          </span>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="ml-auto rounded p-1.5 hover:bg-cream/10"
            aria-label={fullscreen ? "Quitter le plein écran" : "Plein écran"}
          >
            {fullscreen ? (
              <Minimize className="h-4 w-4" />
            ) : (
              <Maximize className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
