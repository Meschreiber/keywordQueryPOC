var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server
gulp.task('serve', function() {
    browserSync.init({
        server: "."
    });
});

// Watching html files
gulp.task('watch', ['serve'], function() {
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
gulp.task('server', ['serve']);
gulp.task('dev', ['watch']);