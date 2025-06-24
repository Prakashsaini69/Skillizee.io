import React from "react";
import { motion } from "framer-motion";

const sampleCourses = [
  { title: "AI for Beginners", desc: "Start your journey into Artificial Intelligence.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" },
  { title: "Web Development Bootcamp", desc: "Build modern websites from scratch.", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" },
  { title: "Creative Animation", desc: "Unleash your creativity with animation.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
];

export default function StoreCourses() {
  return (
    <section className="py-16 px-2 md:px-8" id="courses">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#377DFF] mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        All Courses
      </motion.h2>
      <motion.p
        className="text-center text-blue-900/80 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Explore our full catalog of world-class courses designed for real-world skills and future careers.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {sampleCourses.map((c, i) => (
          <motion.div
            key={c.title}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 p-4 flex flex-col items-center hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            <img src={c.img} alt={c.title} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h3 className="text-lg font-bold text-[#377DFF] mb-2 text-center">{c.title}</h3>
            <p className="text-blue-900/80 text-center">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 