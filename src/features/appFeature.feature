Feature: App component testing scripts

Scenario: Access the platform 
Given The google chrome browser
When the user searches the url
Then the user should see the results

Scenario: Search an unexisting github user
Given An unexisting github username
When the user searches the username
Then the platform should display an error

Scenario: Search a existing github user generates a success message
Given An existing github username
When the user searches the existing username
Then the platform should display a success message

Scenario: Search a existing github user
Given An existing github username
When the user searches the existing username
Then the platform should display the number of repos