const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, '../src')
      },
      // ShadowDom inline string styles
      {
        test: /\.shadow\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      }
    ]
  }
}
