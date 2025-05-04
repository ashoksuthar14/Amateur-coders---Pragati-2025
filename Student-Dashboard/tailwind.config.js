/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0064e0', // Meta blue
        secondary: '#e7f0fd', // Light blue background
        accent: '#0052b1', // Darker blue
        white: '#ffffff',
      },
      backgroundImage: {
        'meta-gradient': 'linear-gradient(135deg, #0064e0 0%, #e7f0fd 100%)',
      },
    },
  },
  plugins: [],
}

