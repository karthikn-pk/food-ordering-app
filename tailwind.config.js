/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "240px", max: "567px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        // Add other fonts here...
      },
    },
  },
  plugins: [],
};
