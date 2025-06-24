import React from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "Are these certified programs?", a: "Yes! Every course offers a certificate upon successful completion." },
  { q: "Can I buy individual courses?", a: "Yes. You can buy anything individually, or choose a package/membership for better value." },
  { q: "Can I get guidance during the course?", a: "Yes! Some masterclasses are live; others include pre-recorded guidance videos and chat support." },
];

export default function StoreFAQ() {
  return (
    <section className="py-16 px-2 md:px-8" id="faq">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#377DFF] mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        className="text-center text-blue-900/80 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Got questions? We've got answers. If you need more help, contact our support team.
      </motion.p>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-[#377DFF] mb-2">{f.q}</h4>
            <p className="text-blue-900/80">{f.a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 