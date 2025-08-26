// Test script for A/B testing functionality
// A/B Testing function to determine course ID based on distribution
const getCourseIdForEnrollment = (courseSlug, courseIdA, courseIdB) => {
  // Generate random number between 0 and 1
  const random = Math.random();
  
  // 80% chance for CourseID A, 20% chance for CourseID B
  if (random < 0.8) {
    console.log(`🎯 A/B Test: User assigned to CourseID A (80% group): ${courseIdA}`);
    return courseIdA;
  } else {
    console.log(`🎯 A/B Test: User assigned to CourseID B (20% group): ${courseIdB}`);
    return courseIdB;
  }
};

// Test A/B testing distribution
console.log('🧪 Testing A/B Testing Distribution...\n');

const testCourse = {
  idA: '688093b21e8aec5c3378ca92',
  idB: '68abf3833a374a37e2bcc994'
};

const results = {
  courseA: 0,
  courseB: 0,
  total: 1000
};

console.log('Running 1000 enrollment tests...\n');

for (let i = 0; i < results.total; i++) {
  const selectedCourseId = getCourseIdForEnrollment('gudgum', testCourse.idA, testCourse.idB);
  
  if (selectedCourseId === testCourse.idA) {
    results.courseA++;
  } else {
    results.courseB++;
  }
}

console.log('📊 A/B Testing Results:');
console.log(`Course A (80% target): ${results.courseA} enrollments (${(results.courseA/results.total*100).toFixed(1)}%)`);
console.log(`Course B (20% target): ${results.courseB} enrollments (${(results.courseB/results.total*100).toFixed(1)}%)`);
console.log(`Total: ${results.total} enrollments`);

// Calculate deviation from target
const targetA = 0.8;
const targetB = 0.2;
const actualA = results.courseA / results.total;
const actualB = results.courseB / results.total;

console.log('\n📈 Distribution Analysis:');
console.log(`Target Course A: ${(targetA*100).toFixed(1)}% | Actual: ${(actualA*100).toFixed(1)}% | Deviation: ${((actualA-targetA)*100).toFixed(1)}%`);
console.log(`Target Course B: ${(targetB*100).toFixed(1)}% | Actual: ${(actualB*100).toFixed(1)}% | Deviation: ${((actualB-targetB)*100).toFixed(1)}%`);

// Check if distribution is within acceptable range (±5%)
const acceptableDeviation = 0.05;
const isAcceptable = Math.abs(actualA - targetA) <= acceptableDeviation && Math.abs(actualB - targetB) <= acceptableDeviation;

console.log(`\n✅ Distribution ${isAcceptable ? 'PASSES' : 'FAILS'} acceptability test (±${(acceptableDeviation*100).toFixed(1)}%)`);
