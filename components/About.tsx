"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          À <span className="gradient-text">Propos</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Mon parcours de reconversion professionnelle
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Issue du monde du soin vétérinaire, j&apos;ai trouvé ma voie
                dans le développement pour allier{" "}
                <strong>logique et créativité</strong>.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Mon parcours atypique m&apos;a forgée : la{" "}
                <strong>rigueur</strong>, la <strong>patience</strong> et
                l&apos;
                <strong>esprit d&apos;équipe</strong> acquis dans des contextes
                exigeants sont aujourd&apos;hui des atouts dans mon quotidien de
                développeuse.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Développeuse curieuse et passionnée, je recherche une équipe où
                apporter mes compétences techniques, ma bonne humeur et mon
                engagement.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">2012 - 2023</h3>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  Auxiliaire Spécialisée Vétérinaire
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  11 ans d&apos;expérience en soins vétérinaires : chirurgies,
                  relation clients, travail d&apos;équipe. Développement de
                  sang-froid, rigueur et adaptabilité.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Février 2023</h3>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  Début de la Reconversion
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Formation autodidacte intensive via OpenClassroom et
                  ressources diverses. Découverte de ma passion pour le code.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sept 2023 - Présent</h3>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  Ada Tech School
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Formation Conceptrice-Développeuse d&apos;applications (Bac
                  +3). 7 projets agiles en équipe. Actuellement en alternance
                  chez EDF Power Solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white dark:bg-dark-card rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Langues</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="font-semibold text-lg mb-2">Français</p>
              <p className="text-slate-600 dark:text-slate-400">
                Langue maternelle
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg mb-2">Anglais</p>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                Niveau B2 (en formation continue)
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-500 space-y-1">
                <li>• Réunions techniques hebdomadaires</li>
                <li>• Documentation technique autonome</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
