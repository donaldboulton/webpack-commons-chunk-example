const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve("dist", "js"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "./js/"
  },
  devtool: "source-map",
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 2,
      children: true
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "bundle-analysis.html"
    })
  ]
};
