export default {
  theme: {
    extend: {
      colors: {
        primary: "#7b1fa2",
        secondary: "#f3e5f5",
        accent: "#d500f9",
        neutral: "#333333",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: { color: "#7b1fa2", "&:hover": { color: "#4a0072" } },
            h1: { fontWeight: "700" },
            h2: { fontWeight: "600" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
