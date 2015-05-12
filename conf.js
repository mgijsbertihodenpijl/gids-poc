exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },
    allScriptsTimeout: 20000,
    rootElement: 'div.lms-header'

}
