const run = require("gulp-run");
const gRename = require("gulp-rename");
const gClean = require("gulp-clean");
const { src, dest, series, parallel, watch: gWatch } = require("gulp");

function core() {
  return run("npm run build:core").exec();
}

function templatesProd() {
  return run("npm run build:templates:prod").exec();
}
function templatesDev() {
  return run("npm run build:templates:dev").exec();
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

function test() {
  return run("npm run test").exec();
}

function dev() {
  return gWatch(
    ["./src/templates/**/*.html", "./src/layouts/**/*.html", "./src/index.ts"],
    series(parallel(templatesDev, core), rename, test, clean)
  );
}

exports.default = series(parallel(templatesProd, core), rename, clean);
exports.dev = dev;
