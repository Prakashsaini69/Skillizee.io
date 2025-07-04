import React, { useState } from "react";
import { WavyBackground } from "../../components/ui/wavy-background";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { FlipWords } from "../../components/ui/flip-words";

export default function HeroSection() {
  const [showFlip, setShowFlip] = useState(false);

  // Handler to trigger flip after text generate effect
  const handleHeadlineDone = () => setShowFlip(true);

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="text-5xl md:text-7xl lg:text-6xl font-extrabold text-center mb-2" style={{ color: "#00308A", textShadow: "0 2px 8px rgba(0,48,138,0.10)" }}>
        {!showFlip ? (
          <TextGenerateEffect
            words="All the Skills"
            className="inline"
            style={{ color: "#00308A" }}
            onDone={handleHeadlineDone}
          />
        ) : (
          <>
            All the{' '}
            <FlipWords words={["Skills","Experience", "Knowledge"]} className="inline-block" />
          </>
        )}
      </div>
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