import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaCertificate, FaProjectDiagram, FaUsers } from "react-icons/fa";

const features = [
  { icon: <FaChalkboardTeacher />, title: "Expert Mentors", desc: "Learn from industry leaders and certified experts." },
  { icon: <FaCertificate />, title: "Certifications", desc: "Get recognized credentials for your skills." },
  { icon: <FaProjectDiagram />, title: "Real Projects", desc: "Work on real-world projects and case studies." },
  { icon: <FaUsers />, title: "Community", desc: "Join a vibrant, supportive learning community." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Why Choose SkilliZee?
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl text-[#0ea5e9] mb-3">{f.icon}</span>
            <h3 className="font-bold text-lg mb-2 text-[#00308A]">{f.title}</h3>
            <p className="text-[#00308A]/80 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 