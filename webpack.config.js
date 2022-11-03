const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const cwd = process.cwd();

module.exports = {
  mode: process.env === "production" ? "production" : "development",
  entry: path.join(cwd, "src/index.tsx"),
  output: {
    publicPath: "/",
    path: path.join(cwd, "dist"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    alias: { src: path.resolve(__dirname, "./src") },
    extensions: [".js", ".cjs", ".mjs", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                { runtime: "automatic", importSource: "@emotion/react" },
              ],
              "@babel/preset-typescript",
            ],
            plugins: ["@emotion/babel-plugin"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new Dotenv(),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
};
