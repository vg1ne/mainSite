const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "webpack": 'webpack-dev-server/client?http://localhost:8080',
        "vendor": "./app/vendor",
        "app": "./app/main"
    },
    output: {
        path: path.join(__dirname, 'prod'),
        filename: "app.bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css', ".less"]
    },
    devtool: 'inline-source-map',
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
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    watch: true,
    stats: { colors: true },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "./prod/vendor.bundle.js"),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new ExtractTextPlugin("[name].css")
    ]
}