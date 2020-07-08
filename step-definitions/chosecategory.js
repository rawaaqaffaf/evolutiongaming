const categoryPage =require("../page-objects/category-page.js");
const homePage = require("../page-objects/home-page.js")

module.exports =  function () {
       
    this.Given(/^I am on the home page for ss.com$/, function(){
        // Open the home page of the ss.com ads site
        return helpers.loadPage(homePage.homepageurl)
    });

    this.When(/^I click on a category name$/, function() {
        return homePage.chooseCategory();    
        }); 
        /*
        async function example() {
            let button =
                await driver.wait(until.elementLocated(By.id('foo')), 10000);
            await button.click();
          }
          */
    this.Then(/^I should be redirected to that category page$/, function(){
        driver.getTitle().then(function(title){
          assert.equal(title, "SS.COM Transport - Ads"); 

        });
    }); 
      
};   