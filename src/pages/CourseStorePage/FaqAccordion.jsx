import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  { q: "Are these certified programs?", a: "Yes! Every course offers a certificate upon successful completion." },
  { q: "Can I buy individual courses?", a: "Yes. You can buy anything individually, or choose a package/membership for better value." },
  { q: "Can I get guidance during the course?", a: "Yes! Some masterclasses are live; others include pre-recorded guidance videos and chat support." },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="flex flex-col gap-4">
        {faqs.map((f, i) => (
          <div key={f.q} className="bg-white/80 rounded-2xl shadow-xl p-6">
            <button
              className="flex items-center w-full justify-between text-left text-[#00308A] font-bold text-lg"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="flex items-center gap-2"><FaQuestionCircle className="text-[#0ea5e9]" /> {f.q}</span>
              <FaChevronDown className={`transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 mt-2" : "max-h-0"}`}
            >
              <p className="text-[#00308A]/80 text-base">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 