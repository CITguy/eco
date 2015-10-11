var data    = require('gulp-data');
var gulp    = require('gulp');
var rename  = require('gulp-rename');
var replace = require('gulp-replace');
var swig    = require('gulp-swig');
var yaml    = require('gulp-yaml');

var swigTemplate = appRoot + '/gulp/tpls/vars.swig';
var buildData;

// Builds JSON object for use when stamping SWIG template
function fnFileToData () {
    if (buildData === undefined) {
        buildData = require(buildPath + '/json/vars.json');
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
    return gulp.src(appRoot + '/src/vars.yml')
        .pipe(yaml({ space: 4 }))
        .pipe(gulp.dest(buildPath + '/json'));
});//vars:json

// Stamp JSON data to LESS output
gulp.task('vars:less', ['vars:json'], function () {
    return gulp.src(swigTemplate)
        .pipe(data(fnFileToData))
        .pipe(swig())
        .pipe(rename('vars.less'))
        .pipe(replace(/(@@)/g, '@'))
        .pipe(gulp.dest(buildPath + '/less'));
});//vars:less

// Stamp JSON data to SCSS output
gulp.task('vars:scss', ['vars:json'], function () {
    return gulp.src(swigTemplate)
        .pipe(data(fnFileToData))
        .pipe(swig())
        .pipe(rename('vars.scss'))
        .pipe(replace(/(@@)/g, '$'))
        .pipe(gulp.dest(buildPath + '/scss'));
});//vars:scss

// Stamp JSON data to CSS3 output
gulp.task('vars:css3', ['vars:json'], function () {
    return gulp.src(swigTemplate)
        .pipe(data(fnFileToData))
        .pipe(swig())
        .pipe(rename('vars.css'))
        .pipe(replace(/(@@)/g, '--'))
        .pipe(gulp.dest(buildPath + '/css'));
});//vars:css3
