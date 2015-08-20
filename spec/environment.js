 // Common configuration files with defaults plus overrides from environment vars
var webServerDefaultPort = 8081;

// Validations
if (!process.env.SELENIUM_BROWSER)
  throw new Error('Need env var SELENIUM_BROWSER')
if (!process.env.SELENIUM_PLATFORM)
  throw new Error('Need env var SELENIUM_PLATFORM')
if (!process.env.SELENIUM_VERSION)
  throw new Error('Need env var SELENIUM_VERSION')
if (!process.env.TRAVIS_JOB_NUMBER)
  throw new Error('Need env var TRAVIS_JOB_NUMBER')
if (!process.env.TRAVIS_BUILD_NUMBER)
  throw new Error('Need env var TRAVIS_BUILD_NUMBER')

module.exports = {
  // The address of a running selenium server.
  seleniumAddress:
    (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName':       process.env.SELENIUM_BROWSER,
    'version':           process.env.SELENIUM_VERSION,
    'platform':          process.env.SELENIUM_PLATFORM,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build':             process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Protractor suite tests',
  },

  // Default http port to host the web server
  webServerDefaultPort: webServerDefaultPort,

  // Protractor interactive tests
  interactiveTestPort: 6969,

  // A base URL for your application under test.
  baseUrl:
    'http://' + (process.env.HTTP_HOST || 'localhost') +
          ':' + (process.env.HTTP_PORT || webServerDefaultPort)

};