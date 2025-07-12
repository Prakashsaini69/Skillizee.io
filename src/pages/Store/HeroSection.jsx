import React from "react";
import { AnimatedBeamMultipleInput } from "../../components/ui/AnimatedBeamMultipleInput";
import TrueFocus from "../../components/ui/TrueFocus";

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#00308A] via-[#00308A]/80 to-white py-20">
      <div className="w-full flex flex-col items-center justify-center gap-12">
        {/* Centered, larger Beam Component without border */}
        <div className="flex justify-center items-center w-full" style={{ maxWidth: 700 }}>
          <AnimatedBeamMultipleInput className="" style={{ transform: 'scale(1.25)', border: 'none', boxShadow: 'none' }} />
        </div>
        {/* Hero Text: horizontal, below the beam */}
        <div className="w-full flex justify-center items-center">
          <TrueFocus 
            sentence="Skills Knowledge Experience"
            manualMode={false}
            blurAmount={5}
            borderColor="#38bdf8"
            animationDuration={1.5}
            pauseBetweenAnimations={1}
          />
        </div>
      </div>
    </section>
  );
} 