#!/usr/bin/env node

/**
 * Simple A/B Testing Analytics Script (No external dependencies)
 * Tests course ID distribution for any course slug
 * 
 * Usage: node test-ab-testing-simple.js <courseSlug>
 * Example: node test-ab-testing-simple.js bundle2
 */

const https = require('https');
const http = require('http');

// Configuration
const API_BASE_URL = 'wchz1q3gvg.execute-api.us-east-1.amazonaws.com';
const API_PATH = '/dev/api/get-enrollment-course-id';
const TEST_COUNT = 100;
const COURSE_SLUG = process.argv[2] || 'bundle2';

// Course mapping for reference
const COURSE_REFERENCE = {
  'gudgum': {
    idA: '688093b21e8aec5c3378ca92',
    idB: '68abf3833a374a37e2bcc994',
    name: 'Gud Gum Internship'
  },
  'salty': {
    idA: '6868db3ecf70c7310edcaee2',
    idB: '68abf3833a374a37e2bcc995',
    name: 'Salty Internship'
  },
  'startupSprint': {
    idA: '686b892ab27c214b8c9f103d',
    idB: '68abf3833a374a37e2bcc996',
    name: 'Startup Sprint'
  },
  'bundle1': {
    idA: '68abf3833a374a37e2bcc994',
    idB: '68a300f07020a54adec685da',
    name: 'Bundle #1 - Complete Internship Collection'
  },
  'bundle2': {
    idA: '68ac4ad033717965a02676fb',
    idB: '6853c2dc37696a15d3213656',
    name: 'Bundle #2 - Premium Learning Pack'
  }
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logHeader(message) {
  log('\n' + '='.repeat(60), 'bright');
  log(`  ${message}`, 'bright');
  log('='.repeat(60), 'bright');
}

function logSubHeader(message) {
  log('\n' + '-'.repeat(40), 'cyan');
  log(`  ${message}`, 'cyan');
  log('-'.repeat(40), 'cyan');
}

// Make HTTP request using built-in modules
function makeRequest(courseSlug) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: API_BASE_URL,
      path: `${API_PATH}?courseSlug=${courseSlug}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`Request failed: ${error.message}`));
    });

    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Fetch course ID from backend
async function fetchCourseId(courseSlug, attemptNumber) {
  try {
    const data = await makeRequest(courseSlug);
    
    if (!data.success) {
      throw new Error(data.message || 'API returned error');
    }
    
    return {
      success: true,
      courseId: data.data.courseId,
      courseIdA: data.data.courseIdA,
      courseIdB: data.data.courseIdB,
      distribution: data.data.distribution,
      timestamp: data.data.timestamp
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      attemptNumber
    };
  }
}

// Run A/B testing analytics
async function runABTestingAnalytics() {
  logHeader('🎯 A/B Testing Analytics Script (Simple Version)');
  
  // Validate course slug
  if (!COURSE_REFERENCE[COURSE_SLUG]) {
    log(`❌ Invalid course slug: ${COURSE_SLUG}`, 'red');
    log('Available course slugs:', 'yellow');
    Object.keys(COURSE_REFERENCE).forEach(slug => {
      log(`  - ${slug}: ${COURSE_REFERENCE[slug].name}`, 'yellow');
    });
    process.exit(1);
  }
  
  const courseInfo = COURSE_REFERENCE[COURSE_SLUG];
  
  logSubHeader('📊 Test Configuration');
  log(`Course Slug: ${COURSE_SLUG}`, 'green');
  log(`Course Name: ${courseInfo.name}`, 'green');
  log(`CourseID A: ${courseInfo.idA}`, 'blue');
  log(`CourseID B: ${courseInfo.idB}`, 'blue');
  log(`Test Count: ${TEST_COUNT}`, 'green');
  log(`API Endpoint: https://${API_BASE_URL}${API_PATH}`, 'cyan');
  
  logSubHeader('🚀 Starting A/B Testing Analysis...');
  
  const results = [];
  const startTime = Date.now();
  
  // Run tests
  for (let i = 1; i <= TEST_COUNT; i++) {
    process.stdout.write(`\r🔄 Running test ${i}/${TEST_COUNT}...`);
    
    const result = await fetchCourseId(COURSE_SLUG, i);
    results.push(result);
    
    // Add small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  const endTime = Date.now();
  const totalDuration = endTime - startTime;
  
  log('\n'); // Clear the progress line
  
  // Analyze results
  const successfulResults = results.filter(r => r.success);
  const failedResults = results.filter(r => !r.success);
  
  // Count course ID distribution
  const courseIdCounts = {};
  const distributionCounts = {};
  
  successfulResults.forEach(result => {
    // Count course IDs
    courseIdCounts[result.courseId] = (courseIdCounts[result.courseId] || 0) + 1;
    
    // Count distributions
    distributionCounts[result.distribution] = (distributionCounts[result.distribution] || 0) + 1;
  });
  
  logSubHeader('📈 Test Results Summary');
  log(`Total Tests: ${TEST_COUNT}`, 'bright');
  log(`Successful: ${successfulResults.length}`, 'green');
  log(`Failed: ${failedResults.length}`, 'red');
  log(`Success Rate: ${((successfulResults.length / TEST_COUNT) * 100).toFixed(2)}%`, 'green');
  log(`Total Duration: ${totalDuration}ms`, 'cyan');
  log(`Average Time per Test: ${(totalDuration / TEST_COUNT).toFixed(2)}ms`, 'cyan');
  
  if (failedResults.length > 0) {
    logSubHeader('❌ Failed Tests');
    failedResults.forEach(result => {
      log(`Attempt ${result.attemptNumber}: ${result.error}`, 'red');
    });
  }
  
  logSubHeader('🎲 Course ID Distribution');
  Object.keys(courseIdCounts).forEach(courseId => {
    const count = courseIdCounts[courseId];
    const percentage = ((count / successfulResults.length) * 100).toFixed(2);
    const expectedPercentage = courseId === courseInfo.idA ? '80%' : '20%';
    const status = courseId === courseInfo.idA ? 'A (80%)' : 'B (20%)';
    
    log(`${status}: ${courseId}`, 'blue');
    log(`  Count: ${count}/${successfulResults.length}`, 'cyan');
    log(`  Actual: ${percentage}%`, 'cyan');
    log(`  Expected: ${expectedPercentage}`, 'yellow');
    
    // Check if distribution is close to expected
    const isCloseToExpected = courseId === courseInfo.idA 
      ? Math.abs(percentage - 80) <= 10  // Allow 10% deviation for A
      : Math.abs(percentage - 20) <= 10; // Allow 10% deviation for B
    
    if (isCloseToExpected) {
      log(`  ✅ Distribution is close to expected`, 'green');
    } else {
      log(`  ⚠️ Distribution deviates significantly from expected`, 'yellow');
    }
    log('');
  });
  
  logSubHeader('📊 Distribution Analysis');
  Object.keys(distributionCounts).forEach(distribution => {
    const count = distributionCounts[distribution];
    const percentage = ((count / successfulResults.length) * 100).toFixed(2);
    log(`${distribution}: ${count} (${percentage}%)`, 'magenta');
  });
  
  // Calculate expected vs actual distribution
  const expectedA = Math.round(TEST_COUNT * 0.8);
  const expectedB = Math.round(TEST_COUNT * 0.2);
  const actualA = courseIdCounts[courseInfo.idA] || 0;
  const actualB = courseIdCounts[courseInfo.idB] || 0;
  
  logSubHeader('🎯 Expected vs Actual Distribution');
  log(`Expected A (80%): ${expectedA}`, 'yellow');
  log(`Actual A: ${actualA}`, 'green');
  log(`Deviation A: ${actualA - expectedA} (${((actualA - expectedA) / expectedA * 100).toFixed(2)}%)`, 'cyan');
  
  log(`Expected B (20%): ${expectedB}`, 'yellow');
  log(`Actual B: ${actualB}`, 'green');
  log(`Deviation B: ${actualB - expectedB} (${((actualB - expectedB) / expectedB * 100).toFixed(2)}%)`, 'cyan');
  
  // Overall assessment
  logSubHeader('🏆 Overall Assessment');
  const aDeviation = Math.abs(actualA - expectedA) / expectedA * 100;
  const bDeviation = Math.abs(actualB - expectedB) / expectedB * 100;
  
  if (aDeviation <= 15 && bDeviation <= 15) {
    log('✅ A/B Testing is working correctly! Distribution is close to expected.', 'green');
  } else if (aDeviation <= 25 && bDeviation <= 25) {
    log('⚠️ A/B Testing is working but with moderate deviation from expected.', 'yellow');
  } else {
    log('❌ A/B Testing may have issues. Distribution deviates significantly from expected.', 'red');
  }
  
  logHeader('✨ Analysis Complete!');
}

// Run the analytics
runABTestingAnalytics().catch(error => {
  log(`❌ Script failed: ${error.message}`, 'red');
  process.exit(1);
});
