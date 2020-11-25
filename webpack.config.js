const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: ['./resources/js/main.js', './resources/css/main.scss', './resources/css/tailwind.scss'],
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
          compact: false,
          generatorOpts: { compact: false }
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            }
          }, {
            loader: 'extract-loader'
          }, {
            loader: 'css-loader?-url'
          }, {
            loader: 'postcss-loader'
          }, {
            loader: 'sass-loader'
          }
        ],
      }, {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
  ]
}
