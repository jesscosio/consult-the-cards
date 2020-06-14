const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                publicPath: './assets',
                esModule: false
            }
            
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    publicPath:  "/dist/",
    contentBase: path.join(__dirname, 'public')
  }
};