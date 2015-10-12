/*
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in gulp/tasks. Any files in that directory get
 * automatically required below.
 * To add a new task, simply add a new task file to that directory.
 */
var requireDir = require('require-dir');

global.gulp      = require('gulp');
global.appRoot   = require('app-root-path');
global.tmpPath   = appRoot + '/tmp';
global.buildPath = appRoot + '/dist';
global.srcPath   = appRoot + '/src';

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
