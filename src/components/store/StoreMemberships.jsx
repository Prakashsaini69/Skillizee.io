import React from "react";
import { motion } from "framer-motion";

const sampleMemberships = [
  { name: "Basic", price: "₹299/mo", features: ["Live Classes", "2 Courses", "1 Internship"], highlight: false },
  { name: "Pro", price: "₹499/mo", features: ["Live Classes", "5 Courses", "3 Internships", "Skill Assessment"], highlight: true },
  { name: "Elite", price: "₹799/mo", features: ["All Features", "Unlimited Courses", "All Internships", "Priority Support"], highlight: false },
];

export default function StoreMemberships() {
  return (
    <section className="py-16 px-2 md:px-8" id="memberships">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#377DFF] mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Membership Plans
      </motion.h2>
      <motion.p
        className="text-center text-blue-900/80 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Unlock all features and get the best value with our flexible membership plans.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {sampleMemberships.map((m, i) => (
          <motion.div
            key={m.name}
            className={`bg-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center hover:scale-105 transition-all duration-300 ${m.highlight ? 'ring-2 ring-[#377DFF]' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#377DFF] mb-2 text-center">{m.name}</h3>
            <div className="text-2xl font-extrabold text-blue-900 mb-3">{m.price}</div>
            <ul className="mb-4 text-blue-900/80 text-center">
              {m.features.map(f => (
                <li key={f} className="mb-1">{f}</li>
              ))}
            </ul>
            <button className="bg-gradient-to-r from-[#377DFF] to-[#4F8CFF] text-white font-bold px-6 py-2 rounded-full shadow hover:scale-105 transition-all duration-300">Buy Now</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 