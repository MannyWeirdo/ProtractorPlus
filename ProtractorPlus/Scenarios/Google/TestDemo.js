var URL = require('../.././env/Test_Envs.json');
var Google_HomePage = require('../.././pages/google/Google_HomePage.js');
var Git_HomePage = require('../.././pages/git/Git_HomePage.js');
var Git_SignupPage = require('../.././pages/git/Git_SignupPage.js');
var Common_Functions = require('../.././core/Common_Functions.js');

describe('Test google search function', function() {

    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000000;

    //open google home page
    browser.ignoreSynchronization = true;
    browser.get(URL.git);
    var git_home = new Git_HomePage();
    var git_signup = new Git_SignupPage();

    function test (){
      for(var i = 0 ; i < 10 ; i++){
        console.log(i+ "Google");
      }
    }

    //actions
    it("test google search funtion", function() {
        git_home.SignupButton(browser).click();
        //Common_Functions.clickAndWait(git_home.SignupButton(browser),git_signup.CreateAccountButton(browser));
        git_signup.CreateAccountButton(browser).click();

    });
});
