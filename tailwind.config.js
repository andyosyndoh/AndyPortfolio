/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F85C70',
        secondary: '#6c757d',
        success: '#A3C14A',
        info: '#47D8E0',
        warning: '#FF8882',
        danger: '#F85C70',
        light: '#f8f9fa',
        dark: '#343a40',
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'heading': ['Dosis', 'sans-serif'],
      },
      fontSize: {
        'responsive-sm': 'calc(13px + (14 - 13) * ((100vw - 300px) / (1300 - 300)))',
        'responsive-title': 'calc(15px + (20 - 15) * ((100vw - 300px) / (1300 - 300)))',
        'header-subtitle': 'calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)))',
        'header-title': 'calc(40px + (120 - 40) * ((100vw - 300px) / (1600 - 300)))',
        'header-mono': 'calc(12px + (19 - 12) * ((100vw - 300px) / (1600 - 300)))',
      },
      backgroundImage: {
        'header-gradient': 'linear-gradient(to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))',
      },
      minHeight: {
        '600': '600px',
      },
      height: {
        '80vh': '80vh',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}