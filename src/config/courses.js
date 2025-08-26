// Centralized course configuration with A/B testing support
export const COURSES = {
  gudgum: {
    id: "688093b21e8aec5c3378ca92", // CourseID A (80% of users)
    idB: "68abf3833a374a37e2bcc994", // CourseID B (20% of users)
    name: "Gud Gum Internship",
    price: 2999,
    description: "Complete access to all 7 internship modules with lifetime access",
    type: "internship"
  },
  salty: {
    id: "6868db3ecf70c7310edcaee2", // CourseID A (80% of users)
    idB: "68abf3833a374a37e2bcc995", // CourseID B (20% of users) - Replace with actual ID
    name: "Salty Internship",
    price: 2999,
    description: "Learn about salt and its applications",
    type: "internship"
  },
  startupSprint: {
    id: "686b892ab27c214b8c9f103d", // CourseID A (80% of users)
    idB: "68abf3833a374a37e2bcc996", // CourseID B (20% of users) - Replace with actual ID
    name: "Startup Sprint",
    price: 2999,
    description: "Youngpreneurs in Action",
    type: "internship"
  },
  bundle1: {
    id: "68abf3833a374a37e2bcc994", // CourseID A (80% of users) - Bundle-specific ID
    idB: "68a300f07020a54adec685da", // CourseID B (20% of users) - Alternative bundle ID
    name: "Bundle #1 - Complete Internship Collection",
    price: 2088,
    description: "Get access to all 3 internships: Salty, Startup Sprint, and Gud Gum",
    type: "bundle",
    includes: [
      "salty",
      "startupSprint",
      "gudgum"
    ]
  },
  bundle2: {
    id: "68ac4ad033717965a02676fb", // CourseID A (80% of users)
    idB: "6853c2dc37696a15d3213656", // CourseID B (20% of users) - Replace with actual ID
    name: "Bundle #2 - Premium Learning Pack",
    price: 3009,
    description: "Complete access to all internships, short courses, and case studies",
    type: "bundle",
    includes: [
      "salty",
      "startupSprint",
      "gudgum",
      "shortCourses",
      "caseStudies"
    ]
  }
};

// Helper function to get course by ID (checks both id and idB)
export const getCourseById = (courseId) => {
  return Object.values(COURSES).find(course => 
    course.id === courseId || course.idB === courseId
  );
};

// Helper function to get course by slug
export const getCourseBySlug = (slug) => {
  return COURSES[slug];
};

// A/B Testing function to get courseID based on distribution
export const getCourseIdForEnrollment = (courseSlug) => {
  const course = COURSES[courseSlug];
  if (!course) return null;
  
  // Generate random number between 0 and 1
  const random = Math.random();
  
  // 80% chance for CourseID A, 20% chance for CourseID B
  if (random < 0.8) {
    return course.id; // CourseID A (80% of users)
  } else {
    return course.idB; // CourseID B (20% of users)
  }
};

// Function to get both course IDs for a course
export const getBothCourseIds = (courseSlug) => {
  const course = COURSES[courseSlug];
  if (!course) return { idA: null, idB: null };
  
  return {
    idA: course.id,
    idB: course.idB
  };
};

// Default course (fallback)
export const DEFAULT_COURSE = COURSES.gudgum;
