'use strict';

let gulp = require('gulp');
let install = require('gulp-install');
let conflict = require('gulp-conflict');
let template = require('gulp-template');
let rename = require('rename');
let _ = require('underscore.string');
inquirer = require('inquirer');

gulp.task('default', done => {
	var questions = [{
		name: 'projectName',
		message: 'What is your project name?'
	},{
		name: 'projectDescription',
		message: 'What is the description?'
	}];

	inquirer.prompt(questions, answers => {
		gulp.src(__dirname + '/templates/**')
		.pipe(template(answers))
		.pipe(conflict('./'))
		.pipe(gulp.dest('./'))
		.pipe(install())
		.on('end', () => done());
	});
});
