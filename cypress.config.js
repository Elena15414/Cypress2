const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://qamid.tmweb.ru/client/index.php",
    viewportWidth: 2560,
    viewportHeight: 1440,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
}
});