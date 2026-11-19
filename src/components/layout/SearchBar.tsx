"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SearchBar({
  className,
  placeholder = "Rechercher une vidéo, une intervention…",
}: {
  className?: string;
  placeholder?: string;
}) {
  const [q, setQ] = useState("");
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    router.push(`/videos?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex items-center gap-2 rounded-sm border border-ink/10 bg-cream/70 px-3 py-2 transition focus-within:border-bordeaux/35",
        className,
      )}
      role="search"
    >
      <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden />
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
        aria-label="Recherche"
      />
      {q && (
        <button
          type="button"
          onClick={() => setQ("")}
          className="text-muted hover:text-ink"
          aria-label="Effacer"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </form>
  );
}
