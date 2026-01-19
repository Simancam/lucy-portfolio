import gsap from "gsap";

interface HeroAnimationRefs {
  divider: HTMLSpanElement | null;
  secondaryText: HTMLDivElement | null;
}

export const heroAnimations = ({ divider, secondaryText }: HeroAnimationRefs) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Divider animation
  if (divider) {
    tl.fromTo(
      divider,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      }
    );
  }

  // Secondary text animation
  const items = secondaryText?.querySelectorAll("span");

  if (items) {
    tl.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }

  return tl;
};
