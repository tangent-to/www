import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // One accent. "tangent" = a line touching a curve. A precise, scientific teal.
        tangent: {
          50: "#effdf9",
          100: "#cdf9ec",
          300: "#5fe3c4",
          400: "#28c9a8",
          500: "#0fae8f",
          600: "#048b74",
          700: "#076e5e",
          800: "#0a574c",
          900: "#0c483f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
