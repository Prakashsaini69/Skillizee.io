// Shared course configuration for A/B testing
// This ensures consistency between frontend and backend
// IMPORTANT: Keep this in sync with backend/course-config.js

export const SHARED_COURSE_CONFIG = {
  gudgum: {
    idA: '688093b21e8aec5c3378ca92',
    idB: '68abf3833a374a37e2bcc994',
    name: 'Gud Gum Internship',
    price: 2999
  },
  salty: {
    idA: '6868db3ecf70c7310edcaee2',
    idB: '68abf3833a374a37e2bcc995',
    name: 'Salty Internship',
    price: 2999
  },
  startupSprint: {
    idA: '686b892ab27c214b8c9f103d',
    idB: '68abf3833a374a37e2bcc996',
    name: 'Startup Sprint',
    price: 2999
  },
  bundle1: {
    idA: '68abf3833a374a37e2bcc994',
    idB: '68a300f07020a54adec685da',
    name: 'Bundle #1 - Complete Internship Collection',
    price: 2088
  },
  bundle2: {
    idA: '68ac4ad033717965a02676fb',
    idB: '6853c2dc37696a15d3213656',
    name: 'Bundle #2 - Premium Learning Pack',
    price: 1
  }
};

// A/B Testing function to get course ID
export const getSharedCourseIdForEnrollment = (courseSlug) => {
  const course = SHARED_COURSE_CONFIG[courseSlug];
  if (!course) return null;
  
  // 80% chance for CourseID A, 20% chance for CourseID B
  const random = Math.random();
  return random < 0.8 ? course.idA : course.idB;
};

// Get course info by slug
export const getSharedCourseBySlug = (slug) => {
  return SHARED_COURSE_CONFIG[slug];
};

// Get all available course slugs
export const getAvailableSharedCourseSlugs = () => {
  return Object.keys(SHARED_COURSE_CONFIG);
};
