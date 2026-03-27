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
        <p className="text-center text-muted dark:text-muted mb-12 max-w-2xl mx-auto">
          Mon parcours de reconversion professionnelle
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted dark:text-muted mb-6">
                Issue du monde du soin vétérinaire, j&apos;ai trouvé ma voie
                dans le développement pour allier{" "}
                <strong>logique et créativité</strong>.
              </p>
              <p className="text-lg text-muted dark:text-muted mb-6">
                Mon parcours atypique m&apos;a forgée : la{" "}
                <strong>rigueur</strong>, la <strong>patience</strong> et
                l&apos;
                <strong>esprit d&apos;équipe</strong> acquis dans des contextes
                exigeants sont aujourd&apos;hui des atouts dans mon quotidien de
                dev.
              </p>
              <p className="text-lg text-muted dark:text-muted">
                Développeuse curieuse et passionnée, je recherche une équipe où
                apporter mes compétences techniques, ma bonne humeur et mon
                engagement.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-rose-100 dark:bg-rose-900/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">2012 - 2023</h3>
                <h4 className="font-semibold mb-1">
                  Auxiliaire Spécialisée Vétérinaire
                </h4>
                <p className="text-muted dark:text-muted">
                  11 ans d&apos;expérience en soins vétérinaires : chirurgies,
                  relation clients, travail d&apos;équipe.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-brand-tint dark:bg-brand-tint rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Février 2023</h3>
                <h4 className="font-semibold mb-1">Début de la Reconversion</h4>
                <p className="text-muted dark:text-muted">
                  Formation autodidacte intensive via OpenClassroom et
                  ressources diverses. Découverte de ma passion pour le code.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-brand-tint dark:bg-brand-tint rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sept 2023 - Présent</h3>
                <h4 className="font-semibold mb-1">Ada Tech School</h4>
                <p className="text-muted dark:text-muted">
                  Formation Conceptrice-Développeuse d&apos;applications (Bac
                  +3). 7 projets agiles en équipe. Actuellement en alternance
                  chez EDF Power Solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-surface dark:bg-surface rounded-xl p-8 card-shadow"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Langues</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="font-semibold text-lg mb-2">Français</p>
              <p className="text-muted dark:text-muted">Langue maternelle</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg mb-2">Anglais</p>
              <p className="text-muted dark:text-muted mb-2">
                Niveau B2 (en formation continue)
              </p>
              <ul className="text-sm text-muted dark:text-muted space-y-1">
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
