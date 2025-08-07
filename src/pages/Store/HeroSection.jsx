import React from "react";
import { WavyBackground } from "../../components/ui/wavy-background";
import { FlipWords } from "../../components/ui/flip-words";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <WavyBackground
      containerClassName="h-screen flex flex-col justify-center items-center relative"
      blur={10}
      speed="fast"
      waveOpacity={0.5}
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      backgroundFill="#fff"
    >
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 relative z-10 px-4 sm:px-0">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-[#00308A] text-center drop-shadow-lg leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          All the <FlipWords words={["Skills", "Knowledge", "Experience"]} className="inline-block" />
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-[#00308A] text-center drop-shadow-lg leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          you need at one place
        </motion.h2>
      </div>
    </WavyBackground>
  );
} 