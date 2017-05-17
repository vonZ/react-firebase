const path = require('path');
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: __dirname + '/app.jsx',
    output: {
        filename: 'bundle.min.js'
    },
    module : {
        loaders : [
          {
            test : /\.jsx?/,
            loader : 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }
      ],
    }
}
