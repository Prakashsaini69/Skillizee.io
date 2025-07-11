# TiltedCard Component

A React component that creates an interactive tilted card with 3D hover effects and overlay content, converted from the Vue Bits TiltedCard component.

## Features

- **3D Tilt Effect**: Cards tilt based on mouse position for immersive interaction
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Overlay Content**: Built-in course card overlay with title, price, rating, and enroll button
- **Customizable**: Supports custom overlay content via children prop
- **Responsive**: Works on desktop and mobile (with mobile warning option)
- **Accessible**: Proper ARIA labels and keyboard navigation support

## Installation

The component uses Framer Motion which is already installed in your project.

## Basic Usage

```jsx
import TiltedCard from './components/ui/TiltedCard';

// Basic course card with overlay
<TiltedCard
  imageSrc="https://example.com/course-image.jpg"
  altText="Course Title"
  containerHeight="400px"
  containerWidth="100%"
  imageHeight="400px"
  imageWidth="100%"
  displayOverlayContent={true}
  title="Advanced React Development"
  price={2999}
  rating={4.8}
  studentsEnrolled={5200}
  gradeGroup="7-12"
  onEnroll={() => handleEnroll()}
/>
```

## Props

### Core Props
- `imageSrc` (string, required): URL of the card image
- `altText` (string, optional): Alt text for the image (default: 'Tilted card image')
- `captionText` (string, optional): Text for the tooltip
- `containerHeight` (string, optional): Height of the container (default: '300px')
- `containerWidth` (string, optional): Width of the container (default: '100%')
- `imageHeight` (string, optional): Height of the image (default: '300px')
- `imageWidth` (string, optional): Width of the image (default: '300px')

### Animation Props
- `scaleOnHover` (number, optional): Scale factor on hover (default: 1.1)
- `rotateAmplitude` (number, optional): Rotation intensity (default: 14)
- `showMobileWarning` (boolean, optional): Show mobile warning (default: true)
- `showTooltip` (boolean, optional): Show tooltip (default: true)
- `displayOverlayContent` (boolean, optional): Show built-in overlay (default: false)

### Course-specific Props
- `title` (string, optional): Course title
- `price` (number, optional): Course price
- `originalPrice` (number, optional): Original price for discount display
- `rating` (number, optional): Course rating
- `studentsEnrolled` (number, optional): Number of enrolled students
- `gradeGroup` (string, optional): Target grade group
- `popular` (boolean, optional): Show popular badge (default: false)
- `onEnroll` (function, optional): Enrollment handler

## Usage Examples

### 1. Default Course Overlay

```jsx
<TiltedCard
  imageSrc={course.image}
  altText={course.title}
  containerHeight="400px"
  containerWidth="100%"
  imageHeight="400px"
  imageWidth="100%"
  scaleOnHover={1.05}
  rotateAmplitude={8}
  displayOverlayContent={true}
  title={course.title}
  price={course.price}
  originalPrice={course.originalPrice}
  rating={course.rating}
  studentsEnrolled={course.studentsEnrolled}
  gradeGroup={course.gradeGroup}
  popular={course.popular}
  onEnroll={() => handleEnroll(course)}
/>
```

### 2. Custom Overlay Content

```jsx
<TiltedCard
  imageSrc={course.image}
  altText={course.title}
  containerHeight="400px"
  containerWidth="100%"
  imageHeight="400px"
  imageWidth="100%"
  scaleOnHover={1.05}
  rotateAmplitude={8}
  displayOverlayContent={false}
>
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-[15px] flex flex-col justify-center items-center p-6 text-white">
    <div className="text-center space-y-4">
      <h3 className="text-2xl font-bold">{course.title}</h3>
      <div className="flex items-center justify-center gap-4 text-sm">
        <span>⭐ {course.rating}</span>
        <span>👥 {course.studentsEnrolled.toLocaleString()}</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
          <span className="text-gray-300 line-through">₹{course.originalPrice.toLocaleString()}</span>
        </div>
        <button
          onClick={() => handleEnroll(course)}
          className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</TiltedCard>
```

### 3. Minimal Overlay

```jsx
<TiltedCard
  imageSrc={course.image}
  altText={course.title}
  containerHeight="400px"
  containerWidth="100%"
  imageHeight="400px"
  imageWidth="100%"
  scaleOnHover={1.05}
  rotateAmplitude={8}
  displayOverlayContent={false}
>
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-[15px] flex items-end p-6">
    <div className="w-full">
      <h3 className="text-white font-bold text-lg mb-2">{course.title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-white font-semibold">₹{course.price.toLocaleString()}</span>
        <button
          onClick={() => handleEnroll(course)}
          className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Enroll
        </button>
      </div>
    </div>
  </div>
</TiltedCard>
```

### 4. With Tooltip

```jsx
<TiltedCard
  imageSrc={course.image}
  altText={course.title}
  captionText="Hover to see course details"
  containerHeight="400px"
  containerWidth="100%"
  imageHeight="400px"
  imageWidth="100%"
  scaleOnHover={1.05}
  rotateAmplitude={8}
  showTooltip={true}
  displayOverlayContent={true}
  title={course.title}
  price={course.price}
  rating={course.rating}
  studentsEnrolled={course.studentsEnrolled}
  gradeGroup={course.gradeGroup}
  onEnroll={() => handleEnroll(course)}
/>
```

## Integration with Store Components

The component has been integrated into all store components:

- `StoreCourses.jsx` - Short courses display
- `StoreInternships.jsx` - Internship programs
- `StoreSPBLs.jsx` - SPBL courses
- `StoreCaseStudies.jsx` - Case study materials

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. Modifying the component's internal styles
2. Using the `children` prop for custom overlay content
3. Adjusting the animation parameters via props

## Browser Support

- Modern browsers with CSS 3D transforms support
- Mobile devices (with reduced functionality)
- Graceful degradation for older browsers

## Performance

- Uses `will-change-transform` for optimized animations
- Debounced mouse event handling
- Efficient re-renders with React hooks
- Optimized for 60fps animations 