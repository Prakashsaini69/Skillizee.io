import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaUserGraduate } from "react-icons/fa";

const cardVariants = {
  initial: { opacity: 0, y: 30, rotateY: -90 },
  animate: (delay) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.5,
      delay,
      type: "spring",
      stiffness: 100,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    rotateY: 90,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    shadow: "0px 15px 30px rgba(0, 48, 138, 0.2)",
    transition: { duration: 0.3 }
  }
};

export default function CourseCard({ course, delay }) {
  return (
    <AnimatePresence>
      <motion.div
        layout
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={delay}
        whileHover="hover"
        className="flex flex-col bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden"
      >
        <div className="relative h-44 w-full overflow-hidden">
          <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-[#00308A] mb-1">{course.title}</h3>
          <p className="text-blue-900/80 text-sm mb-2 h-10 overflow-hidden">{course.description}</p>
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
    </AnimatePresence>
  );
} 