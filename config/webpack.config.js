const path = require('path')
const fs = require('fs')
const loadersConfig = require('./webpack.loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const __curDir = fs.realpathSync(process.cwd())

const devConfig = {
  mode: "development",
  devServer: {
    // serve path on dev server
    contentBase: path.resolve(__curDir, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template to copy index.html into dist folder
      template: path.resolve(__curDir, 'public/index.html')
    })
  ],
}

const prodConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__curDir, 'dist'),
    filename: 'js/name.[hash].js'
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__curDir, 'public/index.html')
    })
  ],
}

const config = {
  resolve: {
    alias: {
      // alias for assets path 'assets/[].png'
      assets: path.resolve(__curDir, 'src/assets/')
    }
  },
  module: loadersConfig
}

module.exports = (() => {
  if (process.env.MODE === 'dev') {
    return { ...config, ...devConfig }
  } else {
    return { ...config, ...prodConfig }
  }
})()
