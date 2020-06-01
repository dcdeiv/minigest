const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Paths
const resolvePath = (localPath) => path.resolve(__dirname, localPath);
const paths = {
  src: resolvePath("src"),
  build: resolvePath("static/webclient"),
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
  const pluginsProd = [new CleanWebpackPlugin()];

  return {
    mode:
      argv.mode && argv.mode in ["production", "develpment"]
        ? argv.mode
        : "production",
    entry: path.join(paths.src, "index.js"),
    output: {
      path: paths.build,
      filename: "bundle.js",
      publicPath: "",
    },
    optimization: {
      minimize: false,
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
    devServer: {
      historyApiFallback: true,
    },
    plugins: isModeProd ? pluginsProd : pluginsProd.join(pluginsDev),
  };
}

module.exports = configs;
