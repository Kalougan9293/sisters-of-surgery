import { brand } from "@/data/brand";

export function MedicalDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs leading-relaxed text-muted">
        {brand.name} est un podcast / média d’information indépendant. Les
        contenus sont généraux et ne remplacent pas un avis médical
        personnalisé.
      </p>
    );
  }

  return (
    <aside className="border border-ink/10 bg-ivory p-5 text-sm leading-relaxed text-ink-soft">
      <p className="font-medium text-ink">Information</p>
      <p className="mt-2">
        {brand.name} est un podcast et média indépendant. Nous ne faisons pas de
        publicité pour des actes de chirurgie esthétique et ne remplaçons pas
        une consultation médicale.
      </p>
    </aside>
  );
}
