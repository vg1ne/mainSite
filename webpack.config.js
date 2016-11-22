var webpack = require("webpack");

module.exports = {
    entry: {
        "vendor": "./app/vendor",
        "app": "./app/main"
    },
    output: {
        path: __dirname,
        filename: "./prod/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css', '.html']
    },
    devtool: 'source-map',
    devServer: { inline: true },
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
      new webpack.optimize.CommonsChunkPlugin("vendor", "./prod/vendor.bundle.js")
    ]
}