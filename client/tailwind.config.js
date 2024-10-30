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
      },
    },
  },
  plugins: [],
};
