const { src, dest, watch, series } = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

function html() {
  return src("./src/views/index.pug")
    .pipe(pug())
    .pipe(dest("./dist"));
}

function css() {
  return src("./src/styles/main.sass")
    .pipe(sass())
    .pipe(dest("./dist/styles"));
}

function js() {
  return src("./src/scripts/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("./dist/js"));
}

// Watch for changes and fire suitable functions
function watchFiles() {
  watch(["./src/views/**/*.pug"], html);
  watch(["./src/styles/**/*.sass"], css);
  watch(["./src/scripts/**/*.js"], js);
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.watch = watchFiles;
exports.default = series(html, css, js, watchFiles);
