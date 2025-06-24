import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBook, FaTrophy } from "react-icons/fa";

const steps = [
  { icon: <FaBook />, title: "Start Learning", desc: "Begin your journey with foundational courses." },
  { icon: <FaRocket />, title: "Build Projects", desc: "Apply your skills to real-world projects." },
  { icon: <FaTrophy />, title: "Get Certified", desc: "Earn certificates and showcase your skills." },
];

export default function LearningJourney() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Your Learning Journey
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl text-[#0ea5e9] mb-2">{step.icon}</span>
            <h3 className="font-bold text-lg mb-1 text-[#00308A]">{step.title}</h3>
            <p className="text-[#00308A]/80 text-sm">{step.desc}</p>
            {i < steps.length - 1 && <div className="w-1 h-8 md:w-8 md:h-1 bg-[#0ea5e9] my-2 md:my-0 md:mx-2 rounded-full" />}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 