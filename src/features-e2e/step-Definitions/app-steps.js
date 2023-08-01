// --- KeyWords imports ---
const { Given, When, Then } = require("@cucumber/cucumber");

// ------------
let result = 0;
When("I add {int} and {int}", function (num1, num2) {
    let sum = num1 + num2;
  
});


Then("the result should be {int}", function (result) {
  
});
