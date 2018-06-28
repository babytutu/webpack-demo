const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    }),
    new ExtractCssChunks({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name]-[hash:8].css',
      chunkFilename: '[id]-[hash:8].css',
      hot: false,
    }),
    new OptimizeCssAssetsPlugin(),
    new CopyWebpackPlugin([{
      // copy dll to dist
      from: 'dll/*',
    }])
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.styl$/,
        use: [
          ExtractCssChunks.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: [
              'babel-loader',
              'eslint-loader'
            ],
            css: [
              'vue-style-loader',
              ExtractCssChunks.loader,
              'css-loader',
              'postcss-loader'
            ],
            stylus: [
              'vue-style-loader',
              ExtractCssChunks.loader,
              'css-loader',
              'postcss-loader',
              'stylus-loader'
            ],
          },
        },
      },
    ],
  },
})