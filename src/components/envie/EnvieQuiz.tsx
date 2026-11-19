"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { envieQuestions } from "@/data/envie-quiz";
import { spawnHearts } from "@/components/envie/HeartBurst";
import { cn } from "@/lib/utils";

type Answers = Record<string, string>;

interface ContactForm {
  name: string;
  email: string;
  phone: string;
}

const TOTAL = envieQuestions.length + 1;

export function EnvieQuiz({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
  });
  const [done, setDone] = useState(false);

  const isContact = step >= envieQuestions.length;
  const question = !isContact ? envieQuestions[step] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function closeAll() {
    setStep(0);
    setAnswers({});
    setContact({ name: "", email: "", phone: "" });
    setDone(false);
    onClose();
  }

  function pick(questionId: string, optionId: string, e: React.MouseEvent) {
    spawnHearts(e.clientX, e.clientY, 4);
    setAnswers((a) => ({ ...a, [questionId]: optionId }));
    setStep((s) => s + 1);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contact.name.trim() || !contact.email.trim()) return;
    console.info("[Votre envie]", { answers, contact });
    spawnHearts(window.innerWidth / 2, window.innerHeight / 2, 5);
    setDone(true);
  }

  if (!mounted || !open) return null;

  const panel = (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="Fermer"
        onClick={closeAll}
      />

      <div className="relative z-10 flex max-h-[92dvh] w-full max-w-md flex-col rounded-t-[28px] bg-[#FBF4F1] sm:rounded-[28px]">
        {/* Poignée mobile */}
        <div className="flex justify-center pt-3 sm:hidden">
          <span className="h-1 w-10 rounded-full bg-ink/15" />
        </div>

        {/* Header */}
        <div className="relative px-5 pb-3 pt-4 sm:pt-6">
          <button
            type="button"
            onClick={closeAll}
            className="absolute right-4 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-soft shadow-sm sm:top-5"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="px-10 text-center">
            <p
              id={titleId}
              className="font-script text-[2.35rem] text-bordeaux"
              style={{
                lineHeight: 1.35,
                paddingTop: "0.35rem",
                margin: 0,
              }}
            >
              Votre envie
            </p>
            {!done && (
              <p className="mt-1 text-[11px] text-muted">
                Étape {Math.min(step + 1, TOTAL)} / {TOTAL}
              </p>
            )}
          </div>
        </div>

        {!done && (
          <div className="mx-5 mb-4 h-1.5 overflow-hidden rounded-full bg-nude/40">
            <div
              className="h-full rounded-full bg-bordeaux transition-[width] duration-300"
              style={{
                width: `${(Math.min(step + 1, TOTAL) / TOTAL) * 100}%`,
              }}
            />
          </div>
        )}

        {/* Contenu scrollable uniquement ici */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          {done ? (
            <div className="flex flex-col items-center py-10 text-center">
              <p
                className="font-script text-4xl text-bordeaux"
                style={{ lineHeight: 1.4, paddingTop: "0.25rem" }}
              >
                Merci !
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                On a bien reçu ton envie. On te recontacte bientôt.
              </p>
              <button
                type="button"
                onClick={closeAll}
                className="mt-8 w-full rounded-full bg-bordeaux py-3.5 text-sm font-medium text-cream"
              >
                Fermer
              </button>
            </div>
          ) : isContact ? (
            <div>
              <p className="text-center font-serif text-xl leading-snug text-ink">
                Laisse-nous tes coordonnées,
                <br />
                on te recontacte !
              </p>
              <form onSubmit={onSubmit} className="mt-5 space-y-3">
                <input
                  required
                  value={contact.name}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, name: e.target.value }))
                  }
                  placeholder="Prénom"
                  autoComplete="given-name"
                  className="w-full rounded-2xl bg-white px-4 py-3.5 text-base text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-bordeaux/30"
                />
                <input
                  required
                  type="email"
                  value={contact.email}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, email: e.target.value }))
                  }
                  placeholder="E-mail"
                  autoComplete="email"
                  inputMode="email"
                  className="w-full rounded-2xl bg-white px-4 py-3.5 text-base text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-bordeaux/30"
                />
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, phone: e.target.value }))
                  }
                  placeholder="Téléphone (optionnel)"
                  autoComplete="tel"
                  inputMode="tel"
                  className="w-full rounded-2xl bg-white px-4 py-3.5 text-base text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-bordeaux/30"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-bordeaux py-3.5 text-sm font-medium text-cream"
                >
                  Envoyer
                </button>
              </form>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(envieQuestions.length - 1)}
                  className="mt-4 w-full py-2 text-sm text-muted"
                >
                  ← Retour
                </button>
              )}
            </div>
          ) : (
            <div>
              <p className="text-center font-serif text-[1.35rem] leading-snug text-ink">
                {question!.prompt}
              </p>
              {question!.hint && (
                <p className="mt-1.5 text-center text-xs text-muted">
                  {question!.hint}
                </p>
              )}

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {question!.options.map((opt) => {
                  const selected = answers[question!.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={(e) => pick(question!.id, opt.id, e)}
                      className={cn(
                        "min-h-[44px] touch-manipulation rounded-full px-4 py-2.5 text-sm font-medium",
                        selected
                          ? "bg-bordeaux text-cream"
                          : "bg-white text-ink ring-1 ring-ink/10 active:bg-bordeaux active:text-cream",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-6 w-full py-2 text-sm text-muted"
                >
                  ← Retour
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(panel, document.body);
}
