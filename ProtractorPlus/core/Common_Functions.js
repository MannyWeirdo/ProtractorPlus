//===============================create a random yopmail to register account===========================================================
function createRandomYopmail() {
    var date = new Date();
    var valid_Yopmail = date.getFullYear() + "" + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds() + "@yopmail.com";
    return valid_Yopmail;
}

//===============================switch to pop up window================================================================================
function switchToPopup(driver) {
    var handles = driver.getAllWindowHandles().then(function(handles) {
        console.log(handles.length);
        var popupHandle = handles[handles.length - 1];
        driver.switchTo().window(popupHandle);
        var currentHandle = driver.getWindowHandle();
        expect(currentHandle).toEqual(popupHandle);
    });
}

//===============================switch to parent window================================================================================
function switchBackToParent(driver, parentHandle) {
    driver.switchTo().window(parentHandle);
    var currentHandle = driver.getWindowHandle();
    expect(currentHandle).toEqual(parentHandle);
}

//===============================double click================================================================================
function doubleClick(browser, targetElement) {
    browser.actions.doubleClick(targetElement).perform();
}

//===============================wait for the element is present================================================================================
function waitforElePresent(browser, targetElement) {
     browser.wait(targetElement.isPresent(), 10000);
}

//===============================wait for the element is not present================================================================================
/*
   This is a blocking wait function, your code wont excute a line till the promise return a true.
*/
function waitforEleNotPresent(browser, targetElement) {
    browser.wait(function() {
        var deferred = protractor.promise.defer();
        targetElement.isPresent().then(function(isPresent) {
            deffered.fulfill(!isPresent);
        });
        return deffered.promise;
    });
}

//===============================multiple funcs for waiting for the element by conditions================================================================================
function waitForElementClickable(browser, targetElement) {
    var EC = protractor.ExpectedConditions;
    return browser.wait(EC.elementToBeClickable(targetElement), 10000);
}

function waitForElementVisible(browser, targetElement) {
    var EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(targetElement), 10000);
}

function waitForElementTextPresent(browser, targetElement, text) {
    var EC = protractor.ExpectedConditions;
    return browser.wait(EC.textToBePresentInElement(targetElement, text), 10000);
}

function waitForElementSelected(browser, targetElement) {
    var EC = protractor.ExpectedConditions;
    return browser.wait(EC.elementToBeSelected(targetElement), 10000);
}

exports.createRandomYopmail = createRandomYopmail;
exports.switchToPopup = switchToPopup;
exports.switchBackToParent = switchBackToParent;
exports.doubleClick = doubleClick;
exports.waitforElePresent = waitforElePresent;
exports.waitforEleNotPresent = waitforEleNotPresent;
exports.waitForElementClickable = waitForElementClickable;
exports.waitForElementVisible = waitForElementVisible;
exports.waitForElementTextPresent = waitForElementTextPresent;
exports.waitForElementSelected = waitForElementSelected;
