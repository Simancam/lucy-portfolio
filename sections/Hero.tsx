"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Background from "@/components/Background";;
import SplitText from "@/components/SplitText";
import { plex, cyberpunk } from "@/lib/fonts";
import { heroAnimations } from "@/animations/heroAnimations";
import { useLoader } from "@/components/LoaderContext";

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
    <Background>
      <div className="absolute bottom-0 left-0 w-full px-6 py-12 flex flex-col items-center gap-6">
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
          className="block w-full h-px bg-white/70 origin-center opacity-0"
        />

        <div
          ref={secondaryTextRef}
          className={`${plex.className} w-full flex justify-between items-center text-white text-xl`}
        >
          <span className="opacity-0">Diseno</span>
          <span className="opacity-0">Fotografia</span>
          <span className="opacity-0">Modelaje</span>
        </div>
      </div>
    </Background>
  );
}
