Feature: Chosing an ad category from the home page

  Scenario: Chosing an ad category
    Given I am on the home page for ss.com
    When I click on a category name
    Then I should be redirected to that category page  