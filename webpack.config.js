const path = require('path')
// Application configuration
const pkg = require('./package.json');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}