"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Application de Data Visualisation",
      description:
        "Plateforme de monitoring pour 320 parcs éoliens et solaires avec données temps réel et dashboards interactifs. ~200 utilisateurs actifs/mois.",
      visual: {
        icon: "📊",
        gradient: "from-emerald-700 to-teal-600",
        tech: "React · FastAPI · Redis",
      },
      tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "AWS"],
      highlights: [
        "Intégration API temps réel (refresh 5min)",
        "Charts interactifs avec ECharts",
        "Architecture asynchrone avec sémaphores",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Plateforme de Réservation",
      description:
        "Application fullstack de réservation en ligne avec système de créneaux, interface admin et CMS headless.",
      visual: {
        icon: "📅",
        gradient: "from-teal-700 to-emerald-600",
        tech: "Next.js · Strapi · Supabase",
      },
      tags: ["Next.js", "TypeScript", "Strapi", "Supabase"],
      highlights: [
        "Gestion de créneaux dynamique",
        "Interface admin complète",
        "Déploiement Vercel",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "E-commerce Fullstack",
      description:
        "Application e-commerce complète avec panier, paiement et gestion de produits (projet Ada Tech School).",
      visual: {
        icon: "🛒",
        gradient: "from-emerald-600 to-green-700",
        tech: "React · Node.js · Stripe",
      },
      tags: ["React", "Node.js", "MySQL", "Stripe"],
      highlights: [
        "Intégration paiement Stripe",
        "Gestion du panier en temps réel",
        "Panel admin produits",
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Projets <span className="gradient-text">Techniques</span>
        </h2>
        <p className="text-center text-muted dark:text-muted mb-12 max-w-2xl mx-auto">
          Une sélection de mes réalisations en développement web
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-surface dark:bg-surface rounded-xl overflow-hidden card-shadow
                hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`relative h-44 bg-linear-to-br ${project.visual.gradient} flex flex-col items-center justify-center gap-2`}
              >
                <span className="text-5xl">{project.visual.icon}</span>
                <span className="text-white/80 text-sm font-medium">
                  {project.visual.tech}
                </span>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted dark:text-muted mb-4 text-sm">
                  {project.description}
                </p>

                <ul className="mb-4 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted dark:text-muted flex items-start"
                    >
                      <span className="text-brand mr-2 shrink-0">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2 border-t border-brand/20">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted dark:text-muted hover:text-brand transition-colors cursor-pointer group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted dark:text-muted hover:text-brand transition-colors cursor-pointer group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
