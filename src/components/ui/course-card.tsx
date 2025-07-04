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
}

export default function CourseCard({
  image,
  title,
  enrolled,
  rating,
  price,
  onEnroll,
}: CourseCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] h-auto rounded-xl p-4 border transition-all">
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