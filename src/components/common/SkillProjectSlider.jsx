import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import courseData from "../../pages/Store/courseData";

export default function SkillProjectSlider() {
  const swiperRef = useRef(null);
  const caseStudies = courseData.caseStudies;
  return (
    <section className="w-full max-w-5xl mx-auto my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#00308A]">Harvard Case Studies</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={2.2}
        centeredSlides={false}
        navigation={false}
        pagination={{ clickable: true }}
        loop={true}
        speed={600}
        className="!pb-12"
        whileHover={{ scale: 1.05 }}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.2 },
          900: { slidesPerView: 2.2 },
        }}
        onSwiper={swiper => (swiperRef.current = swiper)}
      >
        {caseStudies.map((study, i) => (
          <SwiperSlide key={study.title}>
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.open(study.link, '_blank')}>
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-64 object-cover rounded-xl border-2 border-black mb-2"
              />
              <div className="text-center text-lg font-bold text-[#00308A] mt-2">{study.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-start mt-4 ml-2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-3 shadow hover:bg-gray-800 transition"
          aria-label="Previous"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15.5 19l-7-7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow hover:bg-gray-800 transition"
          aria-label="Next"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M8.5 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </section>
  );
} 