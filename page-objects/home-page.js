module.exports = {

    homepageurl: "https://www.ss.com/en/",
    
    category: "//h2/a[@href='/en/transport/']",

    chooseCategory: function(){
        return driver.findElement(By.xpath(this.category)).click();
    }
};