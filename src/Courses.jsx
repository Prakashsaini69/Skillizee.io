import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, Chip } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

const gradeGroups = ["4-6 Grade", "7-12 Grade"];
const categories = ["Internships", "SBPLs", "Short Courses", "Masterclasses"];

const courseData = {
  "4-6 Grade": {
    Internships: [
      {
        title: "Junior Data Analyst Internship",
        desc: "Analyze fun datasets and present your findings!",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        color: "from-green-200 to-blue-200",
      },
      {
        title: "Young Web Developer Internship",
        desc: "Build your first website and show it to the world!",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        color: "from-blue-200 to-purple-200",
      },
      {
        title: "Creative Animation Internship",
        desc: "Create fun animations and learn design basics!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
      {
        title: "Mini Game Developer Internship",
        desc: "Build your own mini games and share with friends!",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
    ],
    SBPLs: [
      {
        title: "Community Helper Project",
        desc: "Design a campaign to help your neighborhood!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
      {
        title: "Eco Warriors Project",
        desc: "Create a plan to save the environment!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Kindness Campaign",
        desc: "Spread kindness in your school and community!",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        color: "from-green-300 to-blue-200",
      },
      {
        title: "Tech for Good",
        desc: "Use technology to solve real-world problems!",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        color: "from-blue-200 to-purple-200",
      },
    ],
    "Short Courses": [
      {
        title: "Intro to Coding",
        desc: "Learn the basics of coding with games and puzzles.",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
      {
        title: "Fun with Math",
        desc: "Explore math with fun activities and challenges!",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        color: "from-green-200 to-blue-200",
      },
      {
        title: "Science Explorers",
        desc: "Discover science with cool experiments!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Art & Creativity",
        desc: "Unleash your creativity with art projects!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
    Masterclasses: [
      {
        title: "Young Innovators Masterclass",
        desc: "Invent and present your own creative solution!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Public Speaking Masterclass",
        desc: "Become a confident speaker and leader!",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        color: "from-green-300 to-blue-200",
      },
      {
        title: "Robotics Masterclass",
        desc: "Build and program your own robots!",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
      {
        title: "Design Thinking Masterclass",
        desc: "Solve problems creatively with design thinking!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
  },
  "7-12 Grade": {
    Internships: [
      {
        title: "Data Analysis Internship",
        desc: "Hands-on data cleaning, visualization, and reporting tasks.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        color: "from-green-300 to-blue-200",
      },
      {
        title: "Web Dev Internship",
        desc: "Build real client websites using HTML, CSS, and JavaScript.",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        color: "from-blue-200 to-purple-200",
      },
      {
        title: "AI Research Internship",
        desc: "Explore artificial intelligence and machine learning!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Startup Internship",
        desc: "Work with real startups and learn entrepreneurship!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
    SBPLs: [
      {
        title: "Startup Pitch Challenge",
        desc: "Develop a business plan and pitch in front of judges.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
      {
        title: "Social Impact Project",
        desc: "Lead a project to create positive change!",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        color: "from-green-200 to-blue-200",
      },
      {
        title: "Tech for Good",
        desc: "Use technology to solve real-world problems!",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        color: "from-blue-200 to-purple-200",
      },
      {
        title: "Community Helper Project",
        desc: "Design a campaign to help your neighborhood!",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
    ],
    "Short Courses": [
      {
        title: "Intro to Python",
        desc: "A fast-paced course to write your first Python scripts.",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
      {
        title: "Creative Writing",
        desc: "Express yourself and write amazing stories!",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        color: "from-green-200 to-blue-200",
      },
      {
        title: "Math Mastery",
        desc: "Master advanced math concepts with fun challenges!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Science Explorers",
        desc: "Discover science with cool experiments!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
    Masterclasses: [
      {
        title: "AI & ML Masterclass",
        desc: "Deep dive into machine learning algorithms and projects.",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Entrepreneurship Masterclass",
        desc: "Learn how to start and grow your own business!",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        color: "from-green-300 to-blue-200",
      },
      {
        title: "Public Speaking Masterclass",
        desc: "Become a confident speaker and leader!",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
      {
        title: "Design Thinking Masterclass",
        desc: "Solve problems creatively with design thinking!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
  },
};

export default function Courses() {
  const [grade, setGrade] = useState("7-12 Grade");
  const [category, setCategory] = useState("Internships");

  const cards = courseData[grade][category] || [];

  return (
    <section className="py-16 px-4 bg-gradient-to-l from-blue-50 to-purple-50">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-[#377DFF] mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Courses
      </motion.h2>
     
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Category Tabs + Grade Dropdown */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-center mb-8 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 ${
                category === cat
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-purple-600 scale-105"
                  : "bg-white text-purple-700 border-purple-200 hover:bg-purple-50"
              }`}
            >
              {cat}
            </button>
          ))}
          {/* Cute Dropdown for Grade Group */}
          <select
            value={grade}
            onChange={e => setGrade(e.target.value)}
            className="ml-2 px-4 py-2 rounded-full border-2 border-blue-300 bg-white text-blue-700 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 cursor-pointer"
          >
            {gradeGroups.map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
        {/* Courses Content */}
        <div className="flex-1">
          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={category + grade}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              {cards.map((card, i) => (
                <motion.div
                  key={card.title + i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex justify-center items-stretch"
                >
                  <Card className="w-full max-w-xs rounded-2xl shadow-xl border border-gray-200 flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-200 bg-white">
                    <CardHeader floated={false} shadow={false} className="relative h-48 bg-gray-100 flex items-center justify-center">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="object-contain h-40 w-full rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="flex flex-col gap-2 px-4 py-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <div className="bg-[#F7F7F7] text-[#377DFF] font-bold px-2 py-1 text-xs rounded-full flex items-center gap-1 min-w-[90px] justify-center">
                            <span>10x Learning</span>
                            <StarIcon className="w-4 h-4 text-yellow-400 ml-1" />
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(4)].map((_, idx) => (
                            <StarIcon key={idx} className="w-4 h-4 text-yellow-400" />
                          ))}
                          <span className="text-xs text-gray-500 font-semibold ml-1">4.5</span>
                        </div>
                      </div>
                      <Typography variant="h6" color="blue-gray" className="font-bold leading-tight min-h-[48px]">
                        {card.title}
                      </Typography>
                      <div className="w-full h-0.5 bg-gray-200 my-2 rounded-full" />
                      <div className="flex justify-between gap-2 mb-2">
                        <div className="flex-1 text-center bg-[#FF4C4C] text-white font-bold rounded-lg py-1 text-xs">9-16 Ages</div>
                        <div className="flex-1 text-center bg-[#FF4C4C] text-white font-bold rounded-lg py-1 text-xs">60 Mins</div>
                        <div className="flex-1 text-center bg-[#FF4C4C] text-white font-bold rounded-lg py-1 text-xs">20 Marks</div>
                      </div>
                      <div className="flex items-center justify-between mt-1 mb-2">
                        <div className="flex flex-col items-start">
                          <span className="text-xs text-gray-500 line-through">₹999</span>
                          <span className="text-lg font-bold text-[#377DFF]">₹499</span>
                        </div>
                        <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-lg">50% OFF</span>
                      </div>
                    </CardBody>
                    <CardFooter className="pt-0 pb-4 px-4 flex flex-col gap-2">
                      <Button
                        fullWidth
                        className="bg-gradient-to-r from-[#377DFF] to-[#4F8CFF] text-white font-bold rounded-xl py-2 text-base shadow hover:scale-105 hover:shadow-lg transition-all duration-300"
                        onClick={() => window.open('https://www.skillizee.io/courses/Amazon-Go-68412e3a3359575c70b0b715', '_blank')}
                      >
                        Enroll Now
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* View More CTA */}
        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 border-2 border-purple-600 text-lg">
            View More
          </button>
        </div>
      </div>
    </section>
  );
} 