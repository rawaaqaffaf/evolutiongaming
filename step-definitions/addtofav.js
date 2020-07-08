const { until } = require("selenium-webdriver");
const adPage = require("../page-objects/ad-page.js");
const searchPage = require("../page-objects/search-page.js"); 

module.exports = function () {
    
this.Given(/^I am on the ads page$/, function(){
   return helpers.loadPage("https://www.ss.com/msg/en/transport/transports-rent/cars/bnbpgx.html"); 
}); 
  
this.When(/^I scroll to the bottom of the page$/, function(){
    return driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
}); 

this.When(/^I click add to favorites$/, function(){
    return adPage.click_add_to_fav(); 
});   

this.When(/^I dismiss the alert$/, function(){
    return adPage.dissmiss_alert();  
});   

this.Then(/^I open the memo page$/, function(){
    return adPage.open_memo_page();
});

this.Then(/^I should see the ad listed in the memo page$/, function(){
    //expect(driver.getCurrentUrl()).to.equal("https://www.ss.com/en/favorites/");
    adPage.memo_page(); 

});  

};
 