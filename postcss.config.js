module.exports = {
  plugins: [
    process.env.NODE_ENV === "production"
      ? require("postcss-import")({
          resolve: (id, basedir, importOptions) => {
            return "src/assets/styles/" + id;
          },
        })
      : null,
    require("postcss-preset-env")({ stage: "0" }),
    process.env.NODE_ENV === "production" ? require("cssnano") : null,
  ].filter((plugin) => !!plugin),
};
