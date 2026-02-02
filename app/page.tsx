"use client";

import { AboutSection } from "@/sections/About";
import Hero from "@/sections/Hero";
import { FadeDivider } from "@/components/FadeDivider";
import ProjectsSections from "@/sections/Projects";
import ContactSection from "@/sections/Contact";
import PillNav from "@/components/PillNav";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <PillNav
          items={[
            { label: "Inicio", href: "#home" },
            { label: "Sobre Mi", href: "#about" },
            { label: "Proyectos", href: "#projects" },
            { label: "Contacto", href: "#contact" },
          ]}
          activeHref="#home"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation
        />
      </div>

      {/* Page content */}
      <main className="relative">
        <section id="home">
          <Hero />
        </section>

        <FadeDivider />

        <section id="about">
          <AboutSection />
        </section>

        <FadeDivider />

        <section id="projects">
          <ProjectsSections />
        </section>

        <FadeDivider />

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
