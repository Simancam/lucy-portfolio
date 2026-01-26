import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";

export const lkTernima = localFont({
  src: "../public/fonts/LK_Ternima-Regular.ttf",
  display: "swap",
  variable: "--font-lk-ternima",
});

export const Canela = localFont({
  src: "../public/fonts/Canela.otf",
  display: "swap",
  variable: "--font-canela",
});

export const cyberpunk = localFont({
  src: "../public/fonts/CyberPunk.ttf",
  display: "swap",
  variable: "--font-cyberpunk",
});

export const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plex",
});