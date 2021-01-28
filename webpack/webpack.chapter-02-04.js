const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './sources/chapter-02-04/index.js',
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.js(x)?$/, use: ['babel-loader']}
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
      template: path.resolve(__dirname, '../sources/chapter-02-04/index.html')
    }),
    new ESLintWebpackPlugin({
      extensions: ['js', 'ts', 'jsx'],
      exclude: 'node_modules',
      fix: true
    })
  ],
};
