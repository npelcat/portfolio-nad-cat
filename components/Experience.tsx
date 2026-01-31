"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Développeuse Fullstack Applications Web",
      company: "EDF Power Solutions",
      period: "Sept 2024 - Présent",
      type: "Alternance",
      description:
        "Application de data visualisation pour 320 parcs éoliens et solaires internationaux (~200 utilisateurs actifs/mois), intégrant des flux temps réel via API externes (PI, Genesys) et multiples API internes.",
      achievements: [
        {
          title: "Front-end",
          details:
            "SPA React-TypeScript, Redux Toolkit, Design system MUI, ECharts (dataviz), Storybook (doc)",
        },
        {
          title: "Back-end",
          details:
            "API RESTful FastAPI (OpenAPI, SQLAlchemy), PostgreSQL/MySQL, déploiement AWS. Jobs asynchrones Python avec Redis pour agrégation données live (refresh 5min)",
        },
        {
          title: "Réalisation clé",
          details:
            "Développement système de live monitoring solaire - traitement de données temps réel (70 assets) via API PI, gestion asynchrone avec sémaphores, publication Redis",
        },
        {
          title: "Qualité & Méthodologie",
          details:
            "Tests unitaires (pytest), linting, CI/CD GitLab. SCRUM (sprints 2 sem., daily, PI trimestriel, code reviews), Jira et Confluence. Équipe : 4 devs seniors, 1 designer, 1 Product Owner",
        },
        {
          title: "Collaboration & Architecture",
          details:
            "Participation aux choix techniques (transition vers monorepo NestJS pour 3 nouvelles app). Interaction équipes multidisciplinaires (data engineers, DevOps, product owners)",
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
        "SCRUM",
      ],
    },
    {
      title: "Projet de Certification (Titre RNCP 6)",
      company: "Ada Tech School",
      period: "2024 - Présent",
      type: "Projet académique",
      description: "Plateforme de réservation",
      achievements: [
        {
          title: "Stack technique",
          details:
            "Application fullstack Next.js/TypeScript : système de réservation en ligne, gestion de créneaux, interface admin, intégration CMS Strapi. Déploiement Vercel/Supabase",
        },
        {
          title: "Gestion de projet",
          details:
            "Conception de projet (cahier des charges, maquettes, interactions client)",
        },
      ],
      tags: ["Next.js", "TypeScript", "Strapi", "Vercel", "Supabase"],
    },
  ];

  return (
    <section
      id="experience"
      className="section-container bg-slate-50 dark:bg-slate-900/50"
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
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
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
              className="bg-white dark:bg-dark-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-xl text-slate-600 dark:text-slate-400">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Calendar className="w-5 h-5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-4 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 pl-4 border-l-2 border-blue-600">
                      {achievement.details}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
