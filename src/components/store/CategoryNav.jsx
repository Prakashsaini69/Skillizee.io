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
      className="sticky top-4 z-30 flex justify-center w-full py-3 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="backdrop-blur-md bg-white/70 border border-blue-100 rounded-full shadow-lg flex flex-wrap gap-3 px-6 py-2">
        {categories.map(cat => (
          <motion.button
            key={cat.id}
            className="text-base md:text-lg font-semibold text-[#377DFF] px-4 py-1 rounded-full hover:bg-blue-100/60 transition-all focus:outline-none"
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