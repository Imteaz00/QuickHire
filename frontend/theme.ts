// QuickHire Theme Configuration
export const theme = {
  colors: {
    // Primary
    primary: {
      main: "#4640DE",
      light: "#E9EBFD",
      lighter: "#CCCCF5",
    },
    // Neutrals
    neutral: {
      0: "#FFFFFF",
      10: "#F8F8FD",
      20: "#D6DDEB",
      40: "#A8ADB7",
      60: "#7C8493",
      80: "#515B6F",
      100: "#25324B",
    },
    // Accents
    accent: {
      green: "#56CDAD",
      yellow: "#FFB836",
      red: "#FF6550",
      blue: "#26A4FF",
    },
    // Additional
    text: "#202430",
    background: "#FFFFFF",
    border: "#D6DDEB",
  },
  typography: {
    fonts: {
      heading: '"Clash Display", serif',
      body: '"Epilogue", sans-serif',
      ui: '"Inter", sans-serif',
    },
    sizes: {
      h1: { size: "72px", weight: 600, lineHeight: "1.1" },
      h2: { size: "48px", weight: 600, lineHeight: "1.1" },
      h3: { size: "32px", weight: 600, lineHeight: "1.2" },
      h5: { size: "20px", weight: 600, lineHeight: "1.2" },
      bodyXL: { size: "20px", weight: 400, lineHeight: "1.6" },
      bodyLg: { size: "18px", weight: 400, lineHeight: "1.6" },
      body: { size: "16px", weight: 400, lineHeight: "1.6" },
      bodySm: { size: "14px", weight: 400, lineHeight: "1.6" },
      button: { size: "16px", weight: 700, lineHeight: "1.6" },
    },
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
    full: "80px", // For pills/badges
  },
  shadows: {
    sm: "0px 2px 4px rgba(192, 192, 192, 0.03)",
    md: "0px 6px 11px rgba(192, 192, 192, 0.04)",
    lg: "0px 14px 23px rgba(192, 192, 192, 0.05)",
    xl: "0px 29px 47px rgba(192, 192, 192, 0.06)",
    "2xl": "0px 79px 128px rgba(192, 192, 192, 0.09)",
  },
} as const;
