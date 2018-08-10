const webpack = require('webpack')
const path = require('path')

const vendors = [
  'vue',
  'vue-router',
  'vuex'
]

module.exports = {
  mode: 'production',
  context: process.cwd(),
  output: {
    path: path.join(process.cwd(), 'dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },
  entry: {
    vendors
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(process.cwd(), 'dll', '[name]-manifest.json'),
    })
  ],
  stats: {
    // Add built modules information
    modules: false,
  }
}