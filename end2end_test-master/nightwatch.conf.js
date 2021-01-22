nightwatch_config = {
    selenium : {
      "start_process" : false,
      "host" : "hub-cloud.browserstack.com",
      "port" : 80
    },

    test_settings: {
      default: {
        desiredCapabilities: {
          'browserstack.user': 'alexandrapham1',
          'browserstack.key': 'd5Nh7onMnfFJ4gJ7N39R',
          'browser': 'chrome',
          'name': 'Bstack-[Nightwatch] Test'
        }
      }
    }
  };

  // Code to copy seleniumhost/port into test settings
  for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
  }

  module.exports = nightwatch_config;
