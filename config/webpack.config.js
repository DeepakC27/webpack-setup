const path = require('path')
const fs = require('fs')
const loadersConfig = require('./webpack.loaders')
const mergeWebpack = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const __curDir = fs.realpathSync(process.cwd())
console.log('__curDir', __curDir)

const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__curDir, 'src/'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__curDir, 'public/index.html')
    })
  ]
}

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__curDir, 'dist'),
    filename: 'js/[name].[contenthash].js', // to update only if file has changes [contenthash]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__curDir, 'public/build.html')
    })
  ]
}

const config = {
  entry: [
    path.resolve(__curDir, 'src/')
  ],
  resolve: {
    alias: {
      // alias for assets path 'assets/[].png'
      source: path.resolve(__curDir, 'src/'),
      assets: path.resolve(__curDir, 'src/assets/')
    }
  },
  ...loadersConfig
}

module.exports = (() => {
  console.log('configType: ', process.env.MODE)
  if (process.env.MODE === 'dev') {
    return mergeWebpack(config, devConfig)
  } else {
    return mergeWebpack(config, prodConfig)
  }
})()
