import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "../../magicui/marquee";

const testimonials = [
  {
    name: "Alanna Lazarowich",
    quote: "I have met Aarna, and her vision for education is what schools need today. SkilliZee is a platform that nurtures real-world leadership, not just test scores.",
    designation: "Guest Professor, Kellogg University",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749020679/Rectangle_236_mnoxxq.png"
  },
  {
    name: "Kartik Vyas",
    quote: "In a world where skill gaps show up well before employment, SkilliZee bridges them right at the school level. It's data-driven, strategic, and scalable.",
    designation: "Engagement Manager, McKinsey & Company",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749020678/Rectangle_237_xgbima.png"
  },
  {
    name: "Utkarsh Verma",
    quote: "At startups, we value thinkers and doers — and SkilliZee is creating them from Grade 4. It's rare to find an educational solution that's so aligned with the real-world pace.",
    designation: "Ex-Director at Zepto & Swiggy",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752576563/utkarshverma_axzf4b.png"
  },
  {
    name: "Kiran Padeda",
    quote: "SkilliZee doesn't just build skills — it builds brands. Each student becomes a unique story of growth, ready for top universities and beyond.",
    designation: "Professor of Marketing, Indian School of Business (ISB)",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752310483/rs_w_1503_h_1000_cg_true_e2td2u.png"
  },
  {
    name: "Henry Lee",
    quote: "At LinkedIn, we see the growing need for early, authentic skill-building. SkilliZee's approach to creating lifetime learner profiles is a brilliant step toward preparing future-ready individuals.",
    designation: "LinkedIn | Enterprise Talent & Learning Solutions",
    img: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex h-44 w-96 overflow-hidden rounded-xl border bg-white dark:border-zinc-700 shadow-lg">
      <div className="relative h-full w-32 flex-shrink-0 overflow-hidden">
        <img src={testimonial.img} alt={testimonial.name} className="h-full w-full object-cover" />
      </div>
      <div className="px-4 py-2 flex flex-col justify-between">
        <div>
          <span className="block text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</span>
          <span className="block text-sm font-medium text-blue-600 dark:text-blue-400">
            {testimonial.designation}
          </span>
        </div>
        <span className="block text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          "{testimonial.quote}"
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <motion.section
      className="w-full py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            What Our Students Say
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Hear from our community of learners who have transformed their careers with our courses.
          </motion.p>
        </div>
        
        <div className="space-y-8">
          {/* Top row - moves from right to left */}
          <Marquee 
            className="py-4" 
            pauseOnHover 
            duration="60s"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </Marquee>

          {/* Middle row - moves from left to right */}
          <Marquee 
            className="py-4" 
            pauseOnHover 
            reverse 
            duration="60s"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </Marquee>

          {/* Bottom row - moves from right to left */}
          <Marquee 
            className="py-4" 
            pauseOnHover 
            duration="60s"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </motion.section>
  );
} 