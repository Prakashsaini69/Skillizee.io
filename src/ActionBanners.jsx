import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
  {
    icon: "🎯",
    title: "Skill Combo Blast",
    desc: "Buy Package-3 now & get 1 Live Masterclass FREE!",
    bg: "from-[#7B5FFF] to-[#01C8FF]",
  },
  {
    icon: "🎁",
    title: "Buy membership today and get a lifetime value for EXTRA credits",
    desc: "Only for the first 50 signups!",
    bg: "from-[#FFB86C] to-[#FF61A6]",
  },
  {
    icon: "🚀",
    title: "Project Power Hour",
    desc: "Complete any SBLs this week & win a Certificate of Excellence + Surprise Gift",
    bg: "from-[#43E97B] to-[#38F9D7]",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ActionBanners() {
  return (
    <section className="w-full max-w-6xl mx-auto px-2 py-8">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-[#377DFF] text-center tracking-tight">Top 3 Limited-Time Deals</h2>
      <Slider {...settings} className="action-banners-slider">
        {banners.map((banner, i) => (
          <div key={banner.title} className="px-2">
            <div
              className={`relative flex flex-col justify-between min-w-[320px] max-w-[420px] w-full h-[180px] md:h-[200px] rounded-2xl p-6 shadow-xl bg-gradient-to-br ${banner.bg} text-white overflow-hidden`}
              style={{ boxShadow: "0 6px 32px 0 rgba(55,125,255,0.18), 0 1.5px 8px 0 rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl md:text-4xl drop-shadow-lg animate-bounce-slow">{banner.icon}</span>
                <span className="text-lg md:text-xl font-bold drop-shadow-lg">{banner.title}</span>
              </div>
              <div className="text-base md:text-lg font-semibold drop-shadow-sm mb-2">{banner.desc}</div>
              {/* Decorative elements */}
              <span className="absolute right-4 top-4 text-2xl opacity-30 rotate-12">?</span>
              <span className="absolute left-4 bottom-4 text-2xl opacity-30 -rotate-12">!</span>
            </div>
          </div>
        ))}
      </Slider>
      <style>{`
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite alternate cubic-bezier(.5,1.5,.5,1);
        }
        @keyframes bounce-slow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
        .action-banners-slider .slick-slide > div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  );
} 