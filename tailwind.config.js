/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryBold: ["Bold"],
        primaryBoldItalic: ["Bold-Italic"],
        primaryItalic: ["Italic"]
      }
    },
  },
  plugins: [],
}

