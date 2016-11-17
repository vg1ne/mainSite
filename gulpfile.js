const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const browserify = require('browserify');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten')

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('compile', ['clean'], function () {
  return gulp
    .src('app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('scripts', ['compile'], function() {
  return gulp.src(['dist/**/*.js'])
      .pipe(flatten())
      .pipe(concat('dest.js'))
      .pipe(gulp.dest('build'))
      // .pipe(refresh(server))
});

gulp.task('styles', function() {
  gulp.src(['app/**/*.css', 'styles/style.css'])
      .pipe(flatten())
      .pipe(concat('style.css'))
      // .pipe(styl({compress : true}))
      .pipe(gulp.dest('build'))
      // .pipe(refresh(server))
});

gulp.task('default', ['scripts', 'styles']);
