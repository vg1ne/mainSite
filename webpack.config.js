const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "vendor": "./app/vendor",
        "app": "./app/main",
        "webpack": 'webpack-dev-server/client?http://localhost:8080'
    },
    output: {
        path: __dirname,
        filename: "./prod/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map',
    devServer: {inline: true},
    module: {
        loaders: [
            {
                test: /\.ts/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style!css!less"),
                include: ['./app', './styles']
            },
            {
                test: /bootstrap.+\.(jsx|js)$/,
                loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            }
        ]
    },
    watch: true,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "./prod/vendor.bundle.js"),
        new ExtractTextPlugin("prod/style.css", {allChunks: true})
    ]
}