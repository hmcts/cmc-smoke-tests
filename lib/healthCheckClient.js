'use strict'

const request = require('request-promise-native')

const config = require('../config')
const fs = require('fs')

class HealthCheckClient {
  static getAppHealthChecks () {
    const requestConfig = {
      uri: `${config.applicationUrl}/health`,
      json: true
    }

    if (config.applicationUrl.includes('localhost')) {
      requestConfig.ca = fs.readFileSync('localhost.crt')
    }

    return request
      .get(requestConfig)
  }
}

module.exports = HealthCheckClient
