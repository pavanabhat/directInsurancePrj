$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/HomePage.feature");
formatter.feature({
  "name": "Main Page Features",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User opens the main page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefHomePage.user_is_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of the page should be \"Dealer Portal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefHomePage.title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is presented with a dealer title text \"Drive Away Insurance\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_is_presented_with_a_dealer_title_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is presented with a text box",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_is_presented_with_a_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is presented with find vehicle button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_is_presented_with_find_vehicle_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigation to volkswagon page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefHomePage.user_is_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on volkswagen link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_clicks_on_volkswagen_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is taken to volkswagen page \"https://vwfsinsuranceportal.co.uk/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefHomePage.user_is_taken_to_volkswagen_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title of the page is \"Volkswagen Insurance Portal\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.the_title_of_the_page_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Find vehicle with blank registration",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefHomePage.user_is_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on find vehicle",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_clicks_on_find_vehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is shown error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefHomePage.user_is_shown_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Valid vehicle reg",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on main page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cvalidReg\u003e\" registration",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on find vehicle",
  "keyword": "And "
});
formatter.step({
  "name": "user is shown result for \"\u003cresultFor\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user is shown start date \"\u003ccoverStartDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user is shown end date \"\u003ccoverEndDate\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "validReg",
        "resultFor",
        "coverStartDate",
        "coverEndDate"
      ]
    },
    {
      "cells": [
        "OV12UYY",
        "Result for : OV12UYY",
        "09 FEB 2022 : 16 : 26",
        "18 FEB 2022 : 23 : 59"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid vehicle reg",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefHomePage.user_is_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"OV12UYY\" registration",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_enters_valid_registration(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on find vehicle",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_clicks_on_find_vehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is shown result for \"Result for : OV12UYY\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefHomePage.user_is_shown_result_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is shown start date \"09 FEB 2022 : 16 : 26\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_is_shown_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is shown end date \"18 FEB 2022 : 23 : 59\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_is_shown_end_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Invalid vehicle reg",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on main page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters invalid \"\u003cinvalidReg\u003e\" registration",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on find vehicle",
  "keyword": "And "
});
formatter.step({
  "name": "user is shown \"\u003cerrorMsg\u003e\" message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "invalidReg",
        "errorMsg"
      ]
    },
    {
      "cells": [
        "SDFGHJ",
        "Sorry record not found"
      ]
    },
    {
      "cells": [
        "*\u0026#-",
        "Please enter a valid car registration"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Invalid vehicle reg",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefHomePage.user_is_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid \"SDFGHJ\" registration",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_enters_invalid_registration(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on find vehicle",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_clicks_on_find_vehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is shown \"Sorry record not found\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefHomePage.user_is_shown_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid vehicle reg",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefHomePage.user_is_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid \"*\u0026#-\" registration",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_enters_invalid_registration(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on find vehicle",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefHomePage.user_clicks_on_find_vehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is shown \"Please enter a valid car registration\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefHomePage.user_is_shown_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});