/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'frank': ['Frank Ruhl Libre', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgba(23, 74, 109, 1), rgba(23, 74, 109, 0.8), rgba(23, 74, 109, 0))',
      },
      backgroundColor: {
        'custom-bg': '#f5f5f5'
      },
      boxShadow: {
        'custom': '-50px 50px 0px 0px #264653',
        'custom-mobile': '-30px 30px 0px 0px #264653',
        'custom2': '0px 0px 20px 0px rgba(0,0,0,0.5)',
        'custom3': '0px 0px 20px 0px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'custom-color': '#174a6d',
        'custom-color2': '#7ABCDB',
      },
      height: {
        'custom-height': 'calc(100vh - 56px)',
      },
      filter: {
        'custom-filter': 'invert(1)',
      },
    },
  },
  plugins: [],
}