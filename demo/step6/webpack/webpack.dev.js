const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ip = require('ip')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 9000,
    useLocalIp: true,
    host: ip.address(),
    hot: true,
    noInfo: true,
    open: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          { loader: 'stylus-loader', options: { sourceMap: false } },
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: ['babel-loader', 'eslint-loader'],
            css: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader',
            ],
            stylus: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader',
              { loader: 'stylus-loader', options: { sourceMap: false } },
            ],
          },
        },
      },
    ]
  }
})