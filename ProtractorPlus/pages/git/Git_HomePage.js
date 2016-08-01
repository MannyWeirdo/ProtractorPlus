
function Git_HomePage(){

}

Git_HomePage.prototype.NickNameTextFiled = function(browser){
  return browser.driver.findElement(by.css("input[name='user[login]']"));
}
Git_HomePage.prototype.EmailTextFiled = function(browser){
  return browser.driver.findElement(by.css("input[name='user[email]']"));
}
Git_HomePage.prototype.PwdTextFiled = function(browser){
  return browser.driver.findElement(by.css("input[name='user[password]']"));
}
Git_HomePage.prototype.SignupButton = function(browser){
  return browser.driver.findElement(by.css("a[href='/join?source=header-home']"));
}

module.exports = Git_HomePage;
