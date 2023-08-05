/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 744px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      screens: {
        "2xs": { min: "240px", max: "359px" },
        // => @media (min-width: 240px) { ... }
        "xs": { min: "360px", max: "639px" },
        // => @media (min-width: 360px) { ... }
      },
    },
  },
  plugins: [],
};
