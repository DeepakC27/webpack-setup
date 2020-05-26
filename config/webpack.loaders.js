const path = require('path')
const fs = require('fs')
const __curDir = fs.realpathSync(process.cwd())

const loadersConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        // includes: path.resolve(__curDir, 'src'), // transpile only src files
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-arrow-functions',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }, {
        test: /\.html$/,
        use: ['html-loader']
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets'
          }
        }
      }
    ]
  }
}

module.exports = loadersConfig
