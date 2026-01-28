"use client";

import { AboutSection } from "@/sections/About";
import Hero from "@/sections/Hero";
import { FadeDivider } from "@/components/FadeDivider";
import ProjectsSections from "@/sections/Projects";
import ContactSection from "@/sections/Contact";
import PillNav from "@/components/PillNav";
import logo from "@/public/vercel.svg";

export default function Home() {
  return (
    <>
      {/* Navbar wrapper */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <PillNav
          logo={logo}
          logoAlt="Lucy Gomez Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation
        />
      </div>

      {/* Page content */}
      <div style={{ width: "100%", height: "200vh", position: "relative" }}>
        <Hero />
        <FadeDivider />
        <AboutSection />
        <FadeDivider />
        <ProjectsSections />
        <FadeDivider />
        <ContactSection />
      </div>
    </>
  );
}
