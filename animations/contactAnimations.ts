"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

// Hook para animaciones de la página de contacto
export function usePageAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set(socialsRef.current?.children || [], {
        opacity: 0,
        y: 20,
      });
      gsap.set(formSectionRef.current, {
        opacity: 0,
        x: 30,
      });

      // Timeline animation
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .to(
          socialsRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3",
        )
        .to(
          formSectionRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
          },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return {
    containerRef,
    titleRef,
    subtitleRef,
    socialsRef,
    formSectionRef,
  };
}

// Hook para animaciones del botón de contacto
export function useContactAnimations() {
  const icon1Ref = useRef<HTMLSpanElement>(null);
  const icon2Ref = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tween1Ref = useRef<gsap.core.Tween | null>(null);
  const tween2Ref = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // Create infinite rotation tweens with different durations (desynchronized)
    if (icon1Ref.current) {
      tween1Ref.current = gsap.to(icon1Ref.current, {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    }

    if (icon2Ref.current) {
      tween2Ref.current = gsap.to(icon2Ref.current, {
        rotation: 360,
        duration: 4.5,
        repeat: -1,
        ease: "none",
      });
    }

    const button = buttonRef.current;

    const handleMouseEnter = () => {
      // Reverse the direction smoothly
      if (tween1Ref.current) {
        gsap.to(tween1Ref.current, {
          timeScale: -1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
      if (tween2Ref.current) {
        gsap.to(tween2Ref.current, {
          timeScale: -1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      // Return to normal direction smoothly
      if (tween1Ref.current) {
        gsap.to(tween1Ref.current, {
          timeScale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
      if (tween2Ref.current) {
        gsap.to(tween2Ref.current, {
          timeScale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    button?.addEventListener("mouseenter", handleMouseEnter);
    button?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button?.removeEventListener("mouseenter", handleMouseEnter);
      button?.removeEventListener("mouseleave", handleMouseLeave);
      tween1Ref.current?.kill();
      tween2Ref.current?.kill();
    };
  }, []);

  return { icon1Ref, icon2Ref, buttonRef };
}