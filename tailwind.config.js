/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import scrollbar from "tailwind-scrollbar";
import {nextui}  from "@nextui-org/react";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
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
  theme: {
    extend: {
      colors: {
        "lila": "#53389E",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      width: {
        451: "451px",
      },
    },
    screens: {
      xs: "480px",
      ss: "600px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  
    darkMode: "light",
    plugins: [ daisyui,nextui(), scrollbar({ nocompatible: true })],
};
