module.exports = {
  mount: {
    _output: "/",
    static: "/",
    assets: "/assets",
  },
  plugins: [
    "@snowpack/plugin-postcss",
    ["@snowpack/plugin-run-script", { cmd: "eleventy", watch: "$1 --watch" }],
    "@snowpack/plugin-webpack",
  ],
  devOptions: {
    hmrDelay: 300,
    open: "none",
  },
};
