export interface JourneyStep {
  period: string;
  title: string;
  place?: string;
  type?: string;
  text: string;
}

export const JOURNEY_INTRO =
  "11 ans au contact des gens avant le code : je développe en pensant à ceux qui utiliseront l'outil.";

export const journey: JourneyStep[] = [
  {
    period: "sept. 2026 – janv. 2027",
    title: "Développeuse fullstack",
    place: "EDF Power Solutions",
    type: "Mission en portage salarial",
    text: "Plateforme data de plus de 50 ingénieurs, en SAFe. Design system React utilisé par 4 applications, module NestJS d'accès à Databricks partagé par 4 backends, chat avec un agent IA en streaming.",
  },
  {
    period: "sept. 2024 – sept. 2026",
    title: "Développeuse fullstack",
    place: "EDF Power Solutions",
    type: "Alternance",
    text: "Supervision d'environ 320 parcs éoliens et solaires (~400 utilisateurs par mois), avec 4 développeurs seniors, 2 designers et une Product Owner. Front React, API FastAPI, jobs Python avec Redis, déploiement AWS.",
  },
  {
    period: "sept. 2023 – sept. 2026",
    title: "Conceptrice-développeuse (Bac +3, titre RNCP 6)",
    place: "Ada Tech School",
    type: "Titre obtenu",
    text: "Projet de certification : une plateforme de réservation pour un vrai client, de l'analyse du besoin à la mise en production.",
  },
  {
    period: "févr. 2023",
    title: "Début de la reconversion",
    type: "Autodidacte",
    text: "La curiosité pour les logiciels devient l'envie d'en construire.",
  },
  {
    period: "2012 – 2023",
    title: "Auxiliaire spécialisée vétérinaire",
    text: "11 ans de soins : rigueur, gestion du stress, relation client et travail d'équipe.",
  },
];

export const LANGUAGES =
  "Français (langue maternelle) · anglais B2, usage professionnel quotidien";
