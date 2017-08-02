var parallel = require("concurrent-transform");
var os = require("os");
var rename = require("gulp-rename");
var gulp = require("gulp");
var imageResize = require('gulp-image-resize');
 
gulp.task("images350", function () {
  gulp.src(["images/articles/*.{jpg,png}","images/articles/*-350.{jpg,png}","images/articles/*-1000.{jpg,png}"])
    .pipe(parallel(
      imageResize({
	      width : 500,
	      height : 350,
	      crop : true,
	      upscale : false
	  }),
      os.cpus().length
    ))
    .pipe(rename(function (path) { path.basename += "-350"; }))
    .pipe(gulp.dest("images/articles"));
});

gulp.task("images700", function () {
  gulp.src(["images/articles/*.{jpg,png}","images/articles/*-700.{jpg,png}","images/articles/*-1000.{jpg,png}"])
    .pipe(parallel(
      imageResize({
	      width : 1000,
	      height : 700,
	      crop : true,
	      upscale : false
	  }),
      os.cpus().length
    ))
    .pipe(rename(function (path) { path.basename += "-700"; }))
    .pipe(gulp.dest("images/articles"));
});

gulp.task("images1000*350", function () {
  gulp.src(["images/articles/*.{jpg,png}","images/articles/*-700.{jpg,png}","images/articles/*-1000.{jpg,png}"])
    .pipe(parallel(
      imageResize({
        width : 1000,
        height : 350,
        crop : true,
        upscale : false
    }),
      os.cpus().length
    ))
    .pipe(rename(function (path) { path.basename += "-1000"; }))
    .pipe(gulp.dest("images/articles"));
});

gulp.task('images', ['images350', 'images700', 'images1000*350'], function(cb) { });
