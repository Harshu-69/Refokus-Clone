/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lig: ["font-lig", "sans-serif"],
        md: ["font-md", "sans-serif"],
      },
    },
  },
  plugins: [],
};
