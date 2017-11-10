'use strict'

const pollingUtils = require('./lib/pollingUtils')
const webDriverStatus = require('./lib/webDriverStatus')

const pollingInterval = require('./config').webdriver.statusPollingIntervalSeconds * 1000

module.exports = async function bootstrap (done) {
  let status
  let retries = 0

  do {
    status = await pollingUtils.sleep(pollingInterval)
      .then(webDriverStatus.fetch)
      .catch(() => console.log('Error while connecting to WebDriver'))
    retries++
  } while (!webDriverStatus.isUp(status) && !pollingUtils.maxRetriesReached(retries))

  if (!webDriverStatus.isUp(status)) {
    console.log('Unable to connect to WebDriver')
    process.exit(1)
  }

  done()
}
