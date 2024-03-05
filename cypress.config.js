const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://qamid.tmweb.ru/admin",
    viewportWidth: 2560,
    viewportHeight: 1440,
    setupNodeEvents(on, config) {
    },
}
});