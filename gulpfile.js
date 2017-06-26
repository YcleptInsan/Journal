var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('myTask', function() {
  console.log('hello gulp');
});

gulp.task('jsBrowserify', function() {
  return browserify({entries: ['./js/journal-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function(){
  return gulp.src('./build/js/app.js')
    .pipe(uglify().on('error', function(e){console.log(e)}))
    .pipe(gulp.dest('./build/js'));
});
