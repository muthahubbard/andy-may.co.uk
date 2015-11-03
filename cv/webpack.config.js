var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/shared/main.js',
  output: {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    moduleDirectories: ['node_modules', 'shared'],
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map'
};