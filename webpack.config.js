const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [{ test: /\.css?$/, use: "css-loader" }],
  },
  plugins: [new htmlPlugin()],
};
