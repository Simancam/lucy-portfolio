"use client";

import { useState } from "react";
import DynamicFrameLayout from "@/components/DynamicFrameLayout";
import { ArrowLeft } from "lucide-react"; 
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function Home() {
  const [headerSize] = useState(1.2);
  const [textSize] = useState(0.8);

  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        <Link href="/">
          <Button
            variant="outline"
            className="ml-5 mt-4 md:ml-14 absolute top-4 left-4 p-2  z-10 rounded-full"
          >
            <ArrowLeft size={24} />
          </Button>
        </Link>
        {/* Left Content */}
        <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full relative">
          <div className="flex flex-col gap-16 mt-12">
            {" "}
            <h1
              className="text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]"
              style={{ fontSize: `${4 * headerSize}rem` }}
            >
              Nigger
              <br />
              From
              <br />
              Africa
            </h1>
            <div
              className="flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]"
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                  Luma is looking to hire a multi-disciplinary Brand Designer to
                  develop and maintain the brand identity and communicate the
                  story of Luma to the world. Alongside members of the design
                  team using product and research insights, you will help shape
                  and define Luma's brand across product surfaces, social media,
                  merchandise, marketing website, launch campaigns as well as
                  other new channels.
                </p>
                <p>
                  You will use a combination of graphic design, motion design,
                  web design and video production/editing skills across
                  traditional and innovative tools to communicate in visually
                  compelling and impactful ways.
                </p>
                <p>Here are some of our favorite works so far.</p>
                <div className="h-px bg-white/10 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  );
}
