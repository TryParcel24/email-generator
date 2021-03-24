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
  return run("npm run build:test").exec();
}

function dev() {
  return gWatch(
    ["./src/templates/**/*.html", "./src/layouts/**/*.html", "./src/index.ts"],
    parallel(series(templatesDev, rename, test, clean), core)
  );
}

function serve() {
  return run("npm run serve:test").exec();
}

exports.default = series(parallel(templatesProd, core), rename, clean);
exports.dev = parallel(serve, dev);
