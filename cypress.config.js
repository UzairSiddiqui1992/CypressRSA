// npx cypress run --record --key c64831b0-cd68-4a69-899b-f4c6edaf1827

const { defineConfig } = require("Cypress");
module.exports = defineConfig({

  defaultCommandTimeout: 6000,

  projectId: "hxd66r",  //project-id

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Regression Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos:false
  },

  retries: {
    runMode: 1,
    openMode: 1,
    },

  env:{
    url:"https://rahulshettyacademy.com",
    userId:"uzair360",
    password:"Test1234"
  },
 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:"cypress/e2e/*.cy.js"
  },

});


//npx cypress run --record --key c64831b0-cd68-4a69-899b-f4c6edaf1827