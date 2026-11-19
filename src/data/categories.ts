import type { VideoCategory } from "./types";

export const categoryLabels: Record<VideoCategory, string> = {
  rhinoplastie: "Rhinoplastie",
  liposuccion: "Liposuccion",
  "augmentation-mammaire": "Augmentation mammaire",
  lifting: "Lifting",
  "chirurgie-visage": "Chirurgie du visage",
  "chirurgie-corps": "Chirurgie du corps",
  temoignages: "Témoignages",
  "explications-medicales": "Explications médicales",
};

export const categoryList = Object.entries(categoryLabels).map(
  ([slug, label]) => ({ slug: slug as VideoCategory, label }),
);
