const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  // Webpack configuration goes here
  mode: 'developement', 
  entry: './src/index.js', 
  output: {
      filename: 'bundle.[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
      rules: [
          //First Rule
          {
              test: /\.(js)$/, 
              exclude: /node_modules/, 
              use: ['babel-loader']
          }, 
          //Second Rule
          {
              test: /\.css$/, 
              use:[
                  {
                  loader: 'style-loader'
                  },
                  {
                      loader: 'css-loader', 
                      option: {
                          modules: true, 
                          localsConvention: 'camelCase', 
                          sourceMap: true
                      }
                  }
              ]
          }
      ]
  },
  plugin:[
      new HtmlWebpackPlugin({
          template:'public/index.html', 
          favicon: 'public.favicon.ico'
      })
  ],
  devServer: {
      host: 'localhost', 
      port: port, 
      historyApiFallback: true, 
      open: true
  }
};
