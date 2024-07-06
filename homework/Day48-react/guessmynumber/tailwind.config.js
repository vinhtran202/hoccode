// tailwind.config.js
module.exports = {
  darkMode: "class", // hoặc 'media' tùy thuộc vào cách bạn muốn kích hoạt dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "sans-serif"],
      },
      width: {
        128: "32px",
        160: "40rem",
      },
    },
  },
  plugins: [],
};
