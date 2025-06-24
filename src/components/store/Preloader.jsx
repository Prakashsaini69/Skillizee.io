import React, { useEffect, useState } from "react";
// import Lottie from "lottie-react";
// import loaderAnim from "../../assets/loader.json";

export default function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0ea5e9] to-[#a21caf]">
      {/* <Lottie animationData={loaderAnim} loop /> */}
      <div className="w-24 h-24 rounded-full border-8 border-t-8 border-white/30 border-t-[#0ea5e9] animate-spin shadow-2xl" />
    </div>
  );
} 