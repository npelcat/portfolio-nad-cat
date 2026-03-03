"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-brand-tint dark:bg-brand-tint text-brand text-sm font-medium">
              Développeuse Fullstack
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Bonjour, je suis <span className="gradient-text">Nadège</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted dark:text-muted mb-8 max-w-3xl mx-auto"
          >
            Développeuse fullstack spécialisée en React, TypeScript et Python.
            <br />
            Actuellement en poste chez EDF Power Solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold transition-all cursor-pointer hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5"
            >
              Me contacter
            </a>
            <a
              href="/cv/cv_developpeuse_pelcat_2026.pdf"
              download
              className="px-8 py-3 border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-lg font-semibold transition-all cursor-pointer hover:-translate-y-0.5"
            >
              Télécharger CV français
            </a>
            <a
              href="/cv/resume_developer_pelcat_2026.pdf"
              download
              className="px-8 py-3 border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-lg font-semibold transition-all cursor-pointer hover:-translate-y-0.5"
            >
              Download English Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 justify-center mb-16"
          >
            <a
              href="https://github.com/npelcat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-brand-tint dark:bg-brand-tint hover:scale-110 hover:bg-brand group transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <Image
                src="/github.svg"
                alt="logo GitHub"
                width={24}
                height={24}
                className="dark:invert group-hover:invert transition-all"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nadege-pelcat/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-brand-tint dark:bg-brand-tint hover:scale-110 hover:bg-brand group transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <Image
                src="/linkedin.svg"
                alt="logo LinkedIn"
                width={24}
                height={24}
                className="dark:invert group-hover:invert transition-all"
              />
            </a>
            <a
              href="mailto:pelcat.nd@gmail.com"
              className="p-3 rounded-lg bg-brand-tint dark:bg-brand-tint hover:scale-110 hover:bg-brand group transition-all cursor-pointer"
              aria-label="Email"
            >
              <Image
                src="/gmail.svg"
                alt="logo email"
                width={24}
                height={24}
                className="dark:invert group-hover:invert transition-all"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center"
          >
            <a
              href="#experience"
              className="animate-bounce text-brand cursor-pointer hover:opacity-70 transition-opacity"
            >
              <ArrowDown className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
