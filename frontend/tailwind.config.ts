import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4640DE",
          light: "#E9EBFD",
          lighter: "#CCCCF5",
        },
        neutral: {
          0: "#FFFFFF",
          10: "#F8F8FD",
          20: "#D6DDEB",
          40: "#A8ADB7",
          60: "#7C8493",
          80: "#515B6F",
          100: "#25324B",
        },
        accent: {
          green: "#56CDAD",
          yellow: "#FFB836",
          red: "#FF6550",
          blue: "#26A4FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-epilogue)", "system-ui", "sans-serif"],
        heading: ["var(--font-clash-display)", "serif"],
        body: ["var(--font-epilogue)", "sans-serif"],
        ui: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        h1: ["72px", { lineHeight: "1.6", fontWeight: "600" }],
        h2: ["48px", { lineHeight: "1.6", fontWeight: "600" }],
        h3: ["32px", { lineHeight: "1.6", fontWeight: "600" }],
        h5: ["20px", { lineHeight: "1.6", fontWeight: "600" }],
        "body-xl": ["20px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.6", fontWeight: "400" }],
        button: ["16px", { lineHeight: "1.6", fontWeight: "700" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "72px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        "full-pill": "80px",
      },
      boxShadow: {
        sm: "0px 2px 4px rgba(192, 192, 192, 0.03)",
        md: "0px 6px 11px rgba(192, 192, 192, 0.04)",
        lg: "0px 14px 23px rgba(192, 192, 192, 0.05)",
        xl: "0px 29px 47px rgba(192, 192, 192, 0.06)",
        "2xl": "0px 79px 128px rgba(192, 192, 192, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
