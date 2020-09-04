// npx wdio wdio.conf.js

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://webdriver.io')
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');

        await browser.keys('Tab');
        await browser.keys('Tab');
        await browser.keys('Tab');
        await browser.keys(['Shift', 'Tab', 'NULL']);
        await browser.keys(['Shift', 'Tab', 'NULL']);
    })
})