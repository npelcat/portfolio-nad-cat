"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Users } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Développeuse Fullstack Applications Web",
    company: "EDF Power Solutions",
    label: "Data Visualisation · 320 parcs · temps réel",
    period: "Sept 2024 - Présent",
    team: "4 devs seniors · 2 designers · 1 Product Owner",
    screenshot: "/screenshots/edf-dashboard.png",
    description:
      "Application de data visualisation et développement d'outils pour la supervision d'environ 320 parcs éoliens et solaires internationaux (~200 utilisateurs actifs/mois), intégrant des flux temps réel via API externes (PI, Genesys) et multiples API internes.",
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
          "Développement système de live monitoring solaire. / Refonte complète d'un outil Tableau en full web. ",
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
    featured: true,
  },
  {
    title: "Conception & Développement Fullstack (Titre RNCP 6)",
    company: "Ada Tech School / O’Sun Voix Animale",
    label: "Architecture en couches · Sécurité OWASP · Client Réel",
    period: "2024 - Présent",
    type: "Projet de Certification",
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

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container bg-surface-alt dark:bg-surface-alt"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Expérience <span className="gradient-text">Professionnelle</span>
        </h2>
        <p className="text-center text-muted dark:text-muted mb-12 max-w-2xl mx-auto">
          Mon parcours en développement fullstack
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group bg-surface dark:bg-surface rounded-xl overflow-hidden card-shadow hover:shadow-2xl transition-shadow ${
                exp.featured ? "ring-2 ring-brand/30" : ""
              }`}
            >
              {/* Badge "Poste actuel" */}
              {exp.featured && (
                <div className="bg-brand px-6 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white text-sm font-semibold tracking-wide">
                    Poste actuel
                  </span>
                </div>
              )}

              {/* Header avec capture d'écran remplaçant le dégradé */}
              <div className="relative h-40 md:h-56 w-full overflow-hidden">
                {exp.screenshot ? (
                  <Image
                    src={exp.screenshot}
                    alt={exp.company}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800" /> // Fallback si pas d'image
                )}

                {/* Overlay pour la lisibilité */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Texte sur l'image */}
                <div className="absolute bottom-0 left-0 w-full p-6 backdrop-blur-[1px]">
                  <p className="font-bold text-xl text-white">{exp.company}</p>
                  <p className="text-sm text-white/80 line-clamp-1">
                    {exp.label}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    {exp.type && (
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-brand" />
                        <span className="text-sm font-medium text-brand">
                          {exp.type}
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-xl text-muted dark:text-muted">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="flex items-center gap-2 text-muted dark:text-muted font-medium">
                      <Calendar className="w-5 h-5" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.team && (
                      <div className="flex items-center gap-2 text-muted dark:text-muted text-sm">
                        <Users className="w-4 h-4" />
                        <span>{exp.team}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-muted dark:text-muted mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-4 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i}>
                      <h4 className="font-semibold mb-1">
                        {achievement.title}
                      </h4>
                      <p
                        className={`text-muted dark:text-muted pl-4 border-l-2 ${
                          achievement.title === "Réalisations clés"
                            ? "border-brand bg-brand-tint dark:bg-brand-tint py-2 pr-3 rounded-r-lg"
                            : "border-brand"
                        }`}
                      >
                        {achievement.details}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-brand-tint dark:bg-brand-tint text-brand rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
