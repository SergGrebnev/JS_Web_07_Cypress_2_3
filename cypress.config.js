const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9niai2',
  e2e: {
    //retries: 2,
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
