import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { cn } from "../../../lib/utils";
import WaveReveal from "../text/wave-reveal";


// ImageWithWave Component
function ImageWithWave() {
  return (
    <div className="title-logo relative inline-block text-center w-full">
      <div className="flex items-center justify-center gap-3 mb-4">
        <img 
          src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1752143212/SkilliZee_White_Trans.12_nqmvqx.png" 
          alt="SkilliZee Logo" 
          className="h-8 w-auto"
        />
      </div>
      <WaveReveal
        className="my-4 text-slate-800 sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-center"
        text="SMC CONNECT"
      />
    </div>
  );
}



// InfoContainer Component
function InfoContainer() {
  return (
    <div className="info-container flex flex-col items-center w-full max-w-4xl mx-auto text-center">
      <ImageWithWave />
      <div className="w-full animate-fadeIn text-lg leading-8 text-gray-700 mb-8 max-w-3xl mx-auto">
        <p className="mb-4">
          From founder to{" "}
          <span className="bg-yellow-400 px-2 py-1 rounded text-black font-bold">Investor</span>{" "}
          journey - For every student who's ever wondered:
        </p>
        <p className="mb-4 text-xl font-semibold">
          <span className="underline decoration-yellow-400 decoration-wavy">What now?</span>{" "}
          <span className="underline decoration-yellow-400 decoration-wavy">What next?</span>{" "}
          <span className="underline decoration-yellow-400 decoration-wavy">How to succeed?</span> 🚀
        </p>
        <p>
          Join us for an unforgettable experience that will shape your future!
        </p>
      </div>
      
      {/* Event Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-3xl">
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
          <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="font-bold text-sm">Event Date</div>
          <div className="text-gray-600 text-sm">8th November 2025</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
          <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="font-bold text-sm">Venue</div>
          <div className="text-gray-600 text-sm">Cambridge Court World School, Jaipur</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
          <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="font-bold text-sm">Who can Attend</div>
          <div className="text-gray-600 text-sm">Students from Grades 6-12</div>
        </div>
      </div>
    </div>
  );
}

// HeroSection Component
function HeroSection({ className }: { className?: string }) {
  return (
    <div className={cn("hero-container bg-gradient-to-br from-yellow-50 via-white to-blue-50 min-h-screen", className)}>
      <div className="inner-container m-auto flex h-full w-[90%] flex-col items-center justify-center py-20">
        <InfoContainer />
      </div>
    </div>
  );
}

export default HeroSection;
