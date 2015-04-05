var gulp = require('gulp'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    ghPages = require('gulp-gh-pages');

gulp.task('babel', function() {
    return gulp.src('src/*')
        .pipe(babel())
        .pipe(gulp.dest('dest'));
});

gulp.task('deploy', function() {
    var file = [
        'index.html', 'dist/*', 'bower_components/**/*', 'bower_components/hello-world/**/*'
    ];

    return gulp.src(files, { base: './' })
        .pipe(ghPages({
            cacheDir: 'bower_components/hello-world'
        }));
});

gulp.task('server', function() {
    connect.server();
});

gulp.task('watch', function() {
    gulp.watch('src/*', ['babel']);
});

gulp.task('default', ['server', 'watch']);