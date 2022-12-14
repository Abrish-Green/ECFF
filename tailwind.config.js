/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
   './node_modules/tw-elements/dist/js/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { fontFamily: {
        'robo': ['Roboto Condensed']
      }},
  },
  plugins: [

  ],
}
