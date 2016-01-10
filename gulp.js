var gulp = require('gulp');

var paths = {
	webroot: "/usr/local/nginx/html/",
	npm: "/usr/local/nginx/html/node_modules/",
	lib: "/usr/local/nginx/html/assets/libs"
};

gulp.task('copy', function() {

var npm = {
	"jquery": "jquery/dist/*",
	"bootstrap": "bootstrap/dist/*",
	"angular": "angular/angular.min.js"
}

	gulp.src(paths.bower + bower["jquery"])
	.pipe(gulp.dest(paths.lib + "/jquery"));

	gulp.src(paths.bower + bower["bootstrap"])
	.pipe(gulp.dest(paths.lib + "/bootstrap"));

	gulp.src(paths.bower + bower["angular"])
	.pipe(gulp.dest(paths.lib + "/angular"));

});