/* eslint-disable */
const CompressionPlugin = require('compression-webpack-plugin');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

const inProd = process.env.NODE_ENV === 'production';

module.exports = withCSS(withSass({
  webpack(config) {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    // config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    });

    if (inProd) {
      config.plugins.push(
        new CompressionPlugin({
          filename: 'gzip/[path][query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
        }),
      );
    }
    return config;
  },
}));
