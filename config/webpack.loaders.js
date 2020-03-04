const loadersConfig = {
  rules: [
    {
      test: /\.js$/,
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
