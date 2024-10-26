const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Add required plugins here if needed
    plugin(function({ addUtilities, e, theme, variants }) {
      // Custom utilities can be added here if required
    }),
  ],
};