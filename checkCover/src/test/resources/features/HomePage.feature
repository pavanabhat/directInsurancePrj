Feature: Main Page Features


Scenario: User opens the main page
Given user is on main page
Then title of the page should be "Dealer Portal"
And user is presented with a dealer title text "Drive Away Insurance"
And user is presented with a text box 
And user is presented with find vehicle button

Scenario: Navigation to volkswagon page
Given user is on main page
And user clicks on volkswagen link
Then user is taken to volkswagen page "https://vwfsinsuranceportal.co.uk/"
And the title of the page is "Volkswagen Insurance Portal"

Scenario: Find vehicle with blank registration
Given user is on main page
And user clicks on find vehicle
Then user is shown error message


Scenario Outline: Valid vehicle reg
Given user is on main page
And user enters valid "<validReg>" registration
And user clicks on find vehicle
Then user is shown result for "<resultFor>"
And user is shown start date "<coverStartDate>"
And user is shown end date "<coverEndDate>"

Examples: 
|validReg | resultFor | coverStartDate | coverEndDate |
|OV12UYY | Result for : OV12UYY | 09 FEB 2022 : 16 : 26 | 18 FEB 2022 : 23 : 59 | 


Scenario Outline: Invalid vehicle reg
Given user is on main page
And user enters invalid "<invalidReg>" registration
And user clicks on find vehicle
Then user is shown "<errorMsg>" message

Examples:
| invalidReg | errorMsg |
| SDFGHJ | Sorry record not found |
| *&#- | Please enter a valid car registration |
