@Search
Feature: Search Functionality for amazon website
@Regression
  Scenario Outline: Provide search function to the userto have quick acess of the product.
    Given The user is already on the amazon Page
    When User click on search bar and type "<ProductName>"
    Then User must be shown available "<ProductName>" in inventory
    But User must not see "<ExcludedProduct>"laptops

    Examples: 
      | ProductName | ExcludedProduct |
      | Laptop      | Dell            |
      | Mobile      | Nokia           |

@Sanity
  Scenario Outline: Provide search function to the userto have quick acess of the product.
    Given The user is already on the amazon Page
    When User click on search bar and type "<ProductName>"
    Then User must be shown available "<ProductName>" in inventory
    But User must not see "<ExcludedProduct>"laptops

    Examples: 
      | ProductName | ExcludedProduct |
      | Desktop     | Dell            |
      | Mobile      | Nokia           |
