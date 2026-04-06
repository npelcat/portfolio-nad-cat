"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, Code } from "lucide-react";
import Image from "next/image";

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bloc Photo & Texte Principal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg border-2 border-brand/10">
              <Image
                src="/photo-cv.jpg"
                alt="Photo de profil"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose dark:prose-invert max-w-none text-lg text-muted dark:text-muted space-y-6">
              <p>
                Après 14 ans en tant qu&apos;infirmière vétérinaire, j&apos;ai
                choisi de me réorienter vers le développement web pour relever
                un nouveau défi et nourrir ma soif d&apos;apprentissage.
                Aujourd&apos;hui, je conçois et développe des applications
                modernes avec les mêmes
                <strong>
                  {" "}
                  rigueur, implication et sens des responsabilités
                </strong>{" "}
                que ceux qui guidaient mon engagement dans le monde vétérinaire.
              </p>
              <p>
                Cette reconversion n&apos;est pas un hasard : j&apos;ai toujours
                été la personne vers qui l&apos;on se tournait lorsqu&apos;un
                logiciel faisait des siennes. Curieuse, autonome et
                débrouillarde, j&apos;ai su transformer cette appétence en
                compétences concrètes grâce à une formation intensive, suivie
                d&apos;une année d&apos;alternance chez{" "}
                <strong>EDF Renouvelables</strong>.
              </p>
              <p>
                Durant mon alternance, j&apos;ai travaillé au sein d&apos;une
                équipe agile sur des projets à fort impact métier, en
                développant des outils internes en étroite collaboration avec
                les équipes techniques et les utilisateurs, utilisatrices de nos
                applications.
              </p>
              <p className="italic border-l-2 border-brand pl-4">
                Je suis convaincue que le code peut être un levier puissant au
                service de l&apos;humain et de son environnement, et je mets
                cette conviction au cœur de ma pratique.
              </p>
            </div>
          </motion.div>

          {/* Timeline - Design conservé */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
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
                  11 ans d&apos;expérience en soins vétérinaires : rigueur,
                  gestion du stress, relation client et travail d&apos;équipe.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Février 2023</h3>
                <h4 className="font-semibold mb-1">Début de la Reconversion</h4>
                <p className="text-muted dark:text-muted">
                  Formation autodidacte où ma curiosité naturelle s&apos;est
                  muée en passion pour la mécanique du code et le plaisir de
                  bâtir des outils sur mesure.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sept 2023 - Présent</h3>
                <h4 className="font-semibold mb-1">
                  Ada Tech School & Alternance
                </h4>
                <p className="text-muted dark:text-muted">
                  Formation Conceptrice-Développeuse (Bac +3). Alternance de
                  deux ans chez
                  <strong> EDF Power Solutions</strong>.
                </p>
              </div>
            </div>

            {/* Section Langues intégrée en bas de la timeline pour la sobriété */}
            <div className="mt-8 p-6 bg-brand/5 dark:bg-brand/10 rounded-2xl border border-brand/10 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="font-bold text-xl uppercase tracking-wider text-brand">
                  Langues
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Français */}
                <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                  <p className="font-bold text-lg mb-1">Français</p>
                  <p className="text-muted dark:text-muted/80 text-sm italic">
                    Langue maternelle
                  </p>
                </div>

                {/* Anglais */}
                <div className="relative pl-4 border-l-2 border-brand">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-lg">Anglais (B2)</p>
                    <span className="text-[10px] bg-brand/20 text-brand px-2 py-0.5 rounded-full font-bold uppercase">
                      En formation continue
                    </span>
                  </div>

                  <p className="text-muted dark:text-muted/80 text-sm mb-3 font-medium">
                    Usage professionnel quotidien
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full shrink-0" />
                      Réunions techniques hebdomadaires
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full shrink-0" />
                      Documentation technique autonome
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
