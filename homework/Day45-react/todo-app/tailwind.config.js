/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (_) => ({
        "custom-background":
          'url("./src/assets/pexels-catiamatos-1072179.jpg")',
      }),
    },
  },
  plugins: [],
};
