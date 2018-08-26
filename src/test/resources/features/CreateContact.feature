Feature: Free CRM Contact Creation


Scenario Outline: New Contact Creation

Given User is on Login Page
When Title of the page is freeCRM
Then User enter "<username>" and "<password>"
Then User clicks on Login button
Then User is on Home page
Then User move to New Contact Page
Then User enters "<FirstName>" and "<LastName>" and "<Position>"
Then Close the browser

Examples:

| username | password | FirstName | LastName | Position |
| naveenk  | test@123 | Test123   | Test456  | Manager  |
| naveenk  | test@123 | David     |  John    | Director |