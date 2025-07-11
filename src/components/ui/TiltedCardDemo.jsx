import React from 'react';
import TiltedCard from './TiltedCard';

const TiltedCardDemo = () => {
  const demoCourse = {
    title: "Advanced React Development",
    image: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752141392/Salty_ppt_SkilliZee_Internship_1_z4lbhp.jpg",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    studentsEnrolled: 5200,
    gradeGroup: "7-12",
    popular: true,
  };

  const handleEnroll = () => {
    console.log('Enrolling in course...');
    // Add your enrollment logic here
  };

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">TiltedCard Component Demo</h2>
      
      {/* Demo 1: Default overlay content */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">1. Default Course Overlay</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[400px]">
            <TiltedCard
              imageSrc={demoCourse.image}
              altText={demoCourse.title}
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="400px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={8}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              title={demoCourse.title}
              price={demoCourse.price}
              originalPrice={demoCourse.originalPrice}
              rating={demoCourse.rating}
              studentsEnrolled={demoCourse.studentsEnrolled}
              gradeGroup={demoCourse.gradeGroup}
              popular={demoCourse.popular}
              onEnroll={handleEnroll}
            />
          </div>
        </div>
      </div>

      {/* Demo 2: Custom overlay content */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">2. Custom Overlay Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[400px]">
            <TiltedCard
              imageSrc={demoCourse.image}
              altText={demoCourse.title}
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="400px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={8}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-[15px] flex flex-col justify-center items-center p-6 text-white">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">{demoCourse.title}</h3>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <span>⭐ {demoCourse.rating}</span>
                    <span>👥 {demoCourse.studentsEnrolled.toLocaleString()}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">₹{demoCourse.price.toLocaleString()}</span>
                      <span className="text-gray-300 line-through">₹{demoCourse.originalPrice.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={handleEnroll}
                      className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </TiltedCard>
          </div>
        </div>
      </div>

      {/* Demo 3: Minimal overlay */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">3. Minimal Overlay</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[400px]">
            <TiltedCard
              imageSrc={demoCourse.image}
              altText={demoCourse.title}
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="400px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={8}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-[15px] flex items-end p-6">
                <div className="w-full">
                  <h3 className="text-white font-bold text-lg mb-2">{demoCourse.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">₹{demoCourse.price.toLocaleString()}</span>
                    <button
                      onClick={handleEnroll}
                      className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            </TiltedCard>
          </div>
        </div>
      </div>

      {/* Demo 4: With tooltip */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">4. With Tooltip</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[400px]">
            <TiltedCard
              imageSrc={demoCourse.image}
              altText={demoCourse.title}
              captionText="Hover to see course details"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="400px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={8}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              title={demoCourse.title}
              price={demoCourse.price}
              rating={demoCourse.rating}
              studentsEnrolled={demoCourse.studentsEnrolled}
              gradeGroup={demoCourse.gradeGroup}
              onEnroll={handleEnroll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiltedCardDemo; 