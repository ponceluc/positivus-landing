/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",
        dark: "#191A23",
        gray: "#292A32",
      },
    },
  },
  plugins: [],
};
