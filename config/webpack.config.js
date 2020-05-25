const path = require('path')
const fs = require('fs')
const loadersConfig = require('./webpack.loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const __curDir = fs.realpathSync(process.cwd())

const devConfig = {
  mode: "development",
  entry: [
    path.resolve(__curDir, 'src/')
  ],
  output: {
    path: path.resolve(__curDir, 'src/'),
    filename: 'bundle.js'
  },
  devServer: {
    // serve path on dev server
    contentBase: path.resolve(__curDir, 'public'),
    historyApiFallback: {
      index: path.resolve(__curDir, 'public/index.html')
    }
  }
}

const prodConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__curDir, 'dist'),
    filename: 'js/name.[contenthash].js',
    chunkFilename: 'js/name.[contenthash].js' // determines the name of non-entry chunk files
  },
  mode: "production",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        // ...
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__curDir, 'public/index.html')
    })
  ],
}

const config = {
  // entry: './src/index.js',,
  resolve: {
    alias: {
      // alias for assets path 'assets/[].png'
      source: path.resolve(__curDir, 'src/'),
      assets: path.resolve(__curDir, 'src/assets/')
    }
  },
  module: loadersConfig
}

module.exports = (() => {
  if (process.env.MODE === 'prod') {
    return { ...config, ...prodConfig }
  } else {
    return { ...config, ...devConfig }
  }
})()
