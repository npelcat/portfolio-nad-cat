import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Principles from "@/components/Principles";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      {/* Lets keyboard users skip the navigation: hidden until it gets focus. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-line focus:bg-bg focus:px-4 focus:py-2 focus:text-sm"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Principles />
        <Projects />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
