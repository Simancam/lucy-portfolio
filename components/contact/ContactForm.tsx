"use client";

import React from "react"

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const inputs = form.querySelectorAll("input, textarea");
    
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.to(input, {
          scale: 1.01,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      input.addEventListener("blur", () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 3000);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm text-muted-foreground">
          Nombre
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Tu nombre"
          className="h-12 transition-all bg-card border-foreground/10 focus:border-foreground/30 placeholder:text-muted-foreground/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm text-muted-foreground">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          className="h-12 transition-all bg-card border-foreground/10 focus:border-foreground/30 placeholder:text-muted-foreground/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm text-muted-foreground">
          Asunto
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="¿En qué podemos ayudarte?"
          className="h-12 transition-all bg-card border-foreground/10 focus:border-foreground/30 placeholder:text-muted-foreground/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm text-muted-foreground">
          Mensaje
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Cuéntanos más sobre tu proyecto..."
          rows={5}
          className="transition-all resize-none bg-card border-foreground/10 focus:border-foreground/30 placeholder:text-muted-foreground/50"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="w-full h-12 font-medium transition-all bg-foreground text-background hover:bg-foreground/90 disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Enviando...
          </span>
        ) : isSubmitted ? (
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Mensaje enviado
          </span>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  );
}
