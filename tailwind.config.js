module.exports = {
  purge: {
    mode: "all",
    content: [
      "./{site,assets,static}/**/*.js",
      "./{site,assets,static}/**/*.njk",
      "./{site,assets,static}/**/*.liquid",
      "./{site,assets,static}/**/*.ts",
      "./{site,assets,static}/**/*.css",
    ],
  },
  theme: {
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    screens: {
      sm: { max: "840px" },
    },
    scale: {
      101: "1.01",
    },
    colors: {
      white: "#FFFFFF",
      beige: "#E6DCD4",
      blue: {
        dark: "#1F106B",
        light: "#66DBF5",
      },
      teal: "#67D6C2",
      white: "#FFFFFF",
    },
  },
};
