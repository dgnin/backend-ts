import path from 'path';
import webpack from 'webpack';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import webpackNodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  target: 'node',
  entry: {
    example: './src/apps/Example/app.ts',
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
  plugins: [
    new ESLintWebpackPlugin({
      extensions: ['ts'],
      cache: false,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@apps': path.resolve(__dirname, 'src/apps'),
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export default (_env: unknown, argv: { mode: string }) => {
  if (argv.mode !== 'development') {
    return config;
  }

  return {
    ...config,
    externals: [webpackNodeExternals()],
    externalsPresets: {
      node: true,
    },
  };
};
