const path = require('path');
//const HtmlWebpukPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  devtool: 'eval-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  /*devServer: {
    contentBase:'./public',
    /*static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  //plugins: [new HtmlWebpukPlugin()]*/
}