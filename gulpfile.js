'use strict';

var _ = require('./'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    mergeStream = require('merge-stream');

gulp.task('default', function() {

});

gulp.task('test', function() {
    gulp.start('lint', 'mocha');
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], {read: false})
        .pipe(mocha());
});

gulp.task('lint', function() {
    var jshintConfig = require('./.jshintrc.json'),
        jshintTestConfig = _.safeMerge(jshintConfig, {
            globals: {
                describe: true,
                it: true
            }
        }),
        testLint = gulp.src(['test/*.js'])
        .pipe(jshint(jshintTestConfig))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail')),

        otherLint = gulp.src(['./*.js', 'lib/*.js'])
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));

    return mergeStream(testLint, otherLint);
});
