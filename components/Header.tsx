"use client";

import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { PROFILE } from "@/content/profile";

const navItems = [
  { name: "Projets", href: "#projects" },
  { name: "Parcours", href: "#experience" },
  { name: "Compétences", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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

  // resolvedTheme is the theme really shown, even when the setting is "system".
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Both icons are rendered and CSS shows the right one, so server and client HTML match.
  const themeButton = (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 text-fg-muted transition-colors hover:text-fg"
      aria-label="Changer de thème"
    >
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  );

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="font-medium tracking-tight">
          {PROFILE.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {item.name}
            </a>
          ))}
          {themeButton}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {themeButton}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-2 text-fg-muted transition-colors hover:text-fg"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="container-page pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-line py-3 text-fg-muted transition-colors last:border-0 hover:text-fg"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
