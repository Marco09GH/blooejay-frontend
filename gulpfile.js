var gulp = require('gulp');

var paths = {
	webroot: "/usr/local/nginx/html/",
	npm: "node_modules/",
	lib: "assets/libs"
};

gulp.task('copy', function() {

var npm = {
	"jquery": "jquery/dist/*",
	"bootstrap": "bootstrap/dist/**/*",
	"angular": "angular/angular.min.js",
    "react": "react/dist/*",
    "react-dom": "react-dom/dist/*"
}

	gulp.src(paths.npm + npm["jquery"])
	.pipe(gulp.dest(paths.lib + "/jquery"));

	gulp.src(paths.npm + npm["bootstrap"])
	.pipe(gulp.dest(paths.lib + "/bootstrap"));

	gulp.src(paths.npm + npm["angular"])
	.pipe(gulp.dest(paths.lib + "/angular"));
    
    gulp.src(paths.npm + npm["react"])
	.pipe(gulp.dest(paths.lib + "/react"));
    
    gulp.src(paths.npm + npm["react-dom"])
	.pipe(gulp.dest(paths.lib + "/react-dom"));

});