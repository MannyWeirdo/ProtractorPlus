// var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
// var reporter=new HtmlReporter({
//     baseDirectory: '.././Reports', takeScreenShotsOnlyForFailedSpecs: true, // a location to store screen shots.
//     docTitle: 'Protractor Demo Reporter',
//     docName:  'protractor-demo-tests-report.html'
// });
exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Scenarios/Google/TestDemo.js'],

    // params: {
    //     Env: "default",
    //     Country: "US"
    // },
    // onPrepare: function() {
    //     jasmine.getEnv().addReporter(reporter);
    // },

    capabilities: {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 1
    },

    onPrepare: function() {
        var date = new Date();
        var today = date.getFullYear() + "" + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            takeScreenshots: false,
            filePrefix: 'Reporter-USEPP-' + browser.params.Env + '-' + today
        }));
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 1000000
    }
};
