/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "circle-pattern":
          "linear-gradient(59deg,rgba(239,161,143,.44) 27%,rgba(239,161,143,.53) 50%,rgba(98,72,255,.41) 75%)",
      },
      colors: {
        thBlack: "#333",
        thBrick: "#efa18f",
      },
      gridColumn: {
        column2: "grid-column: 2",
      },
    },
  },

  plugins: [],
};
