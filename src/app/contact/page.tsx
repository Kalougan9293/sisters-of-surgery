import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${brand.name} pour une orientation informative.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bordeaux">
        Contact
      </p>
      <h1 className="font-serif text-3xl text-ink md:text-5xl">Écrivons-nous</h1>
      <p className="mt-2 text-sm text-ink-soft">
        Orientation informative — sans pression commerciale.
      </p>

      <form className="mt-5 space-y-3 rounded-2xl border border-ink/8 bg-cream/70 p-4">
        <input
          type="text"
          name="name"
          className="w-full rounded-xl border-0 bg-ivory px-3 py-3 text-base outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-bordeaux/30"
          placeholder="Prénom"
        />
        <input
          type="email"
          name="email"
          className="w-full rounded-xl border-0 bg-ivory px-3 py-3 text-base outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-bordeaux/30"
          placeholder="E-mail"
        />
        <textarea
          name="message"
          rows={4}
          className="w-full resize-y rounded-xl border-0 bg-ivory px-3 py-3 text-base outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-bordeaux/30"
          placeholder="Votre message…"
        />
        <Button type="button" className="w-full">
          <Mail className="h-4 w-4" />
          Envoyer
        </Button>
        <p className="text-center text-[11px] text-muted">
          Formulaire de démonstration.
        </p>
      </form>

      <div className="mt-6">
        <MedicalDisclaimer compact />
      </div>
    </div>
  );
}
