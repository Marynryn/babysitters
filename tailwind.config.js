/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "375px",
      m: "490px",

      lg: "768px",

      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
