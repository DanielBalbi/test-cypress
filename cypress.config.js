const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: "https://www.emaras.com.ar/",
      video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
