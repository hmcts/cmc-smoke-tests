module.exports = {
  applicationUrl: process.env.APP_URL || 'https://localhost:3000',
  webdriver: {
    host: process.env.WEB_DRIVER_HOST || 'localhost',
    port: process.env.WEB_DRIVER_PORT || '4444',
    browser: process.env.BROWSER || 'chrome',
    maxStatusPollingRetries: process.env.WEB_DRIVER_MAX_STATUS_POLLING_RETRIES || 10,
    statusPollingIntervalSeconds: process.env.WEB_DRIVER_STATUS_POLLING_INTERVAL || 3
  },
  healthcheck: {
    maxPollingRetries: process.env.MAX_HEALTHCHECK_POLLING_RETRIES || 20,
    pollingIntervalSeconds: process.env.HEALTHCHECK_POLLING_INTERVAL || 5
  }
}
