"use client";

import { useState } from "react";
import { Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EnvieQuiz } from "@/components/envie/EnvieQuiz";
import { spawnHearts } from "@/components/envie/HeartBurst";

export function HeroCtas() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <div className="grid w-full max-w-md grid-cols-2 gap-3 lg:max-w-lg">
        <button
          type="button"
          onClick={(e) => {
            spawnHearts(e.clientX, e.clientY, 4);
            setQuizOpen(true);
          }}
          className="btn-shine inline-flex h-auto min-h-[3.25rem] w-full touch-manipulation flex-row items-center justify-center gap-2 overflow-visible rounded-sm px-2 py-2.5 text-center text-[12px] font-semibold leading-tight text-white transition-all duration-300 sm:px-3 sm:text-sm"
          style={{
            backgroundColor: "#F25C8A",
            boxShadow: "0 12px 32px -10px rgba(242, 92, 138, 0.65)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E8487A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#F25C8A";
          }}
        >
          <Heart className="h-4 w-4 shrink-0 fill-current" />
          <span className="whitespace-nowrap">Votre envie</span>
        </button>
        <Button
          href="/videos"
          variant="outline"
          className="h-auto min-h-[3.25rem] w-full flex-row gap-2 overflow-visible px-2 py-2.5 text-center text-[11px] leading-tight sm:px-3 sm:text-sm"
        >
          <Play className="h-4 w-4 shrink-0 fill-current" />
          <span className="whitespace-nowrap">Découvrir nos vidéos</span>
        </Button>
      </div>

      <EnvieQuiz open={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
