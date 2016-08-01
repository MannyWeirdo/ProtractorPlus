function Git_SignupPage(){

}

Git_SignupPage.prototype.CreateAccountButton = function(browser){
  return browser.driver.findElement(by.css("button[id='signup_button']"));
}

module.exports = Git_SignupPage;
