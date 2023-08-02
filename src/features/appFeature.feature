Feature: App component testing scripts

Scenario: Access the platform 
Given The google chrome browser
When the user searches the url
Then the user should see the results

Scenario: Search an unexisting github user
Given An unexisting github username
When the user searches the username
Then the platform should display an error

