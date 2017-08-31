const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS = [
    'sweetalert2', 'vue'
];

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    bundle: './src/app.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].min.js'
  },
    resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src'),
      'components': resolve('src/components')
    }
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ExtractTextPlugin.extract({ use: 'css-loader' }),
        test: /\.css$/
      },
      {
          test: /\.vue$/,
          loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename: 'bundle.min.css',
        disable: false,
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
  ]
};
