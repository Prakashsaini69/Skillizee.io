import React from "react";

export default function PartnerSection() {
  return (
    <section className="w-full bg-[#0039A6] relative py-8 px-2 md:px-0 flex justify-center items-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mx-auto relative z-10">
        {/* Left: Harvard logo and text */}
        <div className="flex flex-col items-start md:items-start md:w-1/3 px-4 md:px-0 mb-6 md:mb-0">
          <span className="text-white text-sm md:text-base mb-2">Including course material from</span>
          <img
            src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1748948538/hbpe-logo-white.7c6aba14._wztpem.svg"
            alt="Harvard Business Publishing Education"
            className="h-14 md:h-20 w-auto mb-2"
          />
        </div>
        {/* Right: Partner logos in white card */}
        <div className="bg-white rounded-md shadow-lg flex flex-col md:flex-row items-center justify-center px-20 py-4 gap-6 md:gap-12 w-full md:w-auto">
          <div className="flex flex-col items-center">
            <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1748947936/ecell_bits_y4fomq.png" alt="BITS Hyderabad E-cell" className="h-14 md:h-20 w-auto mb-1" />
            {/* <span className="text-black font-normal text-sm md:text-base leading-tight text-center">BITS Hyderabad E-cell</span> */}
          </div>
          <div className="flex flex-col items-center">
            <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1748947935/eCell_xwbiw1.png" alt="IIT Bombay E-cell" className="h-14 md:h-20 w-auto mb-1" />
            {/* <span className="text-black font-normal text-sm md:text-base leading-tight text-center">IIT BOMBAY E-cell</span> */}
          </div>
          <div className="flex flex-col items-center">
            <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1748948447/istart_eiiojg.png" alt="iSTART" className="h-16 md:h-20 w-auto mb-1" />
            {/* <span className="text-black font-normal text-sm md:text-base leading-tight text-center">iSTART</span> */}
          </div>
        </div>
      </div>
    </section>
  );
} 