import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PROJECTS = [
  { img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749279440/Starbucks_gdq1th.png", title: "Starbucks case study", subtitle: "How Starbucks Became a Billion-Dollar Business?", session: "1 session - 1h 15m", badge: "NEW" },
  { img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749279449/Netflix_zoxmzc.png", title: "Netflix Case study", subtitle: "The Success Story of Netflix", session: "1 session - 1h 15m", badge: "" },
  { img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749199308/Nike_dqpdtk.png", title: "Nike Case study", subtitle: "How Nike and Michael Jordan Changed the Game Forever?", session: "1 session - 1h 15m", badge: "" },
  { img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749199308/Zomato_lleo9b.png", title: "Zomato case study", subtitle: "A Secret Move that Saved Zomato", session: "1 session - 1h 15m", badge: "" },
  { img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749199308/Dairymilk_vgvmlr.png", title: "Cadbury Case study", subtitle: "How Cadbury Turned Crisis into Trust", session: "1 session - 1h 15m", badge: "" },
  { img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749199309/Maggie_zjvem4.png", title: "Maggi Case study", subtitle: "The Recipe for a Remarkable Comeback", session: "1 session - 1h 15m", badge: "" },
];

export default function SkillProjectSlider() {
  const swiperRef = useRef(null);
  return (
    <section className="w-full max-w-5xl mx-auto my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#377DFF]">Harvard Case Studies</h2>
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
        {PROJECTS.map((card, idx) => (
          <SwiperSlide key={card.title + idx}>
            <div className="flex flex-col items-start w-full max-w-md mx-auto transition-transform duration-500 scale-100 z-10">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden relative w-full " style={{ aspectRatio: '16/9' }}>
                <img src={card.img} alt={card.title} className="w-full h-full object-cover rounded-2xl" />
                {card.badge && (
                  <span className="absolute top-3 right-3 bg-[#FF6B00] text-white text-xs font-bold px-3 py-1 rounded-full shadow">{card.badge}</span>
                )}
                <span className="absolute bottom-3 left-3 bg-white/90 text-[#377DFF] font-bold text-xs px-4 py-1 rounded-full shadow border border-blue-100">{card.session}</span>
              </div>
              <div className="mt-4 mb-2 transition-transform duration-500 scale-100">
                <h3 className="text-xl font-bold text-[#1A2954] mb-1 leading-tight">{card.title}</h3>
                <p className="text-base text-[#377DFF] font-medium leading-snug">{card.subtitle}</p>
              </div>
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