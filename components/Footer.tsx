"use client";

import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-text-dark py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Développeuse Fullstack
            </h3>
            <p
              className="text-sm"
              style={{ color: "var(--color-text-muted-dark)" }}
            >
              Passionnée par le développement web et la création
              d&apos;applications performantes. Actuellement en poste chez EDF
              Power Solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-text-muted-dark)" }}
            >
              {["experience", "achievements", "skills", "contact"].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="hover:text-brand transition-colors capitalize"
                    >
                      {section === "experience"
                        ? "Expérience"
                        : section === "achievements"
                          ? "Réalisations techniques"
                          : section === "skills"
                            ? "Compétences"
                            : "Contact"}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <a
                  href="https://github.com/npelcat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-brand-tint hover:opacity-80 rounded-lg transition-opacity"
                  aria-label="GitHub"
                >
                  <Github
                    className="w-5 h-5"
                    style={{ color: "var(--color-text-dark)" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/nadege-pelcat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-brand-tint hover:opacity-80 rounded-lg transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    className="w-5 h-5"
                    style={{ color: "var(--color-text-dark)" }}
                  />
                </a>
                <a
                  href="mailto:pelcat.nd@gmail.com"
                  className="p-2 bg-brand-tint hover:opacity-80 rounded-lg transition-opacity"
                  aria-label="Email"
                >
                  <Mail
                    className="w-5 h-5"
                    style={{ color: "var(--color-text-dark)" }}
                  />
                </a>
              </div>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted-dark)" }}
              >
                Paris, Île-de-France
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t border-brand text-center text-sm"
          style={{ color: "var(--color-text-muted-dark)" }}
        >
          <p className="flex items-center justify-center gap-2">
            Créé avec <Heart className="w-4 h-4 text-red-500 fill-current" /> et
            Next.js • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
