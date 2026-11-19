"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface HeartParticle {
  id: number;
  x: number;
  y: number;
  drift: number;
  size: number;
  duration: number;
  color: string;
}

const COLORS = ["#C45C6A", "#9C5A4E", "#E8A0B0", "#B87366"];

let heartId = 0;

export function spawnHearts(clientX: number, clientY: number, count = 5) {
  window.dispatchEvent(
    new CustomEvent("sos-hearts", {
      detail: { x: clientX, y: clientY, count },
    }),
  );
}

export function HeartBurstHost() {
  const [mounted, setMounted] = useState(false);
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    setMounted(true);

    function onBurst(e: Event) {
      const { x, y, count = 5 } = (e as CustomEvent).detail as {
        x: number;
        y: number;
        count?: number;
      };

      const n = Math.min(count, 5);
      const batch: HeartParticle[] = Array.from({ length: n }, (_, i) => ({
        id: ++heartId,
        x: x + (i - (n - 1) / 2) * 8,
        y,
        drift: (i - (n - 1) / 2) * 12,
        size: 15 + (i % 3) * 2,
        duration: 420,
        color: COLORS[i % COLORS.length]!,
      }));

      setHearts((prev) => [...prev, ...batch]);
      window.setTimeout(() => {
        setHearts((prev) => prev.filter((h) => !batch.some((b) => b.id === h.id)));
      }, 450);
    }

    window.addEventListener("sos-hearts", onBurst);
    return () => window.removeEventListener("sos-hearts", onBurst);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-pop absolute select-none"
          style={
            {
              left: h.x,
              top: h.y,
              fontSize: h.size,
              color: h.color,
              animationDuration: `${h.duration}ms`,
              "--drift": `${h.drift}px`,
            } as React.CSSProperties
          }
          aria-hidden
        >
          ♥
        </span>
      ))}
    </div>,
    document.body,
  );
}
