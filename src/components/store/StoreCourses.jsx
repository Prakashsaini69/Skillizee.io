import React, { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "./courseData";
import CourseCard from "./CourseCard";

const COURSES_PER_PAGE = 6;

export default function StoreCourses() {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(courses.length / COURSES_PER_PAGE) - 1;
  const visibleCourses = courses.slice(page * COURSES_PER_PAGE, (page + 1) * COURSES_PER_PAGE);
  const showNav = courses.length > COURSES_PER_PAGE;

  return (
    <section className="py-16 px-2 md:px-8" id="courses">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#00308A] mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Short Courses
      </motion.h2>
      <motion.p
        className="text-center text-[#00308A] mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Explore our full catalog of world-class courses designed for real-world skills and future careers.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {visibleCourses.map((course, i) => (
          <CourseCard key={course.id} course={course} delay={i * 0.1} />
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