"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 w-full justify-between">
        {/* Columna Izquierda: Título y Redes Sociales */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-4xl font-bold">
            <SparklesText text="Contact Us" />
          </h2>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-white hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-white hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-white hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-6 h-6 text-white hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </div>
        {/* Columna Derecha: Formulario de Contacto */}
        <div className="md:w-1/2 flex justify-end">
          <form className="space-y-4 max-w-lg w-full">
            <Input type="text" placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Your Email" className="w-full" />
            <Textarea placeholder="Your Message" rows={5} className="w-full" />
            <Button
              type="submit"
              className="bg-zinc-600 hover:bg-zinc-700 transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}