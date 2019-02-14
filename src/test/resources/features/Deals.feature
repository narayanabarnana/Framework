Feature: Deals Data creation

Scenario: Create a new deal data creation


Given User is on CRMHomePage
Then User move to New Deal Page
Then User enters deals details
| test deal1 | 1000  | 50  | 10  |
| test deal2 | 10000 | 500 | 100 |
Then Close the browser