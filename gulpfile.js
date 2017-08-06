'use strict';

    
var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    fileinclude = require('gulp-file-include'),
    sass = require('gulp-sass'),
    gcmq = require('gulp-group-css-media-queries'),
	minifyCss = require('gulp-minify-css'),	
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    rimraf = require('rimraf'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;


var path = {
    build: {
        html: './build',
        js: './build/js',
        css: './build/css',
        img: './build/img',
        fonts: './build/fonts'
    },
    src: { 
        html: './src/*.html', 
        js: './src/js/custom.js',
        style: './src/scss/style.scss',
        img: ['./src/img/*.*', './src/img/**/*.*'], 
        fonts: ['./src/fonts/**/*.*', './src/fonts/*.*']
    }
};


gulp.task('getHtml', function(){
 return gulp.src(path.src.html)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(fileinclude())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});


gulp.task('getStyle', function(){
 return gulp.src(path.src.style)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
});


gulp.task('getJs', function(){
 return gulp.src(path.src.js)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});


gulp.task('getImage', function(){
 return gulp.src(path.src.img)
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({stream: true}));
});

gulp.task('getFonts', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


gulp.task('webserver', function () {
    browserSync.init({
        server: './build'
    });
});

gulp.task('clean', function(cb){
    rimraf('./build', cb);
});

        
gulp.task('build', [
    'clean',
    'getHtml',
    'getStyle',
    'getJs',
    'getImage',
    'getFonts'
]);


gulp.task('watcher', function(){
	watch('./src/scss/*.scss', function () {
        gulp.start('getStyle');
    });
	watch(path.src.html, function () {
        gulp.start('getHtml');
    });
	watch(path.src.js, function () {
        gulp.start('getJs');
    });
	watch(path.src.img, function () {
        gulp.start('getImage');
    });
});

gulp.task('getWatch', ['webserver', 'watcher']);


//Настроить браузерСинк!  настроить стаиллинт