const gulp      = require("gulp");
const concat    = require("gulp-concat");
const uglify    = require("gulp-uglify");
const cleanCSS  = require("gulp-clean-css");

/* Move html-files to publication folder*/
gulp.task('copyhtml', function(){
  return  gulp.src("src/*.html")
        .pipe(gulp.dest("pub/"));
});

/* Minify and concat css */
gulp.task('miniconc-css', function(){
    return gulp.src("src/css/*.css")
        .pipe(concat("style.css"))
        .pipe(gulp.dest("pub/css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('pub/css'));
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
    gulp.watch("src/css/*.css", ['miniconc-css']);
}) ;

/* Run all tasks with default */
gulp.task("default",["copyhtml","miniconc-css", "concminjs","watcher"]);