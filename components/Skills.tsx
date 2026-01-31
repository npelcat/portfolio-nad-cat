"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "React / Next.js", level: 85 },
        { name: "Redux Toolkit", level: 80 },
        { name: "Material UI / Tailwind CSS", level: 85 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      icon: Database,
      title: "Backend & Data",
      skills: [
        { name: "Python / FastAPI", level: 85 },
        { name: "Node.js / NestJS", level: 75 },
        { name: "PostgreSQL / MySQL", level: 80 },
        { name: "Redis", level: 70 },
        { name: "API REST", level: 85 },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Git / GitLab", level: 85 },
        { name: "CI/CD", level: 75 },
        { name: "Docker", level: 65 },
      ],
    },
    {
      icon: Wrench,
      title: "Méthodologie & Outils",
      skills: [
        { name: "Agile / SCRUM", level: 85 },
        { name: "Tests (Jest, pytest)", level: 80 },
        { name: "Jira / Confluence", level: 80 },
        { name: "Figma / Canva", level: 75 },
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
      className="section-container bg-slate-50 dark:bg-slate-900/50"
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
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Technologies et méthodologies que je maîtrise
        </p>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        className="h-full bg-linear-to-r from-blue-600 to-purple-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-dark-card rounded-xl p-8 shadow-lg"
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
                className="px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
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
