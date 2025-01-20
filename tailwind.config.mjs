import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primaryDark: {
          DEFAULT: "#1f2024"
        },
        primaryLight: {
          DEFAULT: "#f8f8f8"
        },
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
