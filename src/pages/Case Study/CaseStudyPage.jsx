import React from "react";
import { useParams, Navigate } from "react-router-dom";
import CaseStudyTemplate from "./CaseStudyTemplate";
import { getCaseStudyBySlug } from "./caseStudyData";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const caseStudyData = getCaseStudyBySlug(slug);
  
  // If case study not found, redirect to 404 or main case studies page
  if (!caseStudyData) {
    return <Navigate to="/case-studies" replace />;
  }
  
  return <CaseStudyTemplate caseStudyData={caseStudyData} />;
}
