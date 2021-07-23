const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "eval",
  cache: {
    type: "filesystem",
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", '.less'],
  },
  output: {
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\//,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(sc|sa)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    port: "3333",
    allowedHosts: ["*"],
    clientLogLevel: "trace",
    host: "0.0.0.0",
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
