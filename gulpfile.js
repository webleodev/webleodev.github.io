// Requirements

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename');

// Compressed styles

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

// Normal styles

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

// On change reload html-doc

gulp.task('html', () => {
    return gulp.src('./*.html')
        .pipe(browserSync.reload({stream: true}))
});

// On change reload scripts

gulp.task('script', () => {
    return gulp.src('./*.js')
        .pipe(browserSync.reload({stream: true}))
});

// Reloading browser on changes at the project's directory

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Task watching for changes in files

gulp.task('watch', () => {

    // Watching for 3 style files in project
    
    gulp.watch('./styles/styles.scss', gulp.parallel('scss-min', 'scss-normal'));
    gulp.watch('./styles/media.scss', gulp.parallel('media-scss-min', 'media-scss-normal'));
    gulp.watch('./styles/mobile.scss', gulp.parallel('mobile-scss-min', 'mobile-scss-normal'));

    // Watching for any HTML and JS files in project

    gulp.watch('./*.html', gulp.parallel('html'));
    gulp.watch('./*.js', gulp.parallel('script'));
});

// Default command for gulp

gulp.task('default', gulp.parallel('scss-min', 'media-scss-min', 'mobile-scss-min', 'scss-normal', 'media-scss-normal', 'mobile-scss-normal', 'script', 'html', 'browser-sync', 'watch'))