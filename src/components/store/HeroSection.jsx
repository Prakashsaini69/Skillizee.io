import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-100/60 to-purple-100/60 relative overflow-hidden">
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold text-[#377DFF] mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Programs & Memberships
      </motion.h1>
      <motion.p
        className="max-w-2xl text-lg md:text-2xl text-blue-900/80 mb-8 font-medium"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Discover world-class courses, internships, project-based learning, and exclusive memberships—all in one futuristic store. Unlock your real-world skills today!
      </motion.p>
      <motion.button
        className="bg-gradient-to-r from-[#377DFF] to-[#4F8CFF] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Browse Courses
      </motion.button>
      <motion.div
        className="absolute -z-10 left-1/2 top-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-200/40 to-purple-200/30 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 animate-pulse"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
    </section>
  );
} 