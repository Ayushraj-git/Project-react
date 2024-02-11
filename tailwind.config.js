/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        fontFamily: {
          protestRiot: ["Protest Riot", "sans-serif"],
          lilitaOne:["Lilita One", "sans-serif"],
        },
      
    },
  },
  plugins: [],
}

