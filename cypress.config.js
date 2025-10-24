const { defineConfig } = require ("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "test/**/*.cy.js",  // 👈 tells Cypress to look in /test/
    baseUrl: "https://example.cypress.io",
  },
});