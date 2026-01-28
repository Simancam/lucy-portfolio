"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

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