import { Code2, Server, Sparkles, Database, Wrench } from "lucide-react";

// A start year never gets outdated, unlike a hardcoded duration.
export const skillCategories = [
  {
    icon: Code2,
    title: "Front-end",
    skills: [
      { name: "JavaScript / TypeScript", since: 2023 },
      { name: "React / Next.js", since: 2023 },
      { name: "Redux Toolkit", since: 2024 },
      { name: "MUI / Tailwind CSS", since: 2024 },
      { name: "Storybook", since: 2024 },
      { name: "ECharts", since: 2024 },
    ],
  },
  {
    icon: Server,
    title: "Back-end",
    skills: [
      { name: "Python / FastAPI", since: 2024 },
      { name: "Node.js", since: 2023 },
      { name: "NestJS", since: 2025 },
      { name: "API REST", since: 2023 },
      { name: "SQL", since: 2023 },
    ],
  },
  {
    icon: Sparkles,
    title: "IA",
    skills: [
      { name: "LangChain", since: 2026 },
      { name: "Claude Code / Kiro (skills, steering, MCP)", since: 2026 },
    ],
  },
  {
    icon: Database,
    title: "Data & Infra",
    skills: [
      { name: "PostgreSQL", since: 2023 },
      { name: "Redis", since: 2024 },
      { name: "Databricks", since: 2026 },
      { name: "AWS", since: 2024 },
      { name: "Docker", since: 2024 },
      { name: "CI/CD GitLab", since: 2024 },
    ],
  },
  {
    icon: Wrench,
    title: "Méthodes & Outils",
    skills: [
      { name: "Tests (Jest, pytest)", since: 2024 },
      { name: "Agile (SAFe, Scrum)", since: 2023 },
      { name: "Git", since: 2023 },
      { name: "Jira / Confluence", since: 2024 },
      { name: "Figma", since: 2024 },
    ],
  },
];

export const softSkills = [
  "Vision produit",
  "Communication avec le métier",
  "Pédagogie",
  "Collaboration en équipe",
  "Autonomie",
  "Apprentissage continu",
  "Résolution de problèmes",
  "Communication technique",
  "Écoute active",
  "Adaptabilité",
  "Rigueur",
  "Curiosité",
];
