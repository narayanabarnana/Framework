Feature: Free CRM Contact Creation


Scenario Outline: New Contact Creation

<<<<<<< HEAD
Given User is on CRMHomePage
When User Navigates to New Contacts Page
=======
Given User is on Login Page
When Title of the page is freeCRM
Then User enter "<username>" and "<password>"
Then User clicks on Login button
Then User is on Home page
Then User move to New Contact Page
>>>>>>> 4277175c835943d4ca9bbec4ebe3875ca196d965
Then User enters "<FirstName>" and "<LastName>" and "<Position>"
Then Close the browser

Examples:

<<<<<<< HEAD
| FirstName | LastName | Position |
| Test123   | Test456  | Manager  |
| David     |  John    | Director |
=======
| username | password | FirstName | LastName | Position |
| naveenk  | test@123 | Test123   | Test456  | Manager  |
| naveenk  | test@123 | David     |  John    | Director |
>>>>>>> 4277175c835943d4ca9bbec4ebe3875ca196d965
