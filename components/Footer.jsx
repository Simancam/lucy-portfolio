"use client";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Your Brand
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Gallery</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <Separator className="my-6 border-white lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © {new Date().getFullYear()} Your Brand. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
