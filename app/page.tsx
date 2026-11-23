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
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Principles />
      <Projects />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
