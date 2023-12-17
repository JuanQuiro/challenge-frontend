import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    darkTheme: "acid", // name of one of the included themes for dark mode
    themes: [
      {
        acid: {
          ...require("daisyui/src/theming/themes")["acid"],
          primary: "#53389E",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    nextui(),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
