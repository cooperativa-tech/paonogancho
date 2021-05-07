module.exports = {
  mount: {
    _output: { url: "/", static: true },
    static: { url: "/", static: true },
    assets: "/assets",
  },
  plugins: [
    "@snowpack/plugin-postcss",
    process.env.NODE_ENV === "development" && [
      "@snowpack/plugin-run-script",
      { cmd: "eleventy", watch: "$1 --watch" },
    ],
  ].filter((plugin) => !!plugin),
  devOptions: {
    hmrDelay: 300,
    open: "none",
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2017",
  },
};
