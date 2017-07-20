const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: {
    main: './src/main.js',
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
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['react', 'es2015', 'stage-0'],
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy'
          ]
        }
      },
      { test: /\.woff(2)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.svg$/, loader: 'file' }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    quiet: false,
    noInfo: false,
    port: 3000,
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
