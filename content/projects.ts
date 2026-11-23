export type AutonomyLevel = "solo" | "binome";

export interface Achievement {
  label: string;
  details: string;
}

export interface Project {
  title: string;
  subtitle: string;
  context: string;
  autonomy?: AutonomyLevel;
  description: string;
  achievements: Achievement[];
  tags: string[];
  screenshot: string | null;
  screenshotAlt?: string;
  visual: {
    icon: string;
    gradient: string;
  };
  link?: {
    href: string;
    label: string;
  };
  githubNote?: string;
}

export const projects: Project[] = [
  {
    title: "Chat avec un Agent IA",
    subtitle: "IA générative · Réponses en streaming",
    context: "EDF Power Solutions · Mission",
    description:
      "Interface de chat permettant d'échanger avec un agent IA directement depuis un outil de data visualisation.",
    achievements: [
      {
        label: "Agent IA (LangChain)",
        details: "Intégration d'un agent IA construit avec LangChain.",
      },
      {
        label: "Streaming (SSE)",
        details:
          "Réponses affichées au fil de l'eau grâce aux Server-Sent Events, sans attendre la réponse complète.",
      },
    ],
    tags: ["React", "TypeScript", "LangChain", "SSE"],
    screenshot: "/chat-agent-ia.png",
    screenshotAlt: "Chat avec l'agent IA dans l'outil de data visualisation",
    visual: { icon: "🤖", gradient: "from-emerald-800 to-teal-700" },
    githubNote: "Code propriétaire — non disponible publiquement",
  },
  {
    title: "Design System React",
    subtitle: "~50 composants · 4 applications",
    context: "EDF Power Solutions · Mission",
    autonomy: "solo",
    description:
      "Bibliothèque de composants partagée par 4 applications de la plateforme data, construite et documentée avec l'équipe design.",
    achievements: [
      {
        label: "Composants & thème",
        details:
          "Une cinquantaine de composants MUI et de hooks, thème light/dark basé sur des design tokens.",
      },
      {
        label: "Publication",
        details:
          "Package publié sur un registre npm privé, versions automatisées avec semantic-release.",
      },
      {
        label: "Collaboration design",
        details:
          "Prise d'initiative auprès des designers : Figma commun, ateliers devs-designers, documentation des composants dans Storybook.",
      },
    ],
    tags: ["React", "TypeScript", "MUI", "Storybook", "semantic-release", "Figma"],
    screenshot: "/design-system-storybook.webp",
    screenshotAlt: "Storybook du design system",
    visual: { icon: "🎨", gradient: "from-teal-700 to-emerald-600" },
    githubNote: "Code propriétaire — non disponible publiquement",
  },
  {
    title: "Refonte d'un Dashboard Métier",
    subtitle: "POC — Migration Tableau → Application web",
    context: "EDF Power Solutions · Alternance",
    autonomy: "solo",
    description:
      "POC réalisé en 12 jours : reconstruire un dashboard Tableau existant en application web intégrée à la plateforme Mynsights (Typescript / Python), avec des données en cours de migration Power BI. Collaboration active avec l'équipe data.",
    achievements: [
      {
        label: "Back-end Python / FastAPI",
        details:
          "Adaptation des requêtes Power BI, transformation et optimisation des données avec Polars, création des routes API.",
      },
      {
        label: "Front-end React / TypeScript",
        details:
          "Récupération de la donnée via Redux Toolkit (RTK Query), filtres métier, création de graphiques ECharts sur-mesure (double bar chart, bar chart positif/négatif…) intégrés au design system MUI.",
      },
      {
        label: "Résultat",
        details:
          "POC livré et validé — preuve de faisabilité pour migrer les dashboards Tableau vers la plateforme web interne.",
      },
    ],
    tags: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "ECharts",
      "Power BI",
      "Redux Toolkit",
      "MUI",
    ],
    screenshot: "/dashboard-full-web.png",
    screenshotAlt: "Dashboard EDF MyNSights",
    visual: { icon: "📊", gradient: "from-emerald-800 to-teal-700" },
    githubNote: "Code propriétaire — non disponible publiquement",
  },
  {
    title: "Plateforme de Réservation",
    subtitle: "Interface admin · Authentification sécurisée",
    context: "Projet client · Soutenance RNCP 6",
    autonomy: "solo",
    description:
      "Application fullstack pour un client réel (O'Sun Voix Animale), gérée de A à Z : recueil du besoin, conception, développement et déploiement. Focus sur l'espace d'administration et la sécurité (suivi des recommandations OWASP).",
    achievements: [
      {
        label: "Authentification & sécurité",
        details:
          "NextAuth.js v5, hash Argon2id, cookie HttpOnly, reset de mot de passe, rate limiting, Cloudflare Turnstile anti-bot. En-têtes HTTP de sécurité configurées (X-Frame-Options, X-Content-Type-Options, Referrer-Policy…).",
      },
      {
        label: "Interface admin",
        details:
          "Gestion des créneaux (CRUD, contrainte RESTRICT pour les créneaux réservés), dashboard réservations avec statuts, notes internes par réservation. Validation Zod côté serveur sur toutes les routes. Middleware Next.js protégeant l'ensemble des routes /admin.",
      },
      {
        label: "Bonnes pratiques",
        details:
          "Drizzle ORM avec requêtes paramétrées, CI sur chaque PR (lint, build, tests unitaires), branches dédiées et commits atomiques.",
      },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "NextAuth.js",
      "Argon2id",
      "Zod",
      "Drizzle ORM",
      "Cloudflare Turnstile",
    ],
    screenshot: "/dashboardlocal.jpg",
    screenshotAlt: "Interface admin — gestion des réservations",
    visual: { icon: "🔐", gradient: "from-teal-700 to-emerald-600" },
    link: {
      href: "https://www.osun-voixanimale.com/",
      label: "Voir le site",
    },
  },
  {
    title: "Live Monitoring Solaire",
    subtitle: "Données temps réel · Parcs solaires · Run & debug",
    context: "EDF Power Solutions · Alternance",
    autonomy: "binome",
    description:
      "Développement et maintien en conditions opérationnelles du volet solaire d'un système de monitoring temps réel (le volet éolien existait déjà), intégré à la plateforme de data visualisation (~400 utilisateurs/mois). Utilisé par les asset managers pour repérer les anomalies des parcs. Gestion du run sur cette feature : investigation et résolution des bugs remontés par les utilisateurs.",
    achievements: [
      {
        label: "Jobs de collecte (Python)",
        details:
          "Récupération des mesures via API PI, transformation et publication dans Redis avec refresh toutes les 10 minutes. Gestion de la concurrence avec sémaphores pour limiter les appels parallèles.",
      },
      {
        label: "Visualisation (React / TypeScript)",
        details:
          "Intégration dans le front existant avec graphiques ECharts et mise à jour dynamique des données. Feature développée en binôme avec un développeur senior.",
      },
      {
        label: "Run & support",
        details:
          "Interlocutrice pour les bugs remontés par les utilisateurs sur cette feature : investigation, correction et communication avec la PO.",
      },
    ],
    tags: [
      "Python",
      "FastAPI",
      "Redis",
      "React",
      "TypeScript",
      "ECharts",
      "API PI",
    ],
    screenshot: "/live-monitoring.png",
    screenshotAlt: "Live monitoring solaire — EDF",
    visual: { icon: "⚡", gradient: "from-emerald-700 to-green-800" },
    githubNote: "Code propriétaire — non disponible publiquement",
  },
];
