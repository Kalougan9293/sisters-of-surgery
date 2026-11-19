import type { Intervention } from "./types";

export const interventions: Intervention[] = [
  {
    slug: "rhinoplastie",
    name: "Rhinoplastie",
    shortName: "Rhinoplastie",
    tagline: "Remodelage du nez pour l’harmonie du visage et/ou la fonction respiratoire",
    presentation:
      "La rhinoplastie est une intervention visant à modifier la morphologie du nez. Elle peut répondre à une demande esthétique, fonctionnelle (respiration) ou les deux. Contenu fictif de démonstration — information générale uniquement.",
    deroulement: [
      "Consultation et analyse morphologique du visage",
      "Bilan photographique et discussion des objectifs",
      "Intervention sous anesthésie selon le protocole retenu",
      "Surveillance immédiate puis consignes de sortie",
      "Contrôles postopératoires planifiés",
    ],
    techniques: [
      {
        name: "Rhinoplastie ouverte",
        description:
          "Accès plus large via une petite incision columellaire, souvent privilégié pour les remodelages complexes.",
      },
      {
        name: "Rhinoplastie fermée",
        description:
          "Incisions internes uniquement ; adaptée à certaines corrections plus ciblées.",
      },
      {
        name: "Rhinoplastie de révision",
        description:
          "Correction secondaire après une première intervention, souvent plus technique.",
      },
    ],
    preparation: [
      "Arrêt du tabac fortement recommandé",
      "Bilan préopératoire et consultation d’anesthésie",
      "Liste des médicaments et compléments à signaler",
      "Organisation du retour et de l’accompagnement",
    ],
    suites: [
      "Attelle ou plâtre nasal pendant plusieurs jours",
      "Œdème et ecchymoses autour des yeux possibles",
      "Respiration nasale temporairement gênée",
      "Reprise progressive des activités selon consignes",
    ],
    risques: [
      "Asymétrie ou irrégularités résiduelles",
      "Troubles respiratoires persistants",
      "Infection ou hématome (rares)",
      "Nécessité éventuelle d’une retouche",
    ],
    resultats: [
      "Le résultat esthétique se juge souvent après plusieurs mois",
      "L’objectif est une harmonie naturelle, pas une standardisation",
      "Les limites anatomiques et cutanées conditionnent le résultat",
    ],
    faq: [
      {
        question: "La rhinoplastie est-elle douloureuse ?",
        answer:
          "L’inconfort est fréquent les premiers jours ; la douleur intense est moins courante qu’on ne le croit. Réponse générale fictive — votre chirurgien adaptera l’analgésie.",
      },
      {
        question: "Quand voit-on le résultat définitif ?",
        answer:
          "L’œdème diminue progressivement ; un résultat plus stable se dessine souvent entre 6 et 12 mois.",
      },
    ],
    imageSrc: "/images/covers/lifting.jpg",
  },
  {
    slug: "liposuccion",
    name: "Liposuccion",
    shortName: "Liposuccion",
    tagline: "Réduction localisée de volumes graisseux résistants",
    presentation:
      "La liposuccion cible des amas graisseux localisés. Elle n’est pas une méthode de perte de poids globale. Contenu fictif Sisters of Surgery.",
    deroulement: [
      "Évaluation des zones et de la qualité cutanée",
      "Marquage préopératoire",
      "Aspiration contrôlée de la graisse",
      "Contention par vêtement compressif",
      "Suivi de la cicatrisation et du drainage de l’œdème",
    ],
    techniques: [
      {
        name: "Liposuccion traditionnelle",
        description: "Canules et aspiration mécanique des adipocytes.",
      },
      {
        name: "Liposuccion assistée",
        description:
          "Énergie ultrasonique, laser ou jet d’eau selon les protocoles — à discuter au cas par cas.",
      },
    ],
    preparation: [
      "Stabilisation du poids recommandée",
      "Bilan médical adapté",
      "Prévoir un vêtement de contention",
    ],
    suites: [
      "Port d’une gaine ou d’un panty compressif",
      "Œdème pendant plusieurs semaines",
      "Bleus et sensibilité cutanée temporaires",
    ],
    risques: [
      "Irrégularités de surface",
      "Asymétrie",
      "Troubles de sensibilité",
      "Complications thromboemboliques (rares)",
    ],
    resultats: [
      "Amélioration du galbe localisé",
      "Nécessite une peau suffisamment tonique",
      "Le mode de vie reste déterminant pour la stabilité",
    ],
    faq: [
      {
        question: "La graisse peut-elle revenir ?",
        answer:
          "Les adipocytes retirés ne se régénèrent pas localement de la même façon, mais une prise de poids peut faire augmenter le volume restant.",
      },
    ],
    imageSrc: "/images/covers/liposuccion.jpg",
  },
  {
    slug: "augmentation-mammaire",
    name: "Augmentation mammaire",
    shortName: "Augmentation mammaire",
    tagline: "Augmentation du volume mammaire par implants ou transfert de graisse",
    presentation:
      "L’augmentation mammaire peut faire appel à des implants ou à un lipofilling. Le choix dépend de l’anatomie, des attentes et des contraintes médicales. Contenu fictif.",
    deroulement: [
      "Consultation morphologique et choix du volume",
      "Discussion sur la voie d’abord et le plan de pose",
      "Intervention et pose des implants ou greffe graisseuse",
      "Surveillance et consignes de contention",
      "Suivi à moyen et long terme",
    ],
    techniques: [
      {
        name: "Implants ronds ou anatomiques",
        description: "Différents profils et enveloppes selon l’indication.",
      },
      {
        name: "Lipofilling mammaire",
        description:
          "Transfert de graisse autologue, souvent pour des augmentations plus modérées.",
      },
    ],
    preparation: [
      "Imagerie mammaire selon l’âge et les antécédents",
      "Arrêt du tabac recommandé",
      "Discussion des risques liés aux implants",
    ],
    suites: [
      "Soutien-gorge de contention",
      "Limitation des efforts des bras",
      "Sensibilité du mamelon parfois modifiée temporairement",
    ],
    risques: [
      "Capsularité (coque)",
      "Malposition de l’implant",
      "Infection",
      "Nécessité de réintervention à long terme",
    ],
    resultats: [
      "Volume et projection améliorés",
      "Les implants ne sont pas « à vie »",
      "Un suivi régulier reste nécessaire",
    ],
    faq: [
      {
        question: "Combien de temps durent les implants ?",
        answer:
          "Il n’y a pas de date d’expiration fixe ; une surveillance et parfois un remplacement sont envisagés au fil des années.",
      },
    ],
    imageSrc: "/images/covers/mammaire.jpg",
  },
  {
    slug: "lifting-visage",
    name: "Lifting du visage",
    shortName: "Lifting",
    tagline: "Remise en tension des tissus du visage et du cou",
    presentation:
      "Le lifting facial vise à traiter le relâchement cutané et musculaire. Il ne « stoppe » pas le vieillissement. Contenu fictif de démonstration.",
    deroulement: [
      "Analyse du vieillissement facial",
      "Choix de l’étendue (visage, cou, temporal)",
      "Intervention et repositionnement des plans profonds",
      "Pansements et drainage éventuel",
      "Suivi des cicatrices et de l’œdème",
    ],
    techniques: [
      {
        name: "Lifting cervico-facial",
        description: "Traitement combiné du bas du visage et du cou.",
      },
      {
        name: "Mini-lifting",
        description: "Indication plus limitée, cicatrices réduites.",
      },
    ],
    preparation: [
      "Bilan photographique détaillé",
      "Gestion des anticoagulants avec l’équipe médicale",
      "Organisation d’une convalescence calme",
    ],
    suites: [
      "Œdème et ecchymoses marqués les premiers jours",
      "Sensation de tension cutanée",
      "Reprise sociale progressive",
    ],
    risques: [
      "Hématome",
      "Lésion nerveuse temporaire ou rare permanente",
      "Cicatrices visibles selon la qualité de cicatrisation",
    ],
    resultats: [
      "Rajeunissement d’aspect naturel recherché",
      "Résultat durable mais non permanent",
      "Compléments éventuels (paupières, lipofilling)",
    ],
    faq: [
      {
        question: "À quel âge envisager un lifting ?",
        answer:
          "L’indication dépend plus de l’état des tissus que de l’âge chronologique.",
      },
    ],
    imageSrc: "/images/covers/lifting.jpg",
  },
  {
    slug: "blepharoplastie",
    name: "Blépharoplastie",
    shortName: "Paupières",
    tagline: "Chirurgie des paupières pour un regard reposé",
    presentation:
      "La blépharoplastie traite l’excès cutané ou les poches des paupières. Contenu fictif informatif.",
    deroulement: [
      "Examen du regard et de la tonicité des paupières",
      "Marquage précis des excès",
      "Ablation ou repositionnement des tissus",
      "Fils fins et soins locaux",
      "Contrôle de la cicatrisation",
    ],
    techniques: [
      {
        name: "Paupières supérieures",
        description: "Retrait d’excès cutané et parfois musculaire.",
      },
      {
        name: "Paupières inférieures",
        description: "Traitement des poches graisseuses et/ou de la peau.",
      },
    ],
    preparation: [
      "Bilan ophtalmologique si indiqué",
      "Photos du regard au repos",
    ],
    suites: [
      "Bleus et gonflement autour des yeux",
      "Sensibilité à la lumière possible",
      "Fils retirés selon le protocole",
    ],
    risques: [
      "Asymétrie",
      "Sécheresse oculaire temporaire",
      "Ectropion (rare)",
    ],
    resultats: [
      "Regard moins fatigué",
      "Résultat visible après résorption de l’œdème",
    ],
    faq: [
      {
        question: "La cicatrice est-elle visible ?",
        answer:
          "Elle est généralement dissimulée dans le pli palpébral ou sous le cil ; la qualité varie selon les peaux.",
      },
    ],
    imageSrc: "/images/covers/paupieres.jpg",
  },
  {
    slug: "abdominoplastie",
    name: "Abdominoplastie",
    shortName: "Abdominoplastie",
    tagline: "Remise en tension de la paroi abdominale",
    presentation:
      "L’abdominoplastie traite l’excès cutanéo-graisseux et parfois le relâchement musculaire de l’abdomen. Contenu fictif.",
    deroulement: [
      "Évaluation de la paroi et des diastasis",
      "Intervention avec cicatrice basse",
      "Drainages éventuels",
      "Contention abdominale",
      "Suivi prolongé de la cicatrice",
    ],
    techniques: [
      {
        name: "Abdominoplastie complète",
        description: "Excès cutané important, ombilic repositionné.",
      },
      {
        name: "Mini-abdominoplastie",
        description: "Excès limité sous-ombilical.",
      },
    ],
    preparation: [
      "Poids stable recommandé",
      "Arrêt du tabac essentiel",
      "Prévoir une aide à domicile",
    ],
    suites: [
      "Position semi-fléchie les premiers jours",
      "Port d’une gaine",
      "Reprise progressive de la marche",
    ],
    risques: [
      "Sérome",
      "Nécrose cutanée partielle",
      "Cicatrices larges ou hypertrophiques",
    ],
    resultats: [
      "Ventre plus plat et tonique",
      "Cicatrices permanentes à anticiper",
    ],
    faq: [
      {
        question: "Peut-on avoir un enfant après ?",
        answer:
          "Oui en principe, mais une grossesse ultérieure peut altérer le résultat ; le timing se discute avec le chirurgien.",
      },
    ],
    imageSrc: "/images/covers/liposuccion.jpg",
  },
];


export function getInterventionBySlug(slug: string) {
  return interventions.find((i) => i.slug === slug);
}
