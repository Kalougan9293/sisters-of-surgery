import type { Video } from "./types";

/**
 * Contenu de démonstration — fictif, à remplacer par un CMS.
 * videoSrc : fichier local /public/videos ou URL externe.
 */
export const videos: Video[] = [
  {
    id: "v1",
    slug: "bienvenue-sisters-of-surgery",
    title: "Bienvenue sur le blog Sisters Of Surgery !",
    description:
      "Ici, on décrypte la chirurgie esthétique avec clarté : les gestes, les parcours, les idées reçues et les questions que tout le monde se pose.",
    category: "explications-medicales",
    duration: "0:10",
    durationSeconds: 10,
    publishedAt: "2026-11-19",
    views: 42890,
    featured: true,
    popular: true,
    videoSrc: "/videos/hero.mp4",
    posterSrc: "/images/hero-cover.jpg",
  },
  {
    id: "v2",
    slug: "liposuccion-indications-et-limites",
    title: "Liposuccion : indications, techniques et limites",
    description:
      "Ce que la liposuccion peut réellement corriger — et ce qu’elle ne remplace pas. Explications médicales fictives à des fins de démonstration.",
    category: "liposuccion",
    duration: "09:22",
    durationSeconds: 562,
    publishedAt: "2026-11-10",
    views: 31240,
    popular: true,
    videoSrc: "/videos/demo-2.mp4",
    posterSrc: "/images/covers/liposuccion.jpg",
    interventionSlug: "liposuccion",
  },
  {
    id: "v3",
    slug: "augmentation-mammaire-choix-des-implants",
    title: "Augmentation mammaire : comment choisir ses implants ?",
    description:
      "Volume, forme, projection et voies d’abord : les critères à comprendre avant une consultation. Contenu fictif Sisters of Surgery.",
    category: "augmentation-mammaire",
    duration: "14:05",
    durationSeconds: 845,
    publishedAt: "2026-11-08",
    views: 38710,
    popular: true,
    videoSrc: "/videos/demo-1.mp4",
    posterSrc: "/images/covers/mammaire.jpg",
    interventionSlug: "augmentation-mammaire",
  },
  {
    id: "v4",
    slug: "lifting-visage-ce-quil-faut-savoir",
    title: "Lifting du visage : ce qu’il faut vraiment savoir",
    description:
      "Vieillissement facial, zones traitées et suites opératoires expliqués de façon pédagogique. Démonstration éditoriale.",
    category: "lifting",
    duration: "11:17",
    durationSeconds: 677,
    publishedAt: "2026-11-05",
    views: 22150,
    videoSrc: "/videos/demo-2.mp4",
    posterSrc: "/images/covers/lifting.jpg",
    interventionSlug: "lifting-visage",
  },
  {
    id: "v5",
    slug: "chirurgie-paupieres-blepharoplastie",
    title: "Blépharoplastie : regard fatigué et chirurgie des paupières",
    description:
      "Quand envisager une chirurgie des paupières et quelles sont les alternatives non chirurgicales. Contenu fictif.",
    category: "chirurgie-visage",
    duration: "08:41",
    durationSeconds: 521,
    publishedAt: "2026-11-02",
    views: 18920,
    videoSrc: "/videos/demo-1.mp4",
    posterSrc: "/images/covers/paupieres.jpg",
    interventionSlug: "blepharoplastie",
  },
  {
    id: "v6",
    slug: "abdominoplastie-parcours-patient",
    title: "Abdominoplastie : le parcours patient décrypté",
    description:
      "De la consultation aux suites : un tour d’horizon informatif sur la chirurgie de la paroi abdominale. Démo fictive.",
    category: "chirurgie-corps",
    duration: "13:30",
    durationSeconds: 810,
    publishedAt: "2026-10-28",
    views: 27480,
    popular: true,
    videoSrc: "/videos/demo-2.mp4",
    posterSrc: "/posters/corps.svg",
    interventionSlug: "abdominoplastie",
  },
  {
    id: "v7",
    slug: "temoignage-recuperation-rhinoplastie",
    title: "Témoignage : ma récupération après rhinoplastie",
    description:
      "Récit fictif illustratif — une patiente témoigne de son ressenti pendant les premières semaines. Non représentatif d’un cas clinique réel.",
    category: "temoignages",
    duration: "07:55",
    durationSeconds: 475,
    publishedAt: "2026-10-22",
    views: 45120,
    popular: true,
    videoSrc: "/videos/demo-1.mp4",
    posterSrc: "/posters/temoignage.svg",
    interventionSlug: "rhinoplastie",
  },
  {
    id: "v8",
    slug: "anesthesie-chirurgie-esthetique",
    title: "Anesthésie en chirurgie esthétique : les bases",
    description:
      "Anesthésie locale, sédation et générale : différences, précautions et questions à poser. Contenu pédagogique fictif.",
    category: "explications-medicales",
    duration: "10:12",
    durationSeconds: 612,
    publishedAt: "2026-10-18",
    views: 15680,
    videoSrc: "/videos/demo-2.mp4",
    posterSrc: "/posters/medical.svg",
  },
  {
    id: "v9",
    slug: "cicatrices-chirurgie-esthetique",
    title: "Cicatrices : évolution et soins après chirurgie",
    description:
      "Comment évoluent les cicatrices et quels gestes favorisent une cicatrisation optimale. Information générale fictive.",
    category: "explications-medicales",
    duration: "06:48",
    durationSeconds: 408,
    publishedAt: "2026-10-12",
    views: 20340,
    videoSrc: "/videos/demo-1.mp4",
    posterSrc: "/posters/cicatrices.svg",
  },
  {
    id: "v10",
    slug: "chirurgie-etranger-points-vigilance",
    title: "Chirurgie à l’étranger : les points de vigilance",
    description:
      "Voyage médical, suivi postopératoire et cadre réglementaire : les questions essentielles avant de partir. Contenu fictif.",
    category: "explications-medicales",
    duration: "15:20",
    durationSeconds: 920,
    publishedAt: "2026-10-05",
    views: 33900,
    popular: true,
    videoSrc: "/videos/demo-2.mp4",
    posterSrc: "/posters/etranger.svg",
  },
];

export function getVideoBySlug(slug: string) {
  return videos.find((v) => v.slug === slug);
}

/** Toujours la vidéo la plus récente — utilisée dans le hero. */
export function getFeaturedVideo() {
  return getLatestVideos(1)[0] ?? videos[0];
}

export function getLatestVideos(limit = 8, excludeSlug?: string) {
  return [...videos]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .filter((v) => (excludeSlug ? v.slug !== excludeSlug : true))
    .slice(0, limit);
}

export function getPopularVideos(limit = 6) {
  return [...videos]
    .filter((v) => v.popular)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getVideosByCategory(category: string) {
  return videos.filter((v) => v.category === category);
}

export function getVideosByIntervention(interventionSlug: string) {
  return videos.filter((v) => v.interventionSlug === interventionSlug);
}

export function getRelatedVideos(slug: string, limit = 4) {
  const current = getVideoBySlug(slug);
  if (!current) return videos.slice(0, limit);
  return videos
    .filter((v) => v.slug !== slug)
    .sort((a, b) => {
      const scoreA =
        (a.category === current.category ? 2 : 0) +
        (a.interventionSlug === current.interventionSlug ? 1 : 0);
      const scoreB =
        (b.category === current.category ? 2 : 0) +
        (b.interventionSlug === current.interventionSlug ? 1 : 0);
      return scoreB - scoreA;
    })
    .slice(0, limit);
}
