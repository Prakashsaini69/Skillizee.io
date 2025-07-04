import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

export default function CourseCategorySection({ id, title, description, courses, accentColor }) {
  return (
    <section id={id} className={`py-12 px-2 md:px-8 bg-gradient-to-br ${accentColor} rounded-3xl my-8`}>
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-white/80 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <CourseCard key={course.id} course={course} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
} 