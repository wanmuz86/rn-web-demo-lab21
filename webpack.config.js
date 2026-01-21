const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // this is where we define the entry point
  entry: "./web/index.js",
  devServer: { port: 8080, historyApiFallback: true },
  // this is resolver for .js and .jsx will be managmend using react-native-web
  resolve: {
    extensions: [".js", ".jsx"],
    alias: { "react-native$": "react-native-web" },
  },
  module: {
    rules: [
      {
        // transpile to js using babel
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname)],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    // this is the plugin to run our html file
    new HtmlWebpackPlugin({ template: "./web/index.html" }),
  ],
};
