import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Alanna Lazarowich", quote: "I have met Aarna, and her vision for education is what schools need today. SkilliZee is a platform that nurtures real-world leadership, not just test scores. It cultivates young minds to think, reflect, and grow — exactly the skills we look for in global leaders.", designation: "Guest Professor, Kellogg University", img: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Kartik Vyas", quote: "In a world where skill gaps show up well before employment, SkilliZee bridges them right at the school level. It's data-driven, strategic, and scalable — a model every institution should explore.", designation: "Engagement Manager, McKinsey & Company", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Utkarsh Verma", quote: "At startups, we value thinkers and doers — and SkilliZee is creating them from Grade 4. It's rare to find an educational solution that's so aligned with the real-world pace and problem-solving mindset.", designation: "Ex-Director at Zepto & Swiggy", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Kiran Padeda", quote: "SkilliZee doesn't just build skills — it builds brands. Each student becomes a unique story of growth, ready for top universities and beyond — and that's smart positioning by any school's standards.", designation: "Professor of Marketing, Indian School of Business (ISB)", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Henry Lee", quote: "At LinkedIn, we see the growing need for early, authentic skill-building. SkilliZee's approach to creating lifetime learner profiles is a brilliant step toward preparing future-ready individuals.", designation: "LinkedIn | Enterprise Talent & Learning Solutions | Youth and Students", img: "https://randomuser.me/api/portraits/men/5.jpg" },
];

export default function StoreTestimonials() {
  return (
    <section className="py-16 px-2 md:px-8" id="testimonials">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#00308A] mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        What Our Learners Say
      </motion.h2>
      <motion.p
        className="text-center text-blue-900/80 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Hear from students and parents who have experienced the SkilliZee difference.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            <img src={t.img} alt={t.name} className="w-16 h-16 object-cover rounded-full mb-4 border-2 border-[#00308A]" />
            <p className="text-blue-900/80 mb-2">“{t.quote}”</p>
            <h4 className="text-base font-bold text-[#00308A]">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 