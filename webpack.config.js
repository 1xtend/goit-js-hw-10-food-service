const path = require('path');
const outputDir = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: outputDir,
    clean: true,
  },
  devServer: {
    static: './dist',
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(hbs|handlebars)$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      chunks: ['index'],
      filename: 'index.html',
    }),
  ],
};
