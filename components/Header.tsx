"use client";

import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { name: "Accueil", href: "#home" },
    { name: "Expérience", href: "#experience" },
    { name: "Réalisations techniques", href: "#achievements" },
    { name: "Compétences", href: "#skills" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface dark:bg-surface backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity"
          >
            Portfolio
          </a>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted dark:text-muted hover:text-brand transition-colors cursor-pointer relative after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-brand-tint dark:bg-brand-tint hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-brand-tint dark:bg-brand-tint cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-surface dark:bg-surface backdrop-blur-md rounded-lg p-4 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-2 rounded-md text-muted dark:text-muted hover:text-brand hover:bg-brand-tint dark:hover:bg-brand-tint transition-all cursor-pointer border-b border-brand last:border-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
