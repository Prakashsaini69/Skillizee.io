import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const featured = [
  { title: "Harvard Case Study", desc: "Learn from the best with real Harvard cases.", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { title: "AI & ML Masterclass", desc: "Deep dive into machine learning projects.", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { title: "Entrepreneurship Bootcamp", desc: "Start and grow your own business.", img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80" },
];

export default function StoreFeatured() {
  return (
    <section className="py-16 px-2 md:px-8" id="featured">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#377DFF] mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Featured & Popular
      </motion.h2>
      <motion.p
        className="text-center text-blue-900/80 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Check out our most popular and trending programs, handpicked for you.
      </motion.p>
      <Swiper spaceBetween={24} slidesPerView={1.2} className="max-w-3xl mx-auto">
        {featured.map((f, i) => (
          <SwiperSlide key={f.title}>
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <img src={f.img} alt={f.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="text-lg font-bold text-[#377DFF] mb-2">{f.title}</h3>
              <p className="text-blue-900/80">{f.desc}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
} 