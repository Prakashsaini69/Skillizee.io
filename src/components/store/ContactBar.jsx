import React from "react";
import { FaWhatsapp, FaEnvelope, FaComments } from "react-icons/fa";

export default function ContactBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-4 bg-white/90 rounded-full shadow-lg px-6 py-2 items-center">
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:scale-110 transition"><FaWhatsapp /></a>
      <a href="mailto:support@skillizee.io" className="text-blue-500 text-2xl hover:scale-110 transition"><FaEnvelope /></a>
      <a href="#" className="text-purple-500 text-2xl hover:scale-110 transition"><FaComments /></a>
      <span className="ml-2 text-[#00308A] font-semibold text-sm">Need help?</span>
    </div>
  );
} 