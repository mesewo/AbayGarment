// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'abay-blue': '#1E3A8A',       // Deep blue representing the Nile
        'abay-green': '#065F46',      // Green representing the fertile lands
        'abay-gold': '#B7791F',       // Gold representing Ethiopian heritage
        'nile-light': '#E0F2FE',      // Light blue for backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        ethiopic: ['Abyssinica SIL', 'serif'], // For Amharic text if needed
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/abay-pattern.png')",
        'nile-texture': "url('/src/images/nile-texture.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}