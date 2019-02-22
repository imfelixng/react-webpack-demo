const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'build/'
            }
          },
          "css-loader"
        ],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ]
};

module.exports = config;