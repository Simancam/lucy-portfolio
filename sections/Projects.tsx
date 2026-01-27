"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { projectsAnimations } from "@/animations/projectsAnimations";
import ShinyText from "@/components/ShinyText";
import { plex } from "@/lib/fonts";


const projects = [
  {
    id: 1,
    title: "Aurora Borealis",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=1000&fit=crop",
  },
  {
    id: 2,
    title: "Urban Jungle",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    title: "Neon Dreams",
    category: "Digital Art",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=1000&fit=crop",
  },
  {
    id: 4,
    title: "Ocean Depths",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    title: "Mountain Peak",
    category: "Landscape",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    title: "City Lights",
    category: "Urban",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=1000&fit=crop",
  },
  {
    id: 7,
    title: "Abstract Flow",
    category: "Art",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=1000&fit=crop",
  },
  {
    id: 8,
    title: "Desert Rose",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=1000&fit=crop",
  },
];

export default function ProjectsSection() {
  const [emblaApi, setEmblaApi] = React.useState<any>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  React.useEffect(() => {
    // Inicializar animaciones
    projectsAnimations();
  }, []);

  return (
    <section
      id="projects-section"
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl px-6 md:px-12">
        <div className="flex items-end justify-between">
          <div>
            <p className={`${plex.className} section-subtitle mb-2 text-sm tracking-widest opacity-30`}>
              Selected Works
            </p>
            <ShinyText
              className="section-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] pb-[0.15em]"
              text="Gallery"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#8d47f5"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="nav-buttons hidden items-center gap-3 md:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className={cn(
                "h-12 w-12 rounded-full border-2 border-foreground/20 bg-transparent transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background",
                !canScrollPrev && "opacity-50 cursor-not-allowed",
              )}
              aria-label="Previous slide"
              disabled={!canScrollPrev}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className={cn(
                "h-12 w-12 rounded-full border-2 border-foreground/20 bg-transparent transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background",
                !canScrollNext && "opacity-50 cursor-not-allowed",
              )}
              aria-label="Next slide"
              disabled={!canScrollNext}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <ProjectsCarousel
        projects={projects}
        onEmblaApi={setEmblaApi}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
        onScrollPrev={scrollPrev}
        onScrollNext={scrollNext}
      />
    </section>
  );
}
