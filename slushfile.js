'use strict';

let gulp = require('gulp');
let install = require('gulp-install');
let conflict = require('gulp-conflict');
let template = require('gulp-template');
let _ = require('underscore.string');
let inquirer = require('inquirer');

gulp.task('default', done => {
	var questions = [{
		name: 'projectName',
		message: 'What is your project name?'
	},{
		name: 'projectDescription',
		message: 'What is the description?'
	}];

	inquirer.prompt(questions, answers => {
		answers.newrelicLicenseKey = process.env.ZIMP_NEWRELIC || '';
		var projectDirectory = './' + answers.projectName;
		gulp.src(__dirname + '/template/**')
		.pipe(template(answers))
		.pipe(conflict(projectDirectory))
		.pipe(gulp.dest(projectDirectory))
		.pipe(install())
		.on('end', () => done());
	});
});
