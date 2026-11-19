export type VideoCategory =
  | "rhinoplastie"
  | "liposuccion"
  | "augmentation-mammaire"
  | "lifting"
  | "chirurgie-visage"
  | "chirurgie-corps"
  | "temoignages"
  | "explications-medicales";

export interface Video {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: VideoCategory;
  duration: string;
  durationSeconds: number;
  publishedAt: string;
  views: number;
  featured?: boolean;
  popular?: boolean;
  /** Chemin local ou URL externe — facilement remplaçable */
  videoSrc: string;
  posterSrc: string;
  interventionSlug?: string;
}

export interface Intervention {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  presentation: string;
  deroulement: string[];
  techniques: { name: string; description: string }[];
  preparation: string[];
  suites: string[];
  risques: string[];
  resultats: string[];
  faq: { question: string; answer: string }[];
  imageSrc: string;
}

export interface PriceEntry {
  id: string;
  interventionSlug: string;
  country: string;
  countryCode: string;
  city?: string;
  priceMin: number;
  priceMax: number;
  currency: string;
  source: string;
  updatedAt: string;
  note?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}
