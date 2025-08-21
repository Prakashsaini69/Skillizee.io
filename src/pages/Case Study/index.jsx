import React from "react";
import CaseStudyTemplate from "./CaseStudyTemplate";
import { caseStudies } from "./caseStudyData";

// Main Case Study Index Component
export default function CaseStudyIndex() {
  // This component demonstrates how to use the CaseStudyTemplate
  // You can pass different caseStudyData to show different case studies
  
  // Example: Show the first case study
  const selectedCaseStudy = caseStudies[0];
  
  return (
    <CaseStudyTemplate caseStudyData={selectedCaseStudy} />
  );
}

// Example of how to create a specific case study page:
// export function StudentSuccessStory() {
//   const caseStudyData = caseStudies.find(cs => cs.slug === "student-success-story-1");
//   return <CaseStudyTemplate caseStudyData={caseStudyData} />;
// }

// export function CorporateTrainingSuccess() {
//   const caseStudyData = caseStudies.find(cs => cs.slug === "corporate-training-success");
//   return <CaseStudyTemplate caseStudyData={caseStudyData} />;
// }
