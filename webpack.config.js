const webpack = require('webpack')
const path = require('path')

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
            plugins: [
              require('babel-plugin-transform-object-rest-spread'),
              require('babel-plugin-transform-es2015-typeof-symbol')
            ]
          }
        }
      },
      // less loader
      {
        test: /\.less$/,
        exclude: /\.shadow\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      // ShadowDom inline string styles
      {
        test: /\.shadow\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      }
    ]
  },

  devtool: 'inline-source-map'
}
