var webpack = require("webpack");

module.exports = {
    entry: {
        "vendor": "./app/vendor",
        "app": "./app/main"
    },
    output: {
        path: __dirname,
        filename: "./dist/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css']
    },
    devtool: 'source-map',
    module: {
        loaders: [
          {
              test: /\.ts/,
              loaders: ['ts-loader'],
              exclude: /node_modules/
          }
        ]
    },
    watch: true,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin("vendor", "./dist/vendor.bundle.js")
    ]
}