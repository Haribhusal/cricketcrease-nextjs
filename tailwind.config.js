/** @type {import('tailwindcss').Config} */
// /** @type {import('@tailwindcss/typography').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
    },
  },
  // plugins: [require("@tailwindcss/typography")],

  darkMode: "class",

  variants: {},
};
