const path = require('path')
const fs = require('fs')
const loadersConfig = require('./webpack.loaders')
const mergeWebpack = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const __curDir = fs.realpathSync(process.cwd())

const devConfig = {
  mode: "development",
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
  mode: "production",
  output: {
    path: path.resolve(__curDir, 'dist'),
    filename: 'js/[name].[contenthash].js', // to update only if file has changes [contenthash]
    chunkFilename: 'js/[name].[contenthash].js' // determines the name of non-entry chunk files
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
