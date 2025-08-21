import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/common/Footer";

// Case Study Template Component
export default function CaseStudyTemplate({ 
  caseStudyData = {
    title: "Case Study Title",
    subtitle: "Case study subtitle or brief description",
    heroImage: "https://via.placeholder.com/1200x600/00308A/FFFFFF?text=Case+Study+Hero",
    overview: "This is a template overview that will be replaced with actual case study content.",
    sections: [
      {
        title: "Background",
        content: "Background information about the case study will go here.",
        type: "text"
      },
      {
        title: "Challenge",
        content: "The main challenge or problem that was addressed.",
        type: "text"
      },
      {
        title: "Solution",
        content: "The solution that was implemented to address the challenge.",
        type: "text"
      },
      {
        title: "Results",
        content: "The results and outcomes achieved.",
        type: "text"
      }
    ],
    metrics: [
      { label: "Success Rate", value: "95%", description: "Overall success rate achieved" },
      { label: "Time Saved", value: "40%", description: "Time efficiency improvement" },
      { label: "Cost Reduction", value: "30%", description: "Cost savings realized" }
    ]
  }
}) {
  
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <motion.div 
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={caseStudyData.heroImage} 
              alt={caseStudyData.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
          
          {/* Hero Content */}
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-[#00308A] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {caseStudyData.title}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {caseStudyData.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#00308A] mb-6">
              Overview
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudyData.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      {caseStudyData.metrics && caseStudyData.metrics.length > 0 && (
        <section className="px-4 md:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {caseStudyData.metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00308A] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Dynamic Content Sections */}
      {caseStudyData.sections && caseStudyData.sections.length > 0 && (
        <section className="px-4 md:px-8 pb-16">
          <div className="max-w-6xl mx-auto space-y-8">
            {caseStudyData.sections.map((section, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#00308A] mb-4">
                  {section.title}
                </h3>
                <div className="text-gray-600 leading-relaxed">
                  {section.type === 'text' && (
                    <p className="text-lg">{section.content}</p>
                  )}
                  {section.type === 'list' && (
                    <ul className="list-disc list-inside space-y-2 text-lg">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-[#00308A] to-[#1e40af] rounded-2xl shadow-lg p-8 md:p-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students who have transformed their skills with our programs.
            </p>
            <button className="bg-white text-[#00308A] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Explore Our Programs
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
