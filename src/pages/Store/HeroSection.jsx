import React from "react";
import { WavyBackground } from "../../components/ui/wavy-background";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

export default function HeroSection() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <TextGenerateEffect
        words="All the Skills"
        className="text-5xl md:text-7xl lg:text-6xl font-extrabold text-center mb-2"
        style={{
          color: "#00308A",
          textShadow: "0 2px 8px rgba(0,48,138,0.10)",
        }}
      />
      <TextGenerateEffect
        words="you need in one place"
        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mt-2"
        style={{
          color: "#00308A",
          textShadow: "0 2px 8px rgba(0,48,138,0.10)",
        }}
      />
    </WavyBackground>
  );
} 