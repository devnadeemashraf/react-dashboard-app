const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  /**
   * This Object is used to define the devServer configuration. The different configurations supported are as follows:  port, static, hot.
   */
  devServer: {
    port: 3000,
    static: "./dist", // Folder to serve the files from (default is dist)
    hot: true,
  },
  /**
   * This Object is used to define the rules for the webpack to follow when it encounters a file with a specific extension.
   * */
  module: {
    rules: [
      /**
       * Here it is defined that when webpack encounters a file with the extension .js or .jsx, it should use the babel-loader to transpile the code, excluding the node_modules folder.
       */
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      /**
       * Here it is defined that when webpack encounters a file with the extension .css, it should use the css-loader and style-loader to load the css file.
       */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  /**
   * This Object is used to define the plugins that webpack should use. It supports an array of plugins. The different Plugins supported are as follows:
   * 1. HtmlWebpackPlugin: This plugin is used to generate an HTML file that includes the script tag to include the bundle.js file.
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  /**
   * This Object is used to define the extensions that webpack should resolve. This is used to avoid specifying the extension of the file while importing the file.
   */
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
