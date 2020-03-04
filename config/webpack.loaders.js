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
  ]
}

module.exports = loadersConfig
