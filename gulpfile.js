let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename');

gulp.task('scss-min', () => {
    return gulp.src('./styles/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./styles/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('media-scss-min', () => {
    return gulp.src('./styles/media.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./styles/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('mobile-scss-min', () => {
    return gulp.src('./styles/mobile.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./styles/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scss-normal', () => {
    return gulp.src('./styles/styles.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./styles/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('media-scss-normal', () => {
    return gulp.src('./styles/media.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./styles/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('mobile-scss-normal', () => {
    return gulp.src('./styles/mobile.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./styles/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', () => {
    return gulp.src('./*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', () => {
    return gulp.src('./*.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', () => {  
    gulp.watch('./styles/styles.scss', gulp.parallel('scss-min', 'scss-normal'));
    gulp.watch('./styles/media.scss', gulp.parallel('media-scss-min', 'media-scss-normal'));
    gulp.watch('./styles/mobile.scss', gulp.parallel('mobile-scss-min', 'mobile-scss-normal'));

    gulp.watch('./*.html', gulp.parallel('html'));
    gulp.watch('./*.js', gulp.parallel('script'));
});

gulp.task('default', gulp.parallel('scss-min', 'media-scss-min', 'mobile-scss-min', 'scss-normal', 'media-scss-normal', 'mobile-scss-normal', 'script', 'html', 'browser-sync', 'watch'))