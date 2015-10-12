gulp.task('copy', [
    'copy:less'
]);

gulp.task('copy:less', ['vars'], function () {
    return gulp.src(srcPath + '/less/**/*')
        .pipe(gulp.dest(localPath + '/less'));
});//copy:less
