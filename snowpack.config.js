module.exports = {
  mount: {
    _output: "/",
    src: "/_dist_",
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
