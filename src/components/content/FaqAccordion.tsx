"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/types";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const openItem = items.find((i) => i.id === openId) ?? null;

  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3">
        {items.map((item) => {
          const open = openId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
              className={cn(
                "flex aspect-square flex-col items-start justify-between rounded-xl border p-3 text-left transition sm:aspect-[4/3] sm:p-4",
                open
                  ? "border-bordeaux bg-bordeaux text-cream shadow-md shadow-bordeaux/20"
                  : "border-ink/8 bg-cream/80 text-ink active:border-bordeaux/40",
              )}
            >
              <span
                className={cn(
                  "text-[10px] uppercase tracking-[0.14em]",
                  open ? "text-cream/75" : "text-bordeaux",
                )}
              >
                {item.category}
              </span>
              <span className="font-serif text-[0.95rem] leading-snug sm:text-lg">
                {item.question}
              </span>
            </button>
          );
        })}
      </div>

      {openItem && (
        <div className="mt-3 rounded-xl border border-bordeaux/20 bg-cream p-3.5 sm:p-4">
          <p className="text-[10px] uppercase tracking-[0.14em] text-bordeaux">
            {openItem.category}
          </p>
          <p className="mt-1 font-serif text-base text-ink sm:text-lg">
            {openItem.question}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {openItem.answer}
          </p>
          <button
            type="button"
            onClick={() => setOpenId(null)}
            className="mt-3 text-xs text-muted"
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}
