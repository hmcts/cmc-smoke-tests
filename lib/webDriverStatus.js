'use strict'

const request = require('request-promise-native')
const config = require('../config')

class WebDriverStatus {
  static fetch () {
    console.log('Fetching WebDriver status')
    return request.get({
      uri: `http://${config.webdriver.host}:${config.webdriver.port}/wd/hub/status`,
      json: true
    })
  }

  static isUp (webDriverStatus) {
    const webDriverIsUp = webDriverStatus && webDriverStatus.status === 0
    console.log(`Is WebDriver up? ${webDriverIsUp ? 'Yes' : 'No'}`)
    return webDriverIsUp
  }
}

module.exports = WebDriverStatus
