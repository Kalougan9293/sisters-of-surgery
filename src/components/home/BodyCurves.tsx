"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Uniquement des interventions courantes en chirurgie esthétique */
const FACE_TERMS = [
  "Rhinoplastie",
  "Blépharoplastie",
  "Lifting du visage",
  "Lipofilling du visage",
];

const BREAST_TERMS = [
  "Augmentation mammaire",
  "Réduction mammaire",
  "Mastopexie",
  "Lipofilling mammaire",
];

const ABDOMEN_TERMS = ["Abdominoplastie", "Liposuccion"];

const BBL_TERMS = ["BBL", "Lipofilling fessier"];

function CyclingLabel({
  terms,
  intervalMs = 5500,
}: {
  terms: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % terms.length);
        setVisible(true);
      }, 450);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [terms.length, intervalMs]);

  return (
    <span
      className={cn(
        "shrink-0 whitespace-nowrap font-display text-[10px] font-light tracking-[0.12em] text-[#1a1a1a] transition-opacity duration-500 md:text-[12px]",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      {terms[index]}
    </span>
  );
}

/** Trait délicat — quasi fil de soie */
function Hairline() {
  return (
    <span
      aria-hidden
      className="mx-2 min-w-[20px] flex-1 bg-[#1a1a1a]/55"
      style={{ height: "0.25px" }}
    />
  );
}

function Dot() {
  return (
    <span
      aria-hidden
      className="shrink-0 rounded-full bg-[#1a1a1a]/70"
      style={{ width: 1.5, height: 1.5 }}
    />
  );
}

/** [texte] ————• — texte au bout du trait */
function LabelLeft({
  terms,
  top,
  endAt,
  intervalMs,
}: {
  terms: string[];
  top: string;
  endAt: string;
  intervalMs: number;
}) {
  return (
    <div
      className="absolute left-0 z-20 flex items-center"
      style={{
        top,
        width: endAt,
        transform: "translateY(-50%)",
      }}
    >
      <CyclingLabel terms={terms} intervalMs={intervalMs} />
      <Hairline />
      <Dot />
    </div>
  );
}

/** •———— [texte] */
function LabelRight({
  terms,
  top,
  startAt,
  intervalMs,
}: {
  terms: string[];
  top: string;
  startAt: string;
  intervalMs: number;
}) {
  return (
    <div
      className="absolute right-0 z-20 flex items-center"
      style={{
        top,
        left: startAt,
        transform: "translateY(-50%)",
      }}
    >
      <Dot />
      <Hairline />
      <CyclingLabel terms={terms} intervalMs={intervalMs} />
    </div>
  );
}

/**
 * Silhouette + légendes.
 * Points : regard / poitrine / ventre / fesses.
 */
export function BodyCurves({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[480px] md:max-w-[560px]",
        className,
      )}
    >
      <Image
        src="/images/corps-esthetique.jpg"
        alt=""
        width={360}
        height={480}
        className="relative z-0 mx-auto h-auto w-[210px] object-contain md:w-[270px]"
        sizes="(max-width: 768px) 210px, 270px"
      />

      {/* Regard / nez — milieu du visage */}
      <LabelLeft
        terms={FACE_TERMS}
        top="11.5%"
        endAt="50%"
        intervalMs={3800}
      />

      {/* Poitrine — centre de la poitrine */}
      <LabelRight
        terms={BREAST_TERMS}
        top="40%"
        startAt="54%"
        intervalMs={4000}
      />

      {/* Ventre */}
      <LabelLeft
        terms={ABDOMEN_TERMS}
        top="57%"
        endAt="50%"
        intervalMs={3900}
      />

      {/* Fesses — inchangé */}
      <LabelRight
        terms={BBL_TERMS}
        top="73%"
        startAt="55%"
        intervalMs={3700}
      />
    </div>
  );
}
