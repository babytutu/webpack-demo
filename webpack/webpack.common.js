const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack =  require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let favicon = path.join(process.cwd(), 'favicon.ico')

if (!require('fs').existsSync(favicon)) {
  favicon = undefined
  console.info('missing favicon')
}

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name]_[hash:8].bundle.js',
    path: path.join(process.cwd(), 'dist'),
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon,
      title: 'webpack-demo',
      template: path.join(process.cwd(), 'index.template.ejs'),
      dll: 'dll/vendors.dll.js'
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./../dll/vendors-manifest.json'),
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 20000 // Minimum number of characters
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[path][name].[ext]',
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[path][name].[ext]',
            }
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'src': path.join(process.cwd(), 'src')
    }
  },
  stats: {
    // Add built modules information
    modules: false,
  }
}
