/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./public/*.{html,js}"];

export const theme = {
  extend: {
    animation: {
      glow: "glow 2s ease infinite alternate",
    },
    backgroundImage: {
      "dark-gradient":
        "url('/public/assets/backgrounds/dark-gradient-background.jpg')",
      "light-gradient":
        "url('/public/assets/backgrounds/light-gradient-background.jpg')",
      "card-image-1": "url('/public/assets/cards/card-1.jpg')",
      "card-image-2": "url('/public/assets/cards/card-2.jpg')",
      "card-image-3": "url('/public/assets/cards/card-3.jpg')",
      "card-image-4": "url('/public/assets/cards/card-4.jpg')",
    },
    colors: {
      "mailer-green": {
        100: "#D7F5E7",
        400: "#09C269",
        800: "#215145",
        900: "#182826",
        950: "#0D1915",
      },
    },
    dropShadow: {
      "mailer-green": "0 0 35px rgba(9, 194, 105, 0.65)",
    },
    fontFamily: {
      inter: ["Inter", ..._fontFamily.sans],
    },
    keyframes: {
      glow: {
        from: {
          filter: "drop-shadow(0 0 35px rgba(9, 194, 105, 0.00))",
        },
        to: {
          filter: "drop-shadow(0 0 35px rgba(9, 194, 105, 0.50))",
        },
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1300px",
      // => @media (min-width: 1300px) { ... }
      "2xl": "1536px",
    },
  },
};
