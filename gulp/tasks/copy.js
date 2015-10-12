gulp.task('copy:less', ['vars'], function () {
    return gulp.src(srcPath + '/less/**/*')
        .pipe(gulp.dest(tmpPath + '/less'));
});//copy:less
