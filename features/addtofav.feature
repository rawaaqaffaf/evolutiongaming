Feature: Adding an ad to your favorite list

  Scenario: From the ad page, adding the ad to the fav list in memo page
    Given I am on the ads page
    When I scroll to the bottom of the page
    And I click add to favorites
    And I dismiss the alert
    Then I open the memo page
    Then I should see the ad listed in the memo page

  Scenario: 

   