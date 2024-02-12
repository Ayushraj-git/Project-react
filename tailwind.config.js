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
          playPenSans:["Playpen Sans", "cursive"],
          mPlus:['M PLUS Code Latin', "monospace"],
          notoSans:['Noto Sans', "sans-serif"]
        },
      
    },
  },
  plugins: [],
}

