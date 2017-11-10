'use strict'
/* global describe, it */

const expect = require('chai').expect
const PollingUtils = require('../../lib/pollingUtils')
const config = require('../../config')

const getAppHealthChecks = require('../../lib/healthCheckClient').getAppHealthChecks

describe('Sanity tests', function () {
  this.retries(config.healthcheck.maxPollingRetries)

  describe('Application health checks', function () {
    it('should all be healthy', function (done) {
      this.timeout(config.healthcheck.maxPollingRetries * config.healthcheck.pollingIntervalSeconds * 1000)
      if (this.test._currentRetry > 0) {
        console.log('Retry number:', this.test._currentRetry)
      }

      PollingUtils.sleep(this.test._currentRetry === 0 ? 0 : config.healthcheck.pollingIntervalSeconds * 1000)
        .then(() => {
          getAppHealthChecks()
            .then(result => {
              expect(result.status).to.equal('UP')
              done()
            })
            .catch((error) => {
              const errorBody = () => {
                return error && error.response ? error.response.body : error
              }

              console.log(errorBody())
              done(error)
            })
        })
    })
  })
})
