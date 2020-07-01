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
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: '[name].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].bundle.js',
    // `publicPath` is where Webpack will load your bundles from (optional)
    publicPath: 'dist/'
  },
  devServer: {
    publicPath:  "/dist/",
    contentBase: path.join(__dirname, 'public')
  }
};