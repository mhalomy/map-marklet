const path = require('path');

module.exports = {

  entry: [
    './main/src/scripts/index.js',
  ],

  output: {
    filename: 'main.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: ['node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
