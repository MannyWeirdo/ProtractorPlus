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
function doubleClick(browser, targetElement){
  browser.actions.doubleClick(targetElement).perform();
}




exports.createRandomYopmail = createRandomYopmail;
exports.switchToPopup = switchToPopup;
exports.switchBackToParent = switchBackToParent;
exports.doubleClick = doubleClick;
