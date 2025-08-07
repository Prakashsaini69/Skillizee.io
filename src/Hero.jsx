import React, { useEffect, useRef, useState } from "react";
import heroPoster from "./assets/ImageThumbnail.svg"; // Use your poster image
import { motion } from "framer-motion";

const words = ["Skills", "Projects", "Impacts"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTimeout = useRef();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      if (displayed.length > 0) {
        typingTimeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (displayed.length < currentWord.length) {
        typingTimeout.current = setTimeout(() => setDisplayed(currentWord.slice(0, displayed.length + 1)), 80);
      } else {
        typingTimeout.current = setTimeout(() => setIsDeleting(true), 1000);
      }
    }
    return () => clearTimeout(typingTimeout.current);
  }, [displayed, isDeleting, wordIndex]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section
      className="w-full min-h-[60vh] flex flex-col items-center justify-center pb-16 px-4 text-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dpstp4ovd/image/upload/v1748863808/123123123123_nhewwk.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '60vh',
      }}
    >
      {/* Animated background shapes */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 pt-[60px] sm:pt-[80px] lg:pt-[100px] leading-tight">
          Real {" "}
          <span className="text-orange border-r-2 border-purple-400 animate-pulse">
            {displayed}
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-6 font-normal px-4 sm:px-0"
        > 
          Colleges and careers demand skills, not just scores. With SkilliZee Online Skill Center,<br className="hidden sm:block" />
          they gain skills, internships, & case study mastery—before it's too late to stand out.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 px-4 sm:px-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {["🔁 Lifetime Access", "👥 2.2+ Lakh Enrolled"].map((badge, i) => (
            <motion.span
              key={badge}
              className="text-[#ffffff] px-3 sm:px-4 py-2 rounded-full font-semibold shadow backdrop-blur-md text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(76,110,245,0.25)" }}
          whileTap={{ scale: 0.97 }}
          className="relative group bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg shadow-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-purple-200"
          onClick={() => {
            const el = document.getElementById('courses-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="relative z-10">Explore SkilliZee Courses</span>
          <span className="absolute left-0 top-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-full blur-xl"></span>
        </motion.button>
        <motion.div
          className="mt-8 sm:mt-10 flex justify-center px-4 sm:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="relative w-full max-w-xl">
            {!showVideo ? (
              <div className="relative cursor-pointer" onClick={() => setShowVideo(true)}>
                <img src={heroPoster} alt="Intro Video Poster" className="rounded-xl shadow-2xl w-full border-4 border-white/80" style={{ objectFit: 'cover', minHeight: 240 }} />
                <button
                  className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 rounded-xl"
                  style={{ pointerEvents: 'none' }}
                  tabIndex={-1}
                  aria-label="Play Video"
                >
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="#00308A" fillOpacity="0.8" />
                    <polygon points="26,20 48,32 26,44" fill="#fff" />
                  </svg>
                </button>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/cHZTuN2mtIE?autoplay=1&rel=0"
                width="100%"
                height="360"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-xl shadow-2xl w-full border-4 border-white/80"
                style={{ objectFit: 'cover', minHeight: 240 }}
                title="Intro Video"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 