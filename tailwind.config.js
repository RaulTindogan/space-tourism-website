/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bellefair': ["Bellefair", 'serif'],
        'barlow': ["Barlow Condensed", 'sans-serif']
      },
  
      colors: {
        'grayish': "hsl(0,0%,100%,.25)",
        'headGray': "hsl(0,0%,100%,.5)",
        'parColor': "hsl(231 77% 90%)"
      }
    },
    
  },
  plugins: [],
}