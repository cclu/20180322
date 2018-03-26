
//共同的配置
const path = require('path')
const createVueloaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'
const config = {
  target: 'web',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        enforce: 'pre' //预处理  post 在之前或之后
      },
      {
        test: /.vue$/,
        loader: "vue-loader",
        options: createVueloaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 1024,
            name: 'resource/[path][name].[hash:8].[ext]'
          }
        }]
      }
    ]
  }
}

module.exports = config;