import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Helper: Convert hex color to rgba
function hexToRgba(hex, alpha = 1) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 align-text-bottom">
    <circle cx="10" cy="6" r="4" fill="#888"/>
    <ellipse cx="10" cy="15" rx="7" ry="4" fill="#888"/>
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-text-bottom">
    <path d="M10 2l2.39 4.84L18 7.27l-3.91 3.81L14.18 18 10 15.27 5.82 18l.91-6.92L2 7.27l5.61-.43L10 2z" fill="#FFC107"/>
  </svg>
);

const TiltedCard = ({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '180px',
  imageWidth = '100%',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  displayOverlayContent = false,
  // Overlay content props
  title,
  price,
  rating,
  studentsEnrolled,
  onEnroll,
  originalPrice,
  color = '#FFB300',
  badgeIcon,
  children,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Tilt logic
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    setRotate({ x: rotationX, y: rotationY });
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setOpacity(0);
  };

  // Gradient for the overlay background only
  const overlayGradient = `linear-gradient(to bottom, ${hexToRgba(color, 0.08)} 0%, ${hexToRgba(color, 1)} 100%)`;

  return (
    <figure
      ref={cardRef}
      className="relative w-full h-full flex flex-col items-center justify-start bg-white rounded-[15px] overflow-hidden"
      style={{ height: containerHeight, width: containerWidth, perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Animated badge/icon in top-left if present */}
      {badgeIcon && (
        <div className="absolute top-2 left-2 z-20">
          <img src={badgeIcon} alt="badge" className="w-12 h-12 animate-bounce" />
        </div>
      )}
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden z-30">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}
      <motion.div
        className="w-full h-full flex flex-col bg-white"
        style={{ height: containerHeight, width: imageWidth, ["transformStyle"]: "preserve-3d" }}
        animate={{
          rotateX: isHovered ? rotate.x : 0,
          rotateY: isHovered ? rotate.y : 0,
          scale: isHovered ? scaleOnHover : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100, mass: 2 }}
      >
        {/* Image at the top, not stretched, original aspect ratio, plain white background */}
        <div className="w-full overflow-hidden" style={{ height: imageHeight, background: '#fff' }}>
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
            style={{ display: 'block' }}
          />
        </div>
        {/* Overlay/content in the colored area only */}
        {displayOverlayContent && (
          <div className="flex-1 flex flex-col justify-end">
            <div
              className="p-5 pt-0"
              style={{
                background: overlayGradient,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              <div className="bg-white/80 rounded-xl mt-2 shadow px-4 py-3 flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                  <div className="text-lg font-bold text-gray-900 truncate">
                    {title}
                  </div>
                  <span className="flex items-center gap-1 text-base font-normal text-gray-700">
                    <StarIcon />
                    {rating}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  {/* Enrolled students with user icon */}
                  <span className="flex items-center gap-1">
                    <UserIcon />
                    {studentsEnrolled} Enrolled
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {originalPrice && originalPrice > price && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{originalPrice}
                    </span>
                  )}
                  <span className="text-base font-semibold text-[#00308A]">
                    {price === 0 ? 'Free' : `₹${price}`}
                  </span>
                </div>
                <button
                  onClick={onEnroll}
                  className="mt-2 px-4 py-2 rounded-md bg-black text-white text-sm font-semibold hover:scale-105 transition-transform"
                >
                  Enroll Now
                </button>
              </div>
              {children}
            </div>
          </div>
        )}
      </motion.div>
      {/* Tooltip/cursor tracker */}
      {showTooltip && captionText && (
        <motion.figcaption
          className="pointer-events-none absolute rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] z-[3] hidden sm:block"
          animate={{
            x: mouse.x + 16,
            y: mouse.y + 16,
            opacity: opacity,
            rotate: 0,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 1 }}
          style={{ left: 0, top: 0 }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
};

export default TiltedCard; 