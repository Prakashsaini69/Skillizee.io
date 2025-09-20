import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, DollarSign, BookOpen, Clock, Star, ArrowRight, Sparkles, Lightbulb, Award, Trophy } from "lucide-react";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/animata/hero/hero-section";
import OrbitCarousel from "../../components/animata/orbit-carousel";

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

      {/* Shark Tank Challenge Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🦈 <span className="text-yellow-400">Shark Tank</span> Challenge
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Have a game-changing idea? Pitch it to industry experts and win amazing prizes!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">The Opportunity</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-yellow-400" />
                  <span>Entry Fee: INR 2000/-</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <span>Eligibility: CCWS & CCIS teams</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span>Prize: Pitching to Arjun Vaidya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span>SkilliZee PRO sponsored entry</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">The Process</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-bold text-lg">Round 1: Ideathon</h4>
                  <p className="text-blue-200">Submit your innovative ideas online</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-bold text-lg">Final Round: Live Pitch</h4>
                  <p className="text-blue-200">Present to industry experts on event day</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default CreatorsHub;
