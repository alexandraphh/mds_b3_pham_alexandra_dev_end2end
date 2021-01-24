describe('Ecosia example', function() {

    beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));

    test('Open Uber Website', function (browser) {
      browser
        .waitForElementVisible('body')
        .waitForElementPresent('head')
        .assert.titleContains('Uber')
        .end();
    });

    test('Check block login in the header wrapper', function (browser) {
      browser
        .waitForElementVisible('body')
        .waitForElementPresent('button[id="inscription"]')
        .waitForElementPresent('button[id="connexion"]')
        .end();
    });

    test('Check login in two sections', function (browser) {
      browser
        .waitForElementVisible('body')
        .useCss()
        .click('.dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed ee b8 b6 bj b7 bu c4 bv ef eq er es et ek el eu ev de cw eo ep dm')
        .waitForElementPresent('.g5 o1 o2 o3 bp dc fr g6')
        .waitForElementPresent('.g5 o1 o2 o3 bp dc fr g6')
      });

      test('Check login chauffeur section', function (browser) {
        browser
          .waitForElementVisible('body')
          .useCss()
          .click('.bt bu qu bv ri c7 c8 c9 bd ca cb cc cd ce cf cg ch ci cj ck s2 cm')
      });

      test('Check login passager section', function (browser) {
        browser
          .waitForElementVisible('body')
      });
    
      test('Check registration block in two sections', function (browser) {
        browser
        .waitForElementVisible('body')
      });
    
      test('Check registration block with devenir professionnal section', function (browser) {
        browser
          .waitForElementVisible('body')
      });
    
      test('Check registration block with commander une course action', function (browser) {
        browser
        .waitForElementVisible('body')
      });
    
      test('Registration with commander une course section shouldn\'t pass', function (browser) {
        browser
        .waitForElementVisible('body')
      });
    
      test('Registration should pass', function (browser) {
        browser
        .waitForElementVisible('body')
    })

/*
// Exemple pour basculer sur du XPATH
.useXpath() 
   .waitForElementPresent('//button[@id="/sign-in/"]')
   .waitForElementPresent('//button[@id="/signup/"]')
// Revenir sur du CSS
.useCSS()
*/


});
