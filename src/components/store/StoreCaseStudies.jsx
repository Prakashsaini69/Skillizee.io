import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { caseStudies } from "./courseData";
import CourseCard from "./CourseCard";

const CARDS_TO_SHOW = 3;

export default function StoreCaseStudies({ gradeGroup }) {
  const [viewMore, setViewMore] = useState(false);
  const [flipping, setFlipping] = useState([false, false, false]);
  const prevGrade = useRef(gradeGroup);
  const sectionRef = useRef(null);

  const filteredCaseStudies = gradeGroup === "all"
    ? caseStudies
    : caseStudies.filter(c => c.gradeGroup === gradeGroup);

  // Handle flipping animation on grade change
  useEffect(() => {
    if (prevGrade.current !== gradeGroup) {
      if (!viewMore) {
        setFlipping([true, true, true]);
        [0, 1, 2].forEach((idx) => {
          setTimeout(() => {
            setFlipping(f => {
              const arr = [...f];
              arr[idx] = false;
              return arr;
            });
          }, 350 + idx * 120);
        });
      } else {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setTimeout(() => {
          setFlipping([true, true, true]);
          [0, 1, 2].forEach((idx) => {
            setTimeout(() => {
              setFlipping(f => {
                const arr = [...f];
                arr[idx] = false;
                return arr;
              });
            }, 350 + idx * 120);
          });
        }, 500);
      }
      prevGrade.current = gradeGroup;
    }
    // eslint-disable-next-line
  }, [gradeGroup]);

  // On show less, scroll to top before compressing
  const handleShowLess = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => setViewMore(false), 400);
  };

  const visibleCaseStudies = viewMore ? filteredCaseStudies : filteredCaseStudies.slice(0, CARDS_TO_SHOW);

  return (
    <section className="py-16 px-2 md:px-8" id="case-studies" ref={sectionRef}>
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#00308A] mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Case Studies
      </motion.h2>
      <motion.p
        className="text-center text-[#00308A] mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Explore real-world business and technology case studies for deeper insights.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {visibleCaseStudies.map((cs, i) => (
          <motion.div
            key={cs.id}
            animate={flipping[i] ? { rotateY: 180 } : { rotateY: 0 }}
            transition={{ duration: 0.5, delay: flipping[i] ? i * 0.12 : 0 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <CourseCard course={cs} delay={i * 0.1} />
          </motion.div>
        ))}
      </div>
      {filteredCaseStudies.length > CARDS_TO_SHOW && !viewMore && (
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 rounded bg-[#00308A] text-white font-bold shadow hover:bg-blue-700 transition"
            onClick={() => setViewMore(true)}
          >
            View More
          </button>
        </div>
      )}
      {viewMore && filteredCaseStudies.length > CARDS_TO_SHOW && (
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