import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    category: "Douleurs",
    question: "La chirurgie esthétique est-elle très douloureuse ?",
    answer:
      "La douleur varie selon l’intervention et la sensibilité individuelle. Beaucoup de patients décrivent davantage une gêne ou une tension qu’une douleur aiguë. Une analgésie adaptée est prévue. Réponse générale fictive — demandez un avis médical personnalisé.",
  },
  {
    id: "f2",
    category: "Anesthésie",
    question: "Quelle anesthésie pour une intervention esthétique ?",
    answer:
      "Selon l’acte : anesthésie locale, sédation ou anesthésie générale. Le choix dépend de la durée, de la zone et de votre état de santé. Une consultation d’anesthésie est souvent requise.",
  },
  {
    id: "f3",
    category: "Cicatrices",
    question: "Les cicatrices disparaissent-elles complètement ?",
    answer:
      "Non. Toute incision laisse une cicatrice. Elle s’atténue avec le temps et peut être dissimulée dans un pli naturel, mais elle reste définitive. La qualité cicatricielle varie selon les peaux.",
  },
  {
    id: "f4",
    category: "Récupération",
    question: "Combien de temps faut-il pour reprendre le travail ?",
    answer:
      "De quelques jours à plusieurs semaines selon l’intervention, le type d’activité et les suites. Un arrêt plus long est fréquent après abdominoplastie ou lifting complet.",
  },
  {
    id: "f5",
    category: "Complications",
    question: "Quelles sont les complications possibles ?",
    answer:
      "Hématome, infection, troubles de cicatrisation, asymétrie, insatisfaction esthétique, complications thromboemboliques… La liste exacte dépend de l’acte. Un consentement éclairé détaille ces risques.",
  },
  {
    id: "f6",
    category: "Résultats",
    question: "Quand voit-on le résultat définitif ?",
    answer:
      "Rarement immédiatement. L’œdème masque le résultat pendant des semaines, parfois des mois (nez, abdomen, lifting). Patience et suivi font partie du parcours.",
  },
  {
    id: "f7",
    category: "Étranger",
    question: "Que faire en cas de complication après un voyage médical ?",
    answer:
      "Anticipez un interlocuteur médical dans votre pays de résidence. Conservez le dossier opératoire complet. Sisters of Surgery ne met pas en relation avec des praticiens et n’organise aucun séjour.",
  },
  {
    id: "f8",
    category: "Prix",
    question: "Pourquoi les prix varient-ils autant d’un pays à l’autre ?",
    answer:
      "Coût de la vie, charges, normes, volume d’activité et contenu des forfaits expliquent une partie des écarts. Un prix bas ne garantit ni la qualité ni le suivi. Nos fourchettes sont indicatives et fictives pour la démo.",
  },
];

export const faqCategories = [
  ...new Set(faqItems.map((f) => f.category)),
];
