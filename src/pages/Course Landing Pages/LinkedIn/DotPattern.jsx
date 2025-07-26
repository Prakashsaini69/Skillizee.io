import React from "react";

const DotPattern = ({
  width = 20,
  height = 20,
  cx = 1,
  cy = 1,
  cr = 1,
  className = "",
  style = {},
  ...props
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${width * 20} ${height * 10}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      {Array.from({ length: height * 10 / 2 }).map((_, row) =>
        Array.from({ length: width * 20 / 2 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 2 + cx}
            cy={row * 2 + cy}
            r={cr}
            fill="#dbeafe"
            opacity={0.7}
          />
        ))
      )}
    </svg>
  );
};

export default DotPattern; 