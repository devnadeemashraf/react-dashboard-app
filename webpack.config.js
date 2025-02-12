const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

      /**
       * Here the rule is defined only for the CSS Modules to work with .scss extension
       */
      {
        test: /\.module\.scss$/, // Targets only *.module.scss files
        use: [
          "style-loader", // MiniCssExtractPlugin.loader for Production
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]", // Custom naming convention for CSS Modules
              },
            },
          },
          "sass-loader",
        ],
      },

      /**
       * This rule is defined to handle the scss files. It uses the sass-loader, css-loader, and style-loader to load the scss file.
       */
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  /**
   * This Object is used to define the plugins that webpack should use. It supports an array of plugins. The different Plugins supported are as follows:
   * 1. HtmlWebpackPlugin: This plugin is used to generate an HTML file that includes the script tag to include the bundle.js file.
   * 2. MiniCssExtractPlugin: This plugin is used to extract the CSS into a separate file. This is used to avoid the flash of unstyled content.
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  /**
   * This Object is used to define the extensions that webpack should resolve. This is used to avoid specifying the extension of the file while importing the file.
   */
  resolve: {
    alias: {
      /**
       * This is used to define the alias for the path. This is used to avoid the relative path while importing the file.
       * Example: import Button from "../../components/ui/button"; can be written as import Button from "@/components/ui/button";
       */
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".json"],
  },
};
