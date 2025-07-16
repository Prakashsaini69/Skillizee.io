import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#3B82F6"/><path d="M28 13v14a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" fill="#fff"/><path d="M16 11v2M24 11v2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    name: "Basic Plan",
    language: "English | Notes Only",
    price: "₹5399/-",
    features: [
      { text: "Live Classes", included: true },
      { text: "Skill Assessment Test", included: true },
      { text: "3 Short Courses", included: true },
      { text: "1 Internship", included: true },
      { text: "2 SBPLs", included: true },
      { text: "6 Months Access", included: true },
      { text: "Certificate", included: true }
    ],
    highlight: false
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#6366F1"/><path d="M20 12a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z" fill="#fff"/><path d="M20 8v4M20 28v4M8 20h4M28 20h4M12.93 12.93l2.83 2.83M24.24 24.24l2.83 2.83M12.93 27.07l2.83-2.83M24.24 15.76l2.83-2.83" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    name: "Standard Plan",
    language: "English and Hindi | Videos & Notes",
    price: "₹6499/-",
    features: [
      { text: "Live Classes", included: true },
      { text: "Skill Assessment Test", included: true },
      { text: "5 Short Courses", included: true },
      { text: "2 Internships", included: true },
      { text: "4 SBPLs", included: true },
      { text: "12 Months Access", included: true },
      { text: "Certificate", included: true }
    ],
    highlight: false
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#1E293B"/><path d="M20 12l2.472 5.012 5.528.803-4 3.902.944 5.5L20 23.25l-4.944 2.967.944-5.5-4-3.902 5.528-.803L20 12Z" fill="#fff"/><path d="M20 8v4M20 28v4M8 20h4M28 20h4M12.93 12.93l2.83 2.83M24.24 24.24l2.83 2.83M12.93 27.07l2.83-2.83M24.24 15.76l2.83-2.83" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    name: "Premium Plan",
    language: "English and Hindi | Access Everything",
    price: "₹7699/-",
    features: [
      { text: "Live Classes", included: true },
      { text: "Skill Assessment Test", included: true },
      { text: "10 Short Courses", included: true },
      { text: "4 Internships", included: true },
      { text: "8 SBPLs", included: true },
      { text: "24 Months Access", included: true },
      { text: "Certificate", included: true }
    ],
    highlight: true
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.15, duration: 0.7, type: "spring", stiffness: 60 } })
};

export default function StoreMemberships() {
  return (
    <section className="w-full max-w-6xl mx-auto px-2 py-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10" style={{ color: "#00308A" }}>Membership Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            className={`relative flex flex-col items-center text-center rounded-2xl border transition-all duration-300 px-4 py-7 ${
              plan.highlight
                ? "bg-gradient-to-br from-[#00308A] to-blue-800 text-white border-blue-800 scale-105 z-10 shadow-2xl premium-glow-shadow"
                : "bg-white border-blue-200 shadow-lg"
            }`}
            style={{ minHeight: 400 }}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {plan.highlight && (
              <span className="absolute top-4 right-4 bg-blue-600 text-xs font-bold px-2 py-0.5 rounded-full text-white tracking-wide shadow">BEST VALUE</span>
            )}
            <div className="flex flex-col items-center mb-2 w-full">
              <div className="mb-1">{plan.icon}</div>
              <span className="text-xl font-bold mb-1 flex items-center gap-2">
                {plan.name}
              </span>
              <span className={`mb-3 text-sm font-medium ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>{plan.language}</span>
              <div className="text-3xl font-extrabold mb-3 tracking-tight">
                {plan.price}
              </div>
              <ul className="mb-4 w-full text-sm font-medium flex flex-col gap-1.5 items-center">
                {plan.features.map((feature, i) => (
                  <li key={feature.text} className="flex items-center gap-2">
                    <span className={plan.highlight ? "text-white" : "text-blue-900"}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-auto w-full py-2.5 rounded-full font-bold text-base transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-center ${
                plan.highlight
                  ? "bg-white text-blue-900 hover:bg-blue-100"
                  : "bg-[#00308A] text-white hover:bg-blue-700"
              }`}
            >
              Enroll Now
            </button>
            <div className={`text-xs mt-3 text-center w-full ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>100% Refund | Lifetime Access</div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .premium-glow-shadow {
          box-shadow: 0 0 10px 2px #377DFF, 0 0 24px 8px #60a5fa;
        }
      `}</style>
    </section>
  );
} 