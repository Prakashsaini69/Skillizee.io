# Case Study Template System

This folder contains a reusable template system for creating case study landing pages. The system is designed to allow you to create multiple case studies without coding new pages each time.

## File Structure

```
Case Study/
├── index.jsx                 # Main index component (shows first case study)
├── CaseStudyTemplate.jsx     # Reusable template component
├── caseStudyData.js          # Data file containing all case study content
└── README.md                 # This documentation file
```

## How It Works

1. **CaseStudyTemplate.jsx**: A reusable React component that renders case study content
2. **caseStudyData.js**: Contains all the content for different case studies in a structured format
3. **index.jsx**: Demonstrates how to use the template with different data

## Creating a New Case Study

To create a new case study, simply add a new object to the `caseStudies` array in `caseStudyData.js`:

```javascript
{
  id: "case-study-3",
  slug: "new-case-study",
  title: "Your Case Study Title",
  subtitle: "Brief description of the case study",
  heroImage: "https://your-image-url.com/image.jpg",
  overview: "Detailed overview of the case study...",
  sections: [
    {
      title: "Section Title",
      content: "Section content...",
      type: "text" // or "list" for bullet points
    }
  ],
  metrics: [
    {
      label: "Metric Label",
      value: "Metric Value",
      description: "Metric description"
    }
  ]
}
```

## Data Structure

### Required Fields
- `id`: Unique identifier for the case study
- `slug`: URL-friendly identifier
- `title`: Main heading of the case study
- `subtitle`: Brief description
- `heroImage`: Hero section image URL
- `overview`: Detailed overview text

### Optional Fields
- `sections`: Array of content sections
  - `title`: Section heading
  - `content`: Text content or array of list items
  - `type`: "text" for paragraphs, "list" for bullet points
- `metrics`: Array of key metrics to display
  - `label`: Metric name
  - `value`: Metric value
  - `description`: Brief explanation

## Using the Template

### Basic Usage
```javascript
import CaseStudyTemplate from "./CaseStudyTemplate";
import { getCaseStudyBySlug } from "./caseStudyData";

function MyCaseStudyPage() {
  const caseStudyData = getCaseStudyBySlug("student-success-story-1");
  return <CaseStudyTemplate caseStudyData={caseStudyData} />;
}
```

### With Custom Data
```javascript
const customCaseStudy = {
  title: "Custom Title",
  subtitle: "Custom subtitle",
  // ... other fields
};

return <CaseStudyTemplate caseStudyData={customCaseStudy} />;
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth animations using Framer Motion
- **Dynamic Content**: All content is dynamically populated from data
- **Flexible Layout**: Supports both text and list content types
- **Metrics Display**: Built-in metrics section for key performance indicators
- **Call to Action**: Built-in CTA section for user engagement

## Customization

The template can be easily customized by:
1. Modifying the `CaseStudyTemplate.jsx` component
2. Adding new content types in the sections
3. Changing the styling using Tailwind CSS classes
4. Adding new sections or components as needed

## Adding to Routing

To add case study pages to your app routing, update your main App.jsx:

```javascript
import CaseStudyIndex from "./pages/Case Study";
import { getCaseStudyBySlug } from "./pages/Case Study/caseStudyData";

// In your Routes
<Route path="/case-studies" element={<CaseStudyIndex />} />
<Route path="/case-studies/:slug" element={<CaseStudyPage />} />
```

## Benefits

1. **Reusability**: One template for all case studies
2. **Maintainability**: Easy to update design and layout
3. **Scalability**: Add new case studies without coding
4. **Consistency**: All case studies follow the same design pattern
5. **SEO Friendly**: Structured content for better search engine optimization
