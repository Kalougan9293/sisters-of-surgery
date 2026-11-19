"use client";

import { useMemo, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { interventions } from "@/data/interventions";
import { countries, filterPrices } from "@/data/prices";
import { formatDate, formatPriceRange } from "@/lib/utils";

export function PriceComparator() {
  const [intervention, setIntervention] = useState(
    interventions[0]?.slug ?? "",
  );
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const results = useMemo(
    () =>
      filterPrices({
        interventionSlug: intervention || undefined,
        country: country || undefined,
        city: city || undefined,
      }),
    [intervention, country, city],
  );

  const cities = useMemo(() => {
    const set = new Set(
      filterPrices({
        interventionSlug: intervention || undefined,
        country: country || undefined,
      })
        .map((p) => p.city)
        .filter(Boolean) as string[],
    );
    return [...set].sort();
  }, [intervention, country]);

  const selectClass =
    "w-full rounded-xl border border-ink/10 bg-ivory px-3 py-2.5 text-sm text-ink outline-none focus:border-bordeaux/40";

  return (
    <div className="space-y-4">
      <div className="flex gap-2 rounded-xl bg-bordeaux/8 px-3 py-2.5">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-bordeaux" />
        <p className="text-xs leading-relaxed text-ink-soft">
          <strong className="font-medium text-ink">Indicatif uniquement.</strong>{" "}
          Données fictives — pas un devis.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1 block text-[10px] uppercase tracking-[0.14em] text-muted">
            Intervention
          </span>
          <select
            value={intervention}
            onChange={(e) => {
              setIntervention(e.target.value);
              setCity("");
            }}
            className={selectClass}
          >
            {interventions.map((i) => (
              <option key={i.slug} value={i.slug}>
                {i.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[10px] uppercase tracking-[0.14em] text-muted">
            Pays
          </span>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setCity("");
            }}
            className={selectClass}
          >
            <option value="">Tous</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[10px] uppercase tracking-[0.14em] text-muted">
            Ville
          </span>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={selectClass}
            disabled={cities.length === 0}
          >
            <option value="">Toutes</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3">
        {results.map((entry) => (
          <article
            key={entry.id}
            className="rounded-xl border border-ink/8 bg-cream/80 p-3"
          >
            <p className="text-[10px] uppercase tracking-[0.14em] text-bordeaux">
              {entry.country}
              {entry.city ? ` · ${entry.city}` : ""}
            </p>
            <p className="mt-1.5 font-serif text-base leading-tight text-ink sm:text-xl">
              {formatPriceRange(entry.priceMin, entry.priceMax, entry.currency)}
            </p>
            <p className="mt-2 text-[10px] text-muted">
              Maj. {formatDate(entry.updatedAt)}
            </p>
          </article>
        ))}
      </div>

      {results.length === 0 && (
        <p className="py-6 text-center text-sm text-muted">
          Aucune estimation pour cette combinaison.
        </p>
      )}

      <div className="hidden overflow-x-auto rounded-xl border border-ink/10 sm:block">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-ivory-deep/80 text-[10px] uppercase tracking-[0.12em] text-muted">
            <tr>
              <th className="px-3 py-2 font-medium">Pays</th>
              <th className="px-3 py-2 font-medium">Ville</th>
              <th className="px-3 py-2 font-medium">Fourchette</th>
              <th className="px-3 py-2 font-medium">Maj.</th>
            </tr>
          </thead>
          <tbody>
            {results.map((entry) => (
              <tr
                key={`row-${entry.id}`}
                className="border-t border-ink/8 bg-cream/40"
              >
                <td className="px-3 py-2 text-ink">{entry.country}</td>
                <td className="px-3 py-2 text-ink-soft">
                  {entry.city ?? "—"}
                </td>
                <td className="px-3 py-2 font-medium text-ink">
                  {formatPriceRange(
                    entry.priceMin,
                    entry.priceMax,
                    entry.currency,
                  )}
                </td>
                <td className="px-3 py-2 text-muted">
                  {formatDate(entry.updatedAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
