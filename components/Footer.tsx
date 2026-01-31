"use client";

import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Développeuse Fullstack
            </h3>
            <p className="text-sm text-slate-400">
              Passionnée par le développement web et la création
              d&apos;applications performantes. Actuellement en alternance chez
              EDF Power Solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-400 transition-colors"
                >
                  Expérience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <a
                  href="https://github.com/npelcat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nadege-pelcat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:pelcat.nd@gmail.com"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-slate-400">Paris, Île-de-France</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p className="flex items-center justify-center gap-2">
            Créé avec <Heart className="w-4 h-4 text-red-500 fill-current" /> et
            Next.js • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
