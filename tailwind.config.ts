// FILEPATH: /Users/gabrielhubner/Desktop/Coding/Second-hand Projects/pots_n_pans/tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        indie: ["Indie Flower", "Merriweather Sans", "sans"],
      },
      animation: {
        jump: "jump 0.3s",
        falling: "falling 20s linear infinite",
        falling1: "falling1 34s linear infinite",
        falling2: "falling2 42s linear infinite",
        falling3: "falling3 32s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        falling: {
          "0%": {
            transform: "translateY(20px) rotate(0deg)",
            opacity: "0",
            top: "-10%",
          },
          "10%": { opacity: "1" },
          "20%": { transform: "translateY(-375px) rotate(45deg)" },
          "40%": { transform: "translateY(-375px) rotate(90deg)" },
          "60%": { transform: "translateY(375px) rotate(180deg)" },
          "80%": { transform: "translateY(-375px) rotate(180deg)" },
          "100%": {
            transform: "translateY(-450px) rotate(225deg)",
            top: "110%",
          },
        },
        falling1: {
          "0%": {
            transform: "translateY(20px) rotate(0deg)",
            opacity: "0",
            top: "-10%",
          },
          "10%": { opacity: "1" },
          "20%": { transform: "translateY(-375px) rotate(45deg)" },
          "40%": { transform: "translateY(-375px) rotate(90deg)" },
          "60%": { transform: "translateY(375px) rotate(180deg)" },
          "80%": { transform: "translateY(-375px) rotate(180deg)" },
          "100%": {
            transform: "translateY(-450px) rotate(225deg)",
            top: "110%",
          },
        },
        falling2: {
          "0%": {
            transform: "translateY(20px) rotate(0deg)",
            opacity: "0",
            top: "-10%",
          },
          "10%": { opacity: "1" },
          "20%": { transform: "translateY(-375px) rotate(45deg)" },
          "40%": { transform: "translateY(-375px) rotate(90deg)" },
          "60%": { transform: "translateY(375px) rotate(180deg)" },
          "80%": { transform: "translateY(-375px) rotate(180deg)" },
          "100%": {
            transform: "translateY(-450px) rotate(225deg)",
            top: "110%",
          },
        },
        falling3: {
          "0%": {
            transform: "translateY(20px) rotate(0deg)",
            opacity: "0",
            top: "-10%",
          },
          "10%": { opacity: "1" },
          "20%": { transform: "translateY(-375px) rotate(45deg)" },
          "40%": { transform: "translateY(-375px) rotate(90deg)" },
          "60%": { transform: "translateY(375px) rotate(180deg)" },
          "80%": { transform: "translateY(-37px) rotate(180deg)" },
          "100%": {
            transform: "translateY(-450px) rotate(225deg)",
            top: "110%",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
    variants: {
      extend: {
        animation: ["hover"],
      },
    },
    plugins: [],
  },
};

export default config;
