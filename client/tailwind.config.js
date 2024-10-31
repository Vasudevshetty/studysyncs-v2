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

        "app-primary": "#004c6921",
        "app-secondary": "#03597b40",
        "app-tertiary": "#00456760",
        "primary": "#fff",
        "secondary": "#e5e5e5",
      },
    },
  },
  plugins: [],
};
