$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/SearchFunction.feature");
formatter.feature({
  "name": "Search Functionality for amazon website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Search"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Provide search function to the userto have quick acess of the product.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "The user is already on the amazon Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on search bar and type \"\u003cProductName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User must be shown available \"\u003cProductName\u003e\" in inventory",
  "keyword": "Then "
});
formatter.step({
  "name": "User must not see \"\u003cExcludedProduct\u003e\"laptops",
  "keyword": "But "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ProductName",
        "ExcludedProduct"
      ]
    },
    {
      "cells": [
        "Desktop",
        "Dell"
      ]
    },
    {
      "cells": [
        "Mobile",
        "Nokia"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Provide search function to the userto have quick acess of the product.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is already on the amazon Page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchingAmazon.the_user_is_already_on_the_amazon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on search bar and type \"Desktop\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchingAmazon.user_click_on_search_bar_and_type_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be shown available \"Desktop\" in inventory",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchingAmazon.user_must_be_shown_available_something_in_inventory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must not see \"Dell\"laptops",
  "keyword": "But "
});
formatter.match({
  "location": "SearchingAmazon.user_must_not_see_somethinglaptops(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Provide search function to the userto have quick acess of the product.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is already on the amazon Page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchingAmazon.the_user_is_already_on_the_amazon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on search bar and type \"Mobile\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchingAmazon.user_click_on_search_bar_and_type_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be shown available \"Mobile\" in inventory",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchingAmazon.user_must_be_shown_available_something_in_inventory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must not see \"Nokia\"laptops",
  "keyword": "But "
});
formatter.match({
  "location": "SearchingAmazon.user_must_not_see_somethinglaptops(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});