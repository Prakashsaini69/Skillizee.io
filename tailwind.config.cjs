module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      animation: {
        "scroll": "scroll var(--animation-duration, 25s) linear infinite",
        "scroll-reverse": "scroll-reverse var(--animation-duration, 25s) linear infinite",
      }
    },
  },
  plugins: [],
}; 