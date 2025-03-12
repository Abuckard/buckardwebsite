export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Kontrollera att denna rad finns!
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#121212", // Din anpassade färg
        primary: "#141313",
        secondary: "#C4E132",
        tertiary: "#3226B6",
      },
    },
  },
  plugins: [],
};
