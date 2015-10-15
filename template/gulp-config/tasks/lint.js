'use strict';

let gulp = require('gulp');
let jshint = require('gulp-jshint');
let jscs = require('gulp-jscs');
let paths = require('../paths');

gulp.task('lint', done => {
	gulp.src(paths.js)
		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(jshint.reporter('fail'))
		.on('error', handleError)

		.pipe(jscs())
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'))
		.on('error', handleError);
});

function handleError() {
	if( !isDevelopment() )
		process.exit(1);
}

function isDevelopment() {
	return ( process.env.NODE_ENV || 'development' ) === 'development';
}
