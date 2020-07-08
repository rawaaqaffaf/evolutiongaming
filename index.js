const {Builder, By, Key, until} = require('selenium-webdriver');
const firefox = require("selenium-webdriver/firefox")

const driver = new Builder().forBrowser('firefox').build();
driver.get('https://www.ss.com/en');
let category_transport = driver.findElement(By.xpath("//h2/a[@href='/en/transport/']"));
category_transport.click();

let category_search_page = driver.findElement(By.xpath("//b[@class='menu_main']/a[@href='/en/transport/search/']"));
category_search_page.click() 


let search_word = driver.findElement(By.id("ptxt"));
search_word.sendKeys("Toyota");
search_word.sendKeys(Key.TAB);
search_word.sendKeys(Key.ENTER);

let table = driver.findElement(By.tagName("tbody"));
let rows = table.findElements(By.tagName("tr")); 
//console.log(rows)
//let cell = row_cell.findElement(By.className("msg2"));
//let adcell = cell.findElement(By.className("d1"));
//let adlink = adcell.findElement(By.tagName("a"));
//adlink.getAttribute("href"); 
//console.log(adlink);
//driver.get(adlink);
 