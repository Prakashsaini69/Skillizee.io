import React from "react";
import { motion } from "framer-motion";

const plans = [
  { name: "Basic", price: 399, features: ["3 Courses", "1 Project", "6 Months Access"], highlight: false },
  { name: "Pro", price: 699, features: ["All Courses", "5 Projects", "24 Months Access", "Certificate"], highlight: true },
  { name: "Elite", price: 999, features: ["All Pro Features", "1:1 Mentorship", "Lifetime Access"], highlight: false },
];

export default function MembershipPlans() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Membership Plans
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-2 transition-all duration-300 ${plan.highlight ? "border-[#0ea5e9] scale-105 shadow-2xl" : "border-white/20"}`}
            whileHover={{ scale: 1.08, boxShadow: "0 0 32px #0ea5e9" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-2 text-[#00308A]">{plan.name}</h3>
            <div className="text-3xl font-extrabold text-[#0ea5e9] mb-4">₹{plan.price}</div>
            <ul className="mb-4 text-[#00308A]/80">
              {plan.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <button className="bg-gradient-to-r from-[#0ea5e9] to-[#a21caf] text-white font-bold px-6 py-2 rounded-xl shadow hover:scale-105 transition-all duration-300">Choose Plan</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 