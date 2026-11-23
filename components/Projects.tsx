"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, User, Users, ImageIcon } from "lucide-react";
import Image from "next/image";
import { projects, type AutonomyLevel, type Project } from "@/content/projects";

function AutonomyBadge({ level }: { level: AutonomyLevel }) {
  const isSolo = level === "solo";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${
        isSolo
          ? "bg-brand-tint text-brand"
          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
      }`}
    >
      {isSolo ? <User className="w-3 h-3" /> : <Users className="w-3 h-3" />}
      {isSolo ? "Autonomie totale" : "En binôme"}
    </span>
  );
}

function CardVisual({ project }: { project: Project }) {
  if (project.screenshot) {
    return (
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.screenshot}
          alt={project.screenshotAlt ?? project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={`relative h-44 bg-linear-to-br ${project.visual.gradient}
        flex flex-col items-center justify-center gap-2`}
    >
      <ImageIcon className="w-7 h-7 text-white/50" />
      <span className="text-white/50 text-xs font-medium tracking-wide">
        Capture à venir
      </span>
      <span className="absolute bottom-3 right-4 text-4xl opacity-15">
        {project.visual.icon}
      </span>
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Réalisations <span className="gradient-text">Techniques</span>
        </h2>
        <p className="text-center text-muted dark:text-muted mb-12 max-w-2xl mx-auto">
          Features et projets représentatifs
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
                hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <CardVisual project={project} />

              <div className="p-6 flex flex-col flex-1">
                {/* En-tête */}
                <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
                  <div>
                    <h3 className="text-lg font-bold leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.autonomy && (
                    <AutonomyBadge level={project.autonomy} />
                  )}
                </div>

                <p className="text-xs text-muted dark:text-muted mb-3 font-medium">
                  {project.context}
                </p>

                <p className="text-sm text-muted dark:text-muted mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Détails techniques */}
                <div className="space-y-3 mb-5 flex-1">
                  {project.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="pl-3 border-l-2 border-brand/40 hover:border-brand transition-colors"
                    >
                      <p className="text-xs font-semibold text-brand mb-0.5">
                        {achievement.label}
                      </p>
                      <p className="text-xs text-muted dark:text-muted leading-relaxed">
                        {achievement.details}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800
                        text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-brand/20">
                  {project.link ? (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-brand
                        hover:opacity-70 transition-opacity font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.link.label}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-xs text-muted dark:text-muted">
                      <Lock className="w-3.5 h-3.5 shrink-0" />
                      {project.githubNote}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
