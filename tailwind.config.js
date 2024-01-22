/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": " hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        "active-purple": "hsl(281, 58%, 50%)",
      },
      fontFamily: {
        sans: ["WorkSans", "sans"],
      },
      backgroundImage: {
        "pattern-mobile":
          'url("./src/assets/images/background-pattern-mobile.svg")',
        "pattern-desktop":
          'url("./src/assets/images/background-pattern-desktop.svg")',
      },
    },
  },
  plugins: [],
};
