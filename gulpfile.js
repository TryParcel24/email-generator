const run = require("gulp-run");
const clean = require("gulp-clean");
const { parallel, series, src, watch } = require("gulp");

function core() {
  return run("npm run build:core").exec();
}

function templatesProd() {
  return run("npm run build:templates:prod").exec();
}
function templatesDev() {
  return run("npm run build:templates:dev").exec();
}

function dev() {
  return watch("./src/**/*.*", parallel(core, series(templatesDev, test)));
}

function test() {
  return run("npm run build:test").exec();
}

function serve() {
  return run("npm run serve:test").exec();
}

exports.default = parallel(templatesProd, core);
exports.development = parallel(serve, dev);
