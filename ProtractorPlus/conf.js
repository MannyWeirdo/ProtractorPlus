var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
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
        browserName: 'chr'
    },

    onPrepare: function() {
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 1000000
    }
};
