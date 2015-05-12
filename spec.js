// spec.js
describe('Gids', function() {

    beforeEach(function(){
        browser.get('http://localhost:8080');

    });

    it('should be able to login', function(){


        var userName = element(by.id('username'));
        expect(userName.isPresent()).toBe(true);
        userName.sendKeys('SBP-loods');

        var pw = element(by.id('password'));
        expect(pw.isPresent()).toBe(true);
        pw.sendKeys('SBP@welcome1');

        var login = element(by.className('material-success'));
        expect(login.isPresent()).toBe(true);
        login.click();

        //var EC =  protractor.ExpectedConditions;
        //var submit = element(by.css('[type="submit"]'));
        //var isClickable = EC.elementToBeClickable(submit);
        //browser.wait(isClickable,2000);
        //submit.click();

        //protractor.ignoreSynchronization = true;
        //
        //browser.driver.wait(function () {
        //        console.log('current url ' + browser.driver.getCurrentUrl());
        //        return browser.driver.getCurrentUrl().then(function (url) {
        //            if(("/#/meldingen/add/lastmessage").test(url)) {
        //                protractor.ignoreSynchronization = false;
        //                return true;
        //            }
        //
        //            return false;
        //        });
        //    },
        //    15000,
        //    'There is a problem logging in. Please double check credentials.');

        //browser.driver.wait(function(){
        //    return browser.driver.isElementPresent(by.tagName('material-sidenav-button'));
        //} , 20000, 'No sidenav button ');

        expect(element(by.tagName('material-sidenav-button')).isPresent()).toBe(true);
        browser.sleep(2000);

    })

});

