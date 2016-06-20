const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
};

const config = {
  entry: [
    'babel-polyfill',
    path.resolve(PATHS.app, 'index.jsx')
  ],
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: ['', '.js', '.jsx'],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /(node_modules)/, loaders: ['react-hot', 'babel'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Traccon App',
      filename: 'index.html',
      template: 'index.ejs',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

const development = {
  devtool: '#eval-source-map',
  debug: true,
  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: 'localhost',
    port: 9097
  }
};

module.exports = Object.assign(config, development);
