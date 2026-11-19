import type { Metadata } from "next";
import { ContactForm } from "@/components/home/ContactForm";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "Contact",
  description: `Écrire à ${brand.name}`,
};

export default function ContactPage() {
  return (
    <div className="bg-[#f7f5f0]">
      <div className="mx-auto max-w-xl px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#917812]">
          Contact
        </p>
        <h1 className="mt-3 font-display text-3xl text-[#1a1a1a] md:text-4xl">
          Nous écrire
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
          Une question, un projet, une idée ? Envoyez un message — on vous
          répond personnellement.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
