import { Navbar } from "@/components/Navbar";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
