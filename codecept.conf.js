const config = require('./config')
const ProxySettings = require('./proxy-settings')

exports.config = {
  name: 'smoke-tests',
  bootstrap: './bootstrap.js',
  tests: './tests/ui/uiTests.js',
  output: './output',
  timeout: 10000,
  helpers: {
    WebDriverIO: {
      host: config.webdriver.host,
      port: config.webdriver.port,
      browser: config.webdriver.browser,
      url: config.applicationUrl,
      waitForTimeout: 15000,
      desiredCapabilities: {
        proxy: new ProxySettings()
      }
    }
  },
  include: { },
  mocha: {
    reporterOptions: {
      mochaFile: './output/smoke-ui-result.xml'
    }
  }
}
