'use strict';

var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');

var dist = './';

gulp.task('default', ['live', 'watch', 'scripts', 'css']);

gulp.task('live', ['reload'], function() {
  connect.server({
    port: 1334,
    livereload: true
  });
  gulp.src('index.html')
    .pipe(open('', {
      url: 'http://localhost:1337'
    }));
});

gulp.task('run', ['reload'], function() {
  var d = new Date();
  console.log('\n  ' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2) + '\n');
});

gulp.task('reload', ['sass', 'css'], function() {
  return gulp.src(dist + 'index.html')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('css/default.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));

    gulp.src('css/press.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch(['css/default.scss'], ['run']);
  gulp.watch(['js/main.js'], ['scripts']);
});

gulp.task('scripts', function() {
  return gulp.src([
    'bower_components/modernizr/modernizr.js',
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js', 
    'bower_components/lightbox2/dist/js/lightbox.min.js', 
    'js/main.js'])
    .pipe(concat('js/app.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('css', function () {
  return gulp.src([
    'css/normalize.css',
    'bower_components/fontawesome/css/font-awesome.css',
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/lightbox2/dist/css/lightbox.min.css',
    'css/default.css'
  ])
    .pipe(concatCss("css/app.css"))
    .pipe(gulp.dest('dist/'));
});