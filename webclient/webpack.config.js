const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Paths
const resolvePath = (localPaths) => {
  const paths = Array.isArray(localPaths) ? localPaths.join("/") : localPaths;
  return path.resolve(__dirname, paths);
};
const paths = {
  src: "src",
  build: "static/webclient/bundle",
};

// Configs
function configs(env, argv) {
  function isMode(mode) {
    const envmode = "mode" in argv ? argv.mode : "production";
    return mode === envmode;
  }

  const isModeProd = isMode("production");
  const isModeDev = isMode("development");

  // module rules
  const moduleRules = {
    eslint: {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: resolvePath(paths.src),
      exclude: /node_modules/,
      enforce: "pre",
      loader: require.resolve("eslint-loader"),
      options: {
        cache: true,
      },
    },
    babel: {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: resolvePath(paths.src),
      loader: require.resolve("babel-loader"),
      options: {
        cacheDirectory: true,
        cacheCompression: false,
        compact: isModeProd ? true : false,
      },
    },
    html: {
      test: /\.html$/,
      use: [
        {
          loader: require.resolve("html-loader"),
        },
      ],
    },
  };

  // plugins dev
  const pluginsDev = [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolvePath([paths.src, "index.html"]),
      filename: "index.html",
    }),
  ];

  // plugins prod
  const pluginsProd = [
    new ManifestPlugin({
      fileName: "asset-manifest.json",
      publicPath: "/" + paths.build + "/",
    }),
    new CleanWebpackPlugin(),
  ];

  return {
    mode: isModeProd ? "production" : "development",
    entry: { main: resolvePath([paths.src, "index.js"]) },
    output: {
      filename: "[name].js",
      chunkFilename: "[name].chunk.js",
      publicPath: paths.build,
      path: resolvePath(paths.build),
    },
    optimization: {
      minimize: isModeProd ? true : false,
      splitChunks: {
        chunks: "all",
      },
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "~": resolvePath(paths.src),
      },
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        moduleRules.eslint,
        moduleRules.babel,
        isModeDev ? moduleRules.html : {},
      ],
    },
    plugins: isModeProd ? pluginsProd : pluginsProd.concat(pluginsDev),
    devtool: "inline-source-map",
    devServer: {
      port: 9000,
      hot: true,
      compress: true,
      historyApiFallback: {
        disableDotRule: true,
      },
      host: process.env.HOST || "127.0.0.1",
      sockHost: process.env.WDS_SOCKET_HOST,
      sockPath: process.env.WDS_SOCKET_PATH,
      sockPort: process.env.WDS_SOCKET_PORT,
    },
  };
}

module.exports = configs;
