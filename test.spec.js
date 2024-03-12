const { Builder, By, Key, until } = require('selenium-webdriver');
const axe = require('@axe-core/webdriverjs');
const fs = require('fs');
const path = require('path'); // Include the path module

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Accessibility Tests', function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://dequeuniversity.com/demo/mars');
    });

    afterEach(async function () {
        await driver.quit();
    });

    // Test 1: Ensure main navigation loaded
    it('should have main navigation loaded', async function () {
        const mainNav = await driver.findElement(By.css('nav#main-nav'));
        expect(mainNav).toBeTruthy();
    });

    // Test 2: Accessibility Scan with File Logging
    it('should perform accessibility scan and log violations', async function () {
        const axeBuilder = new axe.AxeBuilder(driver);
        const violations = await axeBuilder.analyze();

        // Log violations to console for immediate viewing
        console.log('Accessibility Violations:', violations.length);
        console.log(violations);

        // Create a 'Results' folder if it doesn't exist
        const resultsFolder = path.join(__dirname, 'Results');
        if (!fs.existsSync(resultsFolder)) {
            fs.mkdirSync(resultsFolder);
        }

        // Log violations to a file within the 'Results' folder
        const logFile = path.join(resultsFolder, 'axe-test-results.log');
        const logData = JSON.stringify(violations, null, 2);

        fs.writeFile(logFile, logData, (err) => {
            if (err) throw err;
            console.log(`Accessibility violations logged to: ${logFile}`);
        });
    });
});
