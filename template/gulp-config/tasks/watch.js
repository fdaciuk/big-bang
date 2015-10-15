'use strict';

let gulp = require('gulp');
var paths = require('../paths');

gulp.task('watch', () => {
	gulp.watch(paths.js, [ 'lint' ]);
	gulp.start('lint');
});
