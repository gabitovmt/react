const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './sources/chapter-02-02/index.js',
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: './index.html',
      template: path.resolve(__dirname, '../sources/chapter-02-02/index.html')
    }),
    new ESLintWebpackPlugin({
      extensions: ['js', 'ts'],
      exclude: 'node_modules',
      fix: true,
      emitError: false,
      emitWarning: false,
      failOnWarning: false,
      failOnError: false
    })
  ],
};
