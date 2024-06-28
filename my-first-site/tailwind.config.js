module.exports = {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this path matches your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite PL"', 'sans-serif'],
        NotoSerif: ['"Noto Serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
