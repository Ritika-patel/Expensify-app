//entry -> output
const path = require('path')


module.exports ={
    mode: 'development',
    entry: path.join(__dirname, '/src/app.js'),
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
          },
          {
            test: /\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
    output: {
        path:path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback:  true

    }
}
