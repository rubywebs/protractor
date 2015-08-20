var env = require('./environment.js');

// The main suite of Protractor tests to be run on CI servers.
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  framework: 'jasmine2',

  // Spec patterns are relative to this directory.
  specs: [
    'basic/locators_spec.js',
    // 'basic/synchronize_spec.js',
    // 'basic/*_spec.js',
  ],

  // Exclude patterns are relative to this directory.
  exclude: [
    'basic/exclude*.js'
  ],

  capabilities: env.capabilities,

  // multiCapabilities: [{
  //   'browserName': process.env.SELENIUM_BROWSER,
  //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  //   'build': process.env.TRAVIS_BUILD_NUMBER,
  //   'name': 'Protractor suite tests',
  //   'version': process.env.SELENIUM_VERSION,
  //   'platform': process.env.SELENIUM_PLATFORM,
  //   // 'selenium-version': '2.45.0',
  //   // 'chromedriver-version': '2.15',
  // // }, {
  // //   'browserName': 'firefox',
  // //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  // //   'build': process.env.TRAVIS_BUILD_NUMBER,
  // //   'name': 'Protractor suite tests',
  // //   'version': '37',
  // //   'selenium-version': '2.45.0'
  // }],

  baseUrl: env.baseUrl,

  jasmineNodeOpts: {
    isVerbose: true,
    showTiming: true,
    defaultTimeoutInterval: 90000
  },

  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  }
};
