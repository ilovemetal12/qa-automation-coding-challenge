// --- KeyWords imports ---
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const webdriver = require("selenium-webdriver");

//---App page object---
const AppPage = require("../features/appPage");

// ---Global variables---
let driver;
let appPage;

// ------HOOKS------
Before(function () {
  driver = new webdriver.Builder().forBrowser("chrome").build();
  appPage = new AppPage(driver);
});

// ------

After(function () {
  if (driver !== null) {
    driver.quit();
  }
});

// ------STEP DEFINITIONS------
// ---Scenario 1---
Given("The google chrome browser", async () => {
  await driver.get("http://www.google.com");
});
When("the user searches the url", async () => {
  await driver.get("http://localhost:3000");
});
Then("the user should see the results", async () => {
  const title = await driver.getTitle();
  expect(title).to.equal("Get Github Repos");
});

// ---Scenario 2---
Given("An unexisting github username", async () => {
  await driver.get("http://localhost:3000");
});

When("the user searches the username", async () => {
  await appPage.searchUsername("noexistinguser");
  await appPage.clickSubmit();
});

Then("the platform should display an error", async () => {
  // ---Using Chai to confirm the message---
  const errorMessage = await appPage.getErrorMessage();
  expect(errorMessage).to.equal("Github user not found");
});
