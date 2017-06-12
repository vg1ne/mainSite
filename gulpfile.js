const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten')
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");
const gutil = require('gutil');
const path = require('path');

gulp.task('cleanMapFiles', function () {
    return del(['app/**/*.map']).then(paths => {
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

    new WebpackDevServer(compiler, {
        https: true
    }).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "https://localhost:8080");

        // keep the server alive or continue?
        callback();
    });
});

gulp.task('default', ["cleanCompiling", "generate-sw"], function () {
    gulp.start('webpack:webpack-dev-server');
});

gulp.task('generate-sw', function(callback) {
    var swPrecache = require('sw-precache');
    var rootDir = './';

    swPrecache.write(`${rootDir}/service-worker.js`, {
        staticFileGlobs: [rootDir + 'prod/**/*.{js,html,css}',
            rootDir + 'fonts/**/*.{eot,ttf,woff}',
            rootDir + 'i18n/*.json',
            rootDir + 'styles/images/**/*.{png,jpg,gif,svg}',
            rootDir + 'sw-starter.js',
            rootDir + 'index.html'],
        stripPrefix: rootDir,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // 2MB
        navigateFallback: 'index.html',
        runtimeCaching: [{
            urlPattern: /^https:\/\/example/,
            handler: 'cacheFirst'
        }],
    }, callback);
});