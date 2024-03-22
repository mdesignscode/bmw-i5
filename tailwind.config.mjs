/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        passionOneBlack: ["PassionOne-Black", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};

export default config;
