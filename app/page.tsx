import { AboutSection } from "@/sections/About";
import Hero from "@/sections/Hero";
import { FadeDivider } from "@/components/FadeDivider";

export default function Home() {
  return (
    <>
      <div style={{ width: "100%", height: "200vh", position: "relative" }}>
        <Hero />
        <FadeDivider />
        <AboutSection/>
      </div>
    </>
  );
}
