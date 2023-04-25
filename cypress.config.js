const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    SCRIPTS_CHUNK_FORMAT: "commonjs",
  },

  defaultCommandTimeout: 4000,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
