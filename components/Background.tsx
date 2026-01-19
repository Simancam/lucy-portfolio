import FaultyTerminal from "./FaultyTerminal";
import type { ReactNode } from "react";

type BackgroundProps = {
  children?: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  return (
    <header
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background layer */}
      <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0.1}
        mouseReact
        mouseStrength={0.5}
        pageLoadAnimation
        brightness={0.6}
        tint="#8d47f5"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </header>
  );
}
