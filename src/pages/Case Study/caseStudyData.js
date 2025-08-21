// Case Study Data - This file contains all the content for different case studies
// To create a new case study, simply add a new object to this array

export const caseStudies = [
  {
    id: "case-study-1",
    slug: "student-success-story-1",
    title: "Student Success Story: From Beginner to Tech Professional",
    subtitle: "How a 12th-grade student transformed their career prospects through our comprehensive skill development program",
    heroImage: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1755158586/Coming_Soon_3_rudwev.svg",
    overview: "This case study explores the journey of a high school student who participated in our intensive skill development program and successfully transitioned into a promising tech career. Through structured learning, hands-on projects, and mentorship, the student achieved remarkable growth in both technical skills and professional development.",
    sections: [
      {
        title: "Background",
        content: "The student, a 12th-grade graduate with limited technical background, was looking for ways to stand out in the competitive job market. With no prior programming experience, they joined our program seeking to develop practical skills that would make them employable immediately after graduation.",
        type: "text"
      },
      {
        title: "Challenge",
        content: [
          "No prior technical knowledge or programming experience",
          "Limited understanding of industry requirements and job market",
          "Need to develop practical, job-ready skills within a short timeframe",
          "Competition from experienced candidates in the job market"
        ],
        type: "list"
      },
      {
        title: "Solution",
        content: "Our comprehensive program provided structured learning modules covering essential technical skills, real-world project experience, industry mentorship, and career guidance. The student participated in hands-on workshops, built portfolio projects, and received personalized coaching throughout their journey.",
        type: "text"
      },
      {
        title: "Results",
        content: [
          "Successfully learned multiple programming languages and frameworks",
          "Built a portfolio of 5+ real-world projects",
          "Secured an internship position within 3 months of program completion",
          "Developed strong problem-solving and communication skills",
          "Gained confidence and professional network in the tech industry"
        ],
        type: "list"
      }
    ],
    metrics: [
      { 
        label: "Skills Acquired", 
        value: "15+", 
        description: "Technical and soft skills developed" 
      },
      { 
        label: "Projects Completed", 
        value: "5+", 
        description: "Portfolio projects built" 
      },
      { 
        label: "Employment Rate", 
        value: "100%", 
        description: "Successfully placed in tech role" 
      }
    ]
  },
  
  {
    id: "case-study-2",
    slug: "corporate-training-success",
    title: "Corporate Training Success: Upskilling 100+ Employees",
    subtitle: "How we helped a mid-sized company transform their workforce through targeted skill development",
    heroImage: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1755158586/Coming_Soon_3_rudwev.svg",
    overview: "This case study demonstrates our approach to corporate training, where we successfully upskilled over 100 employees across different departments. The program focused on practical, job-relevant skills that immediately improved productivity and employee satisfaction.",
    sections: [
      {
        title: "Background",
        content: "A growing mid-sized company was facing challenges with employee skill gaps, particularly in digital tools and modern workplace practices. They needed a comprehensive training solution that could be customized for different roles and skill levels.",
        type: "text"
      },
      {
        title: "Challenge",
        content: [
          "Diverse skill levels across 100+ employees",
          "Different training needs for various departments",
          "Limited time for training without affecting productivity",
          "Need for measurable skill improvement outcomes"
        ],
        type: "list"
      },
      {
        title: "Solution",
        content: "We designed a modular training program with role-specific tracks, flexible learning schedules, and hands-on workshops. The program included pre-assessment, customized learning paths, practical exercises, and post-training evaluation to ensure measurable results.",
        type: "text"
      },
      {
        title: "Results",
        content: [
          "100% employee participation in training programs",
          "Average skill improvement of 40% across all participants",
          "Increased productivity by 25% within 3 months",
          "Improved employee satisfaction scores by 35%",
          "Reduced onboarding time for new technologies by 50%"
        ],
        type: "list"
      }
    ],
    metrics: [
      { 
        label: "Employees Trained", 
        value: "100+", 
        description: "Across all departments" 
      },
      { 
        label: "Skill Improvement", 
        value: "40%", 
        description: "Average improvement rate" 
      },
      { 
        label: "Productivity Gain", 
        value: "25%", 
        description: "Overall productivity increase" 
      }
    ]
  }
];

// Helper function to get case study by slug
export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
};

// Helper function to get all case studies
export const getAllCaseStudies = () => {
  return caseStudies;
};

// Helper function to get case study by ID
export const getCaseStudyById = (id) => {
  return caseStudies.find(caseStudy => caseStudy.id === id);
};
