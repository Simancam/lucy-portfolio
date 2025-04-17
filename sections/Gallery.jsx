"use client";

import CircularGallery from "@/components/ui/CircularGallery";
import TrueFocus from "@/components/ui/TrueFocus";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-12 md:py-32 relative min-h-screen border-b border-dashed border-white/10"
    >
      <div className="flex justify-center">
        <TrueFocus
          sentence="My Gallery"
          manualMode={false}
          blurAmount={5}
          borderColor="purple"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          items={[
            { image: "/lucy.jpeg", text: "" },
            { image: "/globe.svg", text: "" },
            { image: "", text: "" },
            { image: "/file.svg", text: "" },
          ]}
        />
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/gallery" passHref>
          <Button
            variant="outline"
            className="px-6 py-2 border-zinc-500 text-zinc-500 hover:text-zinc-300 hover:border-zinc-300 transition-colors"
          >
            See More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
