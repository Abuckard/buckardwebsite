import colors from "./colorTest.tsx"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        container: colors.container,
        darkPurple: colors.darkPurple,
        lightPurple: colors.lightPurple,
        fifaText: colors.fifaText,
        black: colors.black,
        white: colors.white,
        medium: colors.medium,
        light: colors.light,
        dark: colors.dark,
        danger: colors.danger,
        darkLight: colors.darkLight,
      },
    },
  },
  plugins: [],
};
