const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/client/index.html',
  inject: true
})

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    HtmlWebpackPluginConfig
  ],
  module: {
    rules: [
      { test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {test: /\.js$/ , loader: 'babel-loader' , exclude: /node_modules(?!\/webpack-dev-server)/, query: {
        presets: ['es2015']
      }},
      {test: /\.jsx$/ , loader: 'babel-loader' , exclude: /node_modules/, query: {
        presets: ['es2015']
      }},
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./app')],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: __dirname + '/app/client',
    historyApiFallback: true,
    hot: true,
  }
};
