"use client";

import React from "react"

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface SocialCardProps {
  name: string;
  handle: string;
  icon: React.ReactNode;
  brandColor: string;
  href: string;
}

export function SocialCard({
  name,
  handle,
  icon,
  brandColor,
  href,
}: SocialCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const iconEl = iconRef.current;
    const arrow = arrowRef.current;

    if (!card || !glow || !iconEl || !arrow) return;

    const handleMouseEnter = () => {
      gsap.to(glow, {
        opacity: 0.15,
        scale: 1.2,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(card, {
        borderColor: brandColor,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(iconEl, {
        scale: 1.1,
        color: brandColor,
        duration: 0.3,
        ease: "back.out(1.7)",
      });

      gsap.to(arrow, {
        x: 4,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glow, {
        opacity: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(card, {
        borderColor: "rgba(255, 255, 255, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(iconEl, {
        scale: 1,
        color: "#ffffff",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(arrow, {
        x: 0,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [brandColor]);

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center gap-4 p-6 overflow-hidden transition-colors border rounded-2xl border-foreground/10 bg-card group"
    >
      {/* Glow effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${brandColor} 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        ref={iconRef}
        className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-foreground/5"
      >
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <h3 className="font-medium text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{handle}</p>
      </div>

      {/* Arrow */}
      <div
        ref={arrowRef}
        className="relative z-10 opacity-50"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
