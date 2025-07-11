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
        className="w-full sm:w-[22rem] h-auto rounded-xl p-4 border transition-all flex flex-col items-center"
      >
        <CardItem translateZ={100} className="w-full mb-4">
          <img
            src={image}
            alt="Course Thumbnail"
            className="h-48 w-full object-cover rounded-lg shadow-sm group-hover/card:shadow-lg"
          />
        </CardItem>
        <CardItem translateZ={60} className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </CardItem>
        <CardItem translateZ={40} className="text-sm text-gray-500 mt-1 dark:text-neutral-400">
          {enrolled} students enrolled • ⭐ {rating}
        </CardItem>
        <CardItem translateZ={30} className="text-base font-bold text-black dark:text-white mt-2">
          ₹{price}
        </CardItem>
        <div className="flex justify-end mt-6">
          <CardItem
            translateZ={20}
            as="button"
            onClick={onEnroll}
            className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-semibold hover:scale-105 transition-transform"
          >
            Enroll Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
} 