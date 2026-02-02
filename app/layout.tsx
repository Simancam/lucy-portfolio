// app/layout.tsx
import type { Metadata } from "next";
import PageLoader from "@/components/PageLoader";
import { LoaderProvider } from "@/components/hero/LoaderContext";
import SmoothScroll from "@/animations/smoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucy Gomez",
  description: "Portfolio de Lucy Gomez - Marketing Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoaderProvider>
          <PageLoader />
          <SmoothScroll />
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}