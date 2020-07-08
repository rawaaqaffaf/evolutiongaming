const {Key, until} = require('selenium-webdriver'); 
const { elements } = require('./search-page');
const car_ad = "https://www.ss.com/msg/en/transport/transports-rent/cars/bnbpgx.html"


module.exports = {
  
    elements: {
        
        add_to_fav: by.xpath("//noindex//a[@id='a_fav']"),
        alert_dev: by.xpath("//div[@id='alert_dv']"),   
        alertok_btn: by.xpath("//div[@id='alert_dv']//div[@class='alert_body']//a"),
        memo_page_link: by.xpath("//span/b/a[@href='/en/favorites/']")
       
    },     

    scroll_to_page_bottom: function(){
        return driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    },

    /*scroll_to_page_top: function(){
        return driver.executeScript("window.scroll(0, 0);");
    },*/

    click_add_to_fav: function(){
        
       return driver.findElement(this.elements.add_to_fav).click();
    }, 

    dissmiss_alert: function(){
        return driver.findElement(this.elements.alertok_btn).click();  
 
    },  

    open_memo_page: function(){
        driver.executeScript("window.scroll(0, 0);");
        return driver.findElement(By.xpath("//span/b/a[@href='/en/favorites/']")).then(function(){
            driver.findElement(By.xpath("//span/b/a[@href='/en/favorites/']")).click(); 
        }); 
    },  
 

    memo_page: function(){
        return driver.findElement(by.xpath("//tbody/tr[2]/td[3]/div/a")).then(function(){
            return driver.findElement(by.xpath("//tbody/tr[2]/td[3]/div/a")).getAttribute("href").then(function(href){
                assert.equal(href, car_ad); 
                console.log(href); 
            });
        }); 

    },

    memo_page_for_multiple_ads: function(adsarray){
        //Go through all the elements on the fav page.
        numberofadsinarray = adsarray.length;
        adsinfavpage = [];
        for(let i = 2; i < 6; i++){  
            driver.findElement(by.xpath("//tbody/tr["+i+"]/td[3]/div/a")).then(function(){
                return driver.findElement(by.xpath("//tbody/tr["+i+"]/td[3]/div/a")).getAttribute("href").then(function(link){ 
                    adsinfavpage.push(link);  
                    console.log("the link pulled: " + link);
                    console.log("The whole array: " + adsinfavpage);    
                }); 
            });
        }

    },
/*
            driver.findElement(by.xpath("//tbody/tr["+i+"]/td[3]/div/a")).then(function(){
                driver.findElement(by.xpath("//tbody/tr["+i+"]/td[3]/div/a")).getAttribute("href").then(function(link){ 
                    adsinfavpage.push(link);
                    console.log("the link pulled" + link);
                    console.log("The whole array: " + adsinfavpage);

                });
            }); 
        }
        */
        /*numberofadlinks = adsarray.length;
        j = 0;
        adsinfavlist = [];
        for(let i = 2; i < (2 + numberofadlinks); i++){
            return driver.findElement(by.xpath("//tbody/tr["+i+"]/td[3]/div/a")).then(function(){
              return driver.findElement(by.xpath("//tbody/tr["+i+"]/td[3]/div/a")).getAttribute("href").then(function(href){
                  adsinfavlist.unshift(href);
                  console.log("The ads array :" + adsarray);
                  console.log("The fav array :" + adsinfavlist); 
            }); 
        });
        
    };*/    









//Code finished
};  