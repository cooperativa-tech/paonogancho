const glob = require("glob");

module.exports = {
  mount: {
    _output: "/",
    static: "/",
    assets: "/assets",
  },
  plugins: [
    "@snowpack/plugin-postcss",
    ["@snowpack/plugin-run-script", { cmd: "eleventy", watch: "$1 --watch" }],
  ],
  devOptions: {
    hmrDelay: 300,
    open: "none",
  },
  optimize: {
    entrypoints: glob.sync(__dirname + "/_output/**/*.html"),
    bundle: true,
    minify: true,
    target: "es2017",
  },
};
