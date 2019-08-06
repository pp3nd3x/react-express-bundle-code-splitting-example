const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    index: './src/server/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/server')
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
