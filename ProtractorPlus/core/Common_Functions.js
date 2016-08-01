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


// //===============================click and wait the an expected element================================================================================
// function clickAndWait(targetElement, expectedElement) {
//     targetElement.click().then(function() {
//         browser.driver.wait(
//             function() {
//                 expectedElement.isElementPresent().then(function(isPresent) {
//                     return isPresent;
//                 });
//             }, 30000);
//     });
// }



exports.createRandomYopmail = createRandomYopmail;
exports.switchToPopup = switchToPopup;
exports.switchBackToParent = switchBackToParent;
