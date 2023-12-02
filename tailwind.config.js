/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "primary": " rgb(240, 240, 240)",
        "secondary": "rgb(251, 250, 250)",
        "app-yellow": "rgb(255, 179, 0)",
        "app-blue": "rgb(39, 71, 116)",
        "app-border":"rgb(157, 157, 157)",
        "selected-btn": "rgb(204, 204, 204)",
      },
      screens:{
        'sm': '410px'
      }
    },
  },
  plugins: [],
}
