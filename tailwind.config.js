/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color_primary: "#A02279"
      },
      screens: {
        lg: "952px",
        xs: "480px"
      }
    }
  },
  plugins: []
};
