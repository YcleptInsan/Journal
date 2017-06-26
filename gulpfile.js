var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var concat = require('gulp-concat');
var del = require('del');
var jshint = require('gulp-jshint');
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
var buildProduction = utilities.env.production;

gulp.task('myTask', function() {
  console.log('hello gulp');
});

gulp.task("concatInterface", ["myTask"], function() {
  return gulp.src(['./js/journal-interface.js', './js/time-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ["concatInterface"], function() {
  return browserify({entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function() {
  return gulp.src('./test/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task("clean", function() {
  return del(['build','tmp']);
});

gulp.task('bowerJS', function() {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task('bowerCSS', function() {
  return gulp.src(lib.ext('css').files)
    .pipe(concat("vendor.css"))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task("build", ['clean'], function() {
  if (buildProduction) {
    gulp.start("minifyScripts");
  } else {
    gulp.start("jsBrowserify");
  }
  gulp.start('bower');
});

gulp.task("jshint", function() {
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
