import { Info } from "lucide-react";
import { brand } from "@/data/brand";

export function MedicalDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs leading-relaxed text-muted">
        {brand.name} est un média d’information indépendant. Les contenus sont
        généraux, parfois fictifs à des fins de démonstration, et ne remplacent
        pas un avis médical personnalisé.
      </p>
    );
  }

  return (
    <aside className="glass-panel flex gap-3 rounded-sm p-4 md:p-5">
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-bordeaux" aria-hidden />
      <div className="space-y-1 text-sm leading-relaxed text-ink-soft">
        <p className="font-medium text-ink">Avertissement médical</p>
        <p>
          {brand.name} est un média international d’information sur la chirurgie
          esthétique. Nous ne recommandons pas de praticiens, n’organisons pas
          de séjours et ne percevons aucune commission d’apport de patients. Les
          informations publiées sont générales ; certaines données de ce site de
          démonstration sont clairement fictives. Consultez un professionnel de
          santé qualifié pour toute décision personnelle.
        </p>
      </div>
    </aside>
  );
}
