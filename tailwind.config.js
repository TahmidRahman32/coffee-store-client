/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primaryColor: "#331A15",
            btnColor: "#E3B577",
         },
         fontFamily: {
            song: ["Song Myung", "serif"],
            serif: ["Merriweather", "serif"],
         },
         backgroundImage: {
            "hero-pattern": "url('./images/more/2.png')",
            "footer-texture": "url('/img/footer-texture.png')",
         },
      },
   },
   plugins: [require("daisyui")],
};
