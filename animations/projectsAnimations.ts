"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar el plugin de ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const projectsAnimations = () => {
  if (typeof window === 'undefined') return;

  // Timeline principal para las animaciones de la sección
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects-section",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      markers: false, // Cambiar a true para debug
    }
  });

  // Animación del título
  tl.from("#projects-section .section-title", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, 0);

  // Animación del subtítulo
  tl.from("#projects-section .section-subtitle", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, 0.2);

  // Animación de los botones de navegación
  tl.from("#projects-section .nav-buttons", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2
  }, 0.4);

  // Animación de las tarjetas del carrusel
  tl.from("#projects-section .project-card", {
    y: 150,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: {
      amount: 0.8,
      from: "start"
    }
  }, 0.6);

  // Animación de las gradientes de los bordes
  tl.from("#projects-section .gradient-edge", {
    scaleX: 0,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.3
  }, 1);

  // Animación del borde de acento de las tarjetas
  tl.to("#projects-section .corner-accent", {
    borderColor: "rgba(var(--primary-foreground), 0.8)",
    duration: 0.5,
    ease: "power2.inOut",
    stagger: {
      amount: 0.5,
      from: "random"
    },
    scrollTrigger: {
      trigger: "#projects-section",
      start: "center center",
      end: "bottom 20%",
      scrub: 0.5
    }
  });

  return tl;
};