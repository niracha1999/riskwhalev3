module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#D3E0EE",
          200: "#B6CBE2",
          300: "#A7C1DD",
          400: "#89ACD1",
          500: "#618fc1",
          600: "#4F83BA",
          700: "#3F6FA2",
          800: "#284667",
          900: "#17283B",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
