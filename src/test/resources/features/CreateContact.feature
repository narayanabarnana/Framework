Feature: Free CRM Contact Creation


Scenario Outline: New Contact Creation

Given User is on CRMHomePage
When User Navigates to New Contacts Page
Then User enters "<FirstName>" and "<LastName>" and "<Position>"
Then Close the browser

Examples:

| FirstName | LastName | Position |
| Test123   | Test456  | Manager  |
| David     |  John    | Director |