const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module:{
      rules:[
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /[\\/]node_modules[\\/]/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(jpg|jpeg|png|gif)$/,
            use: {
              loader:'url-loader'
            }
          },
      ]
  },
  plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          filename: 'index.html',
          inject: true,
          template: path.resolve(__dirname,'src','index.html')
      })
  ]
}