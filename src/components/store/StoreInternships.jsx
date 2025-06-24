import React from "react";
import { motion } from "framer-motion";

const sampleInternships = [
  { title: "Data Analyst Internship", company: "Google", desc: "Analyze real datasets and present insights.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" },
  { title: "Web Developer Internship", company: "Amazon", desc: "Build and deploy web apps for real clients.", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" },
  { title: "AI Research Internship", company: "OpenAI", desc: "Explore artificial intelligence and machine learning.", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
];

export default function StoreInternships() {
  return (
    <section className="py-16 px-2 md:px-8" id="internships">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#377DFF] mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Internships
      </motion.h2>
      <motion.p
        className="text-center text-blue-900/80 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Work on real-world projects with top companies and mentors. Gain experience that sets you apart.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {sampleInternships.map((c, i) => (
          <motion.div
            key={c.title}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 p-4 flex flex-col items-center hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            <img src={c.img} alt={c.title} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h3 className="text-lg font-bold text-[#377DFF] mb-1 text-center">{c.title}</h3>
            <span className="text-xs font-semibold text-blue-700 mb-1">{c.company}</span>
            <p className="text-blue-900/80 text-center">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 