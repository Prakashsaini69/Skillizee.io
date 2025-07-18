import React from "react";

const companies = [
  { name: "ThePrint", logo: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752835590/theprint_kfqacb.svg" },
  { name: "Silicon India", logo: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752835590/sliconindia_oyinyu.svg" },
  { name: "Midday", logo: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752835916/midday_2_xh8dmj.svg" },
  { name: "American", logo: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752837496/Untitled_design_3_zhavvn.svg" },
  { name: "East Asia", logo: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752837496/Untitled_design_4_enwlbu.svg" },
];

export default function FeaturedCompanies() {
  return (
    <section className="w-full py-10 px-2 bg-[#10182b] rounded-3xl my-20">
      <h2 className="text-center text-lg md:text-xl font-bold text-gray-200 mb-8 tracking-widest uppercase">Featured On</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {companies.map((company) => (
          <div key={company.name} className="flex flex-col items-center justify-center px-2 md:px-4">
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 md:h-24 w-auto object-contain drop-shadow-lg transition"
              style={{ maxWidth: 160, filter: 'brightness(1.2) contrast(1.2)' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
} 