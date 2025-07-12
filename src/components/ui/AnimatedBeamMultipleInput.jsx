import React, { useRef } from "react";
import { cn } from "../../lib/utils";
import { Circle } from "./Circle";
import { AnimatedBeam } from "./AnimatedBeam";

export function AnimatedBeamMultipleInput({ className = "" }) {
  const containerRef = useRef();
  const div1Ref = useRef();
  const div2Ref = useRef();
  const div3Ref = useRef();
  const div4Ref = useRef();
  const div5Ref = useRef();
  const div6Ref = useRef();
  const div7Ref = useRef();

  // Labels for each circle
  const labels = [
    "Confidence",
    "Communication",
    "Adaptability",
    "Entrepreneurship",
    "Critical Thinking",
    "SkilliZee",
    "You"
  ];
  // Icon URLs for each circle
  const iconUrls = [
    "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752319555/self-confidence_15552218_vlqgg6.png", // Confidence
    "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752319565/communication_2763433_ff6vxp.png", // Communication
    "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752319555/adaptability_12773250_cmnoud.png", // Adaptability
    "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752319555/entrepreneurship_10165484_hh4ko2.png", // Entrepreneurship
    "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752319555/critical-thinking_18559120_hcome0.png", // Critical Thinking
    "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752319273/SkilliZee_New_Logo_Only_gexy8a.png", // SkilliZee
    "https://cdn-icons-png.flaticon.com/512/1077/1077114.png" // You
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full max-w-[800px] items-center justify-center overflow-visible rounded-lg ",
        className
      )}
    >
      {/* Gradient Line */}
      {/* Main Component */}
      <div className="flex h-full w-full flex-row justify-between gap-6 max-w-lg items-center">
        <div className="flex flex-col justify-center gap-8">
          {/* Div 1 - Svelte */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">{labels[0]}</span>
            <Circle>
              <img
                ref={div1Ref}
                src={iconUrls[0]}
                alt={labels[0]}
                width={46}
                height={46}
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </Circle>
          </div>

          {/* Div 2 - React */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">{labels[1]}</span>
            <Circle>
              <img
                ref={div2Ref}
                src={iconUrls[1]}
                alt={labels[1]}
                width={46}
                height={46}
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </Circle>
          </div>

          {/* Div 3 - Vue */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">{labels[2]}</span>
            <Circle>
              <img
                ref={div3Ref}
                src={iconUrls[2]}
                alt={labels[2]}
                width={46}
                height={46}
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </Circle>
          </div>

          {/* Div 4 - External Link */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">{labels[3]}</span>
            <Circle>
              <img
                ref={div4Ref}
                src={iconUrls[3]}
                alt={labels[3]}
                width={46}
                height={46}
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </Circle>
          </div>

          {/* Div 5 - Lightning */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">{labels[4]}</span>
            <Circle>
              <img
                ref={div5Ref}
                src={iconUrls[4]}
                alt={labels[4]}
                width={46}
                height={46}
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </Circle>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          {/* Div 6 - CoffeeScript */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">{labels[5]}</span>
            <Circle>
              <img
                ref={div6Ref}
                src={iconUrls[5]}
                alt={labels[5]}
                width={46}
                height={46}
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </Circle>
          </div>
        </div>

        <div className="flex flec-col justify-center items-center">
          {/* Div 7 - User */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">{labels[6]}</span>
            <Circle>
              <img
                ref={div7Ref}
                src={iconUrls[6]}
                alt={labels[6]}
                width={46}
                height={46}
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </Circle>
          </div>
        </div>
      </div>

      {/* Animated Beams with different delays and colors */}
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={div1Ref} 
        toRef={div6Ref} 
        delay={0}
        gradientStartColor="#ff6b6b"
        gradientStopColor="#4ecdc4"
        curvature={50}
      />
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={div2Ref} 
        toRef={div6Ref} 
        delay={0.5}
        gradientStartColor="#45b7d1"
        gradientStopColor="#96ceb4"
        curvature={50}
      />
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={div3Ref} 
        toRef={div6Ref} 
        delay={1}
        gradientStartColor="#feca57"
        gradientStopColor="#ff9ff3"
        isStraight={true}
      />
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={div4Ref} 
        toRef={div6Ref} 
        delay={1.5}
        gradientStartColor="#ff9ff3"
        gradientStopColor="#54a0ff"
        curvature={-50}
      />
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={div5Ref} 
        toRef={div6Ref} 
        delay={2}
        gradientStartColor="#5f27cd"
        gradientStopColor="#00d2d3"
        curvature={-50}
      />
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={div6Ref} 
        toRef={div7Ref} 
        delay={2.5}
        gradientStartColor="#ff9ff3"
        gradientStopColor="#54a0ff"
        isStraight={true}
      />
    </div>
  );
} 