"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/animations/aboutAnimations";
import LogoLoop from "@/components/LogoLoop";
import {
  SiDavinciresolve,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiGimp,
  SiWondersharefilmora,
  SiCanva,
} from "react-icons/si";
import TrueFocus from "@/components/TrueFocus";

export function AboutSection() {
  const { ref: bannerRef, isInView: bannerInView } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: textRef, isInView: textInView } = useScrollAnimation({
    threshold: 0.2,
  });

  const techLogos = [
    {
      node: <SiAdobepremierepro />,
    },
    {
      node: <SiGimp />,
    },
    {
      node: <SiAdobelightroom />,
    },
    {
      node: <SiDavinciresolve />,
    },
    {
      node: <SiAdobeillustrator />,
    },
    {
      node: <SiWondersharefilmora />,
    },
    {
      node: <SiAdobephotoshop />,
    },
    {
      node: <SiCanva />,
    },
  ];

  return (
    <section className="min-h-screen bg-background">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Banner Image - Square Rounded */}
        <div
          ref={bannerRef}
          className={`relative w-full aspect-square md:aspect-video lg:aspect-26/9 overflow-hidden rounded-3xl mb-16 md:mb-24 transition-all duration-1000 ease-out ${
            bannerInView
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-8"
          }`}
        >
          <Image
            src="/clavero.jpg"
            alt="Futuristic abstract banner"
            fill
            className={`object-cover transition-transform duration-[1.5s] ease-out ${
              bannerInView ? "scale-100" : "scale-110"
            }`}
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Text Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Title - Left Side */}
          <div
            ref={titleRef}
            className={`lg:col-span-4 transition-all duration-700 ease-out ${
              titleInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex flex-col items-start gap-3">
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-mono">
                Introduction
              </span>

              <div className="leading-none">
                <TrueFocus
                  sentence="About Me"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#8d47f5"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div
            ref={textRef}
            className={`lg:col-span-8 transition-all duration-700 delay-200 ease-out ${
              textInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed font-sans">
              <p>
                Soy un desarrollador y diseñador apasionado por crear
                experiencias digitales innovadoras y memorables. Mi enfoque
                combina la estética visual con la funcionalidad técnica,
                buscando siempre superar los límites de lo convencional.
              </p>
              <p>
                Con más de una década de experiencia en el mundo digital, he
                tenido la oportunidad de colaborar con startups emergentes y
                empresas establecidas, ayudándoles a transformar sus visiones en
                realidades tangibles. Mi especialidad radica en la intersección
                entre el diseño de interfaces y el desarrollo web de alto
                rendimiento.
              </p>
              <p>
                Creo firmemente que la tecnología debe ser una extensión natural
                de la creatividad humana. Cada proyecto que emprendo es una
                oportunidad para explorar nuevas posibilidades, experimentar con
                tecnologías emergentes y crear soluciones que no solo funcionan,
                sino que inspiran.
              </p>
              <p>
                Cuando no estoy frente a la pantalla, me encontrarás explorando
                las últimas tendencias en inteligencia artificial, contribuyendo
                a proyectos open source, o simplemente buscando inspiración en
                la arquitectura y el arte contemporáneo.
              </p>
            </div>

            {/* Stats or highlights */}
            <div
              className="mt-12"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Basic horizontal loop */}
              <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#0000"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
