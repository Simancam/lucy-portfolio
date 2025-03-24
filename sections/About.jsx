"use client";

import TextPressure from "@/components/ui/TextPressure";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  SiAdobephotoshop,
  SiFigma,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobeindesign,
} from "react-icons/si";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const designTools = [
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="w-20 h-20 text-gray-400" />,
  },
  { name: "Figma", icon: <SiFigma className="w-20 h-20 text-gray-400" /> },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator className="w-20 h-20 text-gray-400" />,
  },
  {
    name: "After Effects",
    icon: <SiAdobeaftereffects className="w-20 h-20 text-gray-400" />,
  },
  {
    name: "InDesign",
    icon: <SiAdobeindesign className="w-20 h-20 text-gray-400" />,
  },
];

// Duplicamos los elementos para efecto de scroll infinito
const duplicatedItems = [...designTools, ...designTools];

export default function AboutMe() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [AutoScroll({ speed: 1.5 })] //
  );

  return (
    <section
      id="about"
      className="py-12 md:py-32 relative min-h-screen flex items-center border-b border-dashed border-white/10"
      style={{ background: "#060606" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Para mobile se muestra en columna y en desktop en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="bg-transparent border-0 shadow-none relative w-full aspect-square max-w-xs md:max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl">
              <CardContent className="p-0">
                <Avatar className="w-full h-full rounded-2xl">
                  <AvatarImage
                    src="/lucy.jpeg"
                    alt="Profile"
                    className="object-cover"
                  />
                </Avatar>
              </CardContent>
            </Card>
          </div>

          <div>
            <div>
              <Badge
                variant="outline"
                className="mb-4 px-4 py-1 backdrop-blur-sm"
              >
                About Me
              </Badge>
            </div>

            <div className="mb-6">
              <TextPressure
                text="who I am?"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                quaerat, ipsa quia corporis, ex sapiente animi hic, aspernatur
                tenetur accusamus nulla veritatis unde. Unde dolorem beatae quos
                alias consequatur perspiciatis!
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>

            <div className="relative">
              {/* Efecto de difuminado en los extremos */}
              <div
                className="absolute left-0 top-0 h-full w-16 md:w-32 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(6, 6, 6) 0%, rgba(6, 6, 6, 0.95) 15%, rgba(6, 6, 6, 0.8) 30%, rgba(6, 6, 6, 0.4) 50%, rgba(6, 6, 6, 0) 100%)",
                }}
              />
              <div
                className="absolute right-0 top-0 h-full w-16 md:w-32 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(-90deg, rgb(6, 6, 6) 0%, rgba(6, 6, 6, 0.95) 15%, rgba(6, 6, 6, 0.8) 30%, rgba(6, 6, 6, 0.4) 50%, rgba(6, 6, 6, 0) 100%)",
                }}
              />

              {/* Carrusel con Embla */}
              <div className="relative overflow-hidden w-full max-w-lg mx-auto">
                <div ref={emblaRef} className="overflow-hidden">
                  <div className="flex">
                    {duplicatedItems.map((tool, index) => (
                      <div
                        key={index}
                        className="basis-1/3 md:basis-1/3 flex-shrink-0 pl-4"
                      >
                        <Card className="border-0 bg-transparent">
                          <CardContent className="flex items-center justify-center p-2">
                            {tool.icon}
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Fin del carrusel */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
