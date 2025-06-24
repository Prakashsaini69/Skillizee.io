import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "./courseData";
import CourseCard from "./CourseCard";

const CARDS_TO_SHOW = 3;

export default function StoreCourses({ gradeGroup }) {
  const [viewMore, setViewMore] = useState(false);
  const [containerHeight, setContainerHeight] = useState('auto');
  const prevGrade = useRef(gradeGroup);
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [localGrade, setLocalGrade] = useState(gradeGroup);

  const filteredCourses = gradeGroup === "all"
    ? courses
    : courses.filter(c => c.gradeGroup === gradeGroup);

  // Animate container height on viewMore/viewLess
  useEffect(() => {
    if (cardsContainerRef.current) {
      setContainerHeight(cardsContainerRef.current.scrollHeight);
    }
  }, [viewMore, filteredCourses.length]);

  // Animate out old cards, then update localGrade to trigger AnimatePresence
  useEffect(() => {
    if (prevGrade.current !== gradeGroup) {
      setLocalGrade(null);
      setTimeout(() => {
        setLocalGrade(gradeGroup);
        prevGrade.current = gradeGroup;
      }, 250);
    }
    // eslint-disable-next-line
  }, [gradeGroup]);

  // On show less, animate collapse then hide
  const handleShowLess = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setContainerHeight(cardsContainerRef.current.offsetHeight);
    setTimeout(() => {
      setContainerHeight(cardsContainerRef.current.children[0].offsetHeight);
      setTimeout(() => setViewMore(false), 400);
    }, 10);
  };

  const visibleCourses = viewMore ? filteredCourses : filteredCourses.slice(0, CARDS_TO_SHOW);

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
    exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.25 } },
  };

  return (
    <section className="py-16 px-2 md:px-8" id="courses" ref={sectionRef}>
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
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        animate={{ height: containerHeight }}
        transition={{ duration: 0.4 }}
        style={{ overflow: 'hidden', height: containerHeight }}
        ref={cardsContainerRef}
      >
        <AnimatePresence initial={false}>
          {localGrade && (viewMore ? filteredCourses : filteredCourses.slice(0, CARDS_TO_SHOW)).map((course, i) => (
            <motion.div
              key={course.id + localGrade}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
            >
              <CourseCard course={course} delay={i * 0.1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filteredCourses.length > CARDS_TO_SHOW && !viewMore && (
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 rounded bg-[#00308A] text-white font-bold shadow hover:bg-blue-700 transition"
            onClick={() => {
              setViewMore(true);
              setTimeout(() => {
                if (cardsContainerRef.current) {
                  setContainerHeight(cardsContainerRef.current.scrollHeight);
                }
              }, 10);
            }}
          >
            View More
          </button>
        </div>
      )}
      {viewMore && filteredCourses.length > CARDS_TO_SHOW && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 rounded bg-gray-200 text-[#00308A] font-bold shadow hover:bg-gray-300 transition"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        </div>
      )}
    </section>
  );
} 