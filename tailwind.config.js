/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        humer: "humer-geometrisans",
        "humer-light": "humer-geometrisans-light",
        "humer-thin": "humer-geometrisans-thin",
        "huumer-bold": "humer-geometrisans-bold",
      },
      colors: {
        "gray-light": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
