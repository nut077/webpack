const path = require('path');
const webpack = require('webpack');
const context = path.resolve(__dirname, 'src');

const cssModuleRules = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[path][name]__[local]--[hash:base64:5]'
      },
      sourceMap: true
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }
];

module.exports = {
  devtool: 'eval-source-map',
  context,
  entry: {
    app: ['normalize.css', './index']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      Containers: path.resolve(context, 'containers')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: cssModuleRules },
      {
        test: /\.scss$/,
        use: [
          ...cssModuleRules,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8082'
    }
  }
};
