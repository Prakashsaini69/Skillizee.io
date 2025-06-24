import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import fireAnim from "../../assets/fire.json";
import sparkleAnim from "../../assets/sparkle.json";

// 10 Lottie icons: 2 local, 8 remote
const lottieIcons = [
  { name: "Fire", lottie: fireAnim, style: "left-8 top-8 w-16 h-16", delay: 0.1 },
  { name: "Sparkle", lottie: sparkleAnim, style: "right-8 top-16 w-14 h-14", delay: 0.2 },
  { name: "Book", url: "https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json", style: "left-1/4 top-24 w-14 h-14", delay: 0.3 },
  { name: "Lightbulb", url: "https://assets2.lottiefiles.com/packages/lf20_2glqweqs.json", style: "right-1/4 top-32 w-16 h-16", delay: 0.4 },
  { name: "Trophy", url: "https://assets2.lottiefiles.com/packages/lf20_2ksk7zun.json", style: "left-1/3 bottom-8 w-14 h-14", delay: 0.5 },
  { name: "Chat", url: "https://assets2.lottiefiles.com/packages/lf20_0yfsb3a1.json", style: "right-1/3 bottom-20 w-16 h-16", delay: 0.6 },
  { name: "Puzzle", url: "https://assets2.lottiefiles.com/packages/lf20_8wREpI.json", style: "left-16 bottom-16 w-14 h-14", delay: 0.7 },
  { name: "Rocket", url: "https://assets2.lottiefiles.com/packages/lf20_2ksk7zun.json", style: "right-12 bottom-8 w-16 h-16", delay: 0.8 },
  { name: "Finance", url: "https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json", style: "left-1/2 top-10 w-14 h-14", delay: 0.9 },
  { name: "Teamwork", url: "https://assets2.lottiefiles.com/packages/lf20_2glqweqs.json", style: "right-1/2 bottom-10 w-16 h-16", delay: 1.0 },
];

export default function HeroSection() {
  // State for remote Lottie JSONs
  const [remoteLotties, setRemoteLotties] = useState({});

  useEffect(() => {
    // Fetch all remote Lottie JSONs in parallel
    const fetchLotties = async () => {
      const entries = await Promise.all(
        lottieIcons
          .filter(icon => icon.url)
          .map(async icon => {
            try {
              const res = await fetch(icon.url);
              if (!res.ok) throw new Error('Failed to load');
              const json = await res.json();
              return [icon.name, json];
            } catch {
              return [icon.name, null];
            }
          })
      );
      setRemoteLotties(Object.fromEntries(entries));
    };
    fetchLotties();
  }, []);

  // Smooth scroll handler for View All Courses
  const handleScroll = e => {
    e.preventDefault();
    const el = document.getElementById("courses");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="hero-section" className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white">
      {/* Grid-style background */}
      <div className="absolute inset-0 -z-20 bg-[url('https://www.transparenttextures.com/patterns/squared-paper.png')] bg-repeat bg-[length:80px_80px] opacity-60" />
      {/* Floating animated Lottie icons */}
      {lottieIcons.map((icon, i) => (
        <motion.div
          key={icon.name}
          className={`absolute z-10 ${icon.style}`}
          initial={{ y: 0 }}
          whileInView={{ y: [0, -18, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "loop", delay: icon.delay, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {icon.lottie ? (
            <Lottie animationData={icon.lottie} loop autoplay style={{ width: '100%', height: '100%' }} />
          ) : remoteLotties[icon.name] ? (
            <Lottie animationData={remoteLotties[icon.name]} loop autoplay style={{ width: '100%', height: '100%' }} />
          ) : null}
        </motion.div>
      ))}
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center pt-24 pb-12">
        <h2 className="text-xl md:text-2xl font-medium mb-2">Experiment-Based</h2>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-black">
          <span className="text-[#7c3aed]">Science Classes for Kids</span>
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-gray-700 mb-6 font-medium">
          Boost curiosity with science activities that explain the world; from stars to cells! Learn by doing, questioning and exploring live in our sessions
        </p>
        <a
          href="#courses"
          onClick={handleScroll}
          className="px-8 py-3 rounded-full font-bold bg-[#7c3aed] text-white shadow-lg hover:bg-[#5b21b6] transition text-lg"
        >
          View All Courses
        </a>
      </div>
      {/* Kid image at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center pointer-events-none select-none">
        <img
          src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1746171895/student-with-light-bulb1_rjxxj8.png"
          alt="Kid doing science"
          className="w-20 max-w-xs sm:max-w-md md:max-w-lg object-contain mb-2"
          style={{ filter: "drop-shadow(0 8px 32px rgba(124,58,237,0.12))" }}
          loading="lazy"
        />
      </div>
    </section>
  );
} 