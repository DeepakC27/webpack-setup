const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, 'public'),
    path: '/Users/servify/Documents/React_Projects/portfolio/public/'
    filename: '[name].js'
  }
}

module.exports = config;
