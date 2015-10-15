'use strict';

let gulp = require('gulp');
let istanbul = require('gulp-istanbul');
let mocha = require('gulp-mocha');
let paths = require('../paths');

let allFiles = paths.js.concat(paths.testFiles);

gulp.task('pre-test', () => {
	return gulp.src(paths.js)
		.pipe(istanbul())
		.pipe(istanbul.hookRequire());
});

gulp.task('test', [ 'pre-test' ], done => {
	let minimumCoverage = 90;
	return gulp.src(paths.testFiles)
		.pipe(mocha())
		.pipe(istanbul.writeReports())
		.pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
		.on('error', () => {
			console.log('Minimum global coverage:', minimumCoverage);
			console.log('================================================================================');
			process.exit();
		});
});
