const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Use loaders to handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // You can add plugins here
  ],
};
