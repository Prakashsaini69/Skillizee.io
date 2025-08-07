import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "./components/ui/course-card";
import courseData from "./pages/Store/courseData";

const gradeGroups = ["4-6", "7-12", "all"];
const categories = [
  { key: "internships", label: "Internship" },
  { key: "sbpls", label: "SBPL" },
  { key: "shortCourses", label: "Short Courses" },
  { key: "caseStudies", label: "Case Study" },
];

export default function Courses() {
  const [grade, setGrade] = useState("all");
  const [category, setCategory] = useState("internships");

  // Filtered data for selected grade and category
  const getFilteredCourses = () => {
    let data = courseData[category] || [];
    if (grade !== "all") {
      data = data.filter((c) => c.gradeGroup === grade);
    }
    return data;
  };
  const cards = getFilteredCourses();

  return (
    <section id="courses-section" className="py-12 sm:py-16 px-4 bg-gradient-to-l from-blue-50 to-purple-50">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#00308A] mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Courses
      </motion.h2>
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Category Tabs + Grade Dropdown */}
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-6 sm:mb-8 items-center px-2 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 ${
                category === cat.key
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-purple-600 scale-105"
                  : "bg-white text-purple-700 border-purple-200 hover:bg-purple-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <select
            value={grade}
            onChange={e => setGrade(e.target.value)}
            className="ml-2 px-3 sm:px-4 py-2 rounded-full border-2 border-blue-300 bg-white text-blue-700 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 cursor-pointer text-sm sm:text-base"
          >
            <option value="all">All Grades</option>
            <option value="4-6">4-6 Grade</option>
            <option value="7-12">7-12 Grade</option>
          </select>
        </div>
        {/* Courses Content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={category + grade}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              {cards.slice(0, 3).map((card, i) => (
                <motion.div
                  key={card.title + i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex justify-center items-stretch"
                >
                  <CourseCard
                    image={card.image}
                    title={card.title}
                    enrolled={card.studentsEnrolled}
                    rating={card.rating}
                    price={card.price}
                    onEnroll={() => window.open(card.link, '_blank')}
                    color={card.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* View More CTA */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <a href="/store" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 border-2 border-purple-600 text-base sm:text-lg">
            View More
          </a>
        </div>
      </div>
    </section>
  );
} 