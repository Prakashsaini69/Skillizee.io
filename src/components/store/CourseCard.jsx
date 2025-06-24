import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaUserGraduate } from "react-icons/fa";

export default function CourseCard({ course, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[#00308A] mb-1">{course.title}</h3>
        <p className="text-blue-900/80 text-sm mb-2">{course.description}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-yellow-400 flex items-center gap-1 text-sm font-semibold">
            <FaStar /> {course.rating}
          </span>
          <span className="text-blue-900/80 flex items-center gap-1 text-xs">
            <FaUserGraduate /> {course.enrolledStudents} enrolled
          </span>
        </div>
        <div className="flex items-end justify-between mt-auto">
          <span className="text-lg font-bold text-[#00308A]">₹{course.price}</span>
          <a href={course.link} className="bg-[#00308A] text-white font-bold px-4 py-2 rounded-xl shadow hover:scale-105 transition-all duration-300 ml-2" target="_blank" rel="noopener noreferrer">
            Enroll Now
          </a>
        </div>
      </div>
    </motion.div>
  );
} 