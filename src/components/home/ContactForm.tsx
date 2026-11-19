"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.info("[contact]", Object.fromEntries(data.entries()));
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-[#917812]/35 bg-white px-6 py-10 text-center">
        <p className="font-display text-2xl text-[#1a1a1a]">Message reçu</p>
        <p className="mt-3 text-sm text-[#4a4a4a]">
          Merci — on vous répond dès que possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-left">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a]">
            Prénom
          </span>
          <input
            name="name"
            required
            className="w-full border border-[#1a1a1a]/15 bg-white px-4 py-3 text-base text-[#1a1a1a] outline-none transition focus:border-[#917812]"
            placeholder="Votre prénom"
          />
        </label>
        <label className="block text-left">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a]">
            Téléphone
          </span>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border border-[#1a1a1a]/15 bg-white px-4 py-3 text-base text-[#1a1a1a] outline-none transition focus:border-[#917812]"
            placeholder="06 00 00 00 00"
          />
        </label>
      </div>
      <label className="block text-left">
        <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a]">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-y border border-[#1a1a1a]/15 bg-white px-4 py-3 text-base text-[#1a1a1a] outline-none transition focus:border-[#917812]"
          placeholder="Dites-nous en quelques mots…"
        />
      </label>
      <Button type="submit" variant="gold" className="w-full sm:w-auto">
        Envoyer
      </Button>
    </form>
  );
}
