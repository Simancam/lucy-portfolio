"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

export function FrameComponent({
  images, // Arreglo de imágenes para el carrusel
  link,
  width,
  height,
  className = "",
  mediaSize,
  borderThickness,
  borderSize,
  onMediaSizeChange,
  onBorderThicknessChange,
  onBorderSizeChange,
  showControls,
  label,
  category,
  isHovered,
  autoSlideInterval = 3000, // Intervalo (ms) para cambiar la imagen
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [images, autoSlideInterval]);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`relative ${className}`}
        style={{
          width,
          height,
          transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 1, transition: "all 0.3s ease-in-out" }}
          >
            <div
              className="w-full h-full overflow-hidden"
              style={{
                transform: `scale(${mediaSize})`,
                transformOrigin: "center",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[currentImageIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  src={images[currentImageIndex]}
                  alt={label}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Overlay animado con la categoría */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                style={{ zIndex: 3 }}
              >
                <span className="text-white text-lg font-bold">{category}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {showControls && (
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 z-10">
            <div className="text-white font-bold mb-2">{label}</div>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-white">
                  Media Size: {mediaSize.toFixed(2)}
                </label>
                <Slider
                  min={0.5}
                  max={3}
                  step={0.01}
                  value={[mediaSize]}
                  onValueChange={(value) => onMediaSizeChange(value[0])}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Border Thickness: {borderThickness}px
                </label>
                <Slider
                  min={0}
                  max={20}
                  step={1}
                  value={[borderThickness]}
                  onValueChange={(value) => onBorderThicknessChange(value[0])}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Border Size: {borderSize}%
                </label>
                <Slider
                  min={50}
                  max={100}
                  step={1}
                  value={[borderSize]}
                  onValueChange={(value) => onBorderSizeChange(value[0])}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </a>
  );
}
