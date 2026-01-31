"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Application de Data Visualisation",
      description:
        "Plateforme de monitoring pour 320 parcs éoliens et solaires avec données temps réel et dashboards interactifs. ~200 utilisateurs actifs/mois.",
      image: "/projects/dataviz.jpg", // À remplacer par une vraie image
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
      image: "/projects/booking.jpg", // À remplacer par une vraie image
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
      image: "/projects/ecommerce.jpg", // À remplacer par une vraie image
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
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
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
              className="group bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-linear-to-br from-blue-400 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                  {project.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-4 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                    >
                      <span className="text-blue-600 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
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

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
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
