"use client";

import React from "react";
import { motion } from "framer-motion";

const CourseTimeline = ({ title, description, timelineData }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start space-x-6"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {item.week}
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* Activities */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Activities:</h4>
                  <ul className="space-y-1">
                    {item.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration and Outcome */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h5 className="font-medium text-blue-900 mb-1">Duration</h5>
                    <p className="text-blue-700">{item.duration}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <h5 className="font-medium text-green-900 mb-1">Outcome</h5>
                    <p className="text-green-700">{item.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTimeline;
