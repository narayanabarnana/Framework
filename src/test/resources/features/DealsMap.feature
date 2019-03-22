Feature: Deals Data creation 

Scenario: Create a new deal data creation 

<<<<<<< HEAD
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
=======
	Given User is on Login Page 
	When Title of the page is freeCRM 
	Then User enter username and password 
	
		| Username | Password |
		| naveenk  | test@123 | 
		
	Then User clicks on Login button 
	Then User is on Home page 
	Then User move to New Deal Page 
	Then User enters deals details 
	
		| title     | Amount | Probability | Commission |
		| test deal | 1000   | 50          | 10         |
		| test deal | 2000   | 40          | 20         |
		| test deal | 3000   | 30          | 30         |
>>>>>>> 4277175c835943d4ca9bbec4ebe3875ca196d965
		
	Then Close the browser