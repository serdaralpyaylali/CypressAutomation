const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.js',
    baseUrl:"https://info-dev.pharmatick.com/"
  },
  chromeWebSecurity: false,
  experimentalStudio: true,
  viewportHeight: 1080,
  viewportWidth: 1920
});
