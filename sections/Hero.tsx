"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "@/components/hero/SplitText";
import { plex, cyberpunk } from "@/lib/fonts";
import { heroAnimations } from "@/animations/heroAnimations";
import { useLoader } from "@/components/hero/LoaderContext";
import FaultyTerminal from "@/components/hero/FaultyTerminal";

export default function Hero() {
  const dividerRef = useRef<HTMLSpanElement>(null);
  const secondaryTextRef = useRef<HTMLDivElement>(null);
  const { loading } = useLoader();

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      heroAnimations({
        divider: dividerRef.current,
        secondaryText: secondaryTextRef.current,
      });
    });

    return () => ctx.revert();
  }, [loading]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* FaultyTerminal como fondo */}
      <div className="absolute inset-0 -z-10">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#8d47f5"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex h-screen flex-col justify-end pb-12">
        <div className="w-full px-6">
          <SplitText
            text="Lucy Gomez"
            className={`${cyberpunk.className} w-full text-center text-[clamp(2rem,6vw,10rem)] tracking-[0.35em] leading-none text-white/90`}
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <span
            ref={dividerRef}
            className="block w-full h-px bg-white/70 origin-center opacity-0 mt-6"
          />

          <div
            ref={secondaryTextRef}
            className={`${plex.className} w-full flex justify-between items-center text-white text-xl mt-6`}
          >
            <span className="opacity-0">Diseño</span>
            <span className="opacity-0">Fotografía</span>
            <span className="opacity-0">Modelaje</span>
          </div>
        </div>
      </div>
    </section>
  );
}