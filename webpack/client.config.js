const ReactLoadablePlugin = require('react-loadable/webpack')
  .ReactLoadablePlugin;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/client/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: 'client/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      // {test: /\.css$/, loader: 'style-loader!css-loader'},
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json'
    })
  ]
};
