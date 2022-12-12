/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans"],
      },
      spacing: {
        35: "35px",
      },
      colors: {
        gray33: "#333",
        orangeff9: "#FF9900",
        orangeff8: "#F85A47",
        gray31:"#31353B"
      },
    },
  },
  plugins: [],
};
