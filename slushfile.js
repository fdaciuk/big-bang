'use strict';

let gulp = require('gulp');
let install = require('gulp-install');
let conflict = require('gulp-conflict');
let template = require('gulp-template');
let rename = require('gulp-rename');
let _ = require('underscore.string');
let inquirer = require('inquirer');

gulp.task('default', done => {
	var questions = [{
		name: 'projectName',
		message: 'What is your project name?'
	},{
		name: 'projectDescription',
		message: 'What is the description?'
	},{
		name: 'newrelicLicenseKey',
		message: 'Enter NewRelic License Key:'
	},{
		name: 'repositoryName',
		message: 'Enter repositoryName (user/repository):'
	}];

	inquirer.prompt(questions, answers => {
		var projectDirectory = './' + answers.projectName;
		gulp.src(__dirname + '/template/**')
		.pipe(template(answers))
		.pipe(rename(file => {
			if(file.basename[0] === '_')
				file.basename = '.' + file.basename.slice(1);
		}))
		.pipe(conflict(projectDirectory))
		.pipe(gulp.dest(projectDirectory))
		.pipe(install())
		.on('end', () => done());
	});
});
