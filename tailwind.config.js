module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      height: {
        header: "70px",
      },
      colors: {
        white: "#ffffff",
        black: "#333333",
        blue: {
          400: "#1E659C",
          300: "#E0EBF4",
          200: "#F0F5FB",
        },
        yellow: {
          400: "#F9B835",
          300: "#FFD786",
        },
        gray: {
          500: "#828282",
          400: "#BDBDBD",
          300: "#E7E7E7",
          200: "#F9F9F9",
        },
      },
      boxShadow: {
        header: "0px 5px 10px rgba(0, 0, 0, 0.1)",
        btn: "3px 3px 10px rgba(0, 0, 0, 0.2)",
        card: "0px 4px 8px rgba(0, 0, 0, 0.06)",
        busCircle: "0px 0px 4px #005DC0",
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
