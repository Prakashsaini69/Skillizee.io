import React from "react";
import { motion } from "framer-motion";

const sampleSPBLs = [
  { title: "Startup Pitch Challenge", desc: "Develop and pitch your own business idea.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  { title: "Eco Warriors Project", desc: "Create a plan to save the environment.", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { title: "Community Helper", desc: "Design a campaign to help your neighborhood.", img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80" },
];

export default function StoreSPBLs() {
  return (
    <section className="py-16 px-2 md:px-8" id="spbls">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#377DFF] mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Skill-Based Project Learning (SPBLs)
      </motion.h2>
      <motion.p
        className="text-center text-blue-900/80 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Hands-on projects that build real skills and confidence. Learn by doing, not just by watching.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {sampleSPBLs.map((c, i) => (
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