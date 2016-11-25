const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten')
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");
const gutil = require('gutil');
const less = require('gulp-less');
const path = require('path');

gulp.task('cleanMapFiles', function () {
    return del('app/**/*.map.js').then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});
gulp.task('cleanJsFiles', function () {
    return del(['app/**/*.js']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});
gulp.task('cleanCompiling', ['cleanMapFiles', 'cleanJsFiles'], function () { });


gulp.task("webpack", function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
        callback();
    });
});
gulp.task("webpack:webpack-dev-server", function (callback) {
    const compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {}).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
        callback();
    });
});

gulp.task('default', function () {
    gulp.start('webpack:webpack-dev-server');
});