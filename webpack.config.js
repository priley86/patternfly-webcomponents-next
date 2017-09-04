var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: __dirname,

  entry: {
    index: './src/index'
  },

  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  output: {
    path: path.join(__dirname, './lib'),
    publicPath: './',
    filename: '[name].js'
  },

  externals: {},

  module: {
    rules: [
      // js loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'stage-0',
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions']
                  }
                }
              ]
            ],
            plugins: [require('babel-plugin-transform-object-rest-spread')]
          }
        }
      },
      // less loader
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },

  devtool: 'inline-source-map'
}
