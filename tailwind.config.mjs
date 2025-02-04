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
        neutral: {
          DEFAULT: "#2e2e2e",
          100: "#f3f1f0",
          900: "#1f2024",
        },
        black: {
          DEFAULT: "#1f2024",
        },
        white: {
          DEFAULT: "#f3f1f0",
        },
        secondary: {
          dark: "#CD5153",
          light: "#BE3739",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
