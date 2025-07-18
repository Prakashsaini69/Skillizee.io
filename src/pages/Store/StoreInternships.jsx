import React from "react";
import courseData from "./courseData";
import TiltedCard from "../../components/ui/TiltedCard";

export default function StoreInternships({ gradeGroup }) {
  const internships = gradeGroup && gradeGroup !== 'all'
    ? courseData.internships.filter(c => Array.isArray(c.gradeGroup) ? c.gradeGroup.includes(gradeGroup) : c.gradeGroup === gradeGroup)
    : courseData.internships;

  const handleEnroll = (course) => {
    window.open(course.link, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {internships.map((course) => (
        <div key={course.id} className="h-[400px]">
          <TiltedCard
            imageSrc={course.image}
            altText={course.title}
            containerHeight="400px"
            containerWidth="100%"
            imageHeight="400px"
            imageWidth="100%"
            scaleOnHover={1.05}
            rotateAmplitude={8}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            // Course specific props
            title={course.title}
            price={course.price}
            rating={course.rating}
            studentsEnrolled={course.studentsEnrolled}
            gradeGroup={course.gradeGroup}
            onEnroll={() => handleEnroll(course)}
            color={course.color}
          />
        </div>
      ))}
    </div>
  );
} 