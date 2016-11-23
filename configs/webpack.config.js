const webpack = require("webpack");

module.exports = {
    entry: {
        "vendor": "./app/vendor",
        "app": "./app/main",
        "webpack":'webpack-dev-server/client?http://localhost:8080'
    },
    output: {
        path: __dirname,
        filename: "./prod/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css', '.less', '.html']
    },
    devtool: 'source-map',
    devServer: { inline: true },
    module: {
        loaders: [
          {
              test: /\.ts/,
              loaders: ['ts-loader'],
              exclude: /node_modules/
          },
          {
              test: /\.less$/,
              loader: "style!css!autoprefixer!less",
              exclude: /node_modules/,
              include: ['./app', './styles']
          }
        ]
    },
    watch: true,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin("vendor", "./prod/vendor.bundle.js")
    ]
}