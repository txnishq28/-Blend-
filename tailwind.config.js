// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#0d0d0d',
          surface: '#1a1a1a',
          text: '#f5f5f5',
        },
      },
    },
  },
  plugins: [],
}
