/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#64B5FF",
        secondary: "#1E2440",
      },
      boxShadow: { bottoms: "0 5px 0 0 rgba(0, 0, 0, 0.15)" },
    },
  },
  plugins: [],
};
