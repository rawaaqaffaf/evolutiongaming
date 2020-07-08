const searchPage = require("../page-objects/search-page.js")
const categoryPage = require("../page-objects/category-page.js")
const adPage = require("../page-objects/ad-page.js")
const {Key} = require('selenium-webdriver');
const { enter_search_term } = require("../page-objects/search-page.js");
const { get } = require("selenium-webdriver/http");

module.exports = function () {
 
this.Given(/^I am on a category page$/, function(){
    return helpers.loadPage(categoryPage.transportpageurl);
});
 
this.When(/^I click search$/, function(){
    return categoryPage.opensearch();
    }); 

this.When(/^I should be redirected to the category search page$/, function() {
    driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://www.ss.com/en/transport/search/");
    console.log(url);
});
});   

/////
this.Given(/^I am on the category search page.$/, function(){
    return helpers.loadPage(searchPage.categorysearch_url);
});

this.When(/^I enter "Toyota" into the search box.$/, function() {
    return searchPage.enter_search_term("Toyota");
    }); 
    

this.Then(/^I should see some "Toyota" search results on the search results page.$/, function() {
    driver.manage().setTimeouts( { implicit: 100000 } );
    var Display = driver.findElement(by.xpath("//table/form")).isDisplayed();
    assert.isTrue(true, Boolean(Display)); 
     
}); 

//Scenario: Openning an ad from the search list

this.Given(/^I am on search results page$/, function(){
    return helpers.loadPage("https://www.ss.com/en/search-result/?q=toyota");

});

this.When(/^Select the first ad$/, function(){
return searchPage.select_first_ad();

});

this.Then(/^open ad link, get redirected to the ad page$/, function(){
    return searchPage.open_selected_ad();
});

this.When(/^I select multiple ads$/, function(){
    return searchPage.select_multiple_ads();
});

this.Then(/^I scroll down$/, function(){
    return adPage.scroll_to_page_bottom();
});

this.When(/^I click add to fav$/, function(){
    return adPage.click_add_to_fav();
});

this.When(/^I click add to fav from the search result page$/, function(){
    return searchPage.add_to_favs_for_multiple_selections();

});

this.Then(/^I should see the ads on the memo page.$/, function(){
    adPage.open_memo_page();
    adPage.memo_page_for_multiple_ads(adlinks);
   
}); 
 
 
};     

 