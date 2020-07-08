Feature: Searching for an ad on a specific category page,
searching 

  Scenario: Opening a search page from a category
    Given I am on a category page
    When I click search
    Then I should be redirected to the category search page
 
  Scenario: Searching for an ad, from an ad category page.
    Given I am on the category search page.
    When I enter "Toyota" into the search box.
    Then I should see some "Toyota" search results on the search results page.
  

  Scenario: Selecting multiple ads from the search list and adding them to fav list
    Given I am on search results page
    When I select multiple ads
    Then I scroll down
    When I click add to fav from the search result page
    Then I should see the ads on the memo page.
 
 Scenario: Selecting an ad from the search list
    Given I am on search results page
    When Select the first ad 
    Then open ad link, get redirected to the ad page

  


    
  

  
