module.exports = {
  purge: {
    mode: "all",
    content: [
      "./src/**/*.js",
      "./src/**/*.njk",
      "./src/**/*.liquid",
      "./src/**/*.ts",
      "./src/**/*.css",
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
    extend: {
      gap: {
        5: "1.4rem",
      },
      textOpacity: {
        80: "0.80",
      },
      backgroundOpacity: {
        95: "0.95",
      },
    },
  },
};
