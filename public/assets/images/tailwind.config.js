/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#ddd7d0",
        ash: "#f9f9f9",
      },
      fontFamily: {
        noto: "Noto Sans, sans-serif",
        notoSherif: "Noto Serif Ahom, serif",
      },
      height: {
        assemblyVid: "550px",
        grid: "450px",
      },
    },
  },
  plugins: [],
};
