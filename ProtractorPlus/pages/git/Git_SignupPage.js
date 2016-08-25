function Git_SignupPage(){

}
//option 1 based on page obeject
Git_SignupPage.prototype.CreateAccountButton = function(browser){
  return browser.driver.findElement(by.css("button[id='signup_button']"));
}

module.exports = Git_SignupPage;
