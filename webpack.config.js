const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin')
/* eslint-disable */

var path = require('path')
var webpack = require('webpack')
var googleFonts = require('./google-fonts.json')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    '@babel/polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new GoogleFontsPlugin({
      fonts: googleFonts
      /* ...options */
    })
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',

            options: {
              gfm: false
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        include: __dirname
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'raw-loader'
          }
        ],
        include: __dirname
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              mimetype: 'image/svg+xml'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/png'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/gif'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/jpg'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['.js', '.jsx', '.json']
  }
}
