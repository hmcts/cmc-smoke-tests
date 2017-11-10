'use strict'

const maxRetries = require('../config').webdriver.maxStatusPollingRetries

class PollingUtils {
  static sleep (ms) {
    if (ms > 0) {
      console.log('Sleeping for', ms)
    }
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  static maxRetriesReached (retries) {
    const maxRetriesAreReached = retries >= maxRetries
    if (maxRetriesAreReached) {
      console.log(`Max polling retries (${maxRetries}) reached`)
    }
    return maxRetriesAreReached
  }
}

module.exports = PollingUtils
