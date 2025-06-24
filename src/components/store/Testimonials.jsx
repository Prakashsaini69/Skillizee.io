import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Aarav S.", course: "Full Stack Web Development", feedback: "The best online course experience I've had! Projects were real and mentors were super helpful.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Priya K.", course: "UI/UX Design Masterclass", feedback: "Loved the hands-on approach and the community!", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rohan M.", course: "AI & ML Bootcamp", feedback: "The AI course was challenging but so rewarding. Highly recommend!", image: "https://randomuser.me/api/portraits/men/65.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Student Testimonials
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-[#0ea5e9]" />
            <h3 className="font-bold text-lg mb-1 text-[#00308A]">{t.name}</h3>
            <div className="text-xs text-[#0ea5e9] mb-2">{t.course}</div>
            <p className="text-[#00308A]/80 text-sm">“{t.feedback}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 