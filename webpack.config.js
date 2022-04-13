const path = require('path');

const outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/index.ts',

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  externals: ['react'],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: outputPath,
    filename: 'react-lineto-ts.umd.js',
    library: 'react-lineto-ts',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
