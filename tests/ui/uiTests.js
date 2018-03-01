'use strict'
const config = require('../../config')
const contextPath = config.applicationUrl.includes('legal') ? '/legal/' : '/'
Feature('UI smoke tests')

Scenario('It should be possible to load the application', (I) => {
  I.amOnPage(contextPath)
  I.see('Sign in')
})

