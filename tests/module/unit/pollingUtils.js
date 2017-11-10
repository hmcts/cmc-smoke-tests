'use strict'

/* global describe, it */

const expect = require('chai').expect
const mockRequire = require('mock-require')

mockRequire('../../../config', {
  webdriver: {
    maxStatusPollingRetries: 3
  }
})

const pollingUtils = require('../../../lib/pollingUtils')

describe('pollingUtils', () => {
  describe('maxRetriesReached', () => {
    it('should return false if number of retries is below max retries', () => {
      expect(pollingUtils.maxRetriesReached(2)).to.equal(false)
    })

    it('should return true if number of retries equals max retries', () => {
      expect(pollingUtils.maxRetriesReached(3)).to.equal(true)
    })

    it('should return true if number of retries above max retries', () => {
      expect(pollingUtils.maxRetriesReached(4)).to.equal(true)
    })
  })
})
