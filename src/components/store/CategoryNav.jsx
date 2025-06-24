import React from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "courses", label: "Courses" },
  { id: "spbls", label: "SPBLs" },
  { id: "internships", label: "Internships" },
  { id: "memberships", label: "Memberships" },
  { id: "featured", label: "Featured" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
];

export default function CategoryNav() {
  return (
    <motion.nav
      className="sticky top-16 z-40 w-full flex justify-center py-3 mb-8 transition-all duration-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-full shadow-2xl flex flex-wrap gap-3 px-6 py-2" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)' }}>
        {categories.map(cat => (
          <motion.button
            key={cat.id}
            className="text-base md:text-lg font-semibold text-[#00308A] px-4 py-1 rounded-full hover:bg-blue-100/60 transition-all focus:outline-none"
            whileHover={{ scale: 1.08, backgroundColor: '#e0e7ff' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' })}
          >
            {cat.label}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
} 