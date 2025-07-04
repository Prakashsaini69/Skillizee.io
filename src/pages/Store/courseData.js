// Centralized course data for all store components
export const courses = [
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    image: `https://source.unsplash.com/400x250/?course,education,${i}`,
    title: `Course Title ${i + 1}`,
    enrolled: 1000 + i * 100,
    rating: 4.5 + (i % 5) * 0.1,
    price: 199 + i * 10,
    link: "#"
  })),
];

export const sbpls = [
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    image: `https://source.unsplash.com/400x250/?project,team,${i}`,
    title: `SBPL Project ${i + 1}`,
    enrolled: 200 + i * 20,
    rating: 4.2 + (i % 5) * 0.1,
    price: 149 + i * 5,
    link: "#"
  })),
];

export const caseStudies = [
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    image: `https://source.unsplash.com/400x250/?case-study,${i}`,
    title: `Case Study ${i + 1}`,
    enrolled: 500 + i * 50,
    rating: 4.3 + (i % 5) * 0.1,
    price: 99 + i * 3,
    link: "#"
  })),
];

export const internships = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App Development Internship",
    enrolled: 1342,
    rating: 4.6,
    price: 449,
    link: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: "Business Analytics Internship",
    enrolled: 987,
    rating: 4.9,
    price: 299,
    link: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "AI Research Internship",
    enrolled: 1200,
    rating: 4.7,
    price: 399,
    link: "#"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Web Development Internship",
    enrolled: 1100,
    rating: 4.5,
    price: 349,
    link: "#"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    title: "Marketing Internship",
    enrolled: 980,
    rating: 4.4,
    price: 299,
    link: "#"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Finance Internship",
    enrolled: 1050,
    rating: 4.8,
    price: 379,
    link: "#"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=400&q=80",
    title: "Graphic Design Internship",
    enrolled: 900,
    rating: 4.3,
    price: 269,
    link: "#"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Content Writing Internship",
    enrolled: 870,
    rating: 4.2,
    price: 259,
    link: "#"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: "HR Internship",
    enrolled: 920,
    rating: 4.5,
    price: 289,
    link: "#"
  },
];

export const memberships = [
  {
    id: 1,
    title: "Basic Plan",
    price: 499,
    originalPrice: 999,
    duration: "1 Month",
    features: ["Access to all courses", "Community support"],
    link: "#",
    popular: false,
  },
  {
    id: 2,
    title: "Pro Plan",
    price: 1299,
    originalPrice: 1999,
    duration: "6 Months",
    features: ["Access to all courses", "1:1 Mentorship", "Exclusive webinars"],
    link: "#",
    popular: true,
  },
  {
    id: 3,
    title: "Elite Plan",
    price: 1999,
    originalPrice: 2999,
    duration: "12 Months",
    features: ["All Pro features", "Career counseling", "Certificate"],
    link: "#",
    popular: false,
  },
]; 