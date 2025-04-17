"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SplitText from "@/components/ui/SplitText"
import { ArrowRight, Camera, Brush, Film } from "lucide-react"

const images = ["/file.svg", "/globe.svg", "/vercel.svg"]
const skills = [
  { icon: Camera, label: "Fotografía" },
  { icon: Brush, label: "Diseño" },
  { icon: Film, label: "Audiovisuales" }
]

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  const nextImage = () => setCurrentImage(prev => (prev + 1) % images.length)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxStyle = (xFactor, yFactor) => ({
    transform: `translate(${scrollY * xFactor}px, ${scrollY * yFactor}px)`
  })

  const scrollFade = (translateFactor, opacityFactor) => ({
    transform: `translateY(${Math.min(scrollY * translateFactor, 30)}px)`,
    opacity: 1 - scrollY * opacityFactor
  })

  return (
    <section
      ref={heroRef} id="home"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[var(--background)] to-[rgba(6,6,6,0.8)] py-20 md:py-32 min-h-screen flex items-center border-b border-dashed border-white/10"
    >
      {/* Background elements */}
      <div
        className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[var(--primary)]/10 blur-3xl"
        style={parallaxStyle(0.03, 0.02)}
      />
      <div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--secondary)]/10 blur-3xl"
        style={parallaxStyle(-0.03, -0.02)}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div
            className="relative flex flex-col justify-center space-y-6 lg:border-r lg:border-dashed lg:border-white/10 lg:pr-16"
            style={scrollFade(0.1, 0.002)}
          >
            <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-primary/20 blur-xl" />
            
            <div className="space-y-2">
              <h2 className="relative text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <SplitText
                  text="Hi, I'm Lucy!"
                  className="text-4xl font-semibold"
                  delay={150}
                  animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeInOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </h2>
              <p className="max-w-md text-xl text-muted-foreground text-white/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="relative w-fit">
              <div className="flex h-12 items-center overflow-hidden rounded-full border border-white/10 px-4 w-fit">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <span className="font-medium">Disponible</span>
                </div>
              </div>
              <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2">
                <Image
                  unoptimized
                  src="/kuromi.gif"
                  alt="Decoración"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map(({ icon: Icon, label }, index) => (
                <Badge
                  key={label}
                  variant="outline"
                  className="flex items-center gap-1 animate-fade-in"
                  style={{ animationDelay: `${200 * (index + 1)}ms` }}
                >
                  <Icon size={16} /> {label}
                </Badge>
              ))}
            </div>

            <div className="pt-4">
              <Button
                variant="secondary"
                size="lg"
                className="group relative overflow-hidden rounded-full px-8 transition-all duration-300 hover:pr-12 bg-white text-[var(--background)]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Ver Portfolio Completo
                <ArrowRight
                  className={`absolute right-4 h-4 w-4 transition-all duration-300 ${
                    isHovered
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                />
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="relative lg:pl-16"
            style={scrollFade(-0.05, 0.001)}
          >
            {/* Controles de ventana con semáforo */}
            <div className="absolute -right-4 -top-4 z-10 rounded-lg border border-white/10 bg-card p-2 bg-white">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-muted/30 shadow-xl transition-all duration-500 hover:shadow-primary/20"
              onClick={nextImage}
              style={{
                transform: `perspective(1000px) rotateY(${scrollY * 0.02}deg) rotateX(${
                  -scrollY * 0.01
                }deg)`,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <Image
                src={images[currentImage]}
                alt="Portfolio showcase"
                width={1280}
                height={720}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 z-20 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 w-8 rounded-full transition-colors ${
                      currentImage === i ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={e => {
                      e.stopPropagation()
                      setCurrentImage(i)
                    }}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 right-4 z-20 rounded-full bg-white/10 p-2 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}