/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1400px",
        },
      },
      boxShadow: {
        button: "0px 6px 0px 3px ",
      },
      colors: {
        primary: "#054D3A",
        secondary: "#051418",
      },
    },
  },
  plugins: [],
};
