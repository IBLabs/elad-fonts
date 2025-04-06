import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        emulsi1: ["var(--font-emulsi1)"],
        emulsi2: ["var(--font-emulsi2)"],
        emulsi3: ["var(--font-emulsi3)"],
        emulsi4: ["var(--font-emulsi4)"],
        simplerPro: ["var(--font-simpler-pro)"],
      },
    },
  },
  plugins: [],
};

export default config;
