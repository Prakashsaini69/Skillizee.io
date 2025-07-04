import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AVATARS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
  "https://randomuser.me/api/portraits/women/33.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
  "https://randomuser.me/api/portraits/men/66.jpg",
  "https://randomuser.me/api/portraits/women/77.jpg",
];

function useLiveAnimatedCounter(target, initialDuration = 2500, liveInterval = 4500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const increment = target / (initialDuration / 16);
    let frame;
    let liveTimer;
    function animate() {
      startVal += increment;
      if (startVal < target) {
        setCount(Math.floor(startVal));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
        // Start live increment
        liveTimer = setInterval(() => {
          setCount((prev) => prev + 1);
        }, liveInterval);
      }
    }
    animate();
    return () => {
      clearInterval(liveTimer);
      cancelAnimationFrame(frame);
    };
  }, [target, initialDuration, liveInterval, start]);
  return count;
}

// Avatar positions (relative to the box, in %)
const AVATAR_POSITIONS = [
  { top: '8%', left: '5%' },    // top left
  { top: '5%', left: '40%' },   // top center
  { top: '8%', right: '5%' },   // top right
  { top: '40%', left: '10%' },   // left center
  { bottom: '3%', left: '5%' }, // bottom left
  { bottom: '3%', left: '40%' },// bottom center
  { bottom: '0%', right: '30%' },// bottom right
  { top: '60%', right: '3%' },  // right center
  { top: '14%', left: '20%' },  // upper left
  { top: '18%', right: '25%' }, // upper right
  { bottom: '10%', left: '20%' },// lower left
  { bottom: '30%', right: '14%' },// lower right
];

export default function StudentLandscape() {
  const sectionRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);
  // Intersection Observer to trigger counter
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const count = useLiveAnimatedCounter(25498, 2500, 4000, startCounter);
  const floatStyles = [
    "animate-float-slow", "animate-float-medium", "animate-float-fast",
    "animate-float-slower", "animate-float-medium", "animate-float-slow",
    "animate-float-fast", "animate-float-slower", "animate-float-medium",
    "animate-float-slow", "animate-float-fast", "animate-float-slower"
  ];
  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full max-h-[150px] max-w-5xl mx-auto mt-0 mb-0 my-12 h-64 md:h-72 flex items-center justify-center border border-blue-200 rounded-2xl bg-white overflow-hidden"
      style={{ minHeight: 260 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* SVG Concentric Circles */}
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" width="90%" height="90%" viewBox="0 0 600 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{pointerEvents:'none'}}>
        <ellipse cx="300" cy="110" rx="250" ry="90" stroke="#E3ECFA" strokeWidth="2" />
        <ellipse cx="300" cy="110" rx="180" ry="65" stroke="#E3ECFA" strokeWidth="1.5" />
        {/* <ellipse cx="300" cy="110" rx="110" ry="40" stroke="#E3ECFA" strokeWidth="1" /> */}
      </svg>
      {/* Avatars */}
      {AVATARS.slice(0, AVATAR_POSITIONS.length).map((src, i) => {
        const pos = AVATAR_POSITIONS[i];
        return (
          <img
            key={i}
            src={src}
            alt="User avatar"
            className={`absolute w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-blue-300 bg-white object-cover shadow ${floatStyles[i % floatStyles.length]}`}
            style={{
              ...pos,
              transform: pos.transform || undefined,
              zIndex: 2,
            }}
          />
        );
      })}
      {/* Center Counter */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <span className="text-5xl md:text-6xl font-extrabold text-[#00308A] tracking-tight">
          {count.toLocaleString()}
        </span>
        <span className="mt-2 text-xl md:text-2xl text-[#222] font-medium">
          students and counting!
        </span>
      </div>
      <style>{`
        @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0); } }
        @keyframes float-medium { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
        @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(-28px); } 100% { transform: translateY(0); } }
        @keyframes float-slower { 0% { transform: translateY(0); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0); } }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 7s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 9s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 11s ease-in-out infinite; }
      `}</style>
    </motion.section>
  );
} 