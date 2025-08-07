"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./3d-card";

export interface CourseCardProps {
  image: string;
  title: string;
  enrolled: number;
  rating: number;
  price: number | string;
  onEnroll?: () => void;
  color?: string; // Add color prop
}

export default function CourseCard({
  image,
  title,
  enrolled,
  rating,
  price,
  onEnroll,
  color,
}: CourseCardProps) {
  // Only use as className if it's a Tailwind class (from-, bg-, to-)
  const isClass = color && (color.startsWith('from-') || color.startsWith('bg-') || color.startsWith('to-'));
  // Use as style if it's a hex or CSS color
  const isStyle = color && !isClass;
  console.log('CourseCard color:', color);
  return (
    <CardContainer className="inter-var">
      <CardBody
        style={{ background: color?.trim() || '#ffb300' }}
        className="w-full h-auto rounded-xl p-3 sm:p-4 border transition-all"
      >
        <CardItem translateZ={100} className="w-full mb-4">
          <img
            src={image}
            alt="Course Thumbnail"
            className="h-40 sm:h-48 w-full object-cover rounded-lg shadow-sm group-hover/card:shadow-lg border-2 border-black"
            style={{ background: 'transparent' }}
          />
        </CardItem>
        <CardItem translateZ={60} className="text-base sm:text-lg font-semibold text-white drop-shadow text-left w-full">
          {title}
        </CardItem>
        <CardItem translateZ={40} className="text-xs sm:text-sm text-white drop-shadow mt-1 text-left w-full">
          {enrolled} students enrolled • ⭐ {rating}
        </CardItem>
        <CardItem translateZ={30} className="text-sm sm:text-base font-bold text-white drop-shadow mt-2 text-left w-full">
          ₹{price}
        </CardItem>
        <div className="flex justify-start mt-4 sm:mt-6 w-full">
          <CardItem
            translateZ={20}
            as="button"
            onClick={onEnroll}
            className="px-3 sm:px-4 py-2 rounded-md bg-black text-white text-xs sm:text-sm font-semibold hover:scale-105 transition-transform w-full text-left"
          >
            <span className="w-full block text-center">Enroll Now</span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
} 