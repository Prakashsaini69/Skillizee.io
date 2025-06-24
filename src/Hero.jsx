import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const words = ["Skills", "Projects", "Impacts"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTimeout = useRef();

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      if (displayed.length > 0) {
        typingTimeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (displayed.length < currentWord.length) {
        typingTimeout.current = setTimeout(() => setDisplayed(currentWord.slice(0, displayed.length + 1)), 80);
      } else {
        typingTimeout.current = setTimeout(() => setIsDeleting(true), 1000);
      }
    }
    return () => clearTimeout(typingTimeout.current);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <section
      className="w-full min-h-[60vh] flex flex-col items-center justify-center pb-16 px-4 text-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dpstp4ovd/image/upload/v1748863808/123123123123_nhewwk.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'contain',
      }}
    >
      {/* Animated background shapes */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 pt-[100px]">
          Real {" "}
          <span className="text-orange border-r-2 border-purple-400 animate-pulse">
            {displayed}
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-1xl text-white/80 mb-6 font-normal"
        > 
          Colleges and careers demand skills, not just scores. With SkilliZee's LMS,<br />
          they gain skills, internships, & case study mastery—before it's too late to stand out.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {["🔁 Lifetime Access", "💳 14-Day Refund Policy", "👥 4.4+ Lakh Enrolled"].map((badge, i) => (
            <motion.span
              key={badge}
              className="bg-white/80 text-blue-700 px-4 py-2 rounded-full font-semibold shadow backdrop-blur-md border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(76,110,245,0.25)" }}
          whileTap={{ scale: 0.97 }}
          className="relative group bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-purple-200"
        >
          <span className="relative z-10">Explore SkilliZee Courses</span>
          <span className="absolute left-0 top-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-full blur-xl"></span>
        </motion.button>
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <img
            src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1742546405/samples/animals/three-dogs.jpg"
            alt="Video thumbnail"
            className="rounded-xl shadow-2xl w-full max-w-xl border-4 border-white/80"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 