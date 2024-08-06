import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Rotobo: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open-sans", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        mainBlue: "#1b42cd",
        lightBlue: "#F5F8FE",
      },
    },
  },
  plugins: [],
};
export default config;
