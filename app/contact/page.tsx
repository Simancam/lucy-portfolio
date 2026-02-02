"use client";

import { useRouter } from "next/navigation";
import { SocialCard } from "@/components/contact/SocialCard";
import { ContactForm } from "@/components/contact/ContactForm";
import LiquidEther from "@/components/contact/LiquidEther";
import { usePageAnimations } from "@/animations/contactAnimations";

const socials = [
  {
    name: "Instagram",
    handle: "@dami26k",
    brandColor: "#E4405F",
    href: "https://www.instagram.com/dami26k/",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+57 301 6980983",
    brandColor: "#25D366",
    href: "https://wa.me/573016980983",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5m0 0a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "/company/tunegocio",
    brandColor: "#0A66C2",
    href: "https://linkedin.com",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const router = useRouter();
  const {
    containerRef,
    titleRef,
    subtitleRef,
    socialsRef,
    formSectionRef,
  } = usePageAnimations();

  const handleGoBack = () => {
    router.push("/"); 
  };

  return (
    <main ref={containerRef} className="relative min-h-screen bg-background">
      {/* LiquidEther Background */}
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Botón para volver */}
      <div className="fixed top-4 left-4 z-20 md:top-6 md:left-6">
        <button
          onClick={handleGoBack}
          className="group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-background/80 backdrop-blur-sm border border-foreground/10 hover:bg-foreground/5 transition-all duration-300 hover:scale-105"
          aria-label="Volver a la pantalla principal"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="hidden sm:inline">Volver al inicio</span>
          <span className="sm:hidden">Inicio</span>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-28 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1
              ref={titleRef}
              className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground text-balance"
            >
              Conectemos
            </h1>
            <p
              ref={subtitleRef}
              className="max-w-lg text-lg text-muted-foreground text-pretty"
            >
              ¿Quieres llevar tus proyectos al siguiente nivel? Me encantaria escucharte. Elige tu
              canal favorito o envíanos un mensaje.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Social Cards */}
            <div className="space-y-6">
              <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                Redes sociales
              </h2>
              <div ref={socialsRef} className="grid gap-4">
                {socials.map((social) => (
                  <SocialCard
                    key={social.name}
                    name={social.name}
                    handle={social.handle}
                    icon={social.icon}
                    brandColor={social.brandColor}
                    href={social.href}
                  />
                ))}
              </div>

              {/* Additional Info */}
              <div className="pt-8 space-y-4 border-t border-foreground/10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-foreground/5">
                    <svg
                      className="w-5 h-5 text-muted-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Barranquilla, CO
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-foreground/5">
                    <svg
                      className="w-5 h-5 text-muted-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      lucygomez2626@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div ref={formSectionRef} className="lg:pl-8 -mt-44">
              <div className="p-8 border rounded-2xl border-foreground/10 bg-card/50">
                <h2 className="mb-2 text-xl font-semibold text-foreground">
                  Envíanos un mensaje
                </h2>
                <p className="mb-8 text-sm text-muted-foreground">
                  Responderemos lo antes posible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}