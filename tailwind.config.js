const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  darkMode: "class", // or 'media' or 'class'

  backgroundImage: {
    "profile-pattern":
      "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
    "footer-texture": "url('/img/footer-texture.png')",
  },
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        amber: colors.amber,
        orange: colors.orange,
        sky: colors.sky,
        red: colors.red,
        purple: colors.purple,
        zinc: colors.zinc,
        emerald: colors.emerald,
        blue: colors.blue,
        pink: colors.pink,
      },
    },
    fontFamily: {
      sans: ["Inter Tight", "Mukta", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), require("prettier-plugin-tailwindcss")],
  daisyui: {
    themes: [
      "garden",
      {
        sunset: {
          primary: "#44403c", //stone700
          "primary-content": "#292524", //stone800
          secondary: "#fb923c", //orange4400
          "secondary-content": "#0369a1", //sky700
          accent: "#fcd34d", //amber300
          neutral: "#78716c", //stone500
          "base-100": "#1e40af", //blue800
          info: "#38bdf8", //sky400
          success: "#4ade80", //green400
          warning: "#fb923c", //orange400
          error: "#b91c1c", //red700
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "sunset", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
