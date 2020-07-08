const {Key} = require('selenium-webdriver');
global.adlink;
global.adlinks = [];  
  
module.exports = {


    categorysearch_url: "https://www.ss.com/en/transport/search/",

    elements: {
        searchbox: by.id("ptxt"),
    },

    enter_search_term: function(searchterm){
        return driver.findElement(this.elements.searchbox).sendKeys(searchterm,Key.TAB, Key.ENTER);
    },
 
    select_first_ad: function() {
        return driver.findElement(by.xpath("//tbody/tr[2]/td[@class='msga2 pp0'][1]//input")).click().then(function(){
            return driver.findElement(by.xpath("//tbody/tr[2]/td[@class='msga2'][1]/a")).getAttribute("href").then(function(href){
                helpers.loadPage(href);
                adlink = href;
                });
        });
        
    },

    select_multiple_ads: function(){
        
        //select the first 5 ads.
        for (let i = 2; i < 6; i++){
            driver.findElement(by.xpath("//tbody/tr["+i+"]/td[@class='msga2 pp0'][1]//input")).click().then(function(){
                return driver.findElement(by.xpath("//tbody/tr["+i+"]/td[@class='msga2'][1]/a")).getAttribute("href").then(function(href){
                    //helpers.loadPage(href);   
                    console.log(href)  
                    adlinks.unshift(href); 
                    console.log(adlinks); 
                    });  
        });
        }; 
}, 

    open_selected_ad: function(){
        return driver.get(adlink); 
    },

    add_to_favs_for_multiple_selections: function(){
        return driver.findElement(by.xpath("//td[@class='td7']//noindex/a[@id='a_fav_sel']")).click();   
    }, 

};   