var gulp = require('gulp');

var paths = {
	webroot: "/usr/local/nginx/html/",
	bower: "/home/ubuntu/bower_components/",
	lib: "/usr/local/nginx/html/assets/libs"
};

gulp.task('copy', function() {

var bower = {
	"jquery": "jquery/**/*",
	"bootstrap": "bootstrap/**/*",
	"angular": "angular/**/*"
}

	gulp.src(paths.bower + bower["jquery"])
	.pipe(gulp.dest(paths.lib + "/jquery"));

	gulp.src(paths.bower + bower["bootstrap"])
	.pipe(gulp.dest(paths.lib + "/bootstrap"));

	gulp.src(paths.bower + bower["angular"])
	.pipe(gulp.dest(paths.lib + "/angular"));

});