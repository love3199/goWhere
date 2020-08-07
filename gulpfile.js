let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');

function fnsass(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
}
function fnjs(){
    return gulp.src('./src/js/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('./dist/js'));
}
function fnimg(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
}
function fncopy(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}

exports.sass = fnsass;
exports.js = fnjs;
exports.img = fnimg;
exports.copy = fncopy;
