const basePlugins = [require("tailwindcss")];

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    isProd && require("autoprefixer"),
    ...basePlugins,
    isProd && require("cssnano"),
  ].filter((plugin) => !!plugin),
};
