# App Setup

1. Fork and clone the repository.
2. At the root directory of the repo, install dependencies by running `yarn` (if needed, [install yarn first](https://yarnpkg.com/getting-started))
3. Run the app by running `yarn start`

You can add more scripts (or change existing ones) in the [`package.json`](./package.json) file.





# Edit: 
# Updated dependencies: 
yarn add react-scripts

# Installed dependencies:
yarn add --dev @cucumber/cucumber
yarn add chai 
yarn add  @cucumber/pretty-formatter

# Scripts:
yarn run test 
yarn run testE2E


# DevNotes: 
Greetings to the review team. I want to share the main idea behind my evaluation.

My main approach or primary goal was to perform TDD and BDD tests to showcase my skills. However, when developing unit tests, I noticed that the library integrated into the project was a bit rigid for conducting unit tests (not referring to Jest in its current version, but to testing library). Additionally, I encountered an obstacle that prevented me from comfortably conducting TDD scripts, as GitHub banned my IP due to constant API requests for testing.

For automated BDD tests, I integrated Cucumber and Gherkin. I was able to develop a list of features related to the main application, define steps, and integrate a general class to store element locators, making the test structure more scalable and manageable. The structure consists of three elements: a list of features (gherkin), a list of functions (step definitions), and the main class (appPage).

Thank you in advance for the opportunity. Feel free to contact me if you have any questions. Best regards.