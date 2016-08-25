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

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        'chromeOptions': {
            prefs: {
                'download': {
                    'directory_upgrade': true,
                    'default_directory': 'C:/NewFolder',
                },
            },
            args: [
                'disable-extensions'
            ]
        },
    },

    onPrepare: function() {
        // to delete cookies
        browser.manage().deleteAllCookies();
        // to set up the browser size
        browser.driver.manage().window().setSize(1600, 800);
        // to generate a html reporter after your test
        var date = new Date().toISOString();

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            takeScreenshots: false,
            filePrefix: 'Reporter-USEPP-' + browser.params.Env + '-' + date
        }));

        // to generate a xml reporter after your test , before that you need to "npm install mkdirp" to your testing env
        // var folderName = (new Date()).toString().split(' ').splice(1, 4).join(' ');
        // var mkdirp = require('mkdirp');
        // var newFolder = "./reports/" + folderName;
        // require('jasmine-reporters');
        //
        // mkdirp(newFolder, function(err) {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(newFolder, true, true));
        //     }
        // });
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 1000000,
        showColors: true
    }
};
