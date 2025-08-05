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
    name: "Priya Sharma",
    role: "Marketing Intern at GudGum",
    img: "https://randomuser.me/api/portraits/women/91.jpg",
    description: (
      <p>
        The GudGum internship completely transformed my understanding of sustainable branding. <Highlight> I learned to create impactful campaigns that resonate with eco-conscious consumers. </Highlight>{" "} The hands-on experience was invaluable.
      </p>
    ),
  },
  {
    name: "Rahul Verma",
    role: "Brand Strategy Intern at GudGum",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    description: (
      <p>
        Working on real sustainable branding projects gave me practical skills I couldn&apos;t learn in a classroom. <Highlight> I now understand how to balance creativity with environmental responsibility. </Highlight>{" "} Highly recommend this internship.
      </p>
    ),
  },
  {
    name: "Anjali Patel",
    role: "Design Intern at GudGum",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    description: (
      <p>
        The mentorship and guidance I received during the GudGum internship were exceptional. <Highlight> I learned to design with purpose and create brands that make a positive impact. </Highlight>{" "} This experience shaped my career path.
      </p>
    ),
  },
  {
    name: "Arjun Singh",
    role: "Digital Marketing Intern at GudGum",
    img: "https://randomuser.me/api/portraits/men/83.jpg",
    description: (
      <p>
        The internship taught me how to build authentic connections with audiences through sustainable messaging. <Highlight> I gained practical experience in digital marketing for eco-friendly brands. </Highlight>{" "} The skills I learned are directly applicable.
      </p>
    ),
  },
  {
    name: "Zara Khan",
    role: "Content Strategy Intern at GudGum",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    description: (
      <p>
        Creating content for sustainable brands requires a unique approach. <Highlight> The GudGum internship showed me how to craft compelling narratives that drive real change. </Highlight>{" "} I feel confident in my ability to make a difference.
      </p>
    ),
  },
  {
    name: "Vikram Reddy",
    role: "Social Media Intern at GudGum",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    description: (
      <p>
        Managing social media for sustainable brands is challenging but rewarding. <Highlight> I learned to engage audiences authentically while promoting environmental values. </Highlight>{" "} The internship exceeded my expectations.
      </p>
    ),
  },
  {
    name: "Meera Iyer",
    role: "Brand Research Intern at GudGum",
    img: "https://randomuser.me/api/portraits/women/14.jpg",
    description: (
      <p>
        The research skills I developed during this internship are invaluable. <Highlight> I learned to analyze market trends and consumer behavior in the sustainable space. </Highlight>{" "} This experience opened many career opportunities.
      </p>
    ),
  },
  {
    name: "Karan Malhotra",
    role: "Creative Strategy Intern at GudGum",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    description: (
      <p>
        Working on real client projects gave me confidence in my creative abilities. <Highlight> I learned to develop strategic solutions that align with sustainable values. </Highlight>{" "} The mentorship was exceptional.
      </p>
    ),
  },
  {
    name: "Neha Gupta",
    role: "Market Analysis Intern at GudGum",
    img: "https://randomuser.me/api/portraits/women/18.jpg",
    description: (
      <p>
        Understanding the sustainable market landscape is crucial for modern branding. <Highlight> The internship provided deep insights into consumer behavior and market dynamics. </Highlight>{" "} I feel prepared for any branding challenge.
      </p>
    ),
  },
  {
    name: "Aditya Joshi",
    role: "Brand Development Intern at GudGum",
    img: "https://randomuser.me/api/portraits/men/73.jpg",
    description: (
      <p>
        Building brands from the ground up requires both creativity and strategy. <Highlight> The GudGum internship taught me to balance both while maintaining sustainable principles. </Highlight>{" "} This experience was truly transformative.
      </p>
    ),
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-24 px-2 md:px-0 bg-white">
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
        <div className="relative mt-6 h-[800px] overflow-hidden flex items-center justify-center">
          <div className="h-full w-full max-w-6xl mx-auto gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
            {Array(3) // Only show 3 rows
              .fill(0)
              .map((_, i) => (
                <Marquee vertical key={i} className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}>
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
              ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-white from-20%"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-white from-20%"></div>
        </div>
      </div>
    </section>
  );
} 