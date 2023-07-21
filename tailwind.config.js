/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueIs: "#2a68ff",
        grey: "#f1f4f8",
        textColor: "#252b36",
      },
    },
  },
  plugins: [],
};
