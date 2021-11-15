module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'smDefault' :'640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
      height: {
        header: "75px",
      },
      margin: {
        header: "75px",
      },
      colors: {
        white: "#ffffff",
        black: "#333333",
        green: {
          default: "#0D706D",
          hover: "#129995",
          disable: "#8AB6B4",
          bg: "#E9F2F2",
        },
        yellow: {
          default: "#F8B714",
          hover: "#FFCA43",
          disable: "#FEF2D5",
          bg: "#FEF2D5",
        },
        red: "#EB5757",
        gray: { default: "#828282", light: "#C8C8C8", lighter: "#EDEDED" },
        blue: "#1a73e8"
      },
      fontFamily: {
        ch: ["Noto Sans TC", "sans-serif"],
        en: ["Oswald", "sans-serif"],
        enNormal: ["Roboto", "sans-serif"],
      },
      letterSpacing: {
        normal: ".05em",
        wide: ".2em",
        wider: ".275em",
        widest: ".475em",
      },
      dropShadow: {
        default: "0px 2px 10px rgba(0, 0, 0, 0.25)",
        deep: "0px 2px 30px rgba(0, 0, 0, 0.3)",
      },
    }
  },
  variants: {
    extend: {
      display: ['hover', 'group-hover'],
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
