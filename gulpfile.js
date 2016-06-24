var gulp = require('gulp'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

var paths = {
    scripts: ['public/js/*'],
    styles: ['public/css/*'],
    images: ['public//images/**/*']
};

gulp.task('minify-js', function(){
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('minify-css', function(){
    return gulp.src(paths.styles)
        .pipe(cleancss())
        .pipe(gulp.dest('public/css'));
});

gulp.task('minify-img', function(){
    return gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'));
});

gulp.task('default', ['minify-js', 'minify-css', 'minify-img']);
