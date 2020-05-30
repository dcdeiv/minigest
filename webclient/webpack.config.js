const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let configs = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/static/webclient/bundle"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new ManifestPlugin()],
  devServer: {
    publicPath: "/",
    contentBase: [
      path.join(__dirname, "templates/webclient/"),
      path.join(__dirname, "static/webclient/"),
    ],
    hot: true,
  },
};

module.exports = function (env, argv) {
  if (argv === "development") {
    configs.plugins.join([
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "templates/webclient/index.dev.html"),
      }),
    ]);
  }

  return configs;
};
