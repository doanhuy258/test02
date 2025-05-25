/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Neutral-Silver": "#f5f7fa",
        "Neutral-Grey": "#717171",
        "Brand-Primary": "#4caf4f",
        "Neutral-White": "#fff",
        "Neutral-D-Grey": "#4d4d4d",
        "Tint-T5": "#e8f5e9",
        "Text-Gray-900": "#18191f",
        "Default-White": "#fff",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
