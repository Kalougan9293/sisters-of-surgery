"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  direction = "left",
  sizes,
  priority = false,
  showPlay = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  direction?: "left" | "right";
  sizes?: string;
  priority?: boolean;
  showPlay?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden transition duration-1000 ease-out will-change-transform",
        visible
          ? "translate-x-0 opacity-100"
          : direction === "left"
            ? "-translate-x-12 opacity-0"
            : "translate-x-12 opacity-0",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover", imgClassName)}
        sizes={sizes}
      />
      {showPlay && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#1a1a1a] shadow-lg sm:h-16 sm:w-16">
            <Play className="ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7" aria-hidden />
          </span>
          <span className="sr-only">Vidéo à venir</span>
        </span>
      )}
    </div>
  );
}
