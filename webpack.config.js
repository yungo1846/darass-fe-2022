const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

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
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
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
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};