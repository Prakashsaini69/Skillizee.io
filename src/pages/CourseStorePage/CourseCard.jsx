import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 border border-[#00308A]/10 rounded-2xl shadow-lg overflow-hidden min-h-[340px] flex flex-col transition-shadow duration-200 hover:shadow-2xl dark:bg-gray-900">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover"
      />
      <div className="flex-1 flex flex-col justify-between p-5">
        <div>
          <h3 className="text-lg font-bold mb-2 text-[#00308A] drop-shadow-sm">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-2 dark:text-gray-300">{course.description}</p>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>{course.rating} <span className="text-[#FFD700]">★</span> (Avg. Rating)</span>
            <span>{course.enrolledStudents || course.enrolled || course.totalEnrolled} Enrolled</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-[#00308A] text-lg">₹{course.price}</span>
          {course.originalPrice && (
            <span className="text-gray-400 text-sm line-through">₹{course.originalPrice}</span>
          )}
        </div>
      </div>
      <div className="p-5 pt-0">
        <button
          className="w-full bg-[#00308A] text-white font-bold rounded-xl py-2 transition hover:bg-[#FFD700] hover:text-[#00308A] focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2"
        >
          Explore
        </button>
      </div>
    </div>
  );
} 