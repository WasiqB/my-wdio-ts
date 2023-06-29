# my-wdio-ts

This project is a sample WebDriverIO with TypeScript and tests are executed with CucumberJS and reports are generated with [multiple-cucumber-html-reporter](https://github.com/WasiqB/multiple-cucumber-html-reporter).

## Pre-requisites

To work with this sample project, make sure following tools are installed on your machine:

- Install Node JS v18 LTS
- VS Code for writing test cases

## Machine Setup

After cloning the project, first execute the following command:

```bash
npm install
```

## Run the tests

Currently there is only one test related to Android Web application, which you can execute by running the following command:

```bash
npm run wdio
```

## Check the test results

After the test execution completes, the HTML reporter will be opened automatically on the machine default browser.

This report will have complete details for each and every features and scenarios including screenshots for failed scenarios.

Logs will also be generated in the `./logs` folder in the projects root directory.
