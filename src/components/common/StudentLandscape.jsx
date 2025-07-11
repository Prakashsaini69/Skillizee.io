import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AVATARS = [
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234974/c998e26464fcf80e2a31e683c6f181e1_dcsvfp.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234972/4dddcfc826925d62934cefdb6e331fd4_choonf.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234971/1b6866e21f59b354222026abd6f5bdd3_a4lpo1.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234969/2ff7ed87c2d0fcaeaf1c949ace493df1_j7onci.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234968/1e6a3a9107ae15f456b1a614db1bf03d_awa4hq.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234966/c71d4d2d58891ffb17d31616d451789a_bokai0.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234965/f83755d48f5455e0250b1cb230154b0c_nap9h8.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234965/2b5067a9a4c4bdd4342b3a226c579113_x1mz1t.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234964/26c5f5db415df689733d4eaab6cc51ca_wf2yun.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235359/f74084f7ae61c25e78f5ad33147eb7b6_vmwjje.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235358/26443a270dcbde7704c2d27f3c2f1adf_cphkpc.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235357/c4d85461bb1b4740bc3905f2b9e0a9c3_jlh1jl.jpg",
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