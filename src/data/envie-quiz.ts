export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  hint?: string;
  options: QuizOption[];
}

/** Entonnoir « Votre envie » — 3 questions + coordonnées (= 4 étapes). */
export const envieQuestions: QuizQuestion[] = [
  {
    id: "zone",
    prompt: "Moi, je suis intéressé(e) par…",
    hint: "Choisis la zone qui te parle le plus.",
    options: [
      { id: "visage", label: "Visage" },
      { id: "nez", label: "Nez" },
      { id: "seins", label: "Seins" },
      { id: "fesses", label: "Fesses" },
      { id: "ventre", label: "Ventre" },
      { id: "silhouette", label: "Silhouette" },
      { id: "autre", label: "Autre" },
    ],
  },
  {
    id: "etape",
    prompt: "Tu en es où dans ta réflexion ?",
    options: [
      { id: "decouverte", label: "Je découvre" },
      { id: "compare", label: "Je compare" },
      { id: "bientot", label: "Je suis prêt(e) bientôt" },
      { id: "consulte", label: "J’ai déjà consulté" },
    ],
  },
  {
    id: "type",
    prompt: "Tu te tournes plutôt vers…",
    options: [
      { id: "chirurgie", label: "La chirurgie" },
      { id: "medecine", label: "La médecine esthétique" },
      { id: "les-deux", label: "Les deux" },
      { id: "ne-sait-pas", label: "Je ne sais pas encore" },
    ],
  },
];
