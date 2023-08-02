# Testable Flows

## Scenario 1: Access the platform

### Description
As a user, I want to access the platform to see the Github Repos.

### Steps
1. Given The google chrome browser
2. When the user searches the url
3. Then the user should see the results

### Priority and Reasoning
This scenario is of high priority as it tests the basic functionality of accessing the platform and ensures that the app is functioning properly.

## Scenario 2: Search an unexisting github user

### Description
As a user, I want to search for an unexisting Github user and see an error message displayed on the platform.

### Steps
1. Given An unexisting github username
2. When the user searches the username
3. Then the platform should display an error

### Priority and Reasoning
This scenario is of medium priority as it tests the handling of errors when searching for a non-existent Github user, which is an important use case.

## Scenario 3: Search an existing github user generates a success message

### Description
As a user, I want to search for an existing Github user and see a success message displayed on the platform.

### Steps
1. Given An existing github username
2. When the user searches the existing username
3. Then the platform should display a success message

### Priority and Reasoning
This scenario is of medium priority as it tests the handling of successful searches for existing Github users, which is important to provide positive feedback to the user.

## Scenario 4: Search an existing github user

### Description
As a user, I want to search for an existing Github user and see the number of repos displayed on the platform.

### Steps
1. Given An existing github username
2. When the user searches the existing username
3. Then the platform should display the number of repos

### Priority and Reasoning
This scenario is of high priority as it tests the core functionality of searching for an existing Github user and displaying the number of repositories, which is a key feature of the app.

