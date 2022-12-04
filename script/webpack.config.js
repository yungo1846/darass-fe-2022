const path = require("path");

const cwd = process.cwd();
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: process.env === "production" ? "production" : "development",
  entry: path.join(cwd, "src/index.ts"),
  output: {
    publicPath: "/",
    path: path.join(cwd, "dist"),
    filename: "embed.js",
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
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
            plugins: ["@emotion/babel-plugin"],
          },
        },
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      "process.env.BUILD_MODE": JSON.stringify(process.env.BUILD_MODE),
      "process.env.DEV_SERVER": JSON.stringify(process.env.DEV_SERVER),
    }),
  ],
  devServer:
    process.env.DEV_SERVER === "STATIC"
      ? {
          port: 5501,
          hot: true,
          static: {
            directory: path.join(__dirname, "dist"),
          },
        }
      : {
          port: 5500,
          hot: true,
        },
};
