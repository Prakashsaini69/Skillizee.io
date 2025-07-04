import React from "react";
import { motion } from "framer-motion";

const instructors = [
  { name: "Dr. Meera S.", expertise: "AI & ML", quote: "Teaching is my passion!", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Rahul V.", expertise: "Full Stack Dev", quote: "Code is poetry.", image: "https://randomuser.me/api/portraits/men/71.jpg" },
  { name: "Anjali P.", expertise: "UI/UX Design", quote: "Design for humans.", image: "https://randomuser.me/api/portraits/women/65.jpg" },
];

export default function Instructors() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Meet Our Instructors
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instructors.map((inst, i) => (
          <motion.div
            key={inst.name}
            className="bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={inst.image} alt={inst.name} className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-[#a21caf]" />
            <h3 className="font-bold text-lg mb-1 text-[#00308A]">{inst.name}</h3>
            <div className="text-xs text-[#a21caf] mb-2">{inst.expertise}</div>
            <p className="text-[#00308A]/80 text-sm">“{inst.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 