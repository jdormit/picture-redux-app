// can't use es6 here!
var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x){
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod){
    nodeModules[mod] = 'commonjs ' + mod;
   });

module.exports = [
  {
    devtool: 'sourcemap',
    entry: [
      './src/client/index.jsx'
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js'
    }
  },
  {
    devtool: 'sourcemap',
    entry: [
      './src/app.js'
    ],
    target: 'node',
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }]
    },
    resolve: {
      extensions: ['', '.js']
    },
    output: {
      path: __dirname + '/lib',
      filename: 'server.js'
    },
   externals: nodeModules,
    plugins: [
      new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false})
    ]
  }
]
