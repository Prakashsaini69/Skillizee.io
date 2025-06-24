import React, { useState } from "react";
import { motion } from "framer-motion";
import { internships } from "./courseData";
import CourseCard from "./CourseCard";

const INTERNSHIPS_PER_PAGE = 6;

export default function StoreInternships() {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(internships.length / INTERNSHIPS_PER_PAGE) - 1;
  const visibleInternships = internships.slice(page * INTERNSHIPS_PER_PAGE, (page + 1) * INTERNSHIPS_PER_PAGE);
  const showNav = internships.length > INTERNSHIPS_PER_PAGE;

  return (
    <section className="py-16 px-2 md:px-8" id="internships">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#00308A] mb-2 text-center"
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
        {visibleInternships.map((internship, i) => (
          <CourseCard key={internship.id} course={internship} delay={i * 0.1} />
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