const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./config/index.html",
});

module.exports = () => {
  return {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "app.js?v=[contenthash]",
    },
    devServer: {
      historyApiFallback: { index: "/" },
      host: "0.0.0.0",
      static: path.join(__dirname, "images"),
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json", ".svg"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: {
            loader: "babel-loader",
          },
          exclude: [/node_modules/],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.scss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                additionalData: (content) => {
                  return "@use 'sass:color'; @import '~/src/styles/styles.scss';" + content;
                },
                sassOptions: {
                  includePaths: ["./src/styles"],
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      usedExports: true,
    },
    plugins: [
      htmlPlugin,
      new ESLintPlugin({
        extensions: ["ts", "tsx"],
        fix: true,
      }),
      new StylelintPlugin({
        extensions: ["scss"],
        fix: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CopyPlugin({
        patterns: [{ from: "./src/assets/images/**", to: "./images/[name][ext]" }],
      }),
    ],
  };
};
