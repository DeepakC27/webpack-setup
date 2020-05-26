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
      }, {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. injects js strings into DOM
          'css-loader', // 2. Converts css to js strings (css as js string)
          'sass-loader' // 1. Converts scss into css
        ]
      }
    ]
  }
}

module.exports = loadersConfig
