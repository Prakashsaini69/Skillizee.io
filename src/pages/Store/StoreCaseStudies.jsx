import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "./courseData";
import CourseCard from "../../components/ui/course-card";
import { FollowerPointerCard } from "../../components/ui/following-pointer";

const CARDS_TO_SHOW = 3;

export default function StoreCaseStudies({ gradeGroup }) {
  const [viewMore, setViewMore] = useState(false);
  const [containerHeight, setContainerHeight] = useState('auto');
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const filteredCaseStudies = gradeGroup === "all"
    ? caseStudies
    : caseStudies.filter(c => c.gradeGroup === gradeGroup);

  useEffect(() => {
    if (cardsContainerRef.current) {
      if (viewMore) {
        setContainerHeight(cardsContainerRef.current.scrollHeight);
      } else {
        setContainerHeight('auto');
      }
    }
  }, [viewMore, filteredCaseStudies.length]);

  const handleShowLess = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setViewMore(false);
    setTimeout(() => {
      setContainerHeight('auto');
    }, 400);
  };

  const visibleCaseStudies = viewMore ? filteredCaseStudies : filteredCaseStudies.slice(0, CARDS_TO_SHOW);

  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
    exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.25 } },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 px-2 md:px-8 mb-10 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:bg-gray-900 rounded-2xl shadow-lg border border-[#00308A]/10"
      id="case-studies"
    >
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
        className="text-center text-blue-900 mb-8 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Explore real-world business and technology case studies for deeper insights.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        animate={{ height: containerHeight, opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{ overflow: 'hidden', height: containerHeight, transition: 'height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s' }}
        ref={cardsContainerRef}
      >
        <AnimatePresence initial={false}>
          {visibleCaseStudies.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
              className="flex-1 min-w-[220px] max-w-[320px] basis-[320px]"
            >
              <FollowerPointerCard title={caseStudy.title}>
                <CourseCard
                  image={caseStudy.image}
                  title={caseStudy.title}
                  enrolled={caseStudy.enrolled}
                  rating={Number(caseStudy.rating).toFixed(1)}
                  price={caseStudy.price}
                  onEnroll={() => window.open(caseStudy.link, '_blank')}
                />
              </FollowerPointerCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filteredCaseStudies.length > CARDS_TO_SHOW && !viewMore && (
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-2 rounded-xl bg-[#00308A] text-white font-bold shadow hover:bg-[#FFD700] hover:text-[#00308A] transition"
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
      {viewMore && filteredCaseStudies.length > CARDS_TO_SHOW && (
        <div className="flex justify-center mt-4">
          <button
            className="px-6 py-2 rounded-xl bg-gray-200 text-[#00308A] font-bold shadow hover:bg-gray-300 transition"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        </div>
      )}
    </section>
  );
} 