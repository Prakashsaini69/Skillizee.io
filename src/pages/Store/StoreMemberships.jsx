import React from "react";
import { motion } from "framer-motion";
import { memberships } from "./courseData";

export default function StoreMemberships() {
  return (
    <section className="py-16 px-2 md:px-8" id="memberships">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#00308A] mb-2 text-center"
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
        {memberships.map((membership, i) => (
          <motion.div
            key={membership.id}
            className={`bg-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center hover:scale-105 transition-all duration-300 ${membership.popular ? 'ring-2 ring-[#00308A]' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            {membership.popular && (
              <div className="bg-[#00308A] text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-[#00308A] mb-2 text-center">{membership.title}</h3>
            <div className="text-2xl font-extrabold text-blue-900 mb-1">₹{membership.price}</div>
            <div className="text-sm text-gray-500 line-through mb-3">₹{membership.originalPrice}</div>
            <div className="text-sm text-blue-900/80 mb-3">{membership.duration}</div>
            <ul className="mb-4 text-blue-900/80 text-center text-sm">
              {membership.features.map((feature, index) => (
                <li key={index} className="mb-1">• {feature}</li>
              ))}
            </ul>
            <a 
              href={membership.link} 
              className="bg-gradient-to-r from-[#00308A] to-[#4F8CFF] text-white font-bold px-6 py-2 rounded-full shadow hover:scale-105 transition-all duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Enroll Now
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 