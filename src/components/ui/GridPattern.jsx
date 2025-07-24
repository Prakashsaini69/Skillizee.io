import React from "react";

const GridPattern = ({ className = "", style = {}, ...props }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1200 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#dbeafe" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="1200" height="400" fill="url(#grid)" />
  </svg>
);

export default GridPattern; 