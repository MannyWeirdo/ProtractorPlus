var Google_HomePage = (function() {

    function initPage() {
      this.SearchTextFiled =  browser.driver.findElement(by.id('lst-ib'));
    }
    return initPage;

})();

module.exports = Google_HomePage;
