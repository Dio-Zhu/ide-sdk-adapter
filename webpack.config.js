var webpack = require('webpack');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: './dist/',
    filename: "genadapter.js",
    library:"GenAdapter",
    libraryTarget:'umd'
  },
  // devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  // plugins:[
  //     new webpack.optimize.UglifyJsPlugin({
  //        compress: {warnings: false}
  //     })
  // ],
  // externals: {
  //     react: {
  //         root: 'React',
  //         commonjs2: 'react',
  //         commonjs: 'react',
  //         amd: 'react',
  //     },
  //     'react-dom': {
  //         root: 'ReactDOM',
  //         commonjs2: 'react-dom',
  //         commonjs: 'react-dom',
  //         amd: 'react-dom',
  //     }
  // },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};