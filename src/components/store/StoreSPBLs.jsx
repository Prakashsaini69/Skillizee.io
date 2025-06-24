import React, { useState } from "react";
import { motion } from "framer-motion";
import { sbpls } from "./courseData";
import CourseCard from "./CourseCard";

const SPBLS_PER_PAGE = 6;

export default function StoreSPBLs() {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(sbpls.length / SPBLS_PER_PAGE) - 1;
  const visibleSPBLs = sbpls.slice(page * SPBLS_PER_PAGE, (page + 1) * SPBLS_PER_PAGE);
  const showNav = sbpls.length > SPBLS_PER_PAGE;

  return (
    <section className="py-16 px-2 md:px-8" id="spbls">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#00308A] mb-2 text-center"
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
        {visibleSPBLs.map((spbl, i) => (
          <CourseCard key={spbl.id} course={spbl} delay={i * 0.1} />
        ))}
      </div>
      {showNav && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="px-4 py-2 rounded bg-[#00308A] text-white font-bold disabled:opacity-40"
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 rounded bg-[#00308A] text-white font-bold disabled:opacity-40"
            onClick={() => setPage(p => Math.min(maxPage, p + 1))}
            disabled={page === maxPage}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
} 