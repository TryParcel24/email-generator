/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    browsersync: {
      ui: false,
    },
    templates: {
      source: "src/templates",
      fileTypes: "html",
      destination: {
        path: "dist/templates",
        extension: "hbs",
      },
      assets: {
        source: "src/assets/images",
        destination: "dist/images",
      },
    },
    tailwind: {
      css: "src/assets/css/main.css",
    },
  },
};
