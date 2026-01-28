/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint-green': '#D1F5E9',
        'soft-peach': '#FDE6D2',
        'slate-blue': '#334155',
        'muted-slate': '#64748B',
        'glass-white': 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '24px',
      },
      letterSpacing: {
        'tighter': '-0.02em',
      },
    },
  },
  plugins: [],
}
