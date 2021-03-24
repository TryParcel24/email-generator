const run = require("gulp-run");
const gRename = require("gulp-rename");
const gClean = require("gulp-clean");
const { src, dest, series, parallel } = require("gulp");

function core() {
  return run("npm run build:core").exec();
}

function templates() {
  return run("npm run build:templates").exec();
}

function rename() {
  return src("./src/handlebars/**/*.html")
    .pipe(
      gRename({
        extname: ".hbs",
      })
    )
    .pipe(dest("./src/handlebars"));
}

function clean() {
  return src("./src/handlebars/**/*.html").pipe(gClean());
}

exports.default = series(parallel(templates, core), rename, clean);
