"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "./marquee";

export function Highlight({ children, className, }: { children: React.ReactNode; className?: string; }) {
  return (
    <span className={cn(
      "bg-[#f0abfc] p-1 py-0.5 font-bold text-[#d946ef] dark:bg-[#f0abfc] dark:text-[#d946ef]",
      className,
    )}>
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({ description, name, img, role, className, ...props }: TestimonialCardProps) {
  return (
    <div className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      "border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow",
      className,
    )} {...props}>
      <div className="select-none text-sm font-normal text-neutral-700">
        {description}
        <div className="flex flex-row py-1">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>
      <div className="flex w-full select-none items-center justify-start gap-5">
        <img width={40} height={40} src={img || ""} alt={name} className="w-10 h-10 rounded-full ring-2 ring-purple-200" />
        <div>
          <p className="font-medium text-neutral-600">{name}</p>
          <p className="text-xs font-normal text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Sneha Iyengar",
    role: "Grade 11",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234974/c998e26464fcf80e2a31e683c6f181e1_dcsvfp.jpg",
    description: (
      <p>
        The GudGum internship completely transformed my understanding of sustainable branding. <Highlight> The hands-on experience was invaluable </Highlight>{" "}, helping me build campaigns that resonate with eco-conscious consumers.
      </p>
    ),
  },
  {
    name: "Ishita Rajput",
    role: "Grade 5",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234972/4dddcfc826925d62934cefdb6e331fd4_choonf.jpg",
    description: (
      <p>
        Through the internship, I learned how to design brand stories that matter. <Highlight> Eco-conscious creativity became my superpower </Highlight>{" "}, and I loved seeing how small ideas can lead to big impact.
      </p>
    ),
  },
  {
    name: "Kunal Desai",
    role: "Grade 11",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234971/1b6866e21f59b354222026abd6f5bdd3_a4lpo1.jpg",
    description: (
      <p>
        I never realized how much plastic waste gum could generate. <Highlight> This internship opened my eyes to sustainable solutions </Highlight>{" "} and gave me the confidence to build campaigns with purpose.
      </p>
    ),
  },
  {
    name: "Tanvi Bhargava",
    role: "Grade 6",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234969/2ff7ed87c2d0fcaeaf1c949ace493df1_j7onci.jpg",
    description: (
      <p>
        The product packaging module was my favorite. <Highlight> I discovered the joy of designing eco-friendly wrappers </Highlight>{" "}, and I now see every brand through a green lens.
      </p>
    ),
  },
  {
    name: "Yash Singh",
    role: "Grade 6",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234968/1e6a3a9107ae15f456b1a614db1bf03d_awa4hq.jpg",
    description: (
      <p>
        I used to think branding was all about logos. <Highlight> Now I know it's about values, impact, and planet care </Highlight>{" "}—thanks to GudGum!
      </p>
    ),
  },
  {
    name: "Devansh Nair",
    role: "Grade 7",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234966/c71d4d2d58891ffb17d31616d451789a_bokai0.jpg",
    description: (
      <p>
        The market analysis activity was super exciting. <Highlight> It made me think like a real eco-entrepreneur </Highlight>{" "}, and now I dream of starting my own sustainable venture.
      </p>
    ),
  },
  {
    name: "Aarav Mehta",
    role: "Grade 5",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234965/f83755d48f5455e0250b1cb230154b0c_nap9h8.jpg",
    description: (
      <p>
        The storytelling aspect of the brand really stayed with me. <Highlight> I learned how purpose-driven narratives create powerful brands </Highlight>{" "} that consumers truly connect with.
      </p>
    ),
  },
  {
    name: "Riya Kapoor",
    role: "Grade 7",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234965/2b5067a9a4c4bdd4342b3a226c579113_x1mz1t.jpg",
    description: (
      <p>
        Exploring GudGum's challenges made the internship feel real. <Highlight> I understood how sustainability isn't always easy </Highlight>{" "}, but it's always worth pursuing.
      </p>
    ),
  },
  {
    name: "Simran Kaur",
    role: "Grade 12",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752234964/26c5f5db415df689733d4eaab6cc51ca_wf2yun.jpg",
    description: (
      <p>
        I loved creating a customer persona that matched my own values. <Highlight> This activity made me realize the importance of relatable branding </Highlight>{" "} in sustainability marketing.
      </p>
    ),
  },
  {
    name: "Vivaan Joshi",
    role: "Grade 6",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235359/f74084f7ae61c25e78f5ad33147eb7b6_vmwjje.jpg",
    description: (
      <p>
        I had never thought of chewing gum as a problem before. <Highlight> This internship completely changed my perspective on everyday products </Highlight>{" "} and the waste they create.
      </p>
    ),
  },
  {
    name: "Ananya Dutta",
    role: "Grade 4",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235358/26443a270dcbde7704c2d27f3c2f1adf_cphkpc.jpg",
    description: (
      <p>
        Every module gave me a fresh new insight. <Highlight> The hands-on approach made it feel like I was already part of the GudGum team </Highlight>{" "} and building something meaningful.
      </p>
    ),
  },
  {
    name: "Raghav Malhotra",
    role: "Grade 11",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235357/c4d85461bb1b4740bc3905f2b9e0a9c3_jlh1jl.jpg",
    description: (
      <p>
        The Instagram campaign analysis was my favorite. <Highlight> I realized how sustainability can trend if marketed creatively </Highlight>{" "}—just like GudGum did!
      </p>
    ),
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-24 px-2 md:px-0 bg-transparent">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="mb-4 text-center text-4xl md:text-5xl font-bold leading-[1.2] tracking-tighter text-[#0a2540]">
          What Our Interns Say
        </h2>
        <h3 className="mx-auto mb-8 max-w-lg text-center text-lg font-medium tracking-tight text-neutral-600">
          Don&apos;t just take our word for it. Here&apos;s what{" "}
          <span className="text-purple-600 font-semibold"> our interns </span>{" "} are saying about the{" "}
          <span className="text-purple-600 font-semibold">GudGum Internship</span>
        </h3>
        
        {/* Container with increased height and centered content */}
        <div className="relative mt-6 h-[800px] overflow-hidden">
          <div className="h-full w-full max-w-6xl mx-auto px-4">
            <div className="flex justify-center items-center h-full">
              <div className="flex flex-col md:flex-row xl:flex-row 2xl:flex-row gap-6 w-full max-w-5xl justify-center">
                {Array(3) // Only show 3 rows
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex flex-col justify-center items-center w-full md:w-1/3 xl:w-1/4 2xl:w-1/4">
                      <div className="w-full max-w-sm mx-auto">
                        <Marquee vertical className={cn(
                          "w-full",
                          {
                            "[--duration:60s]": i === 1,
                            "[--duration:30s]": i === 2,
                            "[--duration:70s]": i === 3,
                          }
                        )}>
                          {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: Math.random() * 0.8,
                                duration: 1.2,
                              }}
                            >
                              <TestimonialCard {...card} />
                            </motion.div>
                          ))}
                        </Marquee>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-white from-20%"></div>
          
          {/* Bottom gradient for smooth fade effect */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-white via-white/90 to-transparent"></div>
        </div>
      </div>
    </section>
  );
} 