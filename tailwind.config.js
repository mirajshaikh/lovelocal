/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "greeting-banner": "url('../public/bg.png')",
    },
    extend: {
      maxWidth: {
        maxContainer: "1440px",
      },
      width: {
        maxContainer: "1440px",
      },
      colors: {
        sidebar: {
          bg: "#1E293B",
          item_bg: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
