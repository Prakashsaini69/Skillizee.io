import React from 'react';

interface Testimonial {
  name: string;
  image: string;
  description: string;
}

interface TestimonialProps {
  data: Testimonial[];
}

function TestimonialCard({
  testimonial: { image, name, description },
}: {
  testimonial: Testimonial;
}) {
  return (
    <div
      className="flex h-44 w-96 overflow-hidden rounded-xl border bg-white shadow-lg mx-4"
      key={name}
    >
      <div className="relative h-full w-32 flex-shrink-0 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="px-4 py-2 flex-1">
        <span className="block text-lg font-bold text-gray-900">{name}</span>
        <span className="-mt-1 mb-1 block text-sm font-medium leading-loose text-gray-600">
          GudGum Intern
        </span>
        <span className="block text-sm text-gray-700">{description}</span>
      </div>
    </div>
  );
}

export default function ScrollingTestimonials({ data }: TestimonialProps) {
  return (
    <div className="w-full overflow-hidden">
      {/* First row - left to right */}
      <div className="flex animate-scroll-left mb-4">
        {data.map((testimonial, index) => (
          <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
        ))}
        {data.map((testimonial, index) => (
          <TestimonialCard key={`row1-duplicate-${index}`} testimonial={testimonial} />
        ))}
      </div>

      {/* Second row - right to left */}
      <div className="flex animate-scroll-right mb-4">
        {data.map((testimonial, index) => (
          <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
        ))}
        {data.map((testimonial, index) => (
          <TestimonialCard key={`row2-duplicate-${index}`} testimonial={testimonial} />
        ))}
      </div>

      {/* Third row - left to right */}
      <div className="flex animate-scroll-left">
        {data.map((testimonial, index) => (
          <TestimonialCard key={`row3-${index}`} testimonial={testimonial} />
        ))}
        {data.map((testimonial, index) => (
          <TestimonialCard key={`row3-duplicate-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
} 