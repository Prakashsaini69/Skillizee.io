#!/usr/bin/env node

/**
 * Course Configuration Management Script
 * 
 * This script helps you update course configurations across the application
 * 
 * Usage:
 * node scripts/update-course-config.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Course configurations
const COURSES = {
  gudgum: {
    id: '688093b21e8aec5c3378ca92',
    name: 'Gud Gum Internship',
    price: 2999,
    description: 'Complete access to all 7 internship modules with lifetime access',
    type: 'internship'
  },
  salty: {
    id: '6868db3ecf70c7310edcaee2',
    name: 'Salty Internship',
    price: 2999,
    description: 'Learn about salt and its applications',
    type: 'internship'
  },
  startupSprint: {
    id: '686b892ab27c214b8c9f103d',
    name: 'Startup Sprint',
    price: 2999,
    description: 'Youngpreneurs in Action',
    type: 'internship'
  },
  
  // Bundle #1
  bundle1: {
    id: 'bundle1-course-id', // Replace with actual Graphy course ID
    name: 'Bundle #1 - Complete Internship Collection',
    price: 4999,
    description: 'Get access to all 3 internships: Salty, Startup Sprint, and Gud Gum',
    type: 'bundle',
    includes: ['salty', 'startupSprint', 'gudgum']
  },
  
  // Bundle #2
  bundle2: {
    id: 'bundle2-course-id', // Replace with actual Graphy course ID
    name: 'Bundle #2 - Premium Learning Pack',
    price: 7999,
    description: 'Complete access to all internships, short courses, and case studies',
    type: 'bundle',
    includes: ['salty', 'startupSprint', 'gudgum', 'shortCourses', 'caseStudies']
  }
};

// Function to update course config file
function updateCourseConfig() {
  const configPath = path.join(__dirname, '../src/config/courses.js');
  
  const configContent = `// Centralized course configuration
export const COURSES = ${JSON.stringify(COURSES, null, 2).replace(/"([^"]+)":/g, '$1:')};

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
`;

  try {
    fs.writeFileSync(configPath, configContent);
    console.log('✅ Course configuration updated successfully!');
    console.log('📁 Updated file:', configPath);
  } catch (error) {
    console.error('❌ Error updating course configuration:', error.message);
  }
}

// Function to display current courses
function displayCourses() {
  console.log('\n📚 Current Course Configuration:');
  console.log('================================');
  
  Object.entries(COURSES).forEach(([slug, course]) => {
    console.log(`\n🎯 ${course.name} (${slug})`);
    console.log(`   ID: ${course.id}`);
    console.log(`   Price: ₹${course.price}`);
    console.log(`   Type: ${course.type}`);
    console.log(`   Description: ${course.description}`);
  });
}

// Function to add new course
function addCourse() {
  import('readline').then(({ default: readline }) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

  console.log('\n➕ Add New Course');
  console.log('==================');

  rl.question('Course slug (e.g., newCourse): ', (slug) => {
    rl.question('Course name: ', (name) => {
      rl.question('Course ID (Graphy): ', (id) => {
        rl.question('Price (in INR): ', (price) => {
          rl.question('Description: ', (description) => {
            rl.question('Type (internship/shortCourse): ', (type) => {
              COURSES[slug] = {
                id,
                name,
                price: parseInt(price),
                description,
                type
              };
              
              console.log('\n✅ Course added successfully!');
              updateCourseConfig();
              rl.close();
            });
          });
        });
      });
    });
  });
  });
}

// Main menu
function showMenu() {
  console.log('\n🎓 Course Configuration Manager');
  console.log('==============================');
  console.log('1. Display current courses');
  console.log('2. Update course configuration');
  console.log('3. Add new course');
  console.log('4. Exit');
  
  import('readline').then(({ default: readline }) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('\nSelect an option (1-4): ', (choice) => {
      switch (choice) {
        case '1':
          displayCourses();
          rl.close();
          break;
        case '2':
          updateCourseConfig();
          rl.close();
          break;
        case '3':
          addCourse();
          break;
        case '4':
          console.log('👋 Goodbye!');
          rl.close();
          break;
        default:
          console.log('❌ Invalid option. Please try again.');
          rl.close();
      }
    });
  });
}

// Run the script
showMenu();

export { COURSES, updateCourseConfig };
