const path = require('path')
const fs = require('fs')
const __curDir = fs.realpathSync(process.cwd())

const loadersConfig = {
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
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        "file-loader"
      ]
    }, {
      test: /\.(scss|css)$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }
  ]
}

module.exports = loadersConfig
