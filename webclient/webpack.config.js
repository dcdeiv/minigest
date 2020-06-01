const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Paths
const resolvePath = (localPath) => path.resolve(__dirname, localPath);
const paths = {
  src: resolvePath("src"),
  build: resolvePath("static/webclient/bundle"),
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
      include: paths.src,
      exclude: /node_modules/,
      enforce: "pre",
      loader: require.resolve("eslint-loader"),
      options: {
        cache: true,
      },
    },
    babel: {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: paths.src,
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
      template: path.join(paths.src, "index.html"),
      filename: "index.html",
    }),
  ];

  // plugins prod
  const pluginsProd = [
    new ManifestPlugin({
      fileName: "asset-manifest.json",
      publicPath: paths.build,
    }),
    new CleanWebpackPlugin(),
  ];

  return {
    mode: isModeProd ? "production" : "development",
    entry: path.join(paths.src, "index.js"),
    output: {
      path: paths.build,
      filename: "main.js",
      publicPath: "",
    },
    optimization: {
      minimize: isModeProd ? true : false,
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "~": paths.src,
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
    devServer: {
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
