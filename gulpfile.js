var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var jsFiles = ['*.js', 'public/js/*.js'];

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js', './public/js/controllers/*.js'], {
        read: false
    });
    var injectOptions = {
        ignorePath: '/public'
    };
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    gulp.src('./public/index.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./public'));

    return gulp.src('./public/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./public/views'));
});

gulp.task('serve', ['style', 'inject'], function () {
    var serveOptions = {
        script: 'main.js',
        delayTime: 0,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };
    return nodemon(serveOptions)
        .on('restart', function (ev) {
            console.log('Restarting ....');
        });
});