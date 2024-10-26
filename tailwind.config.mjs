/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-pattern": "url('/images/bg-patterns.svg')",
        "mobile-background-pattern": "url('/images/mobile-bg-patterns.svg')",
        "text-background":
          "linear-gradient(to top, #FFC9F0 50%, transparent 50%)",
        "hero-background":
          "linear-gradient(to top, transparent 15%, #FFC9F0 16%, #FFC9F0 50%, transparent 30%)",
      },
      fontFamily: {
        handlee: ["handlee", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      colors: {
        textColor: "#0C0C0C",
        pinkBg: "#FFC9F0",
        yellowBg: "#FFE68C",
        blueBg: "#9DDCFF",
      },
      dropShadow: {
        pink: "1px 1px 11.2px rgba(0, 0, 0, 0.08)",
        blackButton: "3px 3px 12px rgba(0, 0, 0, 0.12)",
        featurePink: "4.48px 4.48px 11.19px rgba(247, 144, 9, 0.16)",
        featureBlue: "4.48px 4.48px 11.19px rgba(9, 33, 247, 0.16)",
        featureYellow: "4.48px 4.48px 11.19px rgba(229, 193, 65, 0.16)",
      },
    },
  },
  plugins: [],
};
