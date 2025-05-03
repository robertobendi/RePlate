/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a1124', // deep dark blue
        surface: '#182040',    // lighter blue
        accent: '#2563eb',     // blue from logo
        text: '#f3f4f6',       // light gray
        muted: '#94a3b8',      // muted gray
        card: '#131a2a',       // card background
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        card: '0 4px 32px 0 rgba(20, 30, 60, 0.12)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #182040 0%, #2563eb 100%)',
      },
    },
  },
  plugins: [],
}