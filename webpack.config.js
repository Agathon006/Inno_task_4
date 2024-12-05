"use strict";

let path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  watch: false,

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/fonts'), to: 'assets/fonts' },
        { from: path.resolve(__dirname, 'src/assets/images'), to: 'assets/images' },
        { from: path.resolve(__dirname, 'src/assets/icons'), to: 'assets/icons' },
      ],
    }),
  ],
};
