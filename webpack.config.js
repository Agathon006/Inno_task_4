"use strict";

let path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
  },
  watch: false,

  devtool: "source-map",

  devServer: {
    static: "./",
  },

  module: {},
};
