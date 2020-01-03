const { src, dest, watch, series } = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");

function html() {
  return src("./src/views/index.pug")
    .pipe(pug())
    .pipe(dest("./dist"));
}

function css() {
  return src("./src/styles/main.sass")
    .pipe(sass())
    .pipe(dest("./dist"));
}

// Watch for changes and fire suitable functions
function watchFiles() {
  watch(["./src/views/**/*.pug"], html);
  watch(["./src/styles/**/*.sass"], css);
}

exports.html = html;
exports.css = css;
exports.watch = watchFiles;
exports.default = series(html, css, watchFiles);
