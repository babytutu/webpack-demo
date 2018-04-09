const webpack = require('webpack')
const path = require('path')

const vendors = [
  'vue',
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
    "vendor": vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(process.cwd(), 'dll', '[name]-manifest.json'),
    })
  ]
}