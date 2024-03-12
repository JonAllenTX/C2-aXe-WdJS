# Axe Accessibility Testing Project - Challenge #2
This project demonstrates automated web accessibility testing using Selenium WebDriver and axe-core with Jasmine.

## Overview
This project is designed to run accessibility tests on the [Deque University Mars Demo](https://dequeuniversity.com/demo/mars) website. It utilizes Selenium WebDriver for browser automation, Jasmine as the testing framework, and [@axe-core/webdriverjs](https://www.npmjs.com/package/@axe-core/webdriverjs) for accessibility scanning.

## Getting Started

## Requirements
* Node.js
* npm
* Chrome browser

### Prerequisites
- Node.js and npm installed
- Chrome browser installed
- If you don't already have it, [download Chrome driver](https://chromedriver.chromium.org/downloads) and put it in a location on your system $PATH.
### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/axe-accessibility-testing.git

2. Install dependencies (including Jasmine):
    ```
    npm install selenium-webdriver jasmine @axe-core/webdriverjs


### Demo Project
The demo tests in `test.spec.js` will reach out to [Deque University Mars Demo](https://dequeuniversity.com/demo/mars), ensure an internet connection is available, or modify to a local server page, and run accessibility tests.

## Usage: Run tests

    ```
    npm test
    ```

## Review: Reviewing the Results
Results for the tests in this project are written both to the Terminal as well as as a file. The file is located in the `Results` folder and is named `axe-test-results.log`. The folder will be created after the first time the tests are run.