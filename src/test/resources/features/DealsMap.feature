Feature: Deals Data creation 

Scenario: Create a new deal data creation 

#	Given User is on Login Page 
#	When Title of the page is freeCRM 
#	Then User enter username and password 
#	
#		| Username | Password |
#		| naveenk  | test@123 | 
#		
#	Then User clicks on Login button 
	Given User is on CRMHomePage 
	Then User move to New Deal Page 
	Then User enters deals details 
	
		| title      | Amount | Probability | Commission |
		| test deal1 | 1000   | 50          | 10         |
		| test deal2 | 2000   | 40          | 20         |
		| test deal3 | 3000   | 30          | 30         |
		
	Then Close the browser