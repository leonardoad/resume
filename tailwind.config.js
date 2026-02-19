/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        husky: {
          50: "#f4f7ff",
          100: "#e9efff",
          200: "#cfe0ff",
          300: "#9fb9ff",
          400: "#6f8fdc",
          500: "#2c497f",
          600: "#2b4273",
          700: "#2a3c67",
          800: "#28355a",
          900: "#272f4e",
          950: "#262842",
        },
      },
    },
  },
  plugins: [],
};
