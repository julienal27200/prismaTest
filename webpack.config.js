const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }, {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:6].[ext]',
          outputPath: 'img',
          publicpath: 'img',
          emitFile: true,
          esModule: false
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  }
};