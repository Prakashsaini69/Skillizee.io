import React from "react";
import Marquee from "react-fast-marquee";

const SlantedScrollingBanner = ({ className = "" }) => (
  <div
    className={` left-0 right-0 bottom-0 w-screen z-50 ${className}`}
    style={{ transform: "skewY(-3deg)", pointerEvents: 'none' }}
  >
    <div className="w-full text-white text-lg font-medium py-4 px-0 flex items-center overflow-hidden justify-center" style={{ backgroundColor: '#532c56', pointerEvents: 'auto' }}>
      <Marquee gradient={false} speed={40} pauseOnHover={true} className="whitespace-nowrap">
        <span className="mx-8">Live Group Q&amp;A Sessions</span>
        <span className="text-blue-300 mx-4">★</span>
        <span className="mx-8">Virtual Course Community</span>
        <span className="text-blue-300 mx-4">★</span>
        <span className="mx-8">Free Access to Upgrades</span>
        <span className="text-blue-300 mx-4">★</span>
        <span className="mx-8">Live Group Q&amp;A Sessions</span>
        <span className="text-blue-300 mx-4">★</span>
        <span className="mx-8">Virtual Course Community</span>
        <span className="text-blue-300 mx-4">★</span>
        <span className="mx-8">Free Access to Upgrades</span>
        <span className="text-blue-300 mx-4">★</span>
      </Marquee>
    </div>
  </div>
);

export default SlantedScrollingBanner; 