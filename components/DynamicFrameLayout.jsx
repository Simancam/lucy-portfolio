"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FrameComponent } from "./FrameComponent";

// Configuración inicial de los frames (carrusel de imágenes, categoría y enlace)
const initialFrames = [
  {
    id: 1,
    images: [
      "/vercel.svg",
      "/file.svg",
      "/globe.svg",
    ],
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    category: "Eventos",
    link: "https://example.com/eventos",
  },
  {
    id: 2,
    images: [
      "https://static.cdn-luma.com/files/your-image2a.jpg",
      "https://static.cdn-luma.com/files/your-image2b.jpg",
      "https://static.cdn-luma.com/files/your-image2c.jpg",
    ],
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    category: "Retrato",
    link: "https://example.com/retrato",
  },
  {
    id: 3,
    images: [
      "https://static.cdn-luma.com/files/your-image3a.jpg",
      "https://static.cdn-luma.com/files/your-image3b.jpg",
      "https://static.cdn-luma.com/files/your-image3c.jpg",
    ],
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    category: "Flores",
    link: "https://example.com/flores",
  },
];

export default function DynamicFrameLayout() {
  const [frames] = useState(initialFrames);
  const [hovered, setHovered] = useState(null);

  // Para definir el grid se utiliza un tamaño fijo (por ejemplo, 12 unidades) y se ajusta el tamaño de la fila/columna de acuerdo al hover
  const hoverSize = 6;
  const gapSize = 4;

  const getRowSizes = () => {
    if (!hovered) return "4fr 4fr 4fr";
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((r) => (r === hovered.row ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(" ");
  };

  const getColSizes = () => {
    if (!hovered) return "4fr 4fr 4fr";
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((c) => (c === hovered.col ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(" ");
  };

  const getTransformOrigin = (x, y) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom";
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right";
    return `${vertical} ${horizontal}`;
  };

  return (
    <div className="w-full h-full">
      <div
        className="relative w-full h-full"
        style={{
          display: "grid",
          gridTemplateRows: getRowSizes(),
          gridTemplateColumns: getColSizes(),
          gap: `${gapSize}px`,
          transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4);
          const col = Math.floor(frame.defaultPos.x / 4);
          const transformOrigin = getTransformOrigin(
            frame.defaultPos.x,
            frame.defaultPos.y
          );
          return (
            <motion.div
              key={frame.id}
              className="relative"
              style={{ transformOrigin, transition: "transform 0.4s ease" }}
              onMouseEnter={() => setHovered({ id: frame.id, row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <FrameComponent
                images={frame.images}
                link={frame.link}
                width="100%"
                height="100%"
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                label={`Frame ${frame.id}`}
                category={frame.category}
                isHovered={hovered && hovered.id === frame.id}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
 