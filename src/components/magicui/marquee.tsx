import React from 'react';
import { cn } from '../../lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  duration?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  className,
  pauseOnHover = false,
  reverse = false,
  duration = '20s'
}) => {
  return (
    <div
      className={cn(
        'flex w-full overflow-hidden',
        className
      )}
    >
      <div
        className={cn(
          'flex animate-marquee gap-4',
          pauseOnHover && 'hover:pause',
          reverse && 'animate-marquee-reverse'
        )}
        style={{
          '--duration': duration,
        } as React.CSSProperties}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
}; 