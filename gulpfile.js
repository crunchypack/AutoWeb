const gulp      = require("gulp");
const concat    = require("gulp-concat");
const uglify    = require("gulp-uglify");

/* Move html-files to publication folder*/
gulp.task('copyhtml', function(){
  return  gulp.src("src/*.html")
        .pipe(gulp.dest("pub/"));
});

/* Concat and minify JavaScript files*/
gulp.task('concminjs',function(){
    return gulp.src("src/js/*.js")
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("pub/js"));
});
/* Check for changes in files */
gulp.task("watcher", function(){
    gulp.watch("src/js/*.js", ['concminjs']);
    gulp.watch("src/*.html", ['copyhtml']);
}) ;

/* Run all tasks with default */
gulp.task("default",["copyhtml", "concminjs","watcher"]);