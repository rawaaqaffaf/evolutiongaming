
module.exports = {

    transportpageurl: "https://www.ss.com/en/transport/",

    elements: {
        searchbox: by.xpath("//b[@class='menu_main']/a[@href='/en/transport/search/']"),
    },

    opensearch: function(){
        return driver.findElement(this.elements.searchbox).click();    }
    
};
