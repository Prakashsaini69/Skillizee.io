// Centralized course configuration
export const COURSES = {
  gudgum: {
    id: "688093b21e8aec5c3378ca92",
    name: "Gud Gum Internship",
    price: 2999,
    description: "Complete access to all 7 internship modules with lifetime access",
    type: "internship"
  },
  salty: {
    id: "6868db3ecf70c7310edcaee2",
    name: "Salty Internship",
    price: 2999,
    description: "Learn about salt and its applications",
    type: "internship"
  },
  startupSprint: {
    id: "686b892ab27c214b8c9f103d",
    name: "Startup Sprint",
    price: 2999,
    description: "Youngpreneurs in Action",
    type: "internship"
  },
  bundle1: {
    id: "68abf3833a374a37e2bcc994",
    name: "Bundle #1 - Complete Internship Collection",
    price: 1,
    description: "Get access to all 3 internships: Salty, Startup Sprint, and Gud Gum",
    type: "bundle",
    includes: [
      "salty",
      "startupSprint",
      "gudgum"
    ]
  },
  bundle2: {
    id: "bundle2-course-id",
    name: "Bundle #2 - Premium Learning Pack",
    price: 7999,
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

// Helper function to get course by ID
export const getCourseById = (courseId) => {
  return Object.values(COURSES).find(course => course.id === courseId);
};

// Helper function to get course by slug
export const getCourseBySlug = (slug) => {
  return COURSES[slug];
};

// Default course (fallback)
export const DEFAULT_COURSE = COURSES.gudgum;
