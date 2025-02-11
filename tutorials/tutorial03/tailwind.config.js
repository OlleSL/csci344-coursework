/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        "bg-custom-blue": "#00BAFF",
        "bg-custom-purple": "#6336FA",
      },
    },
    fontFamily: {
      Poppins: ["Poppins"],
    },
  },
  plugins: [],
};
