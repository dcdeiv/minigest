const path = require("path");

const resolvePath = (localPath) => path.resolve(__dirname, localPath);

module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    alias: {
      "~": resolvePath("src"),
    },
  },
};
