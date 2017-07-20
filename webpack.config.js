const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory()
}

module.exports = {
  devtool: 'source-map',

  entry: {
    app: './src/app.js',
    vendor: [ 'react', 'react-dom' ]
  },

  output: {
    path: 'build',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: 'build'
  },

  resolve: {
    extensions: [ '', '.js', '.css' ]
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, exclude: /node_modules|mocha-browser\.js/, loader: 'babel' },
      { test: /\.woff(2)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.svg$/, loader: 'file' },
      { test: require.resolve('jquery'), loader: 'expose?jQuery' }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
  ],

  devServer: {
    quiet: false,
    noInfo: false,
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /ReduxDataFlow\/exercise.html/,
    //       to: 'ReduxDataFlow\/exercise.html'
    //     }
    //   ]
    // },
    stats: {
      // Config for minimal console.log mess.
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  }
}
