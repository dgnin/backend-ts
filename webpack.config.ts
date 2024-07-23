import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  target: 'node',
  entry: {
    products: './src/apps/Products/app.ts',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
};

export default config;
