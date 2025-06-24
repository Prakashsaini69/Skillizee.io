import React from "react";
import Countdown from "react-countdown";
// import Lottie from "lottie-react";
// import sparkleAnim from "../../assets/sparkle.json";

export default function PromoBanner() {
  const offerEnd = Date.now() + 1000 * 60 * 60 * 24;
  return (
    <section className="w-full max-w-5xl mx-auto my-8 px-4 py-6 rounded-2xl bg-gradient-to-r from-[#0ea5e9]/80 to-[#a21caf]/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
      {/* <div className="absolute left-0 top-0 w-24 h-24 opacity-60 pointer-events-none">
        <Lottie animationData={sparkleAnim} loop />
      </div> */}
      <div>
        <div className="text-2xl md:text-3xl font-bold text-white mb-1">🔥 40% OFF on All Courses!</div>
        <div className="text-white/80 mb-2">Use code <span className="bg-white/20 px-2 py-1 rounded font-mono font-bold">SKILLZ40</span> at checkout</div>
        <Countdown
          date={offerEnd}
          renderer={({ hours, minutes, seconds }) => (
            <div className="text-white font-bold text-lg flex gap-2 items-center">
              <span>Ends in:</span>
              <span className="bg-white/20 px-2 py-1 rounded">{hours}h</span>
              <span className="bg-white/20 px-2 py-1 rounded">{minutes}m</span>
              <span className="bg-white/20 px-2 py-1 rounded">{seconds}s</span>
            </div>
          )}
        />
      </div>
      <a href="#categories" className="px-8 py-3 rounded-full font-bold bg-gradient-to-r from-[#a21caf] to-[#0ea5e9] text-white shadow-lg hover:scale-105 transition text-lg">Claim Offer</a>
    </section>
  );
} 