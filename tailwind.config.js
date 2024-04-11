/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary":"#6B3CC9",
      "secondary-color":"#F28D35",
      "analogous-1":"#6A44F2",
      "analogous-2":"#1CBDDD",
      "triadic-1":"#52378C",
      "dark":"#78BF91",
      "text":"#2F2F2F",
      "text-light":"#545A75",
      "text-subtle":"#9C9991",
      "accent-white":"#E2F2FE",
      "accent-yarn":"#FFF8E0",
      "error":"#FF0335",
      "success":"#5EB30B"
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

