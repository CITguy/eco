var data    = require('gulp-data');
var header  = require('gulp-header');
var rename  = require('gulp-rename');
var replace = require('gulp-replace');
// TODO: look into replacing gulp-swig with gulp-ejs
var swig    = require('gulp-swig');
var yaml    = require('gulp-yaml');

var swigTemplate = srcPath + '/vars.tpl.swig';
var buildData;
var banner = '/* DO NOT EDIT - Automatically generated from gulp task */\n\n';

// Builds JSON object for use when stamping SWIG template
function fnFileToData () {
    if (buildData === undefined) {
        buildData = require(localPath + '/vars.json');
    }
    return { data: buildData };
}

// TASKS
gulp.task('vars', [
    'vars:json',
    'vars:less',
    'vars:scss',
    'vars:css3'
]);

// Build JSON Data from YAML
gulp.task('vars:json', function () {
    return gulp.src(srcPath + '/vars.yml')
        .pipe(yaml({ space: 4 }))
        .pipe(gulp.dest(localPath));
});//vars:json

// Stamp JSON data to LESS output
gulp.task('vars:less', ['vars:json'], function () {
    return gulp.src(swigTemplate)
        .pipe(data(fnFileToData))
        .pipe(swig())
        .pipe(header(banner))
        .pipe(rename('variables.less'))
        .pipe(replace(/(@@)/g, '@'))
        .pipe(gulp.dest(localPath + '/less'));
});//vars:less

// Stamp JSON data to SCSS output
gulp.task('vars:scss', ['vars:json'], function () {
    return gulp.src(swigTemplate)
        .pipe(data(fnFileToData))
        .pipe(swig())
        .pipe(header(banner))
        .pipe(rename('variables.scss'))
        .pipe(replace(/(@@)/g, '$'))
        .pipe(gulp.dest(localPath + '/scss'));
});//vars:scss

// Stamp JSON data to CSS3 output
gulp.task('vars:css3', ['vars:json'], function () {
    return gulp.src(swigTemplate)
        .pipe(data(fnFileToData))
        .pipe(swig())
        .pipe(header(banner))
        .pipe(rename('variables.css'))
        .pipe(replace(/(@@)/g, '--'))
        .pipe(gulp.dest(localPath + '/css'));
});//vars:css3
