# Phase One: Setting Up the Project

This document provides a detailed walkthrough of how I set up the project from scratch. I will explain each step I took, along with the reasoning behind it.

> **Heads-up:** This will be a **very** text-heavy document. I might skip minor details to keep it concise and easy to digest while focusing on the essential parts.

---

## Initial Project Setup

### 1. Creating the Project Folder

The first step was to create a new folder for the project. _(This was a crucial step because if the project folder does not exist, the project does not exist)._

```bash
mkdir react-dashboard-app
```

_Of course, I could have used the GUI, but I chose the CLI._

### 2. Navigating to the Project Folder

If you're using a GUI, open the folder manually. Otherwise, use the command line:

```bash
cd react-dashboard-app
```

### 3. Initializing a Node.js Project

To create a `package.json` file, I initialized a Node.js project:

```bash
npm init -y
```

`-y` selects all default configurations. This file holds metadata about the application, including the author, version, scripts, dependencies, dev dependencies, etc.

### 4. Installing Essential Dependencies

Since this documentation reflects my progress day by day, you'll see installations happening in steps. More dependencies will be added as needed later.

#### Installing React

```bash
npm install react react-dom
```

#### Installing Webpack & Dev Dependencies

Next, I installed `webpack`, `webpack-cli`, and `webpack-dev-server` as dev dependencies:

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

- `webpack`: The core Webpack library
- `webpack-cli`: CLI support for Webpack
- `webpack-dev-server`: Enables local development features like hot reloading

I installed these as **dev dependencies** because they are only needed during development and should not be included in the production bundle.

#### Installing Babel for JSX Transpilation

Since browsers do not understand JSX, I installed Babel to transpile the JSX code:

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-react @babel/preset-env
```

- `babel-loader`: Helps Webpack process `.js` and `.jsx` files
- `@babel/core`: The core Babel library
- `@babel/preset-react`: Enables JSX support
- `@babel/preset-env`: Ensures compatibility with modern JavaScript features

This setup prevents us from writing `React.createElement('div', null, 'Hello, world!');` manually, making React development easier.

---

## Webpack Configuration

Next, I created a `webpack.config.js` file in the project's root directory. This file tells Webpack how to bundle the project.

### 1. Initial Webpack Setup

```js
module.exports = {};
```

### 2. Defining Entry Point

This tells Webpack where to start bundling:

```js
module.exports = {
  entry: "./src/index.js",
};
```

### 3. Configuring Output

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

- `path.resolve(__dirname, "dist")`: Ensures the output is placed in a proper directory
- `filename: "bundle.js"`: Defines the bundled file name

### 4. Setting Up Dev Server

```js
module.exports = {
  devServer: {
    port: 3000,
    static: "./dist",
    hot: true,
  },
};
```

### 5. Configuring Loaders

To handle JavaScript and CSS files, I added module rules:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process .js and .jsx files
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

### 6. Adding Plugins & Resolving Extensions

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
```

- `HtmlWebpackPlugin`: Injects the bundled output into `index.html`
- `resolve.extensions`: Allows imports without specifying file extensions

---

## Babel Configuration

I created a `.babelrc` file in the root directory and added:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

This enables Babel to transpile both modern JavaScript and React JSX syntax.

---

## Creating Project Structure

I created the following structure:

```
react-dashboard-app/
├── public/
│   ├── index.html
├── src/
│   ├── index.js
│   ├── App.js
│   ├── styles.css
├── .babelrc
├── webpack.config.js
├── package.json
```

### 1. `index.js`

```js
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

### 2. `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Dashboard Application</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

## Summary

At this stage, the project is set up with:

- A properly structured folder hierarchy
- Webpack and Babel configurations
- Essential dependencies installed
- React and JSX transpilation working

This setup serves as a strong foundation for building the React dashboard application.

> _Next up: Setting up React components and state management._
