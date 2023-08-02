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
    this.messageLocator = By.css(".message-area p");
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

  //---Get custom message---
  async getCustomMessage() {
    //---Waiting,extracting and parsing the element and returning the text---
    return await this.driver
      .wait(until.elementLocated(this.messageLocator), 5000)
      .getText();
  }
  //---Get Repos list---

  async getReposList() {
    //---Waiting and locating the listContainer--- 
    const listContainer = await this.driver.wait(
      until.elementLocated(By.css(".repo-list-container")),
      5000
    );
  
    //---Extracting the li elements inside de container---
    const reposElements = await listContainer.findElements(By.css("li"));
  
    //---Sending back the number of elements---
    return reposElements.length;
  }
}

module.exports = AppPage;
