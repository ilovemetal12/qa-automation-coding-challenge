const { isElement, isElementOfType } = require("react-dom/test-utils");
const {
  Builder,
  By,
  until,
  ExpectedConditions,
} = require("selenium-webdriver");

class AppPage {
  constructor(driver) {
    // ---Driver
    this.driver = driver;

    // ---Locators---
    this.searchInputLocator = By.id("username");
    this.submitButtonLocator = By.css("button[type='submit']");
  }

  // ---Methods/Actions---
  //---Enter username---
  async searchUsername(username) {
    const searchInput = await this.driver.findElement(this.searchInputLocator);
    await searchInput.sendKeys(username);
  }

  //---Click submit---
  async clickSubmit() {
    const submitButton = await this.driver.findElement(
      this.submitButtonLocator
    );
    await submitButton.click();
  }

  //---Get title---
  async getTitle() {
    return await this.driver.getTitle();
  }

  //---Get error message---
  async getErrorMessage() {
    //---Waiting the element---
    const messageElement = await this.driver.wait(
      until.elementLocated(By.css(".message-area p")),
      5000 
    );


    //---Extracting text and returning---
    return  messageElement.getText();
  }
}

module.exports = AppPage;
