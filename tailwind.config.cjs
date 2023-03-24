/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-clap": "#ef5107",
      },
    },
  },
  plugins: [require("daisyui")],
};
