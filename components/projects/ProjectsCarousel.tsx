"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
  onEmblaApi?: (api: any) => void;
  canScrollPrev?: boolean;
  canScrollNext?: boolean;
  onScrollPrev?: () => void;
  onScrollNext?: () => void;
}

export function ProjectsCarousel({ 
  projects, 
  onEmblaApi,
  canScrollPrev = false,
  canScrollNext = false,
  onScrollPrev,
  onScrollNext
}: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  React.useEffect(() => {
    if (emblaApi && onEmblaApi) {
      onEmblaApi(emblaApi);
    }
  }, [emblaApi, onEmblaApi]);

  return (
    <>
      <div className="relative w-full">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6 pl-6 md:pl-12">
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* Mobile Navigation */}
      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-end gap-3 px-6 md:hidden md:px-12">
        <Button
          variant="outline"
          size="icon"
          onClick={onScrollPrev}
          className={cn(
            "h-10 w-10 rounded-full border-2 border-foreground/20 bg-transparent transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background",
            !canScrollPrev && "opacity-50 cursor-not-allowed"
          )}
          aria-label="Previous slide"
          disabled={!canScrollPrev}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onScrollNext}
          className={cn(
            "h-10 w-10 rounded-full border-2 border-foreground/20 bg-transparent transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background",
            !canScrollNext && "opacity-50 cursor-not-allowed"
          )}
          aria-label="Next slide"
          disabled={!canScrollNext}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}