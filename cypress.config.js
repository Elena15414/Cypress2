const { defineConfig } = require("cypress");

module.exports = defineConfig({
   projectId: "a2kn83",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru/admin",
    viewportWidth: 2560,
    viewportHeight: 1440,
    setupNodeEvents(on, config) {
    },
}
});
