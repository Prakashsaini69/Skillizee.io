import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, Star, Sparkles, Lightbulb, Award, Trophy } from "lucide-react";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/animata/hero/hero-section";
import OrbitCarousel from "../../components/animata/orbit-carousel";

// Helper component for SVG icons to keep the main component cleaner
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);

const CalendarIcon = () => <Icon path="M19.5 3h-15A2.5 2.5 0 002 5.5v13A2.5 2.5 0 004.5 21h15a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0019.5 3zM19 5.5V8H5V5.5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5zM5 19v-9h14v9c0 .28-.22-.5-.5.5h-13c-.28 0-.5-.22-.5-.5z" />;
const UsersIcon = () => <Icon path="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 10-4 0 2 2 0 004 0zM12 14c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6zm-4 5c.1-.92.65-1.74 1.4-2.34.75-.6 1.7-1.06 2.6-1.55.9.49 1.85.95 2.6 1.55.75.6 1.3 1.42 1.4 2.34H8z" />;
const InfoIcon = () => <Icon path="M13 16h-2v-6h2v6zm0-8h-2V6h2v2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />;
const RocketIcon = () => <Icon path="M12.71 2.29a1 1 0 00-1.42 0l-3 3A1 1 0 009 7h6a1 1 0 00.71-1.71l-3-3zM13 9.41V14a1 1 0 01-2 0V9.41l-2.29 2.3a1 1 0 000 1.41l4 4a1 1 0 001.41 0l4-4a1 1 0 000-1.41L13 9.41zM5 19a1 1 0 001 1h12a1 1 0 000-2H6a1 1 0 00-1 1z" />;
const LightbulbIcon = () => <Icon path="M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 00-7-7zm-5 7a5 5 0 0110 0c0 2.05-1.11 3.83-2.75 4.67a.5.5 0 00-.25.43V16h-4v-1.9c0-.18-.09-.35-.25-.43A4.9 4.9 0 017 9z" />;
const ClipboardListIcon = () => <Icon path="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h.01M12 12h.01M12 16h.01M15 12h.01M15 16h.01" />;

// Main Animated Card Component
const AnimatedCard = ({ children, delay }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`transform transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {children}
        </div>
    );
};

// Overview Row Component
const OverviewRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-3 border-b border-slate-200">
        <dt className="text-slate-600">{label}</dt>
        <dd className="font-semibold text-slate-800">{value}</dd>
    </div>
);

const CreatorsHub = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Add any initialization logic here
  }, []);


  const timelineEvents = [
    { time: "09:00 AM - 10:00 AM", event: "Student Registrations", icon: Users },
    { time: "10:00 AM - 10:30 AM", event: "Opening Ceremony", icon: Star },
    { time: "10:30 AM - 11:00 AM", event: "Session on AI, Digital Marketing & Similar Topics", icon: Lightbulb },
    { time: "11:00 AM - 12:00 PM", event: "Session with Mr. Arjun Vaidya + Shark Tank Final Round", icon: Trophy, highlight: true },
    { time: "12:00 PM - 12:30 PM", event: "Stand-up Comedy or Interactive Engagement Session", icon: Sparkles },
    { time: "12:30 PM - 01:00 PM", event: "Cultural Performances by School Students", icon: Award },
    { time: "01:00 PM - 01:30 PM", event: "Closing Ceremony", icon: Star }
  ];


  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* Hero Section */}
      <HeroSection />

      {/* Partners Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Accreditation & <span className="text-blue-600">Collaborations</span>
          </motion.h2>
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mx-auto relative z-10">
              <div className="bg-white rounded-md shadow-lg flex flex-col md:flex-row items-center justify-center px-8 sm:px-12 md:px-20 py-4 gap-4 sm:gap-6 md:gap-12 w-full md:w-auto" style={{ boxShadow: '0 0 0 2px #2563eb, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
                <div className="flex flex-col items-center">
                  <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1752663819/Group_1618872732_jmddsr.svg" alt="BITS Hyderabad E-cell" className="h-12 sm:h-14 md:h-20 w-auto mb-1" />
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1752663818/Group_1618872730_lqcxsn.svg" alt="IIT Bombay E-cell" className="h-12 sm:h-14 md:h-20 w-auto mb-1" />
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1748948447/istart_eiiojg.png" alt="iSTART" className="h-14 sm:h-16 md:h-20 w-auto mb-1" />
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1752664029/stem_png_3_hhgux7.svg" alt="Stem" className="h-14 sm:h-16 md:h-28 w-auto mb-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Meet Our <span className="text-blue-600">Speakers</span>
          </motion.h2>
          
          <div className="flex justify-center">
            <OrbitCarousel />
          </div>
        </div>
      </section>

      {/* Exclusive Student Events Section */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="w-full max-w-6xl mx-auto">
          {/* --- HEADER --- */}
          <AnimatedCard delay={100}>
            <header className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 pb-2">
                Exclusive Student Events
              </h2>
              <p className="text-lg text-slate-600 mt-2">
                An opportunity for CCGS Students to learn and innovate.
              </p>
            </header>
          </AnimatedCard>

          {/* --- TOP ROW CONTENT GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start mb-8">
            
            {/* --- MAIN EVENT CARD --- */}
            <div className="lg:col-span-3">
              <AnimatedCard delay={200}>
                <div className="bg-white/70 rounded-2xl shadow-2xl shadow-indigo-500/10 backdrop-blur-sm border border-slate-200 overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <span className="inline-block bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      MAIN EVENT
                    </span>
                    <h3 className="text-3xl font-bold mb-1 text-slate-900">CCWS Summit</h3>
                    <p className="text-lg text-indigo-600 font-medium mb-6">Feat. Ankur Warikoo & Arjun Vaidya</p>
                    
                    <div className="space-y-4 text-slate-600 mb-6">
                      <div className="flex items-center gap-4">
                        <CalendarIcon />
                        <span className="font-semibold text-lg">8th November</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <UsersIcon />
                        <span>Grades: 5th – 12th (CCGS Students Only)</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-slate-200">
                      <h4 className="font-semibold text-lg text-slate-800 mb-3">Bundle Includes:</h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-600">
                        <li>Session with <span className="font-bold text-amber-600">Ankur Warikoo</span></li>
                        <li>Warikoo's Latest Book (<span className="text-green-600">VALUE!</span>)</li>
                        <li>Session with <span className="font-bold text-amber-600">Arjun Vaidya (VC)</span></li>
                        <li>Interaction with 2 Onsite Content Creators</li>
                      </ul>
                    </div>

                     <div className="flex items-start gap-3 bg-amber-100 text-amber-800 border border-amber-200/50 rounded-lg p-3 text-sm mb-8">
                        <InfoIcon className="w-8 h-8 flex-shrink-0 mt-1" />
                        <p><span className="font-bold">Important:</span> Ankur Warikoo's in-person session is scheduled for December. Your ticket includes access to this separate session.</p>
                     </div>
                    
                  </div>
                  <div className="bg-slate-50 p-6 sm:p-8 border-t border-slate-200">
                    <div className="text-left">
                      <p className="text-slate-500 text-sm">Per Student</p>
                      <p className="text-4xl font-bold text-slate-900">₹1550 <span className="text-lg font-normal text-slate-500">+ GST</span></p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* --- SHARK TANK CARD --- */}
            <div className="lg:col-span-2">
              <AnimatedCard delay={300}>
                <div className="bg-white/70 rounded-2xl shadow-2xl shadow-purple-500/10 backdrop-blur-sm border border-slate-200 h-full flex flex-col">
                  <div className="p-6 sm:p-8 flex-grow">
                    <span className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      ADD-ON EVENT
                    </span>
                    <h3 className="text-3xl font-bold mb-1 text-slate-900">Shark Tank</h3>
                    <p className="text-lg text-purple-600 font-medium mb-6">Startup Pitch Competition</p>
                    
                    <div className="space-y-4 text-slate-600">
                      <div className="flex items-start gap-3">
                        <RocketIcon />
                        <p>Pitch your startup idea in front of VC Arjun Vaidya.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <LightbulbIcon />
                        <p>Gain startup visibility & a boost for your idea.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <UsersIcon />
                        <p>Open to teams from CCWS + CCIS (Max 4 members).</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="bg-green-100 border border-green-200/80 p-3 rounded-lg">
                        <p className="font-bold text-green-800">1 Sponsored Team</p>
                        <p className="text-sm text-green-700">Direct entry to Level 3 via SkilliZee PRO.</p>
                      </div>
                      <div className="bg-slate-100 border border-slate-200 p-3 rounded-lg">
                        <p className="font-bold text-slate-800">Additional Teams</p>
                        <p className="text-sm text-slate-600">₹2000/- per team (Max 3 selected).</p>
                      </div>
                    </div>
                     <div className="flex items-start gap-3 bg-red-100 text-red-800 border border-red-200/50 rounded-lg p-3 text-sm mt-6">
                        <InfoIcon className="w-5 h-5 flex-shrink-0 mt-1" />
                        <p>Please note: No direct funding will be awarded at this event.</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>

          {/* --- SHARK TANK FLOW CARD --- */}
          <AnimatedCard delay={400}>
            <div className="bg-white/70 rounded-2xl shadow-2xl shadow-rose-500/10 backdrop-blur-sm border border-slate-200 overflow-hidden">
              <div className="p-6 sm:p-8">
                <span className="inline-block bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  COMPETITION FLOW
                </span>
                <h3 className="text-3xl font-bold mb-1 text-slate-900">Shark Tank Competition Details</h3>
                <p className="text-lg text-rose-600 font-medium mb-6">Flow for 8th November</p>

                <div className="flex items-start gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <ClipboardListIcon className="w-10 h-10 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-slate-800 mb-1">Objective</h4>
                    <p className="text-slate-600">To foster entrepreneurial thinking among school students by providing them with a platform to present innovative ideas and business models in front of real investors and industry experts.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 border-t border-slate-200 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-slate-800 mb-3">Overview</h4>
                  <dl>
                    <OverviewRow label="Participation Fees" value="₹2,000 per team" />
                    <OverviewRow label="Total Teams" value="Maximum 7 teams" />
                    <OverviewRow label="Sponsored Entry" value="Top team from Ideathon-2" />
                    <OverviewRow label="Team Size" value="Maximum 2 members per team" />
                    <OverviewRow label="Eligibility" value="Grades 7–12" />
                  </dl>
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-lg text-slate-800 mb-3">Round 1: IDEATHON – LEVEL 2</h4>
                    <div className="space-y-3 text-slate-600">
                      <p><span className="font-semibold text-slate-700">Activity:</span> Business Model Presentation</p>
                      <p><span className="font-semibold text-slate-700">Day & Date:</span> Friday, 10th October 2025</p>
                      <p><span className="font-semibold text-slate-700">Format:</span> 5-minute pitch per team</p>
                      <div>
                        <p className="font-semibold text-slate-700 mb-1">Deliverables:</p>
                        <ul className="list-disc list-inside pl-2 space-y-1">
                          <li>Business Plan (PPT)</li>
                          <li>Problem Statement (customer need)</li>
                          <li>Solution</li>
                          <li>Revenue Model</li>
                        </ul>
                      </div>
                      <p className="font-bold text-rose-600 pt-2">Outcome: Top 5 teams advance to the Finals</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-800 mb-3">Final Round: Live Pitch</h4>
                    <div className="space-y-3 text-slate-600">
                      <p><span className="font-semibold text-slate-700">Activity:</span> Startup Pitch in front of Investors</p>
                      <p><span className="font-semibold text-slate-700">Day & Date:</span> Tuesday, 8th November 2025</p>
                      <p><span className="font-semibold text-slate-700">Format:</span> 5-minute pitch per team</p>
                      <div>
                        <p className="font-semibold text-slate-700 mb-1">Judges:</p>
                        <ul className="list-disc list-inside pl-2 space-y-1">
                          <li>Arjun Vaidya (Founder, Dr. Vaidya's, Venture Capitalist, seen on Shark Tank India)</li>
                          <li>Young Indian Association (as an add-on panel)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-700 mb-1">Evaluation Criteria:</p>
                        <ul className="list-disc list-inside pl-2 space-y-1">
                          <li>Uniqueness & Innovation</li>
                          <li>Scalability & Market Fit</li>
                          <li>Business Model Clarity</li>
                          <li>Presentation & Confidence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Event <span className="text-blue-600">Timeline</span>
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-start gap-6 ${
                    event.highlight ? 'bg-yellow-50 p-6 rounded-xl border border-yellow-200' : ''
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Icon */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    event.highlight ? 'bg-yellow-400' : 'bg-blue-600'
                  } text-white shadow-lg`}>
                    <event.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Event Content */}
                  <div className="flex-grow pt-2">
                    <div className={`text-lg font-bold mb-2 ${
                      event.highlight ? 'text-yellow-800' : 'text-gray-900'
                    }`}>
                      {event.time}
                    </div>
                    <div className={`text-lg ${
                      event.highlight ? 'text-yellow-700' : 'text-gray-700'
                    }`}>
                      {event.event}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreatorsHub;
