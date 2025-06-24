import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = {
  "Class Experience": [
    {q: "What age group are SkilliZee courses designed for?", a: "Our courses are designed for students aged 6-18, with different tracks for each age group."},
    {q: "How are SkilliZee classes conducted?", a: "Classes are conducted online via live sessions and interactive modules."},
    {q: "Does my child need prior experience in these courses or any other subjects?", a: "No prior experience is required. Our courses are beginner-friendly and adaptive."},
    {q: "Do students receive assignments, progress reports and certifications?", a: "Yes, students receive assignments, progress reports, and a certificate upon completion."},
    {q: "Can I reschedule or cancel classes, if needed?", a: "Yes, you can reschedule or cancel classes through your dashboard or by contacting support."},
  ],
  "Customer Support": [
    {q: "How do I contact SkilliZee support?", a: "You can contact us via email, chat, or phone. Visit our Contact page for details."},
    {q: "What is the response time for queries?", a: "We typically respond within 24 hours on business days."},
    {q: "Can I get a refund if I am not satisfied?", a: "Yes, we offer a satisfaction guarantee. Please see our refund policy for details."},
    {q: "How do I update my account information?", a: "Log in to your dashboard and go to Account Settings to update your information."},
    {q: "Is there a helpline for urgent issues?", a: "Yes, our helpline is available for urgent issues. Check our support page for the number."},
  ],
  "Teacher Queries": [
    {q: "Who are the teachers at SkilliZee?", a: "Our teachers are experienced educators and industry professionals."},
    {q: "What qualifications do the teachers have?", a: "All teachers have relevant degrees and teaching experience."},
    {q: "How are teachers selected?", a: "Teachers go through a rigorous selection and training process."},
    {q: "Can I request a specific teacher?", a: "You can request a teacher, and we will do our best to accommodate your preference."},
    {q: "How do I give feedback about a teacher?", a: "Feedback can be submitted through your dashboard or by contacting support."},
  ],
};

const tabs = Object.keys(FAQS);

export default function StoreFAQTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full max-w-3xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#00308A]">Frequently Asked Questions</h2>
      <div className="flex justify-center mb-8">
        <div className="flex bg-white rounded-full shadow border border-gray-200 overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-base font-semibold focus:outline-none transition-all duration-200 ${activeTab === tab ? "bg-purple-500 text-white" : "text-[#00308A] hover:bg-purple-50"}`}
              style={{ borderRadius: 999 }}
              onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col gap-4">
            {FAQS[activeTab].map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={item.q}
                  className="bg-white rounded-xl shadow border border-gray-200 px-6 py-4"
                  initial={false}
                  animate={{ boxShadow: isOpen ? "0 4px 24px #00308A22" : "0 1px 4px #0001" }}
                >
                  <button
                    className="flex w-full items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-lg font-semibold text-[#00308A]">{item.q}</span>
                    <motion.span
                      className="text-[#00308A] text-2xl"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      &#8595;
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-1 text-[#00308A] text-base font-normal">{item.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
} 