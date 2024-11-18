import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import loader from 'sass-loader';

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    // Fixing `import.meta.dirname` issue
    path: path.resolve(new URL(import.meta.url).pathname, 'dist'),
  },
  devServer: {
    static: {
      // Fixing `import.meta.dirname` issue here as well
      directory: path.join(path.resolve(new URL(import.meta.url).pathname), 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true, // Optional, can be omitted if not needed
              },
            },
          },
        ],
      },
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {
              // Nunjucks loader options can be configured here
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.njk',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.njk',
    }),
  ],
};
