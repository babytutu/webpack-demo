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
    filename: '[name]_[hash:8].dll.js',
    library: '[name]_[hash:8]',
  },
  entry: {
    vendors
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash:8]',
      path: path.join(process.cwd(), 'dll', '[name]-manifest.json'),
    })
  ],
  stats: {
    // Add built modules information
    modules: false,
  }
}