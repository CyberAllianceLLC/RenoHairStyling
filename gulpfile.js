var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');



//watch
gulp.task('watch', ['build'], function() {
    //watch for changes and rebuild
    gulp.watch('./app/**', ['build']);
});

//build
gulp.task('build', function(done) {
    //clean old folders
    del(['./_build'], function() {
        //create new folders
        gulp.src(['./app/**', '!./app/css/styles.less'])
            .pipe(gulp.dest('./_build/'))

        .on('end', function() {
            //build_css
            gulp.src('./app/css/styles.less')
                .pipe(less())
                .pipe(gulp.dest('./_build/css/'))
                .pipe(minifyCss({
                    keepSpecialComments: 0
                }))
                .pipe(rename({ extname: '.min.css' }))
                .pipe(gulp.dest('./_build/css/'))

            .on('end', function() {
                //build bundle.js
                browserify('./app/bundle.js', {standalone: 'bundle'})
                    .bundle()
                    .pipe(source('bundle.js'))
                    .pipe(gulp.dest('./_build/'))
                    .on('end', done);
            });
        });
    });
});

//clean
gulp.task('clean', function(done) {
    del(['./_build'], done);
});
