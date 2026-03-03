"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: [
        { name: "JavaScript / TypeScript", metric: "2 ans · 5 projets" },
        { name: "React / Next.js", metric: "2 ans · 4 projets" },
        { name: "Redux Toolkit", metric: "1 an · 1 projet pro" },
        { name: "Material UI / Tailwind CSS", metric: "1 an · 3 projets" },
        { name: "HTML / CSS", metric: "3 ans · tous projets" },
      ],
    },
    {
      icon: Database,
      title: "Backend & Data",
      skills: [
        { name: "Python / FastAPI", metric: "1 an · 1 projet pro" },
        { name: "Node.js / NestJS", metric: "6 mois · 2 projets" },
        { name: "PostgreSQL / MySQL", metric: "1 an · 3 projets" },
        { name: "Redis", metric: "1 an · 1 projet pro" },
        { name: "API REST", metric: "2 ans · 5 projets" },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", metric: "1 an · 1 projet pro" },
        { name: "Git / GitLab", metric: "2 ans · tous projets" },
        { name: "CI/CD", metric: "1 an · 1 projet pro" },
        { name: "Docker", metric: "6 mois · 2 projets" },
      ],
    },
    {
      icon: Wrench,
      title: "Méthodologie & Outils",
      skills: [
        { name: "Agile / SCRUM", metric: "1 an · EDF Power Solutions" },
        { name: "Tests (Jest, pytest)", metric: "1 an · 2 projets" },
        { name: "Jira / Confluence", metric: "1 an · quotidien" },
        { name: "Figma / Canva", metric: "1 an · 3 projets" },
      ],
    },
  ];

  const softSkills = [
    "Collaboration en équipe",
    "Autonomie",
    "Apprentissage continu",
    "Communication technique",
    "Écoute active",
    "Adaptabilité",
    "Rigueur",
    "Curiosité",
  ];

  return (
    <section
      id="skills"
      className="section-container bg-surface-alt dark:bg-surface-alt"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Compétences</span>
        </h2>
        <p className="text-center text-muted dark:text-muted mb-12 max-w-2xl mx-auto">
          Technologies et méthodologies que je maîtrise
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-surface dark:bg-surface rounded-xl p-6 card-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-tint dark:bg-brand-tint rounded-lg">
                  <category.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    className="flex items-center justify-between py-2 border-b border-brand/10 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-brand-tint dark:bg-brand-tint text-brand rounded-full whitespace-nowrap">
                      {skill.metric}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface dark:bg-surface rounded-xl p-8 card-shadow"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Soft Skills & Collaboration
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-brand-tint dark:bg-brand-tint text-brand rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
