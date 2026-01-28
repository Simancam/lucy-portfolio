"use client";

import Silk from "@/components/contact/Silk";
import { useContactAnimations } from "@/animations/contactAnimations";
import { SiGooglegemini } from "react-icons/si";

export default function ContactSection() {
  const { icon1Ref, icon2Ref, buttonRef } = useContactAnimations();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center p-8">
      {/* Contenedor principal - 80% del viewport con márgenes */}
      <div className="relative w-[90vw] h-[80vh] overflow-hidden rounded-3xl flex flex-col justify-between p-8 md:p-12 lg:p-16">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
          <Silk
            speed={5}
            scale={1}
            color="#8d47f5"
            noiseIntensity={5.1}
            rotation={0}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Headline - arriba a la izquierda */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-xl leading-tight text-balance">
            Wanna create something{" "}
            <span className="font-bold italic">awesome</span> together?
          </h2>

          {/* CTA Area - abajo a la derecha */}
          <div className="flex flex-col items-end self-end">
            <button
              ref={buttonRef}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-white font-medium transition-all hover:bg-white/20 hover:border-white/60 mb-3"
            >
              <span ref={icon1Ref} className="inline-flex">
                <SiGooglegemini className="w-4 h-4" />
              </span>
              <span>{"Let's talk"}</span>
              <span ref={icon2Ref} className="inline-flex">
                <SiGooglegemini className="w-4 h-4" />
              </span>
            </button>
            <p className="text-white/70 text-sm text-right">
              {"Don't like flashy buttons? Reach out at "}
              <a
                href="mailto:contact@davidhaz.com"
                className="text-white font-medium hover:underline"
              >
                contact@davidhaz.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}