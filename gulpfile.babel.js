import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';

gulp.task('mocha',() => {
    return gulp.src('test/**/*.test.js', {
            'base': './',
            'passthrough': false
        })
        .pipe(mocha());
});

gulp.task('babel',() => {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('copyOver',() => {
    return gulp.src(['src/**/*', '!src/**/*.js'])
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('babel', 'copyOver'));
