const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app: resolve(__dirname, 'app'),
  build: resolve(__dirname, 'build')
};

const config = {
  entry: [
    resolve(PATHS.app, 'index.jsx')
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle-[hash].js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: ['react-hot-loader', 'babel-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Traccon App',
      filename: 'index.html',
      template: 'index.ejs',
      inject: 'body'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

const development = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // contentBase: PATHS.build,
    publicPath: '/',
    historyApiFallback: true,
    progress: true,
    hotOnly: true,
    inline: true,
    stats: 'errors-only',
    port: 9097
  }
};

module.exports = Object.assign(config, development);
