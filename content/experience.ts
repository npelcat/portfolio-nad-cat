export const experiences = [
  {
    title: "Développeuse Fullstack",
    company: "EDF Power Solutions",
    label: "IA générative · Design system · Plateforme data",
    period: "Sept 2026 - Janv 2027",
    type: "Mission en portage salarial",
    team: "Plateforme data · 50+ ingénieurs · SAFe",
    screenshot: "/mission-power-vision.webp",
    description:
      "Mission au sein d'une plateforme data de plus de 50 ingénieurs : développement de briques partagées par plusieurs applications (front et back) et d'une interface de chat avec un agent IA.",
    achievements: [
      {
        title: "IA générative",
        details:
          "Interface de chat avec un agent IA (LangChain), réponses en streaming (SSE), outil de data visualisation.",
      },
      {
        title: "Design system React",
        details:
          "Développement et maintenance d'une cinquantaine de composants MUI et de hooks utilisés par 4 applications. Thème light/dark avec design tokens, publication sur un registre npm privé (semantic-release).",
      },
      {
        title: "Librairie NestJS partagée",
        details:
          "Création du module d'accès Databricks mutualisé, utilisé par 4 backends.",
      },
      {
        title: "Collaboration avec l'équipe design",
        details:
          "Figma commun, documentation des composants dans Storybook, ateliers devs-designers.",
      },
      {
        title: "Autonomie",
        details:
          "Création des tickets, développement et déploiement jusqu'en production, en environnement SAFe.",
      },
    ],
    tags: [
      "React",
      "TypeScript",
      "NestJS",
      "MUI",
      "Storybook",
      "LangChain",
      "Databricks",
      "SAFe",
    ],
    featured: true,
  },
  {
    title: "Développeuse Fullstack Applications Web",
    company: "EDF Power Solutions",
    label: "Data Visualisation · 320 parcs · temps réel",
    period: "Sept 2024 - Sept 2026",
    type: "Alternance",
    team: "4 devs seniors · 2 designers · 1 Product Owner",
    screenshot: "/mynsights.png",
    description:
      "Application de data visualisation et développement d'outils pour la supervision d'environ 320 parcs éoliens et solaires internationaux (~400 utilisateurs actifs/mois), intégrant des flux temps réel via API externes (PI, Genesys) et multiples API internes.",
    achievements: [
      {
        title: "Front-end",
        details:
          "SPA React-TypeScript, Redux Toolkit, Design system MUI, ECharts (dataviz), Storybook (doc).",
      },
      {
        title: "Back-end",
        details:
          "API RESTful FastAPI (OpenAPI, SQLAlchemy), PostgreSQL/MySQL, déploiement AWS. Jobs asynchrones Python avec Redis pour agrégation données live (refresh 10min).",
      },
      {
        title: "Réalisations clés",
        details:
          "Développement du volet solaire du live monitoring, utilisé par les asset managers pour repérer les anomalies des parcs. / POC de refonte d'un dashboard Tableau en application web.",
      },
      {
        title: "Architecture",
        details:
          "Participation aux choix techniques dont la transition vers monorepo NestJS pour 3 nouvelles applications. Interaction avec équipes multidisciplinaires (data engineers, DevOps, product owners).",
      },
      {
        title: "Qualité & Méthodologie",
        details:
          "Tests unitaires (pytest), linting, CI/CD GitLab. SCRUM : sprints 2 semaines, daily, PI trimestriel, code reviews. Jira et Confluence au quotidien.",
      },
    ],
    tags: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AWS",
      "NestJS",
      "SCRUM",
    ],
    featured: false,
  },
  {
    title: "Conception & Développement Fullstack (Titre RNCP 6)",
    company: "Ada Tech School / O’Sun Voix Animale",
    label: "Architecture en couches ·Next.js · Client Réel",
    period: "Formation 2023 - 2026",
    type: "Projet de certification · Titre obtenu",
    screenshot: "/couvertureosun.jpg",
    team: "Autonomie totale (Lead Dev)",
    description:
      "Pilotage complet d'un projet de réservation en ligne pour un client réel : de l'analyse des besoins (Personas, User Stories) au déploiement sécurisé en production.",
    achievements: [
      {
        title: "Architecture & Data Design",
        details:
          "Mise en place d'une architecture en couches (Séparation des préoccupations) avec Next.js 16. Modélisation de base de données PostgreSQL via la méthode Merise et Drizzle ORM (transactions SQL).",
      },
      {
        title: "Développement & Stack Headless",
        details:
          "Développement du coeur métier en TypeScript. Intégration d'un CMS Headless (Strapi) pour l'autonomie éditoriale du client et consommation des données via API. Front-end optimisé (ISR/SSR) pour le SEO et la performance.",
      },
      {
        title: "Qualité, Sécurité & Pipeline DevOps",
        details:
          "Authentification NextAuth.js v5 (Argon2id) et validation stricte des flux via Zod. CI/CD via GitHub Actions (lint, build, tests). Gestion de projet agile (Scrum/Kanban), branches isolées et déploiements automatisés..",
      },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "NextAuth.js",
      "Argon2id",
      "Zod",
      "GitHub Actions",
    ],
    featured: false,
  },
];
