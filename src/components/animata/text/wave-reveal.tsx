import React, { useState, useEffect } from 'react';

interface WaveRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const WaveReveal: React.FC<WaveRevealProps> = ({ 
  text, 
  className = "", 
  delay = 50 
}) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleChars < text.length) {
        setVisibleChars(visibleChars + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleChars, text.length, delay]);

  return (
    <div className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ${
            index < visibleChars 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
          style={{
            transitionDelay: `${index * 50}ms`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default WaveReveal;

