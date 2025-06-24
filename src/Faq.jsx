import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "Are these certified programs?",
    answer: "Yes! Every course offers a certificate upon successful completion.",
    icon: "info",
  },
  {
    question: "Are these suitable for younger students (Grade 4–6)?",
    answer: "Absolutely! We've designed age-specific tracks for each grade.",
    icon: "calendar",
  },
  {
    question: "Can I buy individual courses instead of packages?",
    answer: "Yes. You can buy anything individually, OR choose a package/membership for better value.",
    icon: "chip",
  },
  {
    question: "What's the difference between SBPL and Internship?",
    answer: "SBPLs are project-based skill modules; Internships simulate real-world job tasks and responsibilities.",
    icon: "flag",
  },
  {
    question: "Can I get guidance during the course?",
    answer: "Yes! Some masterclasses are live; others include pre-recorded guidance videos and chat support.",
    icon: "user",
  },
  {
    question: "How do credits work?",
    answer: "Buy a membership, get credits, and use them to create your own learning path!",
    icon: "book",
  },
];

const icons = {
  info: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#EEF2FF"/><path d="M12 8v.01M12 12v4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  calendar: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3" fill="#EEF2FF"/><path d="M8 3v2M16 3v2M3 9h18" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  chip: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="8" rx="2" fill="#EEF2FF"/><rect x="8" y="12" width="8" height="4" rx="1" fill="#6366F1"/></svg>
  ),
  flag: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="7" width="10" height="6" rx="2" fill="#EEF2FF"/></svg>
  ),
  user: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#EEF2FF"/><path d="M4 20v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  book: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#EEF2FF"/><path d="M8 4v16M16 4v16" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
};

// Animation variants for left and right columns
const leftFaqVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.18, duration: 0.7, type: 'spring', stiffness: 60 } })
};
const rightFaqVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.18, duration: 0.7, type: 'spring', stiffness: 60 } })
};

export default function Faq() {
  const [open, setOpen] = useState(null);
  // 2 columns for desktop, 1 for mobile
  return (
    <section className="max-w-6xl mx-auto my-16 px-6 md:px-10 py-8 border border-[#377DFF] border-[1.5px] rounded-2xl min-h-[480px] flex flex-col justify-center">
      {/* FAQ Heading */}
      <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
        Frequently Asked <span className="text-[#00308A]">Questions</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {[0, 1].map(col => (
          <div className="flex flex-col gap-4" key={col}>
            {FAQS.filter((_, i) => i % 2 === col).map((faq, idx) => {
              const i = col + idx * 2;
              const isOpen = open === i;
              // Choose animation variant based on column
              const variants = col === 0 ? leftFaqVariants : rightFaqVariants;
              return (
                <motion.div
                  key={faq.question}
                  layout
                  className={`rounded-2xl bg-white shadow-md text-left text-lg font-semibold text-indigo-900 border border-indigo-100 transition focus:outline-none focus:ring-2 focus:ring-indigo-200 min-h-[120px] flex flex-col justify-start ${isOpen ? 'ring-2 ring-indigo-300 bg-indigo-50' : ''}`}
                  style={{ overflow: 'hidden' }}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants}
                >
                  <button
                    className="w-full flex items-center gap-3 px-6 py-5 focus:outline-none"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {icons[faq.icon]}
                    <span className="flex-1 text-left">{faq.question}</span>
                    <span className={`ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-2xl font-bold transition ${isOpen ? 'bg-indigo-500 text-white' : ''}`}>{isOpen ? '-' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="px-6 pb-5 text-indigo-900 text-base font-medium bg-indigo-50"
                        style={{ borderTop: '1px solid #e0e7ff' }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
} 