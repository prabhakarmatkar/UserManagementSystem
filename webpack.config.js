var path = require('path');
var config = {
    entry: "./main.jsx",
    output: {
       path:'/',
       filename: 'index.js',
       publicPath: '/'
    },
    devServer: {
       inline: true,
       port: 8080
    },
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    },
    devServer: {
        historyApiFallback: true,
      }
 }
 module.exports = config;