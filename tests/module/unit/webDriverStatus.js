'use strict'

/* global describe, it */

const expect = require('chai').expect

const webDriverStatus = require('../../../lib/webDriverStatus')

describe('webDriverStatus', () => {
  describe('isUp', () => {
    it('should return falsy if given a null object', () => {
      expect(webDriverStatus.isUp(null)).to.not.be.ok
    })

    it('should return falsy if given an undefined object', () => {
      expect(webDriverStatus.isUp(undefined)).to.not.be.ok
    })

    it('should return falsy if not given a successful state', () => {
      let status = {
        status: 13 // UNHANDLED ERROR
      }
      expect(webDriverStatus.isUp(status)).to.not.be.ok
    })

    it('should return falsy if given a null state', () => {
      let status = {
        status: null
      }
      expect(webDriverStatus.isUp(status)).to.not.be.ok
    })

    it('should return falsy if given an undefined state', () => {
      let status = {
        status: undefined
      }
      expect(webDriverStatus.isUp(status)).to.not.be.ok
    })

    it('should return falsy if given an object without a state field', () => {
      expect(webDriverStatus.isUp({ })).to.not.be.ok
    })

    it('should return truthy if given an object with "success" state', () => {
      let status = {
        status: 0
      }
      expect(webDriverStatus.isUp(status)).to.be.ok
    })
  })
})
