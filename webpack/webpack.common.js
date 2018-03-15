const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let favicon = path.join(process.cwd(), 'favicon.ico')

if (!require('fs').existsSync(favicon)) {
  favicon = undefined
  console.info('missing favicon')
}

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon,
      title: 'webpack-demo',
      template: path.join(process.cwd(), 'index.template.ejs'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      }
    ],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.join(process.cwd(), 'dist'),
  },
  resolve: {
    alias: {
      'src': path.join(process.cwd(), 'src')
    }
  }
}
