/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const svgToDataUri = require("mini-svg-data-uri");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {},
    },
    extend: {
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
        19: "repeat(19, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        21: "repeat(21, minmax(0, 1fr))",
        22: "repeat(22, minmax(0, 1fr))",
        23: "repeat(23, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      spacing: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.50rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.50rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.25rem",
        22: "5.50rem",
        23: "5.75rem",
        24: "6rem",
        25: "6.25rem",
        26: "6.50rem",
        27: "6.75rem",
        28: "7rem",
        29: "7.25rem",
        30: "7.50rem",
        31: "7.75rem",
        32: "8rem",
        33: "8.25rem",
        34: "8.50rem",
        35: "8.75rem",
        36: "9rem",
        37: "9.25rem",
        38: "9.50rem",
        39: "9.75rem",
        40: "10rem",
        41: "10.25rem",
        42: "10.50rem",
        43: "10.75rem",
        44: "119.2px",
        45: "11.25rem",
        46: "11.50rem",
        47: "11.75rem",
        48: "12rem",
        49: "12.25rem",
        50: "12.50rem",
        51: "12.75rem",
        52: "13rem",
        53: "13.25rem",
        54: "13.50rem",
        55: "13.75rem",
        56: "14rem",
        57: "14.25rem",
        58: "14.50rem",
        59: "14.75rem",
        60: "15rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#fefefe",
          200: "#fdfdfd",
          300: "#fbfbfb",
          400: "#fafafa",
          500: "#f9f9f9",
          600: "#c7c7c7",
          700: "#959595",
          800: "#646464",
          900: "#323232",
        },
        secondary: {
          100: "#fdf0f4",
          200: "#fce1ea",
          300: "#fad3df",
          400: "#f9c4d5",
          500: "#f7b5ca",
          600: "#c691a2",
          700: "#946d79",
          800: "#634851",
          900: "#312428",
        },
      },
      fontFamily: {
        display: ["Source Serif Pro", "Georgia", "serif"],
        body: ["Synonym", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gray: "box-shadow: 2px 2px 23px -10px #908F8F40",
      },
      screens: {
        xs: "400px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,

    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
/** @type {import('tailwindcss').Config} */

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
