/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#090909",
        "primary-blue": "#1B95C5",
        "secondary-blue": "rgba(34, 186, 246, 0.35)",
        "tertiary-blue": "rgba(34, 186, 246, 0.4)",
        "primary-yellow": "#FFFC2D",
        "login-bg": "#D9D9D935",
        "login-bg-hover": "#D9D9D950",
        "text-primary":"#F3F3F390"
      },
      fontFamily: {
        "segoe-script": ['"Segoe Script"', "cursive"], // Added Segoe Script font family
      },
    },
  },
  plugins: [],
};
